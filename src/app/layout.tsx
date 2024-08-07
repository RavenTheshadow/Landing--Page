import "@/styles/css/globals.css";
import { getMessages } from "next-intl/server";


export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const message = await getMessages();

  return (
    <html>
      {children}
    </html>
  );
}
