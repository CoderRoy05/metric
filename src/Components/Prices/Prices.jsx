import React from 'react';

class Prices extends React.Component {
  render() {
    return (
      <div>
        <div id="pricing" className="section purple">
        <div className="w-container">
            <h2>Plans &amp; Pricing</h2>
            <div className="section-subtitle">No credit card required. No risk, <strong className="bold-text">30-day money back
                    guarantee</strong>!
            </div>
            <div className="w-row">
                <div className="w-col w-col-3">
                    <div data-ix="fade-in-on-scroll" data-w-id="d87fa01e-3185-5bc3-193f-6faa2208ea8e"
                       className="plan-wrapper">
                        <h3>Starter</h3>
                        <div className="price-point"><strong className="price-accent">$15</strong> /month</div>
                        <div className="price-point"><strong className="price-accent">500</strong> Data Points</div>
                        <div className="price-point"><strong className="price-accent">1</strong> Team Member</div>
                        <div className="divider"></div>
                        <div className="addl-feature"><strong>Email</strong> Support</div>
                        <div className="addl-feature inactive">IOS and Android App</div>
                        <div className="addl-feature inactive">Customizable Dashboard</div>
                        <div className="addl-feature inactive">Metric API</div>
                        <a href="#" className="button in-pricing">Choose Plan</a>
                    </div>
                </div>
                <div className="w-col w-col-3">
                    <div data-ix="fade-in-on-scroll" data-w-id="d242de0d-d6d2-f690-dd23-3599cc488914"
                       className="plan-wrapper">
                        <h3>Professional</h3>
                        <div className="price-point"><strong className="price-accent">$30</strong> /month</div>
                        <div className="price-point"><strong className="price-accent">2000</strong> Data Points</div>
                        <div className="price-point"><strong className="price-accent">1</strong> Team Member</div>
                        <div className="divider"></div>
                        <div className="addl-feature"><strong>Email</strong> Support</div>
                        <div className="addl-feature"><strong>IOS</strong> and <strong>Android</strong> App</div>
                        <div className="addl-feature inactive">Customizable Dashboard</div>
                        <div className="addl-feature inactive">Metric API</div><a href="#" className="button in-pricing">Choose
                            Plan</a>
                    </div>
                </div>
                <div className="w-col w-col-3">
                    <div data-ix="fade-in-on-scroll" data-w-id="36a69626-52ca-b009-2f12-75a01dceb9e4"
                      className="plan-wrapper">
                        <h3>Startup</h3>
                        <div className="price-point"><strong className="price-accent">$75</strong> /month</div>
                        <div className="price-point"><strong className="price-accent">5000</strong> Data Points</div>
                        <div className="price-point"><strong className="price-accent">3</strong> Team Member</div>
                        <div className="divider"></div>
                        <div className="addl-feature"><strong>Email</strong> Support</div>
                        <div className="addl-feature"><strong>IOS</strong> and <strong>Android</strong> App</div>
                        <div className="addl-feature"><strong>Customizable</strong> Dashboard</div>
                        <div className="addl-feature inactive">Metric API</div><a href="#" className="button in-pricing">Choose
                            Plan</a>
                    </div>
                </div>
                <div className="w-col w-col-3">
                    <div data-ix="fade-in-on-scroll" data-w-id="5b5856d5-59ee-ab6c-62a3-bedc1be922a2"
                       className="plan-wrapper">
                        <h3>Business</h3>
                        <div className="price-point"><strong className="price-accent">$250</strong> /month</div>
                        <div className="price-point"><strong className="price-accent">15000</strong> Data Points</div>
                        <div className="price-point"><strong className="price-accent">10</strong> Team Member</div>
                        <div className="divider"></div>
                        <div className="addl-feature"><strong>Priority</strong> Support</div>
                        <div className="addl-feature"><strong>IOS</strong> and <strong>Android</strong> App</div>
                        <div className="addl-feature"><strong>Customizable</strong> Dashboard</div>
                        <div className="addl-feature">Metric <strong>API</strong></div><a href="#"
                            className="button in-pricing">Choose Plan</a>
                    </div>
                </div>
            </div>
            <div className="additional-contact">Need more Data Points or Team Members? Please 
                <a href="#foot" className="page-link">contact us</a>.
            </div>
        </div>
    </div>
      </div>
    );
  }
}

export default Prices;
