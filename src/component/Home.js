import React from 'react';
import '../stylesheet/Home.css';
import founder from '../images/founder.jpg';
import team from '../images/team.jpg';


function Home() {
  return (
    <div className="home">
        <div className="Home1">
            <div className="subHome1">
                <h1 className="Home1_title">Team CodeHelp</h1>
                <div className="Home1_line"></div>
                <p className="Home1_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Cumque repellendus perspiciatis officia in officiis. Voluptates assumenda commodi deserunt, 
                  asperiores vitae quos fugit earum distinctio laborum rem saepe facere voluptatibus numquam.
                  <br/><br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus pyior.
                </p>
            </div>
            <div className="subHome1_img">
                <img src={team} className='desktop_team'/>
                <img src={team} className='mobile_team'/>
            </div>
        </div>
        
        <div class="Home2">
          <div class="subHome2_img">
              <img src={founder} class='desktop_founder'/>
              <img src={founder} class='mobile_founder'/>
          </div>
          <div class="subHome2">
              <h2 class="Home2_title">Founder, CEO</h2>
              <div class="Home2_line"></div>
              <p class="Home2_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cumque repellendus perspiciatis officia in officiis. Voluptates assumenda commodi deserunt, asperiores
              <br/><br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus perspiciatis officia in officiis. Voluptates assumenda commodi deserunt, asperiores.
              </p>
          </div>
        </div>
    </div>
  )
}

export default Home;