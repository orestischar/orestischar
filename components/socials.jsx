import React from "react";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub, faFlickr, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Socials = (props) => {
    return (
        <div className='flex flex-row items-center'>
            <div className='flex flex-row'>
                <a href={props.data.email} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center hover:text-primary-500">
                    <FontAwesomeIcon icon={faEnvelope} width={30} height={30} className='object-contain object-top mr-3'/>
                </a>
                <a href={props.data.github} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center hover:text-primary-500">
                    <FontAwesomeIcon icon={faGithub} width={30} height={30} className='object-contain object-top mr-3'/>
                </a>
                <a href={props.data.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center hover:text-primary-500">
                    <FontAwesomeIcon icon={faLinkedin} width={30} height={30} className='object-contain object-top mr-3'/>
                </a>
                <a href={props.data.flickr} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center hover:text-primary-500">
                    <FontAwesomeIcon icon={faFlickr} width={30} height={30} className='object-contain object-top mr-3'/>
                </a>
                <a href={props.data.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-row content-center justify-center hover:text-primary-500">
                    <FontAwesomeIcon icon={faInstagram} width={30} height={30} className='object-contain object-top mr-3'/>
                </a>
            </div>
            
        </div>
    )
}

export default Socials