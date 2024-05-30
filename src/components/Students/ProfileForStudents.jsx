import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Details } from '../../rtk/Slices/CoursesSlice';
import StudentNAV from './StudentNAV';
import { Account_Details } from '../../rtk/Slices/AccountDetailsSlice';
import CourseDetailsProfile from '../Course/CourseDetailsProfile';

const ProfileForStudents = ({ showtTitle }) =>
{
    const students = useSelector((state) => state.Profile);
    const dispatch = useDispatch();
    const [selectedCourse, setSelectedCourse] = useState(null);

    const toggleStudentProfiles = (courseId) =>
    {
        setSelectedCourse(courseId === selectedCourse ? null : courseId);
    };


    const handleShowProfile = (student) =>
    {
        dispatch(Account_Details(student)); // Dispatch the action to update the profile data
    };

    return (
        <div className='bg-[#fafafa] -mt-32'>
        <StudentNAV />
        <div className="container mx-auto pt-32 pb-40">
            {showtTitle && <h1 className="text-3xl font-bold mb-8 mt-32 text-center">Welcome to Your Profile</h1>
            }
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                {students && students.map(student => (
                    <>
                        <div key={student.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className='flex gap-10 items-center'>
                                <img src={student.img} alt={student.title} className="w-44 h-44 mb-4 rounded-full" />

                                <h2 className="text-title text-4xl font-semibold mb-2">{student.title}</h2>
                            </div>

                            <p className="text-title mb-4 flex items-end gap-2 text-md">
                                <span className='text-xl'>
                                    Email:
                                </span>
                                {student.email}
                            </p>

                            <p className="text-title mb-4 flex items-end gap-2 text-md">
                                <span className='text-xl'>
                                    University:
                                </span>
                                {student.description}
                            </p>
                            <p className="text-title mb-4 flex items-end gap-2 text-2xl">
                                <span className='text-xl'>
                                    Level:
                                </span>
                                {student.level}
                            </p>


                        </div>



                        <div key={student.id} className="bg-white p-6 rounded-lg shadow-md">

                            <p className="text-title mb-4 font-semibold">Courses Enrolled: {student.takenCourses.length}</p>
                            <div className="text-title  items-center mb-8">
                                <span className="font-semibold mb-4">Enrolled Courses:</span>
                                <ul className="flex flex-col  gap-2 ml-44 mb-10">
                                    {student.takenCourses.map(course => (
                                        <li key={course.id} onClick={() => toggleStudentProfiles(course.id)} className="list-decimal cursor-pointer font-semibold hover:text-SecondButton duration-300 mb-4">
                                            {course.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-4 flex justify-center'>
                                <Link to={'/Courses'}>
                                    <button className='bg-SecondButton text-white px-6 py-2 rounded-lg font-semibold hover:bg-SecondButton/80 transition duration-300'>
                                        Explore Courses
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </>

                ))}
            </div>
            {students && students.map(student => (
                <div key={student.id} className='mt-10 '>
                    {student.takenCourses.map(course => (
                        <div key={course.id} className=''>
                            {selectedCourse === course.id && <CourseDetailsProfile courseDetails={course} studentId={student.id} />}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>

    );
};

export default ProfileForStudents;
