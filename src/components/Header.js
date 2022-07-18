import { React, useState, useEffect } from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import styled from 'styled-components';
function Header() {
    const [active, setActive] = useState(false);
    const handleResize = () => {
        if (window.innerWidth > 720) {
            setActive(false)
        } else {
            setActive(true);
        }
    }
    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    });

    return (
        <Wrapper className="navbar">
            {/* Header navbar */}
            <nav>
                <div className="logo">
                    <h4>HouseZ</h4>
                </div>
                <ul className={`${active ? 'nav-active' : 'nav-links'}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul className="social-icons">
                    <li><BsTwitter /></li>
                    <li><BsInstagram /></li>
                </ul>
                <div className="burger" onClick={() => setActive(!active)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </Wrapper>
    )
}


const Wrapper = styled.section`
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

nav {
   
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    font-family: 'Poppins', sans-serif;
    ${'' /* font-family: 'Roboto', sans-serif; */}
}

.logo {
    color: #010334;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 22px;
    border-style:solid;
    border-radius:1px;
    padding:2px;
}

.nav-links {
    display: flex;
    justify-content: space-around;
    width: 30%;
    
}

.nav-links li {
    list-style: none;
}

.nav-links li a {
    color: #010334;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
    position: relative;
}

.nav-links li a:hover {
 color: rgb(56, 103, 251);
}



.burger {
    display: none;
    cursor: pointer;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color:#010334;;
    margin: 5px;
}

.social-icons{
    display:flex;
}
.social-icons li{
    padding:10px;
}


.social-icons li:hover{
color: #3867FB;
cursor: pointer;
}
@media screen and (max-width:1024px) {
    .nav-links {
        width: 60%;
    }
}


@media screen and (max-width:768px) {
   
.social-icons{
    display:none;
}
    .nav-links {
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 8vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        gap:10px;
        transform: translateX(100%);
        transition: transform 0.5s ease-out;

    }

    .nav-links li {
        opacity: 0;
    }

    .burger {
        display: block;
    }

}


.nav-active {
    z-index:99;
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 8vh;
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
        transition: transform 0.5s ease-out;
        transform: translateX(0%);
}

.nav-active li a {
    color: black;
    text-decoration: none;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 14px;
}

.nav-active li a:hover {
  color:rgb(56, 103, 251);
}

.nav-active li{
    margin-top:20px;
}





`;



export default Header;