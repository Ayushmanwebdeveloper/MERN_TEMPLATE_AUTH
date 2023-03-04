import React from 'react';
import './LandingPage.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
function LandingPage() {
  return (
    <div className='home'>
      <h1 className='first'>Welcome to MERN template created by <a href='https://www.linkedin.com/in/ayushmantripathi7724/'>Ayushman</a></h1>
      <h3>This MERN (MongoDB, Express, React, Node.js)Template includes <span class='red'>Authentication</span></h3>
      <p>It includes the following:</p>
      <ul class='inc'>
        <li>React for building the front-end user interface</li>
        <li>Express for building the back-end API</li>
        <li>MongoDB for storing data</li>
        <li>Auth & Bootstrap</li>
        <li>AWS will be added soon</li>
        <li>Follow me on <a href='https://www.linkedin.com/in/ayushmantripathi7724/'>LinkedIn</a></li>
      </ul>
      <h1 className='first'>Clone/Download this template from here-{'>'}<Link href="https://github.com/Ayushmanwebdeveloper/MERN_TEMPLATE_AUTH" underline="none">
<GitHubIcon sx={{fontSize:50,color:'black' }}/>
</Link></h1>
    </div>
  );
}

export default LandingPage;
