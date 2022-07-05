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
                basically just one thing going to be rerendered on the webpage. The little heart fills in red, the thumb goes up, the taxi is coming your way on the map. Beautiful isn't it?<span role="img" aria-label="smiley">😊</span>
                If you would like hear more about static/dynamic webpages <a href="https://www.youtube.com/watch?v=_wFJj94kSTU">click here</a>.</p>
            <p>If you would like read more about how this page was created, what hurdles I faced with <a href="https://www.youtube.com/watch?v=NhR88ZLCuFs&t=22s">click here</a>.</p>



            <h4>Welcome to the dark side dear visitor!<span role="img" aria-label="dark">🦇</span></h4>
            <p>Just like I have done it before I do like to write down in-depth what challenges I needed to overcome to build this App.
                I think this is a good way to learn and also to keep track of my progress. Even if I face an issue in the future I know that
                I have done it or similar before and even if i don`t remember the solution right away I have something to reference  from my
                own experiences. I have a number of these files available for myself. It's really handy dandy!
                As I mentioned earlier the project started where my studies have finished. On Udemy we finished a basic React  App
                as an end result of our lecture, but I wasn't completely satisfied. Mainly because it only covered the very basics of React and
                what I found difficult to accept was that we never connected it to a backend and were able to host it anywhere. Here you can see the basic App and where it started from <a href="https://codesandbox.io/s/using-pre-built-react-components-completed-58bxk?fontsize=14&hidenavigation=1&theme=dark">click here</a>.</p>

            <a href="#useSnap">1. Backend - useEffect, onSnapshot </a> <br />
            <a href="#frontCap">2. Frontend - capital letters matter! </a> <br />
            <br />
            
            <strong id="useSnap">Backend - useEffect, onSnapshot </strong>
            <p>I watched a number of videos and tried to figure out what would be the best choice for this project as a backend.
                I previously used Mongo, which is great as it gives you a lot of freedom setting up your own rules and what data it accepts and works with etc,
                but as my main intention was to focus on React I ended up choosing Firebase/Firestore as i considered it more simple and also wanted to try something new.
                The documentation of Firebase is pretty solid and there are many tutorials available on the internet. Connecting the app to it actually was relatively simple.
                Node install firebase, set up firebase console, create a config file and there you go pretty much ready to go. Obviously there was a bit of teething pain here and there but can't grumble.
                The use of the useEffect hook was the only new thing here, which can be intimidating at first but it all makes sense. I actually watched a video on it, they might change the name as it can be confusing, as it's nothing to do with effect.
                It tells React to do something after render. In my case check the database on firestore and load it into my app. After render useEffect calls onSnapshot on the firestore database, take a snapshot of the document injecting it in the app and listen for changes in the future.
                Added a const called usersCollectionRef so later on I can refer to it rather than type it all out. It also makes the code more readable. Later on I had to add a query selector as I wanted to use the timestamps of the documents. I wanted to display all the notes in descending order. </p>

              
                    <br />
                
            <strong id="frontCap">Frontend - capital letters matter! </strong>
            <p>Previously I used Heroku a few times, but it made me feel laggy. Especially with the first load time of the page. Once you try to access it it will load relatively quickly for a while, but this just annoyed me. I don`t mean no harm as it may not be Heroku`s issue. My backend is fixed to amazon`s AWS / N. Virginia server via mongoDB so the delay might be that db is overseas which would totally make sense. But hey-hey it`s free so I`m thankful! Anyhow I decided to try something new, Netlify! Pretty straight forward, but again of course I had to figure out a few things before a successful deployment.I think the biggest learning curve here is: ~/desktop/auth ≠ ~/Desktop/auth. Your app may look and run fine but by cd-ing in the root of your project call npm start you gotta make sure you use the correct casing! To make a build of the project its not necessarily going to be fine. Those warnings about casings running your app in localhost will matter once you are trying to deploy on Netlify.. Luckily the deployment messages are pretty straight forward, but the casing issue took me a while to figure out. Desktop is not desktop.. da </p>
        </div>
    );
};

export default About;
