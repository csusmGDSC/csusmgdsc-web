import React, { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Ellipsis,
  Loader2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SectionTitle } from "@/features/base";
import { cn } from "@/lib/utils";
import { GrEmoji } from "react-icons/gr";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlinePushPin } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import { Comment } from "@/types/comment";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  useCommentsByEventId,
  useCreateComment,
  useDeleteComment,
  useUpdateComment,
} from "@/api/comment-api";

const ProfileImage = ({
  user_id,
  className,
}: {
  user_id: string;
  className?: string;
}) => {
  return (
    <Link to={`/profile/${user_id}`} className={className}>
      <img
        src={"/images/person.jpg"}
        alt="User Avatar"
        className="w-10 h-10 rounded-full"
      />
    </Link>
  );
};

const CommentInput = ({
  replyMode,
  editMode,
  toggleVisibility,
  handlePostComment,
  isLoading,
  existingContent,
  className,
}: {
  replyMode: boolean;
  toggleVisibility?: () => void;
  handlePostComment: (string: string) => void;
  className?: string;
  existingContent?: string;
  editMode?: boolean;
  isLoading?: boolean;
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState(existingContent || "");
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={cn("flex gap-4", className)}>
      <ProfileImage user_id="1" />
      <div className="flex-1 relative">
        <Textarea
          placeholder="Add a comment..."
          className="resize-none min-w-full min-h-[1px] field-sizing-content border-t-0 border-l-0 border-r-0 rounded-none border-b-1 border-border focus-visible:ring-0 focus-visible:border-b-blue transition-colors focus-visible:border-b-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          ref={inputRef}
        />
        <div className="mt-2 flex justify-between items-center">
          <EmojiDropdown inputRef={inputRef} />
          <div className="flex gap-2">
            {replyMode && (
              <Button
                disabled={isLoading}
                onClick={toggleVisibility}
                className="rounded-full h-fit"
                variant="ghost"
              >
                Cancel
              </Button>
            )}
            <Button
              onClick={() => {
                if (!comment.trim()) {
                  setError("Comment cannot be empty");
                  return;
                }

                handlePostComment(comment);
                setComment("");
                setError(null);
              }}
              className="rounded-full h-fit"
              disabled={isLoading}
            >
              {editMode ? "Save" : replyMode ? "Reply" : "Comment"}
            </Button>
          </div>
        </div>
        {error && <p className="text-destructive text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

const EmojiDropdown = ({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLTextAreaElement>;
}) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node)
      ) {
        setShowEmojis(false);
      }
    }
    if (showEmojis) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmojis]);

  const handleClick = (emojiData: EmojiClickData) => {
    if (!inputRef.current) return;

    const textarea = inputRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // Insert text at cursor position
    const textBefore = textarea.value.substring(0, start);
    const textAfter = textarea.value.substring(end);
    textarea.value = textBefore + emojiData.emoji + textAfter;

    // Move the cursor after the inserted text
    const newCursorPosition = start + emojiData.emoji.length;
    textarea.selectionStart = textarea.selectionEnd = newCursorPosition;

    // Refocus the textarea
    textarea.focus();

    setShowEmojis(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={() => setShowEmojis(!showEmojis)}
        className="rounded-full h-fit w-fit p-0"
        variant="ghost"
      >
        <GrEmoji className="w-8 h-8" />
      </Button>

      <div ref={emojiRef} className="absolute top-8 left-0">
        <EmojiPicker open={showEmojis} onEmojiClick={handleClick} />
      </div>
    </div>
  );
};

