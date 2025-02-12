import React, { useRef } from 'react';
import pasta from './../assets/Cheese-Pasta.jpg';
import potatoWedges from "./../assets/Baked-Potato-Wedges.jpg";
import frenchFry from './../assets/French-fries.webp';
import { motion, useInView } from 'framer-motion';


const Home = () => {
    const ref1= useRef(null);
    const ref2= useRef(null);
    const ref3= useRef(null);
    const ref4= useRef(null);

    const inView1=useInView(ref1, {once: true});
    const inView2=useInView(ref2, {once: true});
    const inView3=useInView(ref3, {once: true});
    const inView4=useInView(ref4, {once: true});


    return (
        <div className='relative w-full'>
            {/* Background */}
            <div className="  w-full h-[600px] bg-cover bg-center  bg-[url('/src/assets/banner2.jpg')] ">
             <div className=' inset-0 bg-black bg-opacity-40'></div>
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
            <div className='absolute inset-0 flex  items-center justify-center h-[600px] '>
                <h1 className='text-white text-5xl md:text-9xl font-extrabold animate-pulse'>Menu</h1>
            </div>

            <div className='bg-white w-full py-10 px-5  '>
                <h1 className='text-4xl font-semibold text-gray-700 text-center p-10' >Food Menus Items</h1>
                {/* Slider 1 */}

                <motion.div
                ref={ref1}
        initial={{ rotateY: 90, opacity: 0, x: -200 }}
        animate={inView1 ? { rotateY: 0, opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        
      >
                <div className='flex flex-row justify-center gap-6 '>
                <div>
                    <img src={pasta} alt="Pasta"  className='w-44 rounded-md p-2'/>
                    <h1 className='font-semibold '>Pasta</h1>
                    <p className='text-gray-500 text-xs'>350/=</p>
                </div>
                <div>
                    <img src={potatoWedges} alt="Pasta"  className='w-56 rounded-md p-2 '/>
                    <h1 className='font-semibold '>Potato wedges</h1>
                    <p className='text-gray-500 text-xs'>350/=</p>
                </div>
                <div>
                    <img src={frenchFry} alt="Pasta"  className='w-64 rounded-md'/>
                    <h1 className='font-semibold '>French FRY </h1>
                    <p className='text-gray-500 text-xs'>250/=</p>
                </div>
                </div>
                </motion.div>

                {/* Slider 2 */}
                <motion.div
                ref={ref2}
        initial={{ rotateY: -90, opacity: 0, x: 200 }}
        animate={inView2 ? { rotateY: 0, opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
       
      >

                <div className='flex flex-row justify-center gap-6 '>
                <div>
                    <img src={pasta} alt="Pasta"  className='w-44 rounded-md p-2'/>
                    <h1 className='font-semibold '>Pasta</h1>
                    <p className='text-gray-500 text-xs'>350/=</p>
                </div>
                <div>
                    <img src={potatoWedges} alt="Pasta"  className='w-56 rounded-md p-2 '/>
                    <h1 className='font-semibold '>Potato wedges</h1>
                    <p className='text-gray-500 text-xs'>350/=</p>
                </div>
                <div>
                    <img src={frenchFry} alt="Pasta"  className='w-64 rounded-md'/>
                    <h1 className='font-semibold '>French FRY </h1>
                    <p className='text-gray-500 text-xs'>250/=</p>
                </div>
                </div>
                </motion.div>
                {/* Slider 3 */}
                <motion.div
                ref={ref3}
        initial={{ rotateY: 90, opacity: 0, x: -200 }}
        animate={inView3 ? { rotateY: 0, opacity: 1, x: 0 }: {}}
        transition={{ duration: 1, ease: "easeOut" }}
        
      >
                <div className='flex flex-row justify-center gap-6 '>
                <div>
               
                    <img src={pasta} alt="Pasta"  className='w-44 rounded-md p-2'/>
                    <h1 className='font-semibold '>Pasta</h1>
                    <p className='text-gray-500 text-xs'>350/=</p>
                </div>
                <div>
                    <img src={potatoWedges} alt="Pasta"  className='w-56 rounded-md p-2 '/>
                    <h1 className='font-semibold '>Potato wedges</h1>
                    <p className='text-gray-500 text-xs'>350/=</p>
                </div>
                <div>
                    <img src={frenchFry} alt="Pasta"  className='w-64 rounded-md'/>
                    <h1 className='font-semibold '>French FRY </h1>
                    <p className='text-gray-500 text-xs'>250/=</p>
                </div>
                </div>
                </motion.div>
                 {/* Slider 4 */}
                 <motion.div
                 ref={ref4}
        initial={{ rotateY: -90, opacity: 0, x: 200 }}
        animate={inView4 ? { rotateY: 0, opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
       
      >
                 <div className='flex flex-row justify-center gap-6 '>
                <div>
                    <img src={pasta} alt="Pasta"  className='w-44 rounded-md p-2'/>
                    <h1 className='font-semibold '>Pasta</h1>
                    <p className='text-gray-500 text-xs'>350/=</p>
                </div>
                <div>
                    <img src={potatoWedges} alt="Pasta"  className='w-56 rounded-md p-2 '/>
                    <h1 className='font-semibold '>Potato wedges</h1>
                    <p className='text-gray-500 text-xs'>350/=</p>
                </div>
                <div>
                    <img src={frenchFry} alt="Pasta"  className='w-64 rounded-md'/>
                    <h1 className='font-semibold '>French FRY </h1>
                    <p className='text-gray-500 text-xs'>250/=</p>
                </div>
                </div>
                </motion.div>

            </div>
           


           
            
        </div>
    );
};

export default Home;