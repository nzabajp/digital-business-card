import React from 'react'
import profPic from '../images/profile-pic.jpeg';
import mail from '../images/Mail.png';
import linkedin from '../images/linkedin.png' 

const Info = () => {
    return (
        <div className='info'>
            <img src={profPic} alt="profile" />
            <h1>Jean Claude Nzabanterura</h1>
            <h3>Aspiring Full Stack Developer</h3>
            <a href="https://nzabajp.github.io/" target="_blank" rel="noreferrer">Portfolio link</a>
            <div>
                <a className='email' href='mailto:nzabajp@gmail.com'>
                    <img className='ico' src={mail} alt="mail ico" />Email</a>
                <a className='linkedin' href='https://www.linkedin.com/in/nzabajp/' target="_blank" rel="noreferrer">
                    <img className='ico' src={linkedin} alt="linkedin ico" />Linkedin</a>
            </div>
        </div>
    )
}

export default Info;