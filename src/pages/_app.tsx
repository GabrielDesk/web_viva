import { ContextProvider } from "@/context/context";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />;
    </ContextProvider>
  );
}
