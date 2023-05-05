import React, { Fragment } from 'react';
import Header from './Header';
// import './Home.css';
import prideimg from './../../assets/photo4.jpg';
import ingredients from './../../assets/photo5.png';

const Home = ()=>{
    return(
         <Fragment>
              <Header/>
              <section className='numbers'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <h2>27+</h2>
                                <h5>LOCATION</h5>
                            </div>
                            <div className='col-md-3'>
                                <h2>55+</h2>
                                <h5>STAFF</h5>
                            </div>
                            <div className='col-md-3'>
                                <h2>1287+</h2>
                                <h5>PRODUCTS</h5>
                            </div>
                            <div className='col-md-3'>
                                <h2>988+</h2>
                                <h5>CUSTOMERS</h5>
                            </div>
                        </div>
                    </div>
              </section>
              <section className='pride'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={prideimg}  title='prideimg'/>
                            </div>
                            <div className='col-md-6'>
                                    <h2>Features of our site</h2>
                                    <p>We're committed to providing our customers with a safe and secure way to manage their health. Our app is designed to ensure your privacy and data security, so you can feel confident that your information is always protected.</p>
                                    <button><a href='#'>See more</a></button>
                            </div>

                        </div>
                    </div>
              </section>

              <section className='ingredients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2>The benefits of our application</h2>
                            <p>With our app, you can:</p>
                            <ul className='ul-li'>
                                <li>Browse a wide selection of prescription medications and health products,</li>
                                <li>Easily upload your prescription and have it verified by our licensed pharmacists,</li>
                                <li>Get personalized recommendations based on your health profile etc...</li>
                            </ul>
                            <button>
                                <a href='#'>Learn more</a>
                            </button>
                        </div>
                        <div className='col-md-6'>
                            <img src= {ingredients} alt='ingredients' />
                        </div>
                    </div>
                </div>
              </section>

         </Fragment>

      
    );

}

export default Home;