export default function RootLayout({ children }) {
  return (
    <main className="flex-grow container mx-auto px-4 max-width">
      {children}
    </main>
  );
}
