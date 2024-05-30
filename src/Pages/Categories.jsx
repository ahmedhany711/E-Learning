import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

export default function Categories()
{

    const CategoryData = useSelector((state) => state.Categories);
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(" ");


    const frontCourses = (category) =>
    {
        return CategoryData
            .filter(data => data.category === category)
            .map(data => (
                <>
                    {/*  Box  */}

                    <div key={data.id} className="bg-white pb-10  rounded shadow-md relative">
                        {/* Category + Price */}
                        <div className='text-center absolute top-0 left-0  text-xs  '>
                            <div className='flex flex-col gap-[1px]'>
                                <p className='bg-primaryColor text-white py-1 mb-0 px-2 rounded-lg '>
                                    {category}
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
                        <div className='h-[300px]  '>
                            <img src={data.img} alt="Course 1" className="mb-4 w-full object-contain  rounded-2xl  p-5" />
                        </div>
                        {/* title */}
                        <h2 className="text-3xl font-semibold text-title">{data.title}
                        </h2>
                        {/* Description */}
                        <p className="text-xl text-headerText px-2">{data.description}</p>


                        <div className='mt-10'>
                            <Link to={'/Courses'}>
                                <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
                                    Enroll Now
                                </button>
                            </Link>
                        </div>
                    </div >

                </>
            ));
    };

    const BackEndCourses = (category) =>
    {
        return CategoryData
            .filter(data => data.category === category)
            .map(data => (
                <>
                    {/*  Box  */}

                    <div key={data.id} className="bg-white pb-10  rounded shadow-md relative">
                        {/* Category + Price */}
                        <div className='text-center absolute top-0 left-0  text-xs  '>
                            <div className='flex flex-col gap-[1px]'>
                                <p className='bg-primaryColor text-white py-1 mb-0 px-2 rounded-lg '>
                                    {category}
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
                        <div className='h-[300px]  '>
                            <img src={data.img} alt="Course 1" className="mb-4 w-full object-contain  rounded-2xl  p-5" />
                        </div>
                        {/* title */}
                        <h2 className="text-3xl font-semibold text-title">{data.title}
                        </h2>
                        {/* Description */}
                        <p className="text-xl text-headerText px-2">{data.description}</p>


                        <div className='mt-10'>
                            <Link to={'/Courses'}>
                                <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
                                    Enroll Now
                                </button>
                            </Link>
                        </div>
                    </div >

                </>
            ));
    };



    return (
        <>
            <div id='' className='mx-auto  my-2'>
                {/* Header Section */}
                <div className="  py-32 mx-0 bg-[#FAF6F6]  text-center ">
                    <h1 className="text-6xl font-bold text-title" data-aos="fade-up ">
                        Categories
                    </h1>
                </div>

                {/* Body */}
                <div className='bg-[#fafafa] py-20'>
                    <div className='text-center px-20 '>
                        {/* 2 Categories */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10" >
                            {/*  Box 1 */}
                            <Link className="bg-SecondButton py-10  rounded shadow-md relative no-underline"
                                onClick={() =>
                                {
                                    setSelectedCategory("Front_End")
                                }}>
                                {/* title */}
                                <h2 className="text-3xl font-semibold text-white">
                                    Front-End
                                </h2>
                            </Link>
                            {/*  Box 2  */}
                            <Link className="bg-SecondButton py-10  rounded shadow-md relative no-underline"
                                onClick={() =>
                                {
                                    setSelectedCategory("Back_End")
                                }}>
                                {/* title */}
                                <h2 className="text-3xl font-semibold text-white">
                                    Back-End
                                </h2>
                            </Link>

                        </div>

                        <br></br>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" >

                            {selectedCategory == "Front_End" ? (

                                frontCourses(selectedCategory)

                            ) : selectedCategory == "Back_End" ? (

                                BackEndCourses(selectedCategory)

                            ) : selectedCategory == " " ? (
                                CategoryData.map((data) =>
                                {
                                    return (
                                        <div  >
                                            <div key={data.id} className="bg-white pb-10  rounded shadow-md relative">
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
                                                <div className='h-[300px]  '>
                                                    <img src={data.img} alt="Course 1" className="mb-4 w-full object-contain  rounded-2xl  p-5" />
                                                </div>
                                                {/* title */}
                                                <h2 className="text-3xl font-semibold text-title">{data.title}
                                                </h2>
                                                {/* Description */}
                                                <p className="text-xl text-headerText px-2">{data.description}</p>


                                                <div className='mt-10'>
                                                    <Link to={'/Courses'}>
                                                        <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
                                                            Enroll Now
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div >
                                        </div>

                                    )
                                })
                            )
                                :
                                null

                            }
                        </div>

                        {/* Render courses based on selected category */}

                    </div>

                </div >
            </div >
            {/* Footer */}
            <div className='-mt-20' >
                <Footer />
            </div >
        </>
    )
}
