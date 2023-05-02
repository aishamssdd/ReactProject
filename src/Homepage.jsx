import React from 'react';
import './Homepage.css';
import Artists from './Artists';

function Homepage() {

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({behavior: "smooth"});
    }

    const handleArtistsClick = () => {
        window.location.href = '/artists';
    }
    const renderPageContent = () => {
        const path = window.location.pathname;
        if (path === '/artists') {
            return <Artists />;
        }
        return null;
    }
    return (
        <div>
            <header>
                <h1>My Art Gallery</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a onClick={handleArtistsClick}>Artists</a></li>
                        <li><a href="#">Exhibitions</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a onClick={handleContactClick}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="featured">
                    <h2>Featured Artist</h2>
                    <img src='https://say-hi.me/wp-content/uploads/2016/02/Warren_Chang_14.jpg' alt="Featured Artwork" className="featured" />
                    <h1 style={{textAlign: 'center', fontSize: '22px'}}>On this site you can find various works by famous artists such as Wojciech Babski, Warren Chang, Aurelio Bruni and others.</h1>
                </section>
                <section>
                    <h2>Upcoming Exhibits</h2>
                    <ul>
                        <li>Exhibit Warren Chang - 12.04.23, 15:00</li>
                        <li>Exhibit Wojciech Babski - 27.07.23, 10:00</li>
                        <li>Exhibit Aurelio Bruni - 15.11.23, 16:00</li>
                    </ul>
                </section>
                <section className="recent">
                    <h2>Recent Artworks</h2>
                    <ul>
                        <li>
                            <img src='https://say-hi.me/wp-content/uploads/2016/02/Wojciech_Babski_07.jpg' alt="Painting 1" className="image-hover"/>
                       <p>African girl</p>
                        </li>
                        <li>
                            <img src='https://say-hi.me/wp-content/uploads/2016/02/Wojciech_Babski_12.jpg' alt="Painting 2" className="image-hover" />
                        <p>Fatal Woman</p>
                        </li>
                    </ul>
                </section>
            </main>
            <footer id="contact">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fa fa-map-marker"></i>
                        <p>Almaty, Kazakhstan</p>
                    </div>
                    <div className="contact-item">
                        <i className="fa fa-phone"></i>
                        <p>8 (771) 648-6904</p>
                    </div>
                    <div className="contact-item">
                        <i className="fa fa-envelope"></i>
                        <p>info@myartgallery.com</p>
                    </div>
                </div>
                <p>&copy; My Art Gallery 2023</p>
            </footer>
        </div>
    );
}

export default Homepage;
