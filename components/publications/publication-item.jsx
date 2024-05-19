import React from "react";

function PublicationItem(props) {
    return (
        <div className="group flex flex-row mb-4 transition-all">
            <div>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all hover:text-primary-500'>{props.title}</a>
                <div className='mb-2 text-primary-400'>{props.venue} | {props.year}</div>
                <div className='text-surface-600 mb-4'>{props.description}</div>
            </div>
        </div>
    )
}

export default PublicationItem