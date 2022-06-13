import React from 'react'
import twitter from '../images/Twitter.png'
import insta from '../images/Instagram.png'
import github from '../images/GitHub.png'

const Footer = () => {
    return (
        <footer>
            <a href="https://twitter.com/Paul_JV" target="_blank" rel="noreferrer" >
                <img className='f-ico' src={twitter} alt="twitter" />
            </a>
            <a href="https://www.instagram.com/jp_team/" target="_blank" rel="noreferrer" >
                <img className='f-ico' src={insta} alt="instagram" />
            </a>
            <a href="https://github.com/nzabajp" target="_blank" rel="noreferrer" >
                <img className='f-ico' src={github} alt="github" />
            </a>    
        </footer>
    )
}

export default Footer;