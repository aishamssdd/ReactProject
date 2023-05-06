import Header from "./../components/header/Header";
import "./style.css";

import art1 from "./../img/art/art1.jpg";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <div className="content">
            <div className="content__text">
              <strong>Art Gallery</strong>
              <br />
              <br />
              <p className="text">
                Welcome to Art Gallery, where we showcase some of the most
                talented artists from around the world. Our gallery is home to a
                diverse collection of contemporary art, featuring a wide range
                of mediums including painting, sculpture, and digital art.
              </p>
              <p className="text">
                Whether you're an experienced collector or a first-time buyer,
                we're confident that you'll find something to admire in our
                collection. Take a look around our site to learn more about the
                artists we represent and the works that we feature. You can
                browse our collection by medium, artist, or style, making it
                easy to find exactly what you're looking for.
              </p>
              <p className="text">
                And if you're ever in the area, we'd love for you to stop by our
                physical location to see the art in person and meet our friendly
                team. Thank you for visiting. We hope you enjoy your time
                exploring our collection and discovering new works of art that
                inspire you.
              </p>
            </div>
            <div className="content__image">
              <img src={art1} alt="Artwork" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
