// import React from 'react';
// import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
// import { User } from 'lucide';



const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                    <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105">
                        {/* <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="" /> */}
                        {/* <User className="w-20 mx-auto mt-[-3rem] bg-white" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 36 36" fill="none"
                         // eslint-disable-next-line react/no-unknown-property
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                         className="w-20 mx-auto mt-[-3rem] bg-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                         <circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        <h2 className="py-8 text-2xl font-bold text-center">
                        
                            A Parents Lover
                        </h2>
                        <div className="font-medium text-center">
                            <p className="py-2 mx-8 mt-8 border-b">you have a specific</p>
                            <p className="py-2 mx-8 border-b">you have a specific</p>
                            <p className="py-2 mx-8 border-b">you have a specific</p>
                        </div>
                        <button
                            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
                        >
                            Learn More
                        </button>
                    </div> 
                    <div className="flex flex-col w-full p-4 my-8 duration-300 bg-gray-100 rounded-lg shadow-xl md:my-0 hover:scale-105">
                        <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt=""/>
                        <h2 className="py-8 text-2xl font-bold text-center">
                           Love To Parents
                        </h2>
                        <div className="font-medium text-center">
                            <p className="py-2 mx-8 mt-8 border-b">you have a specific</p>
                            <p className="py-2 mx-8 border-b">you have a specific</p>
                            <p className="py-2 mx-8 border-b">you have a specific</p>
                        </div>
                        <button
                            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
                        >
                            Learn More
                        </button>
                    </div> 
                    <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-xl hover:scale-105">
                        <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="" />
                        <h2 className="py-8 text-2xl font-bold text-center">
                            Become A Member
                        </h2>
                        <div className="font-medium text-center">
                            <p className="py-2 mx-8 mt-8 border-b">you have a specific</p>
                            <p className="py-2 mx-8 border-b">you have a specific</p>
                            <p className="py-2 mx-8 border-b">you have a specific</p>
                        </div>
                        <button
                            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3"
                        >
                            Learn More
                        </button>
                    </div> 
                                       
            </div>
        </div>
    )
}
export default Cards;