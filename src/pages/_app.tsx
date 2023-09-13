import type { AppProps } from "next/app";
import Meta from "@/components/Meta";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Manrope } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "@/styles/globals.scss";

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={manrope.className}>
        <Meta></Meta>
        <ClerkProvider {...pageProps}>
          <Component {...pageProps} />
        </ClerkProvider>
      </div>
    </QueryClientProvider>
  );
}
