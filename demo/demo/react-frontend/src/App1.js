import React, { useState, useEffect } from 'react';
import './App1.css';
import Typed from 'typed.js';

function App () {
    useEffect(() => {
        const typed = new Typed('#element', {
            strings: ['Development', 'Web-Developer', 'Graphic Designer', 'Web-Design', 'Full-Stack-Development'],
            typeSpeed: 40,
        });

        return () => typed.destroy(); // Cleanup
    }, []);

    const [searchQuery, setSearchQuery] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const performSearch = () => {
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
        } else {
            alert("Please enter a search term.");
        }
    };

    const validateForm = () => {
        if (email && password) {
            alert("Login successful!");
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <div>
            <div className="main">
                <div className="navbar">
                    <div className="icon">
                        <h2 className="logo">De-Sign</h2>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">SERVICE</a></li>
                            <li><a href="#">DESIGN</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="search">
                        <input
                            className="srch"
                            type="search"
                            placeholder="Enter here"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="btn" onClick={performSearch}>Search</button>
                    </div>
                </div>

                <div className="content">
                    <h1>Web Design & <br /><span className="purple"><span id="element"></span></span><br />Course</h1>
                    <p className="par">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse enim sint <br />
                        omnis exercitationem! Quis cum illo nemo odit rerum quam cumque totam illum, <br />
                        corporis soluta numquam vel veniam tempora.
                    </p>
                    <button className="cn"><a href="#">JOIN US</a></button>

                    <div className="form">
                        <h2>Login Here</h2>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email Here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password here"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btn" onClick={validateForm}>Login</button>
                        <p className="link">Don't have an account</p><br />
                        <a href="#">Sign up</a> here
                        <p className="liw">Log in with</p>
                        <div className="icon">
                            <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>Thank you for visiting || &#169; Akash || &#174; hp </p>
            </footer>
        </div>
    );
};

export default App;
