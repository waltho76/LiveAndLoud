import React from 'react'
import {Link} from 'react-router-dom'


export default function Header () {
    return (

        <div className='header'>
          <h1>LIVE-N-LOUD</h1>            
            <div className='nav'>
                <Link className='nav-link' to='/'>CITIES</Link>
                <Link className='nav-link' to='/venue'>VENUES</Link>
                <Link className='nav-link' to='/band'>BANDS</Link>
            </div>
            <h4>FEATURED CITIES</h4>
        </div>
    )
}
