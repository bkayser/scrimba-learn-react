import { ReactComponent as HalfLogo } from "./react-biglogo.svg";

export default function Main() {
    return (
        <main>
            <h1 className='main--title'>Fun Facts About React</h1>
            <ul className='main--highlights'>
                <li>Took over from Angular because Angular Sucked</li>
                <li>Unnecessarily convoluted.</li>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <HalfLogo id='halflogo'/>
        </main>
    )
}