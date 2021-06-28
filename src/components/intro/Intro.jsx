import "./Intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            strings: [
                "Software Engineer",
                "Machine Learning Engineer",
                "Software Developer",
                "Full-Stack Developer",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="images/profile.jpeg" alt="Myself" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello, I'm</h2>
                    <h1>Stephen Kim</h1>
                    <h3>Aspiring <span ref={textRef} /></h3>
                </div>
            </div>
            <a className="next" href="#skills">
                <img src="assets/down.png" alt="arrowDown" />
            </a>
        </div>
    )
}