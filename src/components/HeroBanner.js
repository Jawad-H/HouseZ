import React from 'react'
import styled from 'styled-components';
import pic from './Company.png';

function HeroBanner() {
    return (
        <Wrapper className="header">
            <div className="header-box">
                <div className="header-left">
                    <h1>We provide Better quality of service</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc ac orci enim. Nam ac est ornare, placerat tortor ultricies,
                        tristique arcu. Duis in blandit nulla.
                        Quisque fringilla consectetur consectetur
                    </p>
                    <button className="btn">Readmore</button>
                </div>

                <div className="header-right">
                    <img src={pic} className="bannerImage" alt="banner" />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`


.header-box {
    ${'' /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
     */}
display:flex;
justify-content:center;
align-items:center;
padding:100px;

}


.btn{
    margin-top:5px;
    background-color:black;
    color:white;
    width:100px;
    height:50px;
    cursor:pointer;
    font-size:14px;
}
.header-left h1{
    font-weight:900;
    font-size:30px;
    color:#010334;
}

.header-left p{
    font-size:17px;
    color:#010334;
}

.header-right {
    width:80%;
}
.bannerImage{
    width:100%;
object-fit:contain;

}



@media screen and (max-width:768px){
    .header-right {
display:none;
    }
}


`


export default HeroBanner