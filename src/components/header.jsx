import SvgComponent from "./svg-component";

export default function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/" title="logo" className="header__logo__link">
          <img
            src={`logo-1248w.png`}
            alt="logo"
            srcSet="
    /logo-768w.png 360w, 
    /logo-1248w.png 768w, 
    /logo-1248w.png 1248w"
            sizes="(max-width: 360px) 100%, 
         (max-width: 768px) 100%, 
         100%"
            className="header__logo__link--logo"
          />
        </a>
      </div>
      <nav className="header__navigation">
        <ul className="header__navigation__list">
          <li className="header__navigation__list--element">
            <a href="/">Home</a>
          </li>
          <li className="header__navigation__list--element">
            <a href="/">Products</a>
          </li>
          <li className="header__navigation__list--element">
            <a href="/">
              <SvgComponent name="basket" />
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="header__menu"
        aria-label="Toggle Navigation"
        onClick={onMenuClick}
      >
        <img src="menu.svg" alt="burger menu" width="30" height="38" />
      </button>
    </header>
  );
}