const CommentItem: React.FC<{
  comment: Comment;
  replies?: Comment[];
  topLevelId: string;
  isTopLevel: boolean;
}> = ({ comment, replies = [], topLevelId, isTopLevel }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [replyMode, setReplyMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState(
    comment.content.length > 500
      ? comment.content.substring(0, 500) + "..."
      : comment.content
  );
  const [showOverflow, setShowOverflow] = useState(false);

  const createReply = useCreateComment(comment.event_id);
  const deleteComment = useDeleteComment(comment.event_id);
  const updateComment = useUpdateComment(comment.event_id);

  const handlePin = async (commentId: string) => {
    await updateComment.mutateAsync({
      comment: {
        id: commentId,
        pinned_by: comment.pinned_by
          ? null
          : "f3fb13cb-fea2-444d-b094-918f5a1660f6",
      },
    });
  };

  return (
    <div className="flex gap-2">
      <ProfileImage user_id="1" className={editMode ? "hidden" : ""} />
      <div className="w-full">
        {/* PINNED COMMENT */}
        {comment.pinned_by && !editMode && (
          <span className="flex items-center text-muted-foreground text-xs">
            <MdOutlinePushPin className="w-4 h-4 mr-1" />
            <p>Pinned by {comment.pinned_by}</p>
          </span>
        )}

        {/* COMMENT HEADER */}
        <div className="flex items-center justify-between w-full">
          {!editMode && (
            <div className="flex items-center gap-2">
              <p className="font-medium text-sm text-primary">John Doe</p>
              {comment.created_at && (
                <p className="text-xs text-muted-foreground">
                  {formatDistanceToNow(comment.created_at, { addSuffix: true })}
                </p>
              )}
            </div>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild className={editMode ? "hidden" : ""}>
              <button className="rotate-90 translate-y-2 text-muted-foreground transition-colors after:hover:bg-muted-foreground/20 after:absolute after:-inset-1 after:rounded-full">
                <Ellipsis className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setEditMode(true)}>
                Edit
              </DropdownMenuItem>
              {isTopLevel && (
                <DropdownMenuItem
                  onClick={() => {
                    handlePin(comment.id);
                  }}
                >
                  {comment.pinned_by ? "Unpin" : "Pin"}
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => setTimeout(() => setDialogOpen(true), 50)} // Bug with dialog https://github.com/radix-ui/primitives/issues/1241
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AlertDialog
            open={isDialogOpen}
            onOpenChange={(open) => !open && setDialogOpen(false)}
          >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure absolutely sure?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground">
                  This action cannot be undone. This will permanently delete
                  your comment.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button variant="ghost">Cancel</Button>
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  onClick={() => deleteComment.mutateAsync({ id: comment.id })}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* COMMENT CONTENT */}
        {editMode ? (
          <CommentInput
            replyMode={true}
            existingContent={content}
            editMode
            handlePostComment={(string: string) => {
              updateComment.mutateAsync({
                comment: {
                  id: comment.id,
                  content: string,
                },
              });
              setShowReplies(true);
              setEditMode(false);
            }}
            toggleVisibility={() => setEditMode(false)}
          />
        ) : (
          <>
            <p className="text-primary text-sm">{content}</p>
            {comment.content.length > 500 && (
              <button
                className="text-muted-foreground hover:underline text-sm font-medium"
                onClick={() => {
                  if (!showOverflow) {
                    setContent(comment.content);
                  } else {
                    setContent(comment.content.substring(0, 500) + "...");
                  }
                  setShowOverflow(!showOverflow);
                }}
              >
                {showOverflow ? "Show less" : "Read more"}
              </button>
            )}
          </>
        )}

        {/* COMMENT ACTIONS */}
        {!editMode && (
          <div className="flex items-center gap-2 mt-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground/80" disabled>
                    <ThumbsUp className="w-5 h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Coming soon</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="text-muted-foreground/80" disabled>
                    <ThumbsDown className="w-5 h-5" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>Coming soon</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              onClick={() => setReplyMode(!replyMode)}
              variant="ghost"
              className="rounded-full text-primary px-2 py-1 h-fit"
            >
              Reply
            </Button>
          </div>
        )}

        {/* REPLY INPUT */}
        {replyMode && (
          <CommentInput
            className="mt-4"
            replyMode={replyMode}
            handlePostComment={(string: string) => {
              createReply.mutateAsync({
                userId: "a71ee6b6-f6ba-4899-80d8-34641057c8c4",
                content: `@${comment.user_id}` + string,
                parentId: topLevelId,
              });
              setShowReplies(true);
              setReplyMode(false);
            }}
            toggleVisibility={() => setReplyMode(false)}
          />
        )}

        {/* SHOW REPLIES BUTTON */}
        {replies.length > 0 && (
          <Button
            onClick={() => setShowReplies(!showReplies)}
            className="text-sm rounded-full -ml-4"
            variant="ghost"
          >
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                showReplies ? "rotate-180" : ""
              )}
            />
            {replies.length} {replies.length === 1 ? "Reply" : "Replies"}
          </Button>
        )}

        {/* REPLIES */}
        {showReplies && replies.length > 0 && (
          <div className="space-y-4 mt-4">
            {replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                topLevelId={topLevelId}
                isTopLevel={false}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const EventComments = () => {
  const testId = "b61de6b6-f6ba-4899-80d8-34641057c8c2";
  const { data: comments, isLoading } = useCommentsByEventId(testId);
  const createComment = useCreateComment(testId);
  const [sortedComments, setSortedComments] = useState(comments);

  useEffect(() => {
    if (!comments) {
      return;
    }

    // Sort comments by pinned status
    setSortedComments(
      [...comments].sort(
        (a, b) => (b.pinned_by ? 1 : 0) - (a.pinned_by ? 1 : 0)
      )
    );
  }, [comments]);

  const handlePostComment = async (content: string) => {
    await createComment.mutateAsync({
      userId: "a71ee6b6-f6ba-4899-80d8-34641057c8c4",
      content,
    });
  };

  if (!comments || !sortedComments) {
    return (
      <div className="space-y-6">
        <SectionTitle title="Comment" subtitle="Be the first to comment!" />
        <CommentInput
          replyMode={false}
          handlePostComment={handlePostComment}
          isLoading={createComment.isPending}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SectionTitle
        title={
          isLoading ? "Loading Comments..." : comments.length + " Comments"
        }
        subtitle={comments ? "See what others have to say" : ""}
      />

      {isLoading ? (
        <Loader2 className="animate-spin text-blue" />
      ) : (
        <>
          <CommentInput
            replyMode={false}
            handlePostComment={handlePostComment}
            isLoading={createComment.isPending}
          />

          {/* Existing Comments */}
          <div className="space-y-6">
            {sortedComments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                replies={comment.replies}
                topLevelId={comment.id}
                isTopLevel
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EventComments;
