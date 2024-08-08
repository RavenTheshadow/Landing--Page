import "@/styles/css/home/background.css";
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({ params: { locale } }: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  return (
    <main>
    </main>
  );
}
