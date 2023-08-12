import { API_PATHS } from '@/paths';
import axios from '@/utils/axios';
import useSWR from 'swr';
import { Post } from '@/classes/Post';

export const usePosts = (userId: string) => {
  const { data, isLoading } = useSWR(API_PATHS.POSTS.replace(':userId', userId), async url => {
    const { data } = await axios.get(url);

    return data.posts;
  });

  return {
    posts: data ? data.map((post: any) => new Post(post)) : undefined,
    isLoading,
  };
};

export const usePost = (id: string) => {
  const { data, isLoading } = useSWR(API_PATHS.POST.replace(':id', id), async url => {
    const { data } = await axios.get(url);

    return data.post;
  });

  return {
    post: data ? new Post(data) : undefined,
    isLoading,
  }
};