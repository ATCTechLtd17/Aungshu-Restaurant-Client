import React from 'react';
import pasta from './../assets/Cheese-Pasta.jpg';

const Home = () => {
    return (
        <div>
            {/* Background */}
            <div className=" absolute inset-0 bg-cover bg-center  bg-[url('/src/assets/banner2.jpg')] ">
             
           </div>

           {/* Navber */}
            <nav className='absolute top-0 left-0 w-full flex justify-between items-center bg-white px-10 py-5 shadow-black shadow-lg '>
                <h1 className='text-3xl font-mono text-[#FF8938]'>The Aungshu Dine</h1>
                <ul className='hidden md:flex flex-row space-x-6 text-gray-700 font-semibold p-2 '>
                    <li className='p-2'><a href="">Menu</a></li>
                    <li className='p-2'><a href="">Catering</a></li>
                    <li className='p-2'><a href="">Location</a></li>
                    <li className='p-2'><a href="">About</a></li>
                    <li className='p-2'><a href="">Do Good</a></li>
                    <li> <button className='bg-gradient-to-r from-[#FF8938] to-[#FF0000] text-slate-50 px-5 p-2  rounded-lg '>Order Now</button></li>
                </ul>

                <button className='bg-gradient-to-r from-[#FF8938] to-[#FF0000] text-slate-50 px-5 p-2  rounded-lg'>Login</button>
               
            </nav>
            <div className='absolute inset-0 flex  items-center justify-center '>
                <h1 className='text-white text-5xl md:text-9xl font-extrabold animate-pulse'>Menu</h1>
            </div>

            <div className='bg-white  '>
                <h1 className='text-gray-700' >Food Menus Items</h1>
                <div>
                    <img src="" alt="" />
                    <h1></h1>
                    <p></p>
                </div>
            </div>
            


           
            
        </div>
    );
};

export default Home;