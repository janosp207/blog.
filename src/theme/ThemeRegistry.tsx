"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import themeOptions from "./themeOptions";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";



const theme = createTheme(themeOptions);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	return (
		<NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	)
}
