import SvgComponent from "./svg-component";

export default function BurgerMenu({ isOpen, backgroundClick }) {
  return (
    <>
      <div
        className={`menu-overlay ${isOpen ? "visible" : ""}`}
        onClick={backgroundClick}
      ></div>
      <nav className={`burger-menu ${isOpen ? "open" : ""}`}>
        <button
          className="close-button"
          aria-label="Close menu"
          onClick={backgroundClick}
        >
          ✕
        </button>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Products</a>
          </li>
          <li>
            <SvgComponent name="basket" />
          </li>
        </ul>
      </nav>
    </>
  );
}
