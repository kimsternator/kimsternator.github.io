import "./Contact.scss"
import { useState, useEffect } from 'react'
import { init, sendForm } from 'emailjs-com';
init("user_1VWPu4hp6tr9o4m0KmntB");

export default function Contact() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(e.target.email.value);
        setMessage(e.target.message.value);
        sendForm('service_qc5wvpb', 'template_abaduol', e.target,'user_1VWPu4hp6tr9o4m0KmntB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    useEffect(() => {
        if (email !== "" && message !== "") {
            console.log("email " + email);
            console.log("message " + message);
        }
    }, [email, message]);

    return (
        <div className="contact" id="contact">
            <div className="center">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email" required={true} />
                    <textarea placeholder="Message" name="message" required={true} />
                    <button type="submit">Send</button>
                    {email && message && <span>Thanks, I will reply ASAP :D</span>}
                </form>
            </div>
            <a className="next" href="#intro">
                <img src="assets/down.png" alt="arrowDown" />
            </a>
        </div>
    )
}