import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
    title: "AI Image Detection",
    description: "Explore the power of AI in image detection and object recognition technology. Unlock new possibilities with our innovative solutions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="flex flex-col  min-h-screen bg-background text-foreground items-center justify-center">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
