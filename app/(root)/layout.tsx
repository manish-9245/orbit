import type { PropsWithChildren } from "react";

import { StreamClientProvider } from "@/providers/stream-client-provider";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-black">
      <StreamClientProvider>{children}</StreamClientProvider>
    </main>
  );
};

export default RootLayout;