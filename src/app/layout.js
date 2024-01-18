import { Inter } from "next/font/google";
import ThemeRegistry from "./ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chatur AI Chatbot",
  description: "AI chat bot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeRegistry options={{ key: "joy" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
