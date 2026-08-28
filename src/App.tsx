import { Backdrop } from './components/Backdrop'
import { Masthead } from './components/Masthead'
import { Hero } from './components/Hero'
import { Brief } from './components/Brief'
import { Denied } from './components/Denied'
import { Footage } from './components/Footage'
import { Features } from './components/Features'
import { Gallery } from './components/Gallery'
import { Sandbox } from './components/Sandbox'
import { Exporter } from './components/Exporter'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Backdrop />
      <Masthead home />
      <main>
        <Hero />
        <hr className="rule" />
        <Brief />
        <hr className="rule" />
        <Denied />
        <hr className="rule" />
        <Footage />
        <Features />
        <hr className="rule" />
        <Gallery />
        <hr className="rule" />
        <Sandbox />
        <Exporter />
      </main>
      <Footer />
    </>
  )
}
