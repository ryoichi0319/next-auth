import SessionProvider from "../provider/SessionProvider";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
    <html lang="ja">
      <head />
      <body>
        <header>
          <h1>
            header
            <Link href="/">ブログ</Link>
            
          </h1>
          <Link href="/articles/new">記事を書く</Link>
        </header>
        {children}
        <footer>
          <small>© 2023 azukiazusa</small>
        </footer>
      </body>
    </html>
    </SessionProvider>
  );
}