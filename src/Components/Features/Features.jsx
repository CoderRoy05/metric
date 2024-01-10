import React, { useEffect } from 'react';
import { metric_two } from '../../imports';
import { metric_three } from '../../imports';

import Aos from 'aos';
import '/aos/aos.css';


function Features() {
    useEffect(()=> {
        Aos.init();
    }, [])

    
    return (
      <div>
        <div id="features" className="section">
      <div className="w-container">
            <h2>Sync Across All Devices</h2>
            <div className="section-subtitle">Everything you need to make your business grow <strong className="bold-text">super fast</strong>!</div>
            <div className="feature-row w-row">
                <div className="w-col w-col-6" data-aos="zoom-in">
                    <img
                        src={metric_two}
                        alt="metric-evolution" 
                    />
                </div>
                <div className="w-col w-col-6">
                    <div className="main-feature-group"><img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed3d464d7465_iconmonstr-laptop-2-icon.svg"
                            height="30" alt="" className="feature-icon" />
                        <h3>Web Application</h3>
                        <p>
                            Experience the transformative power of our web application, revolutionizing the way you interact with data and 
                            propelling your business towards unprecedented growth and success.
                        </p>
                    </div>
                </div>
            </div>
            <div className="feature-row w-row">
                <div className="w-col w-col-6">
                    <div className="main-feature-group">
                        <img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25edd11a4d747b_iconmonstr-download-13-icon.svg"
                            height="30" alt="" className="feature-icon"
                        />
                        <h3>Mobile App</h3>
                        <p>
                            Embrace the future of mobility with our cutting-edge mobile app, empowering you to stay connected, 
                            make informed decisions, and manage your business on the go.
                        </p>
                    </div>
                </div>
                <div className="w-col w-col-6" data-aos="zoom-in">
                    <img
                        src={metric_three}
                        alt="metric_evolution"
                    />
                </div>
            </div>
            <div className="small-features-row w-row">
                <div className="w-col w-col-3">
                    <div className="feature"><img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6db44d7473_iconmonstr-control-panel-icon.svg"
                            height="30" alt="" className="feature-icon" />
                        <h3>Dashboard</h3>
                        <p>
                            Unlock the full potential of your business with our intuitive and customizable dashboard, providing real-time insights and data 
                            visualization to drive informed decisions and fuel your growth.
                        </p>
                    </div>
                </div>
                <div className="w-col w-col-3">
                    <div className="feature">
                        <img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed67164d747f_iconmonstr-sitemap-7-icon.svg"
                            height="30" alt="" className="feature-icon" 
                        />
                        <h3>Custom Rules</h3>
                        <p>
                            Take full control of your business processes with our custom rules feature, allowing you to define personalized guidelines and automate actions, 
                            streamlining operations and boosting efficiency like never before. 
                        </p>
                    </div>
                </div>
                <div className="w-col w-col-3">
                    <div className="feature">
                        <img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed497e4d7467_iconmonstr-save-9-icon.svg"
                            height="30" alt="" className="feature-icon" 
                        />
                        <h3>Presets</h3>
                        <p>
                            Effortlessly optimize your workflow with our presets, pre-configured settings tailored to your specific needs, 
                            ensuring a seamless and efficient experience, from day one.
                        </p>
                    </div>
                </div>
                <div className="w-col w-col-3">
                    <div className="feature"><img
                            src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed6ef14d745f_iconmonstr-bar-chart-4-icon.svg"
                            height="30" alt="" className="feature-icon" />
                        <h3>Metrics</h3>
                        <p>
                            Gain valuable insights and measure your success with our comprehensive metrics suite, providing you with data-driven 
                            analysis to make informed decisions and drive your business forward.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
        </div>
    );
  }


export default Features;
