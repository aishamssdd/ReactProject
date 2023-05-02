import React from 'react';
import './Homepage.css';

function About() {
    return (
        <div className="App">
            <header>
                <h1>My Website</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="featured">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.</p>
                    <img src="https://via.placeholder.com/500x250?text=Placeholder+Image" alt="Placeholder" />
                </section>

                <section className="recent">
                    <h2>Our Team</h2>
                    <ul>
                        <li>
                            <img src="https://via.placeholder.com/250x250?text=Placeholder+Image" alt="Placeholder" />
                            <h3>John Doe</h3>
                            <p>Founder and CEO</p>
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/250x250?text=Placeholder+Image" alt="Placeholder" />
                            <h3>Jane Smith</h3>
                            <p>Marketing Director</p>
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/250x250?text=Placeholder+Image" alt="Placeholder" />
                            <h3>Bob Johnson</h3>
                            <p>Lead Developer</p>
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/250x250?text=Placeholder+Image" alt="Placeholder" />
                            <h3>Susan Williams</h3>
                            <p>Project Manager</p>
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
}

function Footer() {
    return (
        <footer>
            <div className="footer-info">
                <h3>My Website</h3>
                <p>123 Main Street</p>
                <p>Anytown, USA 12345</p>
                <p>8 (771) 648-6904</p>
            </div>
            <div className="footer-icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
        </footer>
    );
}

export default About;
