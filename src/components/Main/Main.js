import React from 'react';

import styles from './Main.module.css';

import image1 from '../../assets/images/image1.svg';

import image2 from '../../assets/images/image2.png';

import Button from '../../components/header/Navigation/Button/Button';

import clock from '../../assets/images/clock.svg';

import facebook from '../../assets/images/facebook.svg';

import instagram from '../../assets/images/instagram.svg';

import linkedin from '../../assets/images/linkedin.svg';

import twitter from '../../assets/images/twitter.svg';


const main = (props) => (
    <div>
    <div className = {styles.Main}>
        <div className = {styles.card1}>
            <div className = {styles.divide1}>
                <h1 className = {styles.heading1}>Create Stunning Graphic in Minutes</h1>
                <p className = {styles.para1}>Create impactful social graphics, web pages, and short videos in minutes with Muse.</p>
                {/* <Button color = "#ffffff" border = "none" top = "30px" float= "none">Get Started</Button> */}
                <Button className = {styles.bb} bgcolor = "#2A9D8F" border = "none" color = "#ffffff"  top = "20px" left = "0px" >Get Started</Button>
            </div>
            <div className = {styles.divide2}>
                <img className = {styles.image1} src = {image1} alt="Random"/>
            </div>
        </div>
        <div className = {styles.card2}>
            <div className = {styles.card21}>
                <h1 className = {styles.heading2}>Thousands of templates to choose from</h1>
                <p className = {styles.para2}>Pick a photo, add text, and apply design filters or animations to instantly stand out from the crowd.</p>
                <Button className = {styles.bb} bgcolor = "#E9C46A" border = "1px solid #FFFFFF" color = "#fff" top="20px" left="6vw">Explore</Button>
            </div>
            <div className = {styles.divide2}>
                <img className = {styles.image2} src = {image2} alt = "Random" />
            </div>
        </div>
        <div className = {styles.card3}>
            <div className = {styles.card31}>
                <img className = {styles.image3} src = {image2} alt = "Random" />
            </div>
            <div className = {styles.divide3}>
                <h1 className = {styles.heading3}>Schedule and post it directly to cache</h1>
                <p className = {styles.para3}>Pick a photo, add text, and apply design filters or animations to instantly stand out from the crowd.</p>
                <Button className = {styles.bb} bgcolor = "#264653" border = "1px solid #FFFFFF" color = "#fff" top="20px" >Explore</Button>
            </div>
        </div>
        <div className = {styles.card4}>
            <h1 className = {styles.heading4}>Create your team and manage your brand identity</h1>
            <p className = {styles.para4}>Pick a photo, add text, and apply design filters or animations to instantly stand out from the crowd.</p>
            <Button className = {styles.bb} bgcolor = "#2A9D8F" border = "1px solid #FFFFFF" color = "#fff" top="20px" >Explore</Button>
            <div style = {{marginTop : '30px'}}>
                <img className = {styles.image4} src = {image2} alt = "Random" />
            </div>
        </div>
        <div className = {styles.card5}>
            <h1 className = {styles.heading5}>Effortless creation, beautiful results</h1>
            <div className = {styles.divide}>
                <div className = {styles.card51}>
                    <img src = {clock} alt = "Clock" />
                    <h1 className = {styles.subheading}>Create in minutes</h1>
                    <p className = {styles.subpara}>Anyone can shine. No design expertise needed.</p>
                </div>
                <div className = {styles.card51}>
                    <img src = {clock} alt = "Clock" />
                    <h1 className = {styles.subheading}>Create in minutes</h1>
                    <p className = {styles.subpara}>Anyone can shine. No design expertise needed.</p>
                </div>
                <div className = {styles.card51}>
                    <img src = {clock} alt = "Clock" />
                    <h1 className = {styles.subheading}>Create in minutes</h1>
                    <p className = {styles.subpara}>Anyone can shine. No design expertise needed.</p>
                </div>
            </div>
        </div>
        <div className = {styles.card6}>
            <h1 className = {styles.heading6}>Graphic design that looks wonderfully on</h1>
            <div className = {styles.buttons}>
                 <ul>
                     <li className = {styles.first}>Posters</li>
                     <li>Social Media Posts</li>
                     <li>Stories</li>
                     <li>Presentation</li>
                     <li>Ads</li>
                 </ul>
            </div>
            <div className = {styles.divide6}>
                <div style = {{marginLeft:'10vw'}} className = {styles.card61}></div>
                <div className = {styles.card61}></div>
                <div className = {styles.card61}></div>
                <div style = {{marginRight:'10vw'}} className = {styles.card61}></div>
            </div>
        </div>
        <div className = {styles.card7}>
            <div className = {styles.card71}>
                <h1 className={styles.heading7}>Your new digital creative workplace is just a click away</h1>
            </div>
            <div className = {styles.card72}>
                <Button className = {styles.bb} style = {{marginRight : '5vw'}} bgcolor = "#2A9D8F" border = "none" color = "#ffffff"  top = "100px" left = "10vw" float = "none" >Get Started</Button>
            </div>
        </div>
    </div>
        <div className={styles.footer}>
            <div className={styles.contain}>
            <div className = {styles.col}>
                <h1>About Us</h1>
                <ul>
                <li>Company</li>
                <li>Products</li>
                </ul>
            </div>
            <div className={styles.col}>
                <h1>For Social</h1>
                <ul>
                <li>Facebook Posts</li>
                <li>Instagram Posts</li>
                <li>Twitter Posts</li>
                <li>All Social Graphics</li>
                </ul>
            </div>
            <div className={styles.col}>
                <h1>Resources</h1>
                <ul>
                <li>Tips <span>&</span> Tutorials</li>
                <li>Events</li>
                <li>Pricing</li>
                <li>What's New</li>
                </ul>
            </div>
            <div className={styles.col}>
                <h1>Support</h1>
                <ul>
                <li>Contact Us</li>
                <li>Feedback</li>
                </ul>
            </div>
            <div className={styles.col}>
                <h1>Terms <span>&</span> Conditions</h1>
                <ul>
                <li>Privacy Policy</li>
                <li>Copyright Notice</li>
                <li>Terms of use</li>
                </ul>
            </div>
            <div className={styles.col , styles.col1} >
                <h1 className = {styles.sh}>Social</h1>
                <ul>
                    <li><img src={instagram} width="32" alt = "Instagram" style={{width : '20px' , height : '20px'}} /></li>
                    <li><img src={facebook} width="32" alt = "Facebook" style={{width : '20px' , height : '20px'}} /></li>
                    <li><img src={linkedin} width="32" alt = "Linked In" style={{width : '32px' , height : '20px'}} /></li>
                    <li><img src={twitter} width="32" alt = "Twitter" style={{width : '20px' , height :'20px'}} /></li>
                </ul>
            </div>
            <div class="clearfix"></div>
            </div>
            
        </div>
        <p className = {styles.end}>Part of <b>Creatosaurus</b> family of apps.</p>
    </div>
    
);

export default main; 