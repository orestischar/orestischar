import { useState, useEffect } from 'react'
import NextCors from 'nextjs-cors'

export default function Nim() {
    
    async function init() {
        
        await NextCors(req, res, {
            method: "GET",
            origin: "http://localhost:5000/init",
            headers: {
            'Content-Type' : 'application/json'
            },
        });
        if (response.ok){
            console.log("it worked")
        } else {
            console.log("it didn't work")
        }
    };

    return <button 
                type="submit" 
                onClick={init}>
                width={100}
                height={100}
            </button>
            ;
}
