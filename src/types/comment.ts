export interface Comment {
  id: string;
  user_id: string;
  event_id: string;
  content: string;
  pinned_by?: string;
  parent_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface UpdateCommentRequest {
  id: string;
  content?: string;
  pinned_by?: string | null;
  parent_id?: string | null;
}

export interface CommentWithReplies extends Comment {
  replies: Comment[];
}
