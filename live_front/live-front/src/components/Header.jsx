import React from 'react'
import {Link} from 'react-router-dom'
import Livelogo from './Livelogo.png'

export default function Header () {
    return (

        
        <div className='header'>
            <div className='logo-container'>
            <img src={Livelogo} alt='live n loud'/>
            </div> 
                      
            <div className='nav'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/city'>CITIES</Link>
                <Link className='nav-link' to='/venue'>VENUES</Link>
                <Link className='nav-link' to='/band'>BANDS</Link>
            </div> 
            
                      
        </div>
    )
}
