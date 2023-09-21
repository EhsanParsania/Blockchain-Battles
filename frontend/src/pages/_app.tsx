import "@/assets/globals.css";
import type { AppProps } from "next/app";
import { initializeParse } from "@parse/react-ssr";
import { AuthProvider } from "@features/authorization/Auth/Auth";
import MainLayout from "@features/layouts/Main/MainLayout";
import { ToastifyProvider } from "@features/ui";

initializeParse(
  process.env.NEXT_PUBLIC_PARSE_SERVER_URL!, //custom url
  process.env.NEXT_PUBLIC_PARSE_APP_ID!, //app id
  process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY!, //js
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastifyProvider>
      <AuthProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </AuthProvider>
    </ToastifyProvider>
  );
}
