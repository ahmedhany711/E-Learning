import React from 'react'
import { Link } from 'react-router-dom';
import c1 from "../../images/img1.jpg";
import c2 from "../../images/img2.jpg";
import c3 from "../../images/img3.jpg";
import c4 from "../../images/img4.jpg";
import c5 from "../../images/img5.jpg";
import c6 from "../../images/img6.png";
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { Account_Details } from '../../rtk/Slices/InstructorProfileSlice';


export default function InstructorsPage({ showTitle })
{

    const instructorData = useSelector(state => state.Instructors);
    const dispatch = useDispatch();

    return (
        <>
            <div id='' className='mx-auto  my-2'>
                {/* Header Section */}
                {showTitle && <div className="  py-32 mx-0 bg-[#FAF6F6]  text-center ">

                    <h1 className="text-6xl font-bold text-title" data-aos="fade-up ">
                        Instructors
                    </h1>

                </div>}

                {/* Body */}
                <div className='bg-[#fafafa] py-20 ' data-aos="fade-up ">

                    <div className='text-center   px-20 '>
                        {/* All Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {
                                instructorData.map((data) =>
                                (
                                    <>
                                        {/*  Box */}
                                        <div className="bg-white pb-10  rounded shadow-md">


                                            {/* Image */}
                                            <div className='h-[350px]  
                                    '>
                                                <img src={data.img} alt="Course 1" className="mb-4 w-full object-contain  rounded-3xl  p-1" />
                                            </div>
                                            {/* title */}
                                            <h2 className="text-3xl font-semibold text-title">{data.name}
                                            </h2>
                                            {/* Description */}
                                            <p className="text-xl text-headerText px-2">{data.jobTitle}</p>


                                            <div className='mt-10'>
                                                <Link to={'/InstructorProfile'}
                                                    onClick={() =>
                                                    {
                                                        dispatch(Account_Details(data));
                                                    }}>
                                                    <button className='bg-white px-3 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
                                                        Show Profile
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>

                        {/* Button */}
                        {/* <div className='mt-10'>
                            <Link to={'/Courses'}>
                                <button className='bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton text-2xl hover:bg-primaryColor hover:text-white '>
                                    Show more
                                </button>
                            </Link>
                        </div> */}
                    </div>
                </div>

            </div>
            {/* Footer */}
            <div className='-mt-20'>
                <Footer />
            </div>
        </>

    );
}

// {/* Image */ }
// <img src={c1} alt="Course 1" className="mx-auto mb-4 w-full rounded-2xl" />
// {/* Name */ }
// <h2 className="text-2xl font-semibold text-title">Ahmed Hany</h2>
// {/* Job title */ }
// <p className="text-2xl pt-3 text-headerText ">Instructor</p>
// {/* Description */ }
// <p className="text-lg  text-headerText text-center ">Courses : <span className='text-primaryColor text-2xl'>4</span> </p>
// {/* Buttons */ }
// <div className='mt-10 flex justify-center  gap-2'>
//     <Link to={'/Profile'}>
//         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//             Show Profile
//         </button>
//     </Link>
//     <Link to={'/Courses'}>
//         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//             Enroll With
//         </button>
//     </Link>
// </div>
//                             </div >

//     {/*  Box 2 */ }
//     < div className = "bg-white pb-10  rounded shadow-md" >
//         {/* Image */ }
//         < img src = { c2 } alt = "Course 1" className = "mx-auto mb-4 w-full rounded-2xl" />
//             {/* Name */ }
//             < h2 className = "text-2xl font-semibold text-title" > Heba Ahmed </ >
//                 {/* Job title */ }
//                 < p className = "text-2xl pt-3 text-headerText " > Professor</ >
//                     {/* Description */ }
//                     < p className = "text-lg text-headerText text-center " > Courses : <span className='text-primaryColor text-2xl'>4</span> </ >
//                         {/* Buttons */ }
//                         < div className = 'mt-10 flex justify-center  gap-2' >
//                                     <Link to={'/Profile'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Show Profile
//                                         </button>
//                                     </Link>
//                                     <Link to={'/Courses'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Enroll With
//                                         </button>
//                                     </Link>
//                                 </ >
//                             </div >

