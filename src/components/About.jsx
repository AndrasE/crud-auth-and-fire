import React, { useState } from "react";
import Gist from "react-gist";

const About = () => {

    const [display, setDisplay] = useState(false)



    return (
        <div className="about-div">

            <h4>Hi there<span role="img" aria-label="wave"> 👋</span></h4>

            <h6>Welcome to the "about" section!</h6>
            <br />

            <p>I created this web-App after I finished a class on Udemy where we built a pretty basic React-App.
                I`m here to tell you that React is amazing! </p>
            <p>It enables users to interact with the webpages/Apps. If you are old enough you must remember the
                times where all the web-pages were static. I mean by static that every time you clicked a link/picture, it had to redirect you
                to a new page for you to reach the content you are interested in. What React does is enable to write a webpage which renders
                conditionally according to the interaction with the user. We all use facebook or instagram. When you press like or comment we exactly do that; interact with the content and the App that serves it.
                And does this with your control (and algorithm!). Facebook, Instagram, Netflix, Uber, Reddit they all use React.
                Just imagine if they would work statically. Every like, every click would have to reload the whole of the webpage for you (the code also needs to be changed in the backend by something/someone). That would be very
                annoying! Not to mention all data would get sent over back and forth for you to consume. Not a good idea. This is React! When you press a like button
                basically just one thing going to be rerendered on the webpage. The little heart fills in red, the thumb goes up, the taxi is coming your way on the map. Beautiful isn't it? :) 
                If you would like hear more about static/dynamic webpages <a href="https://www.youtube.com/watch?v=_wFJj94kSTU">click here</a>.</p>
            <p>If you would like read more about how this page was created, what hurdles I faced with click on "read more".<span role="img" aria-label="down"> ➡</span></p>
            <img  id="welcome" className="cat" src="cat.gif" alt="cat" />        <br />
            <a href="#welcome" className="read" onClick={() => setDisplay(true) }>- - read more - -</a>
           
           
            {display === true ?
                
                <div>
                <br />
                    <h4>Welcome to the dark side dear visitor!<span role="img" aria-label="dark"> 🦇</span></h4>
                    <p>Just like I have done it in the past I do like to write down in-depth what challenges I needed to overcome to build this App.
                        I think this is a good way to learn and also to keep track of my progress. Even if I face an issue in the future I know that
                        I have done it or similar before and even if I don`t remember the solution right away I have something to reference from my
                        own experiences. I have a number of these files available for myself. It's really handy dandy!
                        As I mentioned earlier the project has started where my studies have finished. On Udemy we created a basic React App
                        as an end result of our lecture, but I wasn't completely satisfied. Mainly because it only covered the very basics of React and
                        what I found difficult to accept was that we never connected it to a backend and/or were able to host it anywhere. Here
                        you can see the basic App and where it started from <a href="https://codesandbox.io/s/using-pre-built-react-components-completed-58bxk?fontsize=14&hidenavigation=1&theme=dark">click here</a>.</p>
                    
                    <div className="ref">
                        <strong>Subjects  </strong> <hr /> <br/>
                        <a href="#useSnap">1. Backend - useEffect, onSnapshot </a> <br />
                        <a href="#frontCap">2. Frontend - capital letters matter </a> <br />
                        <a href="#props">3. Properties - it`s drilling </a> <br />
                        <a href="#update">4. Update - that pops </a> <br />
                        <a href="#forms">5. Forms - validation </a> <br />
                        <a href="#env">6. Hiding keys - .env </a> <br />
                        <a href="#auth">7. Authentication - context api & protected routes </a> <br />
                        <a href="#otp">8. Authentication - recaptcha & otp </a> <br />
                        <a href="#nav">9. Navbar - with avatar </a> <br />
                        <a href="#epi">X. Epilogue - byee </a> <br />
                    </div>
                    <br />

                    <strong id="useSnap">Backend - useEffect, onSnapshot </strong>
                    <p>I watched a number of videos trying to figure out what would be the best choice for this project as a backend.
                        I previously used mongoDB, which is great as it gives you a lot of freedom setting up your own rules and what data it accepts and works with etc,
                        but as my main intention was to focus on React I ended up choosing Firebase/Firestore as I considered it more simple and also wanted to try something new.
                        The documentation of Firebase is pretty solid and there are many tutorials available on the internet. Connecting the App to it actually was relatively simple.
                        Npm install firebase, set up firebase console, create a config file and there you go pretty much ready to go. Obviously there was a bit of teething pain here and there but can't grumble.
                        The use of the useEffect hook was the only new thing here, which can be intimidating at first but it all makes sense. I actually watched a <a href="https://www.youtube.com/watch?v=HPoC-k7Rxwo&t=699s">video on it</a>, so
                        the use might change a little in the near future, but the main takeaway here it's nothing to do with effect.
                        It tells React to do something after render. In my case check the database on firestore and load it into my App. After render useEffect calls onSnapshot on the firestore database, take a snapshot of the document injecting it in the App and listen for changes in the future.
                        Added a const called usersCollectionRef so later on I can refer to it rather than type it all out. It also makes the code more readable. Later on I had to add a query selector as I wanted to use the timestamps of the documents. I wanted to display all the notes in descending order.</p>
                    <Gist id='c900607ae7700b25f510c43ba63b7a0b' file='firebase' /> <br />

                    <strong id="frontCap">Frontend - capital letters matter </strong>
                    <p>Previously I used Heroku a few times, but it made me feel laggy. Especially with the first load time of the page.
                        Once you try to access it it will load relatively quickly for a while, but this just annoyed me. I don`t mean no harm
                        as it may not be Heroku`s issue. My backend is fixed to amazon`s AWS / N. Virginia server via mongoDB so the delay
                        might be that db is overseas which would totally make sense. But hey-hey, it`s free so I`m thankful! Anyhow I decided
                        to try something new, Netlify! Pretty straight forward, but again of course I had to figure out a few things before
                        a successful deployment. I think the biggest learning curve here is: ~/desktop/auth ≠ ~/Desktop/auth. Your App may look
                        and run fine by using the terminal and cd-ing in the root of your project calling npm start, but you gotta make sure
                        you use the correct casing! To make a build of the project it's not necessarily going to be fine. Those warnings about casings running your App in
                        localhost will matter once you are trying to deploy on Netlify. Luckily the deployment messages are pretty straight
                        forward, but the casing issue took me a while to figure out. Desktop is not desktop.. da! </p>

                    <strong id="props">Propeties - it`s drilling </strong>
                    <p>If you are new to React props are arguments passed into React components. If you have a look on this App the individual note components,
                        they have only been written once. It means that the App by using  properties will allocate you the fields with the specified data you want. This reduces the amount of repetition in the code.
                        This is also one of the best features of React! Just imagine if you go on any website that has some standardized look if
                        the person would need to write all the codes again and again and only need to change the content but not the code. This is also the reason that
                        React is brilliant in this, let you to split the UI into independent and reusable pieces.
                    </p>
                    <p>Properties can be passed from parent to child elements (usually!). In this case App to the Note components. There is way to do backwards as well,
                        but it's by calling a function in the parent element by the child. Now it can get confusing after some time. If you have and App
                        which has multi level components, tracing what has been passed where after a while can get real messy real quick. This is called props-drilling. Passing properties
                        from parent to child to child to child and wait for the magic to happen (if ever will). I will come back to this subject in a bit.
                        This App has more levels and more components but as a demonstration I simplified it to it`s core. As you can see, even the base of the App and it is already getting a bit of a meh!  </p>
                    <img className="demo" src="demo.png" alt="demo" />
                    <p></p>

                    <strong id="update">Update - that pops</strong> <br />
                    <p> I never thought about it much before the project, but as soon as I started writing I realized that updating
                        a document requires a few extra steps compared to creating and deleting documents. We need to know what to update
                        at which document. We also will need to display these steps.
                        I watched a few videos online and I ended up finding <a href="https://youtu.be/i8fAO_zyFAM" >this video</a> which I
                        liked and implemented my own way. I wanted a PopUp screen with an Update component nested inside while the
                        content around it would blur out. I tried a few variations but the look never really translated, always felt a bit
                        odd, so I ended up ditching the idea. I left the PopUp in the code, but realistically it wasn`t really necessary
                        after all, it is just a conditional rendering. If the button gets clicked don't display this, but display
                        this. Funnily enough the "About" section you are reading right now works just the same way. You clicked, so the
                        display state of most of the Home components is set to false, while the About component is set to be true. Both present
                        at the same time, but not all gets displayed. Looking back on the picture and props-drilling I mentioned above, the
                        update function took me a while to figure out. I needed a Note component to send me back the ID of the note to the
                        App where it could search and find it in the database, saving it temporarily in a state, which gets passed as props
                        to the Update component (hosted in a PopUp component) to render the old values as placeholders. When you fill out
                        the fields with the new inputs, it gets sent back to the App with the new values and the original ID of the document,
                        where the App will call a function that will look up the document by the ID and update it to the new fields. UseEffect
                        will do its  job and update what's changed. Although it is not as complicated as it looks and sounds, it's clear to see why I
                        thought it worth mentioning props-drilling. Few more layers and components and it can get hard to follow.
                    </p>

                    <strong id="forms">Forms - validation </strong>
                    <p>There are a number of forms on this page. Create/Update components and even the PhoneSignUp component as well.
                        I wanted to implement a basic form validation so users won`t be able to create or update to empty or stupidly long
                        notes. First I started to write it myself, if the value of this input element equals to nothing or this and that,
                        set the state of the error message to "don`t be like this" and prevent it from being sent off while with conditional
                        rendering via React Bootstrap the error message gets displayed. It all works fine, but to make it more broad we need to
                        set a lot of different error message states. You could use a node package which helps after all we don't need to
                        reinvent the wheel for this. And that's what I did with the PhoneSignUp component.
                        Installed a packadge called <a href="https://www.npmjs.com/package/react-phone-number-input">react-phone-number-input</a>.
                        It's very versatile. Responsable checking the phone numbers, setting error messages and displaying flags
                        with country-codes and also pretty modular. The difference between controlled and uncontrolled forms are also
                        worth checking out to make sure the correct use of forms otherwise as you might end up with errors in
                        the console. <a href="https://stackoverflow.com/questions/42522515/what-are-react-controlled-components-and-uncontrolled-components">Here!</a>
                    </p>
                    <Gist id='09d4a1edb1eb3cb2964e0a4f193da9bc' file='update form validation' /> <br />
                    <Gist id='28f0060d66f224f8342d3e8cb9c632a4' file='phone-signup form validation' /> <br />

                    <strong id="env">Hiding keys - .env </strong>
                    <p>To connect to the backend we need to use some private api keys which just like a password we wouldn't
                        like to air it out online. Previously I used a dotenv package, but React pretty much takes care of this without
                        an external package. What happens you have a configuration file for firebase and instead of writing my password
                        is 123XYZ you write the password is process.env.REACT_APP_MYPASSWORD and in a separate .env file you specify it
                        REACT_APP_MYPASSWORD=123XYZ. When the App is ready to be build and deployed your password won`t be included,
                        therefore not accessible. On the frontend where you deployed it, you have to specify the .env parameters but it
                        won't be included in the build and need a request to be sent by the user to use it in order to authenticate on the
                        backend with Firebase. Although it is simple as it is, I had a good few hours spent on this as some reason my
                        api keys returned undefined. Noone could actually log-in to the App until this got fixed up.
                        I tried many different things and I actually ended up recreating the problem in small to make it more
                        clear. What actually indeed fixed my
                        problem is completely deleting the .env file, creating a new one. Although the contents just got copy/pasted into so theoretically
                        it should have worked as the original file bit it actually turned out to be the fix! I could not yet recreate this issue or find
                        out how it happened. I googled it many times, tried to recreate it, but nada! I must have had a
                        typo somewhere!! Anyways, <a href="https://codesandbox.io/s/env-working-46rofq">here is</a> a simple sandbox to
                        understand how .env works.
                    </p>

                    <strong id="auth">Authentication - context api & protected routes </strong>
                    <p> It`s a biiiig topic but will try to keep it short. I wanted to add authentication to the project as without it I
                        wouldn't feel it complete. In this App the content of the Home is protected at both ends. In the Firebase console
                        (backend) the rule is set out that if the user is not authenticated they can't read/update/delete database.
                        That`s nice and all you can`t modify, but you still would be able to see all Create and Update components without
                        the Notes. Although it's safe in the back I wanted the user to be prevented from actually reaching the
                        /Home route. This is why the App uses protected routes. As soon as you land on the Login page an object gets
                        created as such: <br />
                        const USER = &#123; name: "Guest", isGuestUser: true &#125; <br />
                        If you login in the object gets updated to: <br />
                        const USER = &#123; name: "Andras", isGuestUser: false &#125; <br /> Without this update as soon as you are trying to access the Home
                        route you get redirected to the Login page.
                        By using <a href="https://reactjs.org/docs/context.html">React Context API</a>  we can pass data through the component three without using properties (It`s not a drill!).
                        I tried to combine a few files in this gist below to make it more clear, I hope it does.
                    </p>
                    <Gist id='a2bc7c52e466c038c51dfaac7d1ec3e8' file='auth-simplified' /> <br />

                    <strong id="otp">Authentication - recaptcha & otp </strong>
                    <p>I saw in firebase console that it provides quite a few authentication methods including by phone. It right away intrigued me as I`ve`
                        used facebook, google and email/password authentication before, but never with phone. The search has begun, watched a number of tutorials and
                        found this awesome fella. It took me for a while to make it happen, but I did! I was so happy, once I received an OTP (one time password) on my
                        phone. I mean it`s not rocket-science, but at the same time it was a bit difficult for me to set it up correctly as if the recaptcha was not working
                        properly it just won`t work. It makes sense though! It needs to prevent attacks and eliminate the not real users. Without, a bot could
                        make firebase send x-amount of texts for "fun" random numbers and charge a fee to the administrator.
                        Anyhow here is <a href="https://firebase.google.com/docs/auth/web/phone-auth?authuser=0&hl=en">the documentation</a> for it.
                    </p>

                    <strong id="nav">Navbar - with avatar </strong>
                    <p> I wanted to create a Navbar that indicates if the user logged or not and also displays some details about the user.
                        I found <a href="https://youtu.be/vDT7EnUpEoo">this video</a> really helpful. All the sign-in methods are populated in the context file and get
                        exported to wherever it`s needed them. During the sign-in I can capture a few details from the user in an object. I wanted the name
                        and the profile-pics to be included in the Navbar. Once they are captured, they get imported in the Header component where it gets used
                        to display them to the user. Here is a gist to make it easier to understand.
                    </p>
                    <Gist id='61c0f100a90ed8086f1ccdf80bdfefa4' file='avatar' />

                    <strong id="epi">Epilogue - byee </strong>
                    <p>

                    </p>
                    <br />
                </div>
                :
                null
            }

        </div>
    );
};

export default About;
