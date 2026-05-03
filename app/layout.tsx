import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CertifyPro – Automated Course Completion Certificates',
  description: 'Generate branded certificates with QR codes for verification when students complete online courses. Perfect for online course creators and educators.',
  keywords: 'certificate generator, course completion, QR verification, online courses, education'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d52b2682-a5e0-4f98-9251-e1e5ce17b5e5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
