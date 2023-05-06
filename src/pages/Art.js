import art07 from "./../img/art/art07.jpg";
import art03 from "./../img/art/art03.jpg";
import art05 from "./../img/art/art5.jpg";

const Art = () => {
  return (
    <div>
      <main className="section">
        <div className="container">
          <br />

          <ul className="projects">
            <li class="project">
              <a href="/">
                <img src={art07} alt="Project img" class="project__img" />
                <h3 class="project__title">Modern Art</h3>
              </a>
            </li>

            <br />

            <li className="project">
              <a href="/" className="project__link">
                <img src={art05} alt="Project img" className="project__img" />
                <h3 className="project__title font-medium mt-3 mb-1">
                  Abstract Art
                </h3>
              </a>
            </li>

            <li className="project">
              <a href="/" className="project__link">
                <img src={art03} alt="Project img" className="project__img" />
                <h3 className="project__title font-medium mt-3 mb-1">
                  Artistic Art
                </h3>
              </a>
            </li>
          </ul>

          <br />
        </div>
      </main>
    </div>
  );
};

export default Art;
