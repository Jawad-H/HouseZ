import React from 'react'
import styled from "styled-components";

function Contactus() {
    return (

        <Wrapper className="form">
            <h1>Contact us</h1>
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea rows="4" cols="45"></textarea>
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
h1{
    Text-align: center;
    color: #010334;
margin-bottom:50px;
}


    background-color:#EFEFEF;
    padding-top:70px;
    padding-bottom:100px;
    border: 2px solid #EFEFEF;
    border-radius: 15px 50px 30px; 

.form-container{
    display:flex;
    justify-content:center;
    align-items:center;
}

.form-group{
    padding:10px;
}

input{
    padding:10px;
    width:300px;
    border:none;
}

textarea{
    border:none;
}


.btn{
    margin-top:10px;
    background-color:black;
    color:white;
    width:100px;
    height:50px;
    cursor:pointer;
    font-size:14px;
    margin-left:10px;
}

`;
export default Contactus