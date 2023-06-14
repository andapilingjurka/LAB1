import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ()=>{
    return(
        <header className='container-header'>
            <div className='container'>
                <div className='col-md-6'> 
                    <h2>Bringing loving care to health care</h2>
                    <p>In our pharmacies, you will be assisted by our qualified staff and you will have easy and quick access to the medicines and medical tools you need.</p>
                    <p>Rush to our pharmacies for a healthier and happier life!</p>
                    <Link to="/Products/" style={{color:'white', textDecoration:'none'}} ><button style={{backgroundColor:"#024585e5"}}> Order Now</button></Link> 

                    <button style={{backgroundColor:"#024585e5"}}>Learn More</button>
                </div>
                <div>

                </div>

            </div>

        </header>
    )
}

export default Header;