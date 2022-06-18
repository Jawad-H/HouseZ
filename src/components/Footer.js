import React from 'react'
import styled from "styled-components";
import { BsTwitter, BsInstagram, BsPinterest, BsFacebook } from 'react-icons/bs';

function footer() {
    return (

        <Wrapper className="footer">
            <div className="footer-container">
                <div className="footer-box">
                    <div className="logo">
                        <h5>HouseZ</h5>
                    </div>
                    <ul className="social-icons">
                        <li><a href=""><BsTwitter /></a></li>
                        <li><a href=""><BsInstagram /></a></li>
                        <li><a href=""><BsPinterest /></a></li>
                        <li><a href=""><BsFacebook /></a></li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h4>About us</h4>
                    <ul className="locations">
                        <li><a href="">About HOUSEZ</a></li>
                        <li><a href="">locations</a></li>
                        <li><a href="">Our team</a></li>
                    </ul>
                </div>



                <div className="footer-box">
                    <h4>Services</h4>
                    <ul className="services">
                        <li><a href="">Web Developer</a></li>
                        <li><a href="">Graphic Design</a></li>
                        <li><a href="">API Testing</a></li>
                        <li><a href="">SEO and Marketing</a></li>
                    </ul>
                </div>
            </div>

            <p>©Developed by Jawad</p>

        </Wrapper>
    )
}



const Wrapper = styled.section`
   background-color: rgb(225, 226, 232);
    padding-top:70px;
    padding-bottom:30px;
p{
    text-align:center;
    font-size:12px;
    color :#717677;
}

.footer-container {
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  padding-top:100px;
  padding:20px;
  padding-top:70px;
 
}
.footer-box {
   background-color: rgb(225, 226, 232);
    padding: 20px;
    text-align: center;
}

.logo {
    color: #010334;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 22px;
    border-style:solid;
    border-radius:1px;
    padding:2px;
    text-align:center;
    width:90%;
}

h4{
    color: #717677;
    font-size:15px;
    padding:5px;
}
.social-icons{
    display:flex;
    margin-top:40px;
}
.social-icons li{
    font-size:25px;
   padding-right:70px;
}
.social-icons li a:hover{
    color:rgb(56, 103, 251);
 
}
.social-icons li a{
   text-decoration:none;
   color: #010334
}


ul li a{
    text-decoration:none;
    color:#010334;
    font-weight:bold;
   
}

ul li a:hover{
   color  :rgb(56, 103, 251); 
}
ul li{
    list-style:none;
    font-size:14px;
    padding-top:10px;
}
`;
export default footer