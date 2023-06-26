import React from 'react';

import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer container-fluid'>
        <footer className=" row">
            <div className='col-md-3 team my-auto'>
                <h1>Team V20</h1>
            </div>

            <div className='col-md-3 col-sm-2 developers'>
                <h4><u>Developers</u></h4>
                <ul>
                    <li>Gokulnath</li>
                    <li>Poovarasan</li>
                    <li>Sudhankumar</li>
                    <li>Aryan</li>
                </ul>
            </div>

            <div className='col-md-3 col-sm-2 features'>
                <h4><u>Features</u></h4>
                <ul>
                    <li>cool stuff</li>
                    <li>Random feature</li>
                    <li>Team feature</li>
                </ul>
            </div>

            <div className='col-md-3 socialmedia'>
                <h4 className='mb-4'><u>Connect</u></h4>
                <i class="fa-solid fa-envelope fa-2xl" style={{color: '#ffffff'}} ></i>
                <i class="fa-brands fa-facebook fa-2xl" style={{color: '#ffffff'}} ></i>
                <i class="fa-brands fa-twitter fa-2xl" style={{color: '#ffffff'}} ></i>
                <i class="fa-brands fa-instagram fa-2xl" style={{color: '#ffffff'}} ></i>
                <i class="fa-brands fa-youtube fa-2xl" style={{color: '#ffffff'}}></i>
            </div>
        </footer>
    </div>
  )
}

export default Footer