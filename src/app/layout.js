import '@/styles/tailwind.css'

export const metadata = {
  title: 'Dalan Capital',
  description: 'Dalan Capital',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
