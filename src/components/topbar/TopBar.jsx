import "./TopBar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className={"top " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Stephen Kim</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+1 805 612 5444</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>sskim@ucsd.edu</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1" />
                        <span className="line2" />
                        <span className="line3" />
                    </div>
                </div>
            </div>
        </div>
    )
}