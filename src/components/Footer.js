import React from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import { TwitterLink, LinkedInLink, FbLinkLink } from './constants/SocialMediaUrls.js'

function Footer(props) {
    return (
        <div className='footerText'>
            <div className="socialText" > Follow us :
                <SocialIcon style={{ height: '30px' }} url={TwitterLink} />
                <SocialIcon style={{ height: '30px' }} url={LinkedInLink} />
                <SocialIcon style={{ height: '30px' }} url={FbLinkLink} />
                {/* //<SocialIcon style={{ height: '30px' }} url= {mail}/> */}
            </div>
            <div className="addText"><span className="socialText"> Address : </span> Sector 15, Noida, UP- 110096</div>
            <div style={{paddingTop:"20px", paddingBottom:"20px",textDecoration: "overline"}}>
                Copyright © 2021 SG Solitions, All rights reserved.

            </div>



        </div>
    );
}

export default Footer;