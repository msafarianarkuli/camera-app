import { meta } from "@/utils/meta";
import "@/assets/styles/globals.scss";
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
    <html lang='fa'>
      <body>{children}</body>
    </html>
  );
}
