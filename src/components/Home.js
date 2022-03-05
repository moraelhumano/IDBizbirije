import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BzBanner from '../bannerBz.jpg';


class Home extends Component {


    render(){

        return(
            <>
            <Navbar />
            <section className="font-sans antialiased text-gray-900 leading-normal tracking-wider pb-6">
                <div className="max-w-4xl flex items-center justify-center h-auto  flex-wrap mx-auto  lg:my-0 pb-10">
                    <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl mt-20 bg-white opacity-75 mx-6 lg:mx-0">
                        <div className="p-4 md:p-12 text-center lg:text-left">
                            <div className="block lg:hidden rounded-full shadow-xl mx-auto  mt-16 h-48 w-48 bg-cover bg-center pt-20" ></div>
                                <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-center">Reporterx Bizbirije</h1>
                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                                    <p className="pt-4 text-sm text-center">
                                        Soy Mora y a mi tampoco me llegó mi credencial de < br /> Reporterx Bizbirije HDLC.
                                    </p>
                                    
                                    <div className="flex justify-center mt-4">
                                        <img className="w-full" src={BzBanner} />
                                    </div>
                                    <div className="pt-6 pb-6 flex justify-between">
                                        <Link to="/amigos">
                                            <button className="button-photo shadow-lg opacity-100">
                                                Reportera
                                            </button> 
                                        </Link>
                                        <Link to="/amigos">
                                            <button className="button-photo shadow-lg opacity-100">
                                                Reportero
                                            </button> 
                                        </Link>
                                    </div>
                                <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto text-center">
                                    <div>
                                        <p>Mis Redes</p>
                                    </div>
                                   <div className='flex mt-4 justify-center'>
                                    <a className="link pr-4" href="https://www.instagram.com/mariolopezcapi/" target="_blank" data-tippy-content="@instagram_handle"><svg className="h-6 fill-current text-gray-600 hover:font-red" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
                                    <a className="link" href="https://www.youtube.com/channel/UCugC9R-gE-6mgUgIqNy387Q" data-tippy-content="@youtube_handle" target="_blank"><svg className="h-6 fill-current text-gray-600 hover:font-red" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube</title><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg></a>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
         </>
        );
    }
}

export default Home;

