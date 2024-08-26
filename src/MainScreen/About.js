import './MainScreen.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

function About() {

    return (
        <div>
            <h3 id="titleHeader" className="titleHeader">Welcome to Cab Booking</h3>
                <p>Our cab booking app is designed to provide users with a seamless and convenient way to book rides. Whether you're commuting to work, heading to an appointment, or planning a night out, our app ensures that you can get a reliable ride quickly and easily.</p>
                <div id="rightContent" className="rightContent">
        
                    <img src="/car.png" alt="Description of the image" className="imageClass" />
                        
            </div>
            {/* <div>
                <title>About</title>
            </div>
            <div id="sideMenu" className="sidebar">
                <a href="#home"> About</a>
                <a href="#login"> Login</a>
                <a href="#register"> Register</a>
            </div>
            
            <div id="mainContent" className="maincontent">
                <h3 id="titleHeader" className="titleHeader">Welcome to Cab Booking</h3>
                <p>Our cab booking app is designed to provide users with a seamless and convenient way to book rides. Whether you're commuting to work, heading to an appointment, or planning a night out, our app ensures that you can get a reliable ride quickly and easily.</p>
                <div id="rightContent" className="rightContent">
        
                    <img src="/car.png" alt="Description of the image" className="imageClass" />
                        
                </div>
            </div> */}
            
        </div>
    )
}

export default About;