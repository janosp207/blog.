import { API_PATHS } from '@/paths';
import axios from '@/utils/axios';
import useSWR from 'swr';
import { Comment } from '@/classes/Comment';

export const useComments = (postId: string) => {
  const { data, isLoading, mutate } = useSWR(API_PATHS.COMMENTS.replace(':postId', postId), async url => {
    const { data } = await axios.get(url);

    return data.comments;
  });

  const store = async (comment: string): Promise<void> => {
    const { data } = await axios.post(API_PATHS.COMMENTS.replace(':postId', postId), { text: comment, user_id: 2 })

    mutate((comments: any) => [new Comment(data.comment), ...comments], false);
  }

  return {
    comments: data ? data.map((comment: any) => new Comment(comment)) : undefined,
    isLoading,
    store
  };
}

