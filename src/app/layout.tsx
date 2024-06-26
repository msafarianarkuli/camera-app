import { CssBaseline } from "@mui/material";
import ThemeRegistry from "@/theme/ThemeRegistry";
import ReactQueryProvider from "./ReactQueryProvider";
import { meta } from "@/lib/meta";
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
    <ReactQueryProvider>
      <html lang='fa'>
        <ThemeRegistry>
          <CssBaseline />
          <body>{children}</body>
        </ThemeRegistry>
      </html>
    </ReactQueryProvider>
  );
}
