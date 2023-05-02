import React from 'react';
import './Artists.css';

class Artists extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="logo">
                        <h1>Artists</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/artists">Artists</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="featured">
                    <h2>Featured Artist</h2>
                    <img src="https://via.placeholder.com/400x400" alt="Featured artist"/>
                </div>
                <div className="recent">
                    <h2>Recent Artists</h2>
                    <ul>
                        <li><img src="https://via.placeholder.com/200x200" alt="Recent artist"/></li>
                        <li><img src="https://via.placeholder.com/200x200" alt="Recent artist"/></li>
                        <li><img src="https://via.placeholder.com/200x200" alt="Recent artist"/></li>
                        <li><img src="https://via.placeholder.com/200x200" alt="Recent artist"/></li>
                    </ul>
                </div>
                <footer>
                    <div className="footer-info">
                        <h3>About Us</h3>
                        <p>We are a platform for showcasing talented artists from around the world.</p>
                    </div>
                    <div className="footer-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Artists;
