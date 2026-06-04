import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'General-Purpose 3D Intelligence | NeurIPS 2026 Workshop',
    template: '%s | GP3D NeurIPS 2026',
  },
  description:
    'General-Purpose 3D Intelligence — a NeurIPS 2026 workshop establishing 3D research as the foundation of AI systems that understand, predict, and act.',
  keywords: [
    'NeurIPS 2026',
    '3D',
    'workshop',
    'machine learning',
    'computer vision',
    'world models',
    'spatial reasoning',
    'robotics',
    'embodied AI',
    'neural rendering',
    'Gaussian splatting',
  ],
  metadataBase: new URL('https://gp3d-workshop.github.io'),
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'General-Purpose 3D Intelligence | NeurIPS 2026 Workshop',
    description:
      'Establishing 3D research as the foundation of AI systems that understand, predict, and act.',
    url: 'https://gp3d-workshop.github.io',
    siteName: 'GP3D Workshop',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'General-Purpose 3D Intelligence | NeurIPS 2026 Workshop',
    description:
      'Establishing 3D research as the foundation of AI systems that understand, predict, and act.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
