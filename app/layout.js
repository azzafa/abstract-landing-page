import localFont from 'next/font/local';
import './globals.css';
import Headers from '@/components/header/Headers';
import Footers from '@/components/footer/Footers';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Abstract',
  description: 'Abstract Studio Design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="max-h-full flex flex-col">
          <Headers />
          {children}
          <Footers />
        </div>
      </body>
    </html>
  );
}
