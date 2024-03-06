import { meta } from "@/lib/meta";
import "@/assets/styles/globals.scss";
import ReactQueryProvider from "./ReactQueryProvider";
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: meta.layout.title,
  description: meta.layout.description,
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <ReactQueryProvider>
      <html lang='fa'>
        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
