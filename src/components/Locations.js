import React from 'react'
import styled from 'styled-components';
function Locations() {
    return (

        <Wrapper className="locaions">
            <h1>Our Locations</h1>
            <div className="location-container">
                <div className="box">
                    <img src="https://cdn.pixabay.com/photo/2017/04/23/15/53/london-2254133_960_720.jpg" />
                    <div className="layer">
                        <h3>LONDON</h3>
                    </div>
                </div>
                <div className="box">
                    <img src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <div className="layer">
                        <h3>NEW YORK</h3>
                    </div>
                </div>
                <div className="box">
                    <img src="https://images.unsplash.com/photo-1545853332-147d5073187e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    <div className="layer">
                        <h3>WASHINGTON</h3>
                    </div>
                </div>
            </div>
        </Wrapper>



    )
}


const Wrapper = styled.section`

h1{
    Text-align: center;
    color: #010334;
}


    padding-top:70px;
    padding-bottom:100px;



.location-container{
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  padding-top:100px;
  padding:20px;
  padding-top:70px;
  margin: auto;
 
}

.box {
    background-color: white;
    text-align: center;
    transition: 0.5s;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 30px;
   
}

.box img {
    width: 100%;
    display: block;
}

.layer {
    background: transparent;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.5s;
}

.layer:hover {
    background: #EFEFEF;
}

.layer h3 {
    width: 100%;
    font-weight: 900;
    color: #010334;
    font-size: 26px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    opacity: 0;
    transition: 0.5s;
}

.layer:hover h3 {
    bottom: 49%;
    opacity: 1
}


`
export default Locations