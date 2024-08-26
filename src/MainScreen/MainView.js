import { useState } from 'react';
import './MainScreen.css';
import About from './About';
import Registration from './Registration';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

// import Registration from './Registration';


function MainView() {
    
    const [selectedMenu, setSelectedMenu] = useState('home');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    console.log("selectedMenu " + selectedMenu)

    const renderContent = () => {
      switch(selectedMenu) {
        case "home":
            console.log("Selected Menu is " + selectedMenu);
             return <About/>;

        case 'registration':
            return <Registration />;
        default:
            return null;

      }
    }

    return (
        <div>
            <div>
                <title>About</title>
            </div>
            <div id="sideMenu" className="sidebar">
                <a href="#home" onClick={() => handleMenuClick('home')}> About</a>
                <a href="#login" onClick={() => handleMenuClick('login')}> Login</a>
                <a href="#register" onClick={() => handleMenuClick('registration')}> Register</a>
            </div>
            
            <div id="mainContent" className="maincontent">
                {renderContent()}
                {/* <h3 id="titleHeader" className="titleHeader">Welcome to Cab Booking</h3>
                <p>Our cab booking app is designed to provide users with a seamless and convenient way to book rides. Whether you're commuting to work, heading to an appointment, or planning a night out, our app ensures that you can get a reliable ride quickly and easily.</p>
                <div id="rightContent" className="rightContent">
        
                    <img src="/car.png" alt="Description of the image" className="imageClass" />
                        
                </div> */}
            </div>
            
        </div>
    )
}

export default MainView;