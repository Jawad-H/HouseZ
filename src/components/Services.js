import React from 'react'
import styled from 'styled-components';
import { BiCode } from "react-icons/bi";
import { BsBrushFill, BsFillBugFill } from "react-icons/bs";
import { FaBullhorn } from "react-icons/fa";
function Services() {

    return (
        <Wrapper className="services">
            <h1>Services</h1>
            <div className="service-container">
                <div className="box">
                    <div className="icon">
                        <i>
                            <BiCode />

                        </i>
                    </div>
                    <h3 className="title">Web Design</h3>
                    <p>
                        Nunc ac orci enim. Nam ac est ornare,
                        placerat tortor ultricies, tristique arcu.
                        Duis in blandit nulla.
                        Quisque fringilla consectetur consectetur.,
                    </p>
                    <a href="#" className="btn">readmore</a>
                </div>

                <div className="box">
                    <div className="icon">

                        <i>
                            <BsBrushFill />
                        </i>
                    </div>
                    <h3 className="title">Graphic Design</h3>
                    <p>Nunc ac orci enim. Nam ac est ornare,
                        placerat tortor ultricies, tristique arcu.
                        Duis in blandit nulla.
                        Quisque fringilla consectetur consectetur.,</p>
                    <a href="#" className="btn">readmore</a>
                </div>
                <div className="box">
                    <div className="icon">
                        <i><BsFillBugFill /></i>
                    </div>
                    <h3 className="title">API Testing</h3>
                    <p>
                        Nunc ac orci enim. Nam ac est ornare,
                        placerat tortor ultricies, tristique arcu.
                        Duis in blandit nulla.
                        Quisque fringilla consectetur consectetur.,
                    </p>
                    <a href="#" className="btn">readmore</a>
                </div>

                <div className="box">
                    <div className="icon">
                        <i><FaBullhorn /></i>
                    </div>
                    <h3 className="title">SEO and Marketing</h3>
                    <p>Nunc ac orci enim. Nam ac est ornare,
                        placerat tortor ultricies, tristique arcu.
                        Duis in blandit nulla.
                        Quisque fringilla consectetur consectetur.,</p>
                    <a href="#" className="btn">readmore</a>
                </div>



            </div>
        </Wrapper>
    )

}

const Wrapper = styled.section`
h1{
    Text-align: center;
    color: #010334;
    position: relative;
}




    background-color:#EFEFEF;
    padding-top:70px;
    padding-bottom:100px;
    border: 2px solid #EFEFEF;
    border-radius: 15px 50px 30px; 



.service-container {
  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    padding-top:100px;
    padding:20px;
    padding-top:70px;
   
}

.box {
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid lightgrey;
    text-align: center;
    transition: 0.5s;
}



.btn{
    background-color:black;
   color:white;
}

.box .icon i {
    margin: 10px 0;
    font-size: 35px;
    color: #010334;
}





.box .title {
    font-size: 20px;
}

.box p {
    font-size: 13px;
    padding: 10px;
}

.box a {
    text-decoration: none;
    display: block;
    padding: 10px 0;
    font-size: 17px;
    cursor: pointer;
}

.box:hover {
    box-shadow: 10px 10px lightblue;
}



/* Fade in the pseudo-element with the bigger shadow */
.box:hover::after {
    opacity: 1;
}




`
export default Services