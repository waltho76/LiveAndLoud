import React from 'react'
import {Link} from 'react-router-dom'


export default function Header () {
    return (

        <div className='header'>
          <h1>LIVE-N-LOUD</h1>            
            <div className='nav'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/city'>CITIES</Link>
                <Link className='nav-link' to='/venue'>VENUES</Link>
                <Link className='nav-link' to='/band'>BANDS</Link>
            </div>
            
        </div>
    )
}
