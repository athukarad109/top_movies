import './globals.css'
import {Ubuntu} from "@next/font/google"
import Link from 'next/link'

const ubuntu = Ubuntu({weight: ['400', '700'], subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${ubuntu.className}`}>
        <nav>
          <ul>
            <li> <Link href={`/`}>Home</Link> </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
