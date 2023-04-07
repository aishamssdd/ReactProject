import React from 'react';
import './Homepage.css';

function Homepage() {
    return (
        <div>
            <header>
                <h1>My Art Gallery</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Artists</a></li>
                        <li><a href="#">Exhibitions</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="featured">
                    <h2>Featured Artist</h2>
                    <img src="https://via.placeholder.com/400x400" alt="Featured Artwork" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel odio sed risus vulputate tincidunt. Sed ullamcorper mauris eu tortor fermentum posuere. Duis bibendum sit amet nibh et viverra.</p>
                </section>
                <section>
                    <h2>Upcoming Exhibitions</h2>
                    <ul>
                        <li>Exhibition 1 - Date and time</li>
                        <li>Exhibition 2 - Date and time</li>
                        <li>Exhibition 3 - Date and time</li>
                    </ul>
                </section>
                <section className="recent">
                    <h2>Recent Artwork</h2>
                    <ul>
                        <li><img src="https://via.placeholder.com/200x200" alt="Artwork 1" /></li>
                        <li><img src="https://via.placeholder.com/200x200" alt="Artwork 2" /></li>
                        <li><img src="https://via.placeholder.com/200x200" alt="Artwork 3" /></li>
                        <li><img src="https://via.placeholder.com/200x200" alt="Artwork 4" /></li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; My Art Gallery 2023</p>
            </footer>
        </div>
    );
}

export default Homepage;
