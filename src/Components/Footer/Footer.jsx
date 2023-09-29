import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a message body with the email data
    const body = `email: ${email}`;

    try {
      // Use the Email.send method to send the email
      await Email.send({
        SecureToken: "1f0db6b4-3c5b-4caa-b10a-7fb6e72c76b8",
        To: 'royalalawode@gmail.com',
        From: "royalalawode@gmail.com",
        Subject: "Subscription request- MetricX",
        Body: body
      });

      // Email sent successfully
      setMessage('Email sent! Thank you for subscribing.');
      setEmail(''); // Clear the input field
    } catch (error) {
      // Handle errors if needed
      console.error('Error:', error);
      setMessage('Oops! Something went wrong while subscribing.');
    }
  };

  return (
    <div>
        <div className="section footer">
        <div className="w-container">
            <div className="w-row">
                <div className="w-col w-col-6">
                    <div className="logo-text footer">Metric</div>
                    <div className="footer-slogan">Sign up for our newsletter</div>
                    <div className="newsletter-form w-form">
                            <form
                              className="w-clearfix" 
                              onSubmit={handleSubmit}
                            >
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                maxLength="256"
                                required
                                className="newsletter-field w-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                              <input
                                type="submit"
                                value="Subscribe"
                                className="newsletter-button w-button"
                              />
                            </form>
                            {message && (
                                <div className="success-message">
                                  {message}
                                </div>
                            )}
                    </div>
                    <div className="social-icon-group">
                        <a href="#" className="social-icon w-inline-block"><img
                                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed4bd44d746f_facebook-icon.svg"
                                alt="" /></a><a href="#" className="social-icon w-inline-block"><img
                                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed53ce4d7474_twitter-icon.svg"
                                alt="" /></a><a href="#" className="social-icon w-inline-block"><img
                                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25ed37cb4d746d_linkdin-icon-white.svg"
                                alt="" /></a><a href="#" className="social-icon w-inline-block"><img
                                src="https://assets.website-files.com/5e4b18d10b25ed7c5a4d7453/5e4b18d10b25eda92d4d7478_email-icon-white.svg"
                                alt="" /></a>
                    </div>
                </div>
                <div className="w-col w-col-2">
                    <h4 className="footer-title" id="foot">Company</h4>
                    <a href="#home" className="page-link in-footer">Home</a>
                    <a href="#features" className="page-link in-footer">Features</a>
                    <a href="#customers" className="page-link in-footer">Clients</a>
                    <a href="#pricing" className="page-link in-footer">Pricing</a>
                    <a href="#" className="page-link in-footer">Sign Up</a>
                </div>
                <div className="w-col w-col-2">
                    <h4 className="footer-title">Product</h4>
                    <a href="#features" className="page-link in-footer">Analytics</a>
                    <a href="#pricing" className="page-link in-footer">Businesses</a>
                    <a href="#customers" className="page-link in-footer">Testimonials</a>
                    <a href="#" className="page-link in-footer">Integrations</a>
                </div>
                <div className="w-col w-col-2">
                    <h4 className="footer-title">Legal</h4><a href="#" className="page-link in-footer">Privacy Policy</a><a
                        href="#" className="page-link in-footer">Terms of Use</a>
                </div>
            </div>
        </div>
    </div>
        <div className="section footer copyright">
            <div className="w-container">
                <div>Copyright 2023 Metric UPX. All Rights Reserved.  Developed by Royal Alawode .</div>
            </div>
        </div>
    </div>
    
  );
}

export default Footer;
