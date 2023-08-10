import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { Container } from '@mui/material'
import ThemeRegistry from '@/theme/ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'blog.',
	description: 'Blog of a software engineer.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<ThemeRegistry>
				<body className={inter.className}>
					<Navigation />
					{children}
				</body>
			</ThemeRegistry>
		</html>
	)
}
