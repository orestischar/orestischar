import React from "react";

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-28'>
            <div className='text-surface-600'>
                <div className='mb-4'>
                    Built from a <a href="https://github.com/karlgrossmann/two-column-portfolio" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">template</a> by <a href="https://github.com/karlgrossmann" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Karl Grossmann</a>.<br></br> 
                    Design inspired by <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Brittany Chiang</a>.<br></br>  
                    <a target="_blank" href="https://icons8.com/icon/22195/happy-mac">Happy Mac</a> icon by <a target="_blank" href="https://icons8.com" className="text-on-background transition-all hover:text-primary-500">Icons8</a>
                </div>
                <div className='flex flex-row justify-between'>
                    <span>{props.data.name} | 2023</span>
                </div>
            </div>
        </div>
    )
}

export default Credits