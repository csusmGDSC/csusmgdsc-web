import { API_ROUTES } from "@/config/api-routes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "./api-client";
import { QUERY_KEYS } from "@/config/query-keys";
import {
  Comment,
  CommentWithReplies,
  UpdateCommentRequest,
} from "@/types/comment";
import { toast } from "sonner";

async function fetchCommentsByEventId(
  id: string
): Promise<CommentWithReplies[]> {
  const { data } = await api.get(
    API_ROUTES.COMMENTS.GET_COMMENTS_BY_EVENT_ID(id)
  );
  return data;
}

async function fetchCommentsByUserId(id: string): Promise<Comment[]> {
  const { data } = await api.get(
    API_ROUTES.COMMENTS.GET_COMMENT_BY_USER_ID(id)
  );
  return data;
}

async function deleteCommentByCommentId(id: string): Promise<any> {
  const { data } = await api.delete(
    API_ROUTES.COMMENTS.DELETE_COMMENT_BY_COMMENT_ID(id)
  );
  return data;
}

async function updateCommentByCommentId(
  comment: UpdateCommentRequest
): Promise<any> {
  const { data } = await api.put(
    API_ROUTES.COMMENTS.UPDATE_COMMENT_BY_COMMENT_ID(comment.id),
    comment
  );
  return data;
}

async function createComment(
  userId: string,
  eventId: string,
  content: string,
  parentId?: string
): Promise<any> {
  const { data } = await api.post(API_ROUTES.COMMENTS.CREATE_COMMENT, {
    user_id: userId,
    event_id: eventId,
    content,
    ...(parentId ? { parent_id: parentId } : {}),
  });
  return data;
}

export function useCommentsByEventId(id: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, id],
    queryFn: () => fetchCommentsByEventId(id),
  });
}

export function useCommentsByUserId(id: string) {
  return useQuery({
    queryKey: [QUERY_KEYS.COMMENTS, id],
    queryFn: () => fetchCommentsByUserId(id),
  });
}

export function useDeleteComment(eventId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: string }) => deleteCommentByCommentId(id),
    onSuccess: () => {
      // Refetch comments
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, eventId],
      });

      toast.success("Successfully deleted comment!");
    },
    onError: (data) => {
      toast.error("Failed to delete comment: " + data);
    },
  });
}

export function useUpdateComment(eventId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ comment }: { comment: UpdateCommentRequest }) =>
      updateCommentByCommentId(comment),
    onSuccess: () => {
      // Refetch comments
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, eventId],
      });

      toast.success("Successfully updated comment!");
    },
    onError: (data) => {
      toast.error("Failed to update comment: " + data);
    },
  });
}

export function useCreateComment(eventId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      content,
      parentId,
    }: {
      userId: string;
      content: string;
      parentId?: string;
    }) => createComment(userId, eventId, content, parentId),
    onSuccess: () => {
      // Refetch comments
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.COMMENTS, eventId],
      });

      toast.success("Successfully created comment!");
    },
    onError: (data) => {
      toast.error("Failed to create comment: " + data);
    },
  });
}
