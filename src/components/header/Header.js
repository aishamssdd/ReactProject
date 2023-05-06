import "./style.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Your Gateway to the World of Contemporary
              <em>Art</em>
            </strong>
            <br />
          </h1>
          <div className="header__text">
            <p>a Destination for Art Lovers.</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
