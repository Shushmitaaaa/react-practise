//use rafce
import react from 'react'
import Nav from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import {FiArrowRight} from "react-icons/fi"

const Home=()=>{
    return <div className='home-container'>
        <Nav></Nav>
        <div className="home-banner-container">
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/> 
            </div>
            <div className='home-image-section'>
                <img src={BannerImage} alt="" />

            </div>
        </div>
    </div>
}

export default Home