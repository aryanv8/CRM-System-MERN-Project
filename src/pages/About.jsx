import React, { Component } from 'react';
import pic from "../images/About_page.png";
import "../styles/About.css";
function About(){
    return(
        <div class="container-fluid">
            <br/>
            <div class="row">
                <div class="col-12">
            <img class="img2" src={pic} alt="crm" /></div></div>
            <div className='about-container'>
                <h3>CRM Best services</h3><br/>
                <p>A customer relationship management (CRM) solution helps you find new customers, 
                    win their business, and keep them happy by organizing customer and prospect information 
                    in a way that helps you build stronger relationships with them and grow your business faster.
                </p><br/><br/>
                <h3>This information is comes true after our crm system exist to the market.</h3><br/>
                <p>V20 CRM System maintain good customer relationship over the world.</p>
                <p>V20 CRM system holds the top 10 rank in india Analysing by zoho Ranking 2023.</p>
                <p>V20 CRM empowers a global network of over 50,000 businesses 
                    in 5 countries to convert more leads, engage with customers, and grow their revenue.</p><br/>
            </div>
        </div>
    );

}

export default About;