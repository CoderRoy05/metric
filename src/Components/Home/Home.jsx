import React, { useEffect } from 'react';
import { metric_one } from '../../imports';

import Aos from 'aos';
import '/dist/aos.css';


function Home() {
    useEffect(()=> {
        Aos.init();
    }, [])

    

    return (
      <div>
      <div id="top" className="section main">
        <div className="w-container">
            <div className="w-row">
                <div className="w-col w-col-6">
                    <h1 className="main-heading" id="home">Grow Your Business 10x with Metric</h1>
                    <p className="main-subtitle">
                        The Metric Dashboard brings all of your business insights under one roof.
                        Revenue metrics, social, integrations - everything.
                    </p>
                    <a href="#foot" className="button" id='b_size'>Sign Up</a>
                    <a href="#features" className="button hollow">Learn More</a>
                </div>
                <div className="w-col w-col-6" data-aos="zoom-out-down">
                    <img
                      src={metric_one}
                      alt="Description of the image"
                      className="main-image"
                    />
                </div>

            </div>
        </div>
      </div>
      <div className="section press">
      <div className="w-container">
            <div className="small-text" >IN THE PRESS</div>
            <div className="div-block"><img
                    src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed80684d7486_logo_Fastcompany.svg"
                    width="70" alt="" className="logo" /><img
                    src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed0a224d7479_logo_Forbes.svg"
                    width="70" alt="" className="logo" /><img
                    src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edeb824d7462_logo_techcrunch.svg"
                    width="70" alt="" className="logo" /><img
                    src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed2e5b4d7471_logo_Wired.svg"
                    width="70" alt="" className="logo" /><img
                    src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed57864d7476_logo_zdnet.svg"
                    width="70" alt="" className="logo" />
            </div>
        </div>
      </div>
      </div>
    );
}

export default Home;
