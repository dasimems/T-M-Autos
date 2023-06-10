import { Footer, Nav } from '@/components'
import './globals.css'

export const metadata = {
  title: 'T & M Auto',
  description: 'Perform basic care and maintenance, including changing oil, checking fluid levels, and rotating tires. Repair or replace worn parts, such as brake pads, wheel bearings, and sensors. Perform repairs to manufacturer and customer specifications. Explain automotive problems and repairs to clients.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Nav />

        {children}
        
        <Footer />
      </body>
    </html>
  )
}
