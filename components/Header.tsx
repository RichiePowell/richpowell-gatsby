import Link  from "next/link"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header>
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand is-size-3">
          <Link href="/" passHref>
            <a style={{
                textDecoration: `none`,
                fontStyle: 'italic',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>{siteTitle}</a>
          </Link>
        </div>
        <ul className="navbar-menu">
          <li>
            <a className="navbar-item" href="#projects">Portfolio</a>
          </li>
          <li>
            <a className="navbar-item" href="#about">About</a>
          </li>
          <li>
            <a className="navbar-item" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header