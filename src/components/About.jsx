import React from "react";

const About = () => {

    return (
        <div className="about-div">

            <h4>Hi there<span role="img" aria-label="wave">👋</span></h4>

            <h6>Welcome to the "about" section!</h6>
            <br />

            <p>I created this web-app after I finished a class on Udemy where we built a pretty basic React-app. I`m here to tell you that React is amazing! </p>
            <p>It enables users to interact with the webpages/apps. If you are old enough you must remember the
            times where all the web-pages were static. I mean by static that every time you clicked a link/picture, it had to redirect you
                to a new page for you to reach the content you are interested in. What React does is enable to write a webpage which it renders
                conditionally according to the interaction with the user. We all use facebook or instagram. When you press like or comment we exactly do that; interact with the content and the App that serves it. 
                And does this with your control (and algorithm!). Facebook, Instagram, Netflix, Uber, Reddit they all use React.
                Just imagine if they would work staticly. Every like, every click would have to reload the whole of the webpage for you (the code also need to change in the backend by something/someone). That would be very
                annoying! Not to mention all data would get sent over back and forth for you to consume. Not a good idea. This is React! When you press a like button
                basically just one thing going to be rerendered on the webpage. The little heart fills in red, the thumb goes up, the taxi is coming your way on the map. Beautiful isn't it?<span role="img" aria-label="smiley">😊</span> If you would like hear more about static/dynamic webpages <a href="https://www.youtube.com/watch?v=_wFJj94kSTU">click here</a>.</p>
            <p>If you would like read more about how this page was created, what hurdles I faced with <a href="https://www.youtube.com/watch?v=NhR88ZLCuFs&t=22s">click here</a>.</p>

        </div>
    );
};

export default About;
