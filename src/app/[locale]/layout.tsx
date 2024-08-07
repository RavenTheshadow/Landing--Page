import type { Metadata } from "next";
import "@/styles/css/globals.css";
import NavBar from "@/components/navbar";
import { ToastContainer } from "react-toastify";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "react-toastify/dist/ReactToastify.css";
import { getDarkMode } from "../libs/LocalStorage";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "A landing page",
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const message = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={message}>
          <ToastContainer />
          <NavBar param={{
            locale: locale
          }} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
