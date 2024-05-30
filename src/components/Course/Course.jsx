import './Course.css'
import React, { useContext } from 'react';
import c1 from "../../images/c1.jpg";
import c2 from "../../images/c2.jpg";
import c3 from "../../images/c3.jpg";
import c4 from "../../images/c4.jpg";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CourseComponent = () =>
{
    const CourseData = useSelector((state) => state.Courses.courses);
    const dispatch = useDispatch();

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
// {/*  Box 1 */ }
// <div className="bg-white pb-10  rounded shadow-md">
//     {/* Image */}
//     <img src={c4} alt="Course 1" className="mx-auto mb-4 w-full rounded-2xl" />
//     {/* title */}
//     <h2 className="text-2xl font-semibold text-title">HTML</h2>
//     {/* Description */}
//     <p className="text-lg text-headerText px-5">David Powell Instructor  Complete HTML, CSS and Javascript Course.</p>
//     <div className='mt-10'>
//         <Link to={'/Courses'}>
//             <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                 Enroll Now
//             </button>
//         </Link>
//     </div>
// </div>
// {/* Box 2 */ }
// <div className="bg-white pb-10  rounded shadow-md">
//     {/* Image */}
//     <img src={c2} alt="Course 1" className="mx-auto mb-4 w-full rounded-2xl" />
//     {/* title */}
//     <h2 className="text-2xl font-semibold text-title">Heba Ahmed</h2>
//     {/* Description */}
//     <p className="text-lg text-headerText px-5">David Powell Instructor  Complete HTML, CSS and Javascript Course.</p>
//     <div className='mt-10'>
//         <Link to={'/Courses'}>
//             <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                 Enroll Now
//             </button>
//         </Link>
//     </div>
// </div>
// {/* Box 3 */ }
// <div className="bg-white pb-10   rounded shadow-md">
//     {/* Image */}
//     <img src={c3} alt="Course 1" className="mx-auto mb-4 w-full rounded-2xl" />
//     {/* title */}
//     <h2 className="text-2xl font-semibold text-title">Heba Ahmed</h2>
//     {/* Description */}
//     <p className="text-lg text-headerText px-5">David Powell Instructor  Complete HTML, CSS and Javascript Course.</p>
//     <div className='mt-10'>
//         <Link to={'/Courses'}>
//             <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                 Enroll Now
//             </button>
//         </Link>
//     </div>
// </div>
//   {/* Box 4 */}
// {/* <div className="bg-white pb-10   rounded shadow-md">
//     {/* Image */}
//     <img src={c4} alt="Course 1" className="mx-auto mb-4 w-full rounded-2xl" />
//     {/* title */}
//     <h2 className="text-2xl font-semibold text-title">Heba Ahmed</h2>
//     {/* Description */}
//     <p className="text-lg text-headerText px-5">David Powell Instructor  Complete HTML, CSS and Javascript Course.</p>
//     <a href="#" className="button inline-block mt-4 bg-primaryColor text-white px-4 py-2  hover:bg-primaryColor/80 transition duration-300  no-underline rounded-xl ">Enroll Now</a>
// </div>
// {/* Box 5 */ }
// <div className="bg-white pb-10  rounded shadow-md">
//     {/* Image */}
//     <img src={c1} alt="Course 1" className="mx-auto mb-4 w-full rounded-2xl" />
//     {/* title */}
//     <h2 className="text-2xl font-semibold text-title">Heba Ahmed</h2>
//     {/* Description */}
//     <p className="text-lg text-headerText px-5">David Powell Instructor  Complete HTML, CSS and Javascript Course.</p>
//     <a href="#" className="button inline-block mt-4 bg-primaryColor text-white px-4 py-2  hover:bg-primaryColor/80 transition duration-300  no-underline rounded-xl ">Enroll Now</a>
// </div> */}