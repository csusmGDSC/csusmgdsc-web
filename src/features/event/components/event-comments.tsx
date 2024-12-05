import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Ellipsis, Pin, Send } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

// Interfaces for type safety
interface Comment {
  id: number;
  user_id: number;
  event_id: number;
  content: string;
  pinnedBy?: string;
  commentIDs: number[];
  createdAt: Date;
  updatedAt: Date;
  isDeleted?: boolean;
  likes?: number;
}

interface EventCommentsProps {
  comments: Comment[];
  onPostComment?: (content: string) => void;
}

// Static Mock Data
const mockReplies: Comment[] = [
  {
    id: 101,
    user_id: 2,
    event_id: 1,
    content:
      "Great question! You'll need to install numpy, pandas, and scikit-learn.",
    commentIDs: [],
    createdAt: new Date("2024-01-15T10:30:00"),
    updatedAt: new Date("2024-01-15T10:30:00"),
    likes: 5,
  },
  {
    id: 102,
    user_id: 3,
    event_id: 1,
    content:
      "I recommend watching some introductory tutorials before the workshop.",
    commentIDs: [],
    createdAt: new Date("2024-01-15T11:45:00"),
    updatedAt: new Date("2024-01-15T11:45:00"),
    likes: 3,
  },
];

const CommentItem: React.FC<{
  comment: Comment;
  replies?: Comment[];
  onReply?: (commentId: number) => void;
}> = ({ comment, replies = [], onReply }) => {
  const [showReplies, setShowReplies] = useState(true);

  return (
    <div className="flex gap-4">
      <img
        src={"/images/person.jpg"}
        alt={`avatar`}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <div className="bg-gray-50 p-4 rounded-sm">
          <div className="flex justify-between items-start mb-2">
            <div>
              {comment.pinnedBy && (
                <span className="flex items-center text-red text-sm">
                  <Pin className="w-4 h-4 mr-2" />
                  <p>Pinned by Jane Doe</p>
                </span>
              )}
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">
                {format(comment.createdAt, "PP")}
              </p>
            </div>
            <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
              <Ellipsis className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-700">{comment.content}</p>
        </div>
        <div className="flex items-center mt-1 space-x-4">
          <button
            onClick={() => onReply?.(comment.id)}
            className="text-sm text-gray-500 hover:text-blue-600"
          >
            Reply
          </button>
          {replies.length > 0 && (
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="text-sm text-gray-500 hover:text-blue-600"
            >
              {showReplies ? "Hide" : "View"} {replies.length}{" "}
              {replies.length === 1 ? "Reply" : "Replies"}
            </button>
          )}
        </div>

        {showReplies && replies.length > 0 && (
          <div className="mt-4 space-y-4">
            {replies.map((reply) => (
              <div className="border-l-2 border-border pl-6 ">
                <CommentItem key={reply.id} comment={reply} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const EventComments: React.FC<EventCommentsProps> = ({
  comments = [],
  onPostComment,
}) => {
  const [commentContent, setCommentContent] = useState("");

  const handlePostComment = () => {
    if (onPostComment && commentContent.trim()) {
      onPostComment(commentContent);
      setCommentContent("");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Comments</h2>

      {/* Comment Input */}
      <div className="flex gap-4">
        <img
          src={"/images/person.jpg"}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <MDEditor
            value={commentContent}
            onChange={(val) => setCommentContent(val || "")}
            data-color-mode="light"
            style={{
              borderRadius: "4px",
              border: "1px solid",
              borderColor: "hsl(var(--border))",
              padding: "4px",
            }}
          />
          <div className="mt-2 flex justify-end">
            <Button onClick={handlePostComment}>
              <Send className="w-4 h-4" />
              Post Comment
            </Button>
          </div>
        </div>
      </div>

      {/* Existing Comments */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            replies={mockReplies}
            onReply={(commentId) => {
              console.log(`Replying to comment ${commentId}`);
              // Implement reply logic here
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default EventComments;
