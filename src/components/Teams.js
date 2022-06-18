import React from 'react'
import styled from 'styled-components';
function Teams() {
    return (
        <Wrapper className="Teams">
            <h1>Meet Our Team</h1>
            <div className="team-container">
                <div className="box">
                    <div className="profile">
                        <img src="https://images.unsplash.com/photo-1455274111113-575d080ce8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
                    </div>
                    <h3>John Smith</h3>
                    <p>Developer</p>
                </div>

                <div className="box">
                    <div className="profile">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    </div>
                    <h3>John legend</h3>
                    <p>Tester</p>
                </div>


                <div className="box">
                    <div className="profile">
                        <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    </div>
                    <h3>Elix</h3>
                    <p>Designer</p>
                </div>

                <div className="box">
                    <div className="profile">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    </div>
                    <h3>Elix</h3>
                    <p>Designer</p>
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

.team-container {
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  padding-top:100px;
  padding:20px;
  padding-top:70px;
 
}

.box {
    padding: 20px;
    background-color: white;
    text-align: center;
    transition: 0.5s;
}

.profile img {
width:150px;
height:200px;
    border-radius:50%;
}

`
export default Teams