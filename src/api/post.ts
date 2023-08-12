import { API_PATHS } from '@/paths';
import axios from '@/utils/axios';
import useSWR from 'swr';
import { Post } from '@/classes/Post';

const usePosts = (userId: string) => {
  const { data, isLoading } = useSWR(API_PATHS.POSTS.replace(':userId', userId), async url => {
    const { data } = await axios.get(url);

    return data.posts;
  });

  return {
    posts: data ? data.map((post: any) => new Post(post)) : undefined,
    isLoading,
  };
};

export default usePosts;