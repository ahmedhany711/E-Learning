import React from 'react'
import { FaPencilAlt, FaUser } from 'react-icons/fa'
import { LiaCertificateSolid } from 'react-icons/lia'
import { FaGithub } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
export default function TopCategory()
{
    return (
        <div className='container mb-16'>
            {/* Header Section */}
            <div className=" mb-3 text-left max-w-[600px]">
                <p
                    className="text-primaryColor text-md mb-2"
                    data-aos="fade-zoom-in"
                >
                    Favourite Course            </p>
                <h1 className="text-4xl font-bold text-title" data-aos="fade-up ">
                    Top Category
                </h1>
                <p
                    className="text-md text-gray-500 dark:text-gray-300"
                    data-aos="fade-up"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique id maxime omnis neque repellendus eligendi.
                </p>
            </div>

            {/* Boxes */}
            <div>
                <div className='mt-20 z-50'>
                    <div className='flex justify-center items-center gap-5 '>

                        {/* Box 1 */}
                        <div className='w-[250px] h-[220px] z-[1000] shadow- rounded-2xl flex  bg-white text-center  hover:-translate-y-3  hover:bg-primaryColor hover:text-white duration-300 border-2 border-gray-200 p-10 group cursor-pointer'>
                            <div className='flex flex-col justify-center items-center mx-auto gap-3 '>
                                {/* icon */}
                                <div className='flex justify-center gap-4 items-center'>
                                    <div><FaGitlab className="text-primaryColor  group-hover:text-white text-7xl" /></div>
                                </div>
                                {/* Title + number of courses */}
                                <h4 className='text-headerText  group-hover:text-white text-3xl my-0'>GitLab</h4>
                                <p className="text-title  group-hover:text-white text-lmd  my-0">4 Courses</p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className='w-[250px] h-[220px] z-[1000] shadow- rounded-2xl flex  bg-white text-center  hover:-translate-y-3  hover:bg-primaryColor hover:text-white duration-300 border-2 border-gray-200 p-10 group cursor-pointer'>
                            <div className='flex flex-col justify-center items-center mx-auto gap-3 '>
                                {/* icon */}
                                <div className='flex justify-center gap-4 items-center'>
                                    <div><FaGithub className="text-primaryColor  group-hover:text-white text-7xl" /></div>
                                </div>
                                {/* Title + number of courses */}
                                <h4 className='text-headerText  group-hover:text-white text-3xl my-0'>GitHub</h4>
                                <p className="text-title  group-hover:text-white text-lmd  my-0">5 Courses</p>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className='w-[250px] h-[220px] z-[1000] shadow- rounded-2xl flex  bg-white text-center  hover:-translate-y-3  hover:bg-primaryColor hover:text-white duration-300 border-2 border-gray-200 p-10 group cursor-pointer'>
                            <div className='flex flex-col justify-center items-center mx-auto gap-3 '>
                                {/* icon */}
                                <div className='flex justify-center gap-4 items-center'>
                                    <div><FaCss3 className="text-primaryColor  group-hover:text-white text-7xl" /></div>
                                </div>
                                {/* Title + number of courses */}
                                <h4 className='text-headerText  group-hover:text-white text-3xl my-0'>CSS</h4>
                                <p className="text-title  group-hover:text-white text-lmd  my-0">5 Courses</p>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className='w-[250px] h-[220px] z-[1000] shadow- rounded-2xl flex  bg-white text-center  hover:-translate-y-3  hover:bg-primaryColor hover:text-white duration-300 border-2 border-gray-200 p-10 group cursor-pointer'>
                            <div className='flex flex-col justify-center items-center mx-auto gap-3 '>
                                {/* icon */}
                                <div className='flex justify-center gap-4 items-center'>
                                    <div><FaHtml5 className="text-primaryColor  group-hover:text-white text-7xl" /></div>
                                </div>
                                {/* Title + number of courses */}
                                <h4 className='text-headerText  group-hover:text-white text-3xl my-0'>HTML</h4>
                                <p className="text-title  group-hover:text-white text-lmd  my-0">4 Courses</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
