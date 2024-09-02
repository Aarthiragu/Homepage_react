import './Header.css';
export function Top(){
    return(
        <div className="Container">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Contact</li>

                </ul>
            </nav>
    
        </div>

    )
}
export function Body(){
    return(
        <div className="Content">
            <h1>Welcome to the website</h1>
            <p>This is to give u peaceful mind</p>
        </div>

    )
}
export function Footer(){
    return(
        <div className="Foot">
            <ul>
            <li>Happy Journey</li>
            <li>aarthihariniraja@gmail.com</li>
            <li>Privacy policy</li>
            </ul>
        </div>
    )
}