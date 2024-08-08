import "@/styles/css/globals.css";
import NavBar from "@/components/navbar";
import { ToastContainer } from "react-toastify";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "react-toastify/dist/ReactToastify.css";
import { unstable_setRequestLocale } from 'next-intl/server';

const locales = ['vi', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
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
