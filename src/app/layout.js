import { Provider } from "@/components/ui/provider";

export const metadata = {
  title: "Give(a)Go",
  description: "A community of builders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
