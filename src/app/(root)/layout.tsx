"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";

import Loading from "../loading";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  const path = usePathname();
  return (
    <Suspense key={path} fallback={<Loading />}>
      {children}
    </Suspense>
  );
}
