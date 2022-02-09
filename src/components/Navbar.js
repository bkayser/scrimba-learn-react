import { ReactComponent as Icon } from "./reactjs-icon.svg";

export default function Navbar() {
    return (
        <nav>
            <Icon className="react-icon" />
            <div id='logo-text'>ReactFacts</div>
            <div id='header-title'>React Course - Project 1</div>
        </nav>
    )
}