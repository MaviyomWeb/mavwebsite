import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maviyom Aviation - Where technology takes wings",
  description: "Maviyom Aviation -  Where technology takes wings",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.className} bg-white `}>
        <NextIntlClientProvider messages={messages}>
          {/* <ScrollToTop /> */}

          {/* <Navbar /> */}

          <Header />
          <main>
            <article>
              {children}
              <CTA />
            </article>
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
