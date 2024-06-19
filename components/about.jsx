import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 group'>
            <div className='text-surface-600'>
                <div className='mb-6 text-primary-300'>Hi, I'm Orestis!</div>
                <div className='mb-6'>I am a grad student in CMU, graduating in August with a MS in Computer Science Research. My research was focused on theoretical and applied <span className='text-primary-300'>cryptography</span>, with a focus on quantum cryptography and zero-knowledge proof systems.
                I am actively seeking opportunities in <span className='text-primary-300'>security and computer science</span>, where I can apply my expertise and passion for technology to innovative projects.
 </div>
            </div>
        </div>
    )
}

export default About