import './Course.css'
import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CourseComponent = () =>
{
    const CourseData = useSelector((state) => state.Courses.courses);


    return (
        <div id='course' className='mx-auto px-20 my-2'>
            <div className='text-center mt-20 mb-10 '>
                {/* Header Section */}
                <div className=" mb-5 text-left max-w-[600px]">
                    <p
                        className="text-primaryColor text-md mb-2"
                        data-aos="fade-zoom-in"
                    >
                        What's new             </p>
                    <h1 className="text-4xl font-bold text-title" data-aos="fade-up ">
                        Featured Courses
                    </h1>
                    <p
                        className="text-md text-gray-500 dark:text-gray-300 mb-7"
                        data-aos="fade-up"
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Similique id maxime omnis neque repellendus eligendi.
                    </p>
                </div>
     
                {/* All Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        CourseData.map((data) => (
                            <>
                                {/*  Box  */}
                                <div className="bg-white pb-10  rounded shadow-md relative">
                                    {/* Category + Price */}
                                    <div className='text-center absolute top-0 left-0  text-xs  '>
                                        <div className='flex flex-col gap-[1px]'>
                                            <p className='bg-primaryColor text-white py-1 mb-0 px-2 rounded-lg '>
                                                {data.category}
                                            </p>
                                            {data.price === "Free" ?
                                                <p className='text-white py-1 px-0 mb-0 bg-[#83cd29] rounded-lg text-lg '>
                                                    {data.price}
                                                </p>
                                                :
                                                <p className='text-white py-1 px-0 mb-0 bg-primaryColor rounded-lg text-lg '>
                                                    $ {data.price}
                                                </p>}

                                        </div>
                                    </div>
                                    {/* Image */}
                                    <div className='h-[320px] mx-auto 
                                    '>
                                        <img src={data.img} alt="Course 1" className="mb-4 w-[80%] mx-auto object-contain  rounded-2xl  p-5" />
                                   </div>
                                    {/* title */}
                                    <h2 className="text-2xl font-semibold text-title">{data.title}</h2>
                                    {/* Description */}
                                    <p className="text-lg text-headerText px-5">{data.description}</p>
                                    <div className='mt-10'>
                                        <Link to={'/Courses'}>
                                            <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
                                                Enroll Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
                {/* Buttons */}
                <div className='my-10'>
                    <Link to={'/Courses'}>
                        <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton text-2xl hover:bg-primaryColor hover:text-white '>
                            Show more
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseComponent;
