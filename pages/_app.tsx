import "../styles/layout.scss"
import { config, library } from '@fortawesome/fontawesome-svg-core'
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { faFacebook, faLinkedin, faWordpress, faReact, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faChevronDown, faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import type { AppProps } from 'next/app'

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faReact, faPhp, faWordpress, faFacebook, faLinkedin, faMobileAlt, faChevronDown, faQuoteLeft, faChevronLeft, faChevronRight)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
