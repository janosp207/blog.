"use client"

import BlogBoard from "@/components/blogBoard/BlogBoard"
import Title from "@/components/blogBoard/Title"
import { usePosts } from "@/api/post"

export default function Home(): JSX.Element {
	const { posts, isLoading } = usePosts('1');

	if (isLoading) return <div>Loading...</div>

	return (
		<>
			<Title text="Latest blog. posts" />
			<BlogBoard posts={posts} />
		</>
	)
}
