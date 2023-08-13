'use client';

import BlogBoard from '@/components/blogBoard/BlogBoard';
import Title from '@/components/blogBoard/Title';
import { useAllPosts } from '@/api/post';

export default function Home(): JSX.Element {
	const { posts, isLoading } = useAllPosts();

	if (isLoading) return <div>Loading...</div>;

	return (
		<>
			<Title text="Latest blog. posts" />
			<BlogBoard posts={posts} />
		</>
	)
}
