import '../styles/globals.css'
import type { AppProps } from 'next/app'

// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'

// pages/_app.js
import { Work_Sans } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const workSans = Work_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={workSans.className} />
}