//     {/*  Box 3 */ }
//     < div className = "bg-white pb-10  rounded shadow-md" >
//         {/* Image */ }
//         < img src = { c3 } alt = "Course 1" className = "mx-auto mb-4 w-full rounded-2xl" />
//             {/* Name */ }
//             < h2 className = "text-2xl font-semibold text-title" > Ahmed Hany</ >
//                 {/* Job title */ }
//                 < p className = "text-2xl pt-3 text-headerText " > Assistant Professor</ >
//                     {/* Description */ }
//                     < p className = "text-lg  text-headerText text-center " > Courses : <span className='text-primaryColor text-2xl'>4</span> </ >
//                         {/* Buttons */ }
//                         < div className = 'mt-10 flex justify-center  gap-2' >
//                                     <Link to={'/Profile'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Show Profile
//                                         </button>
//                                     </Link>
//                                     <Link to={'/Courses'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Enroll With
//                                         </button>
//                                     </Link>
//                                 </ >
//                             </div >

//     {/*  Box 4 */ }
//     < div className = "bg-white pb-10  rounded shadow-md" >
//         {/* Image */ }
//         < img src = { c1 } alt = "Course 1" className = "mx-auto mb-4 w-full rounded-2xl" />
//             {/* Name */ }
//             < h2 className = "text-2xl font-semibold text-title" > Ahmed Hany</ >
//                 {/* Job title */ }
//                 < p className = "text-2xl pt-3 text-headerText " > Instructor</ >
//                     {/* Description */ }
//                     < p className = "text-lg text-headerText text-center " > Courses : <span className='text-primaryColor text-2xl'>4</span> </ >
//                         {/* Buttons */ }
//                         < div className = 'mt-10 flex justify-center  gap-2' >
//                                     <Link to={'/Profile'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Show Profile
//                                         </button>
//                                     </Link>
//                                     <Link to={'/Courses'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Enroll With
//                                         </button>
//                                     </Link>
//                                 </ >
//                             </div >

//     {/*  Box 5*/ }
//     < div className = "bg-white pb-10  rounded shadow-md" >
//         {/* Image */ }
//         < img src = { c2 } alt = "Course 1" className = "mx-auto mb-4 w-full rounded-2xl" />
//             {/* Name */ }
//             < h2 className = "text-2xl font-semibold text-title" > Heba Ahmed </ >
//                 {/* Job title */ }
//                 < p className = "text-2xl pt-3 text-headerText " > Professor</ >
//                     {/* Description */ }
//                     < p className = "text-lg text-headerText text-center " > Courses : <span className='text-primaryColor text-2xl'>4</span> </ >
//                         {/* Buttons */ }
//                         < div className = 'mt-10 flex justify-center  gap-2' >
//                                     <Link to={'/Profile'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Show Profile
//                                         </button>
//                                     </Link>
//                                     <Link to={'/Courses'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Enroll With
//                                         </button>
//                                     </Link>
//                                 </ >
//                             </div >

//     {/*  Box 6 */ }
//     < div className = "bg-white pb-10  rounded shadow-md" >
//         {/* Image */ }
//         < img src = { c3 } alt = "Course 1" className = "mx-auto mb-4 w-full rounded-2xl" />
//             {/* Name */ }
//             < h2 className = "text-2xl font-semibold text-title" > Ahmed Hany</ >
//                 {/* Job title */ }
//                 < p className = "text-2xl pt-3 text-headerText " > Assistant Professor</ >
//                     {/* Description */ }
//                     < p className = "text-lg text-headerText text-center " > Courses : <span className='text-primaryColor text-2xl'>4</span> </ >
//                         {/* Buttons */ }
//                         < div className = 'mt-10 flex justify-center  gap-2' >
//                                     <Link to={'/Profile'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover: text-white '>
//                                             Show Profile
//                                         </button>
//                                     </Link>
//                                     <Link to={'/Courses'}>
//                                         <button className='bg-white px-4 py-2 rounded-2xl border-2 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
//                                             Enroll With
//                                         </button>
//                                     </Link>
//                                 </ >