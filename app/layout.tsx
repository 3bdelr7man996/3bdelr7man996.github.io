import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code, DM_Sans } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export const metadata: Metadata = {
  title: 'Abdelrhman Omar - Flutter Developer & Mobile Architect',
  description: 'Senior Flutter Developer with 4+ years of experience. Specializing in Clean Architecture, BLoC state management, and cross-platform mobile development.',
  keywords: ['Flutter', 'Dart', 'Mobile Development', 'iOS', 'Android', 'Clean Architecture', 'BLoC'],
  authors: [{ name: 'Abdelrhman Omar' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdelrhman.dev',
    siteName: 'Abdelrhman Omar - Portfolio',
    title: 'Abdelrhman Omar - Flutter Developer',
    description: 'Senior Flutter Developer with 4+ years of experience in mobile app development.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1633356122544-f134ef2944f0?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Abdelrhman Omar - Flutter Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdelrhman Omar - Flutter Developer',
    description: 'Senior Flutter Developer with 4+ years of experience.',
    images: ['https://images.unsplash.com/photo-1633356122544-f134ef2944f0?w=1200&h=630&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6C3FFF" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-family='monospace' fill='%236C3FFF'>&lt;AO&gt;</text></svg>" />
      </head>
      <body className={`${firaCode.className} antialiased`}>{children}</body>
    </html>
  );
}
