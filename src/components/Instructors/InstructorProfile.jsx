import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const InstructorProfile = ({ showTitle }) =>
{
    const Instructors = useSelector((state) => state.InstructorProfile);

    return (
        <div className="container mx-auto py-8 ">

            {showTitle && <h1 className="text-3xl font-bold mb-4 mt-12">Instructors Profiles</h1>}
            <div className="grid grid-cols-1 mx-auto p-12 ">
                {Instructors && Instructors.map(Instructor => (
                    <div key={Instructor.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={Instructor.img} alt={Instructor.name} className="w-[200px] h-[200px]  mb-4 rounded-md" />
                        <h2 className="text-xl font-semibold mb-2">{Instructor.name}</h2>
                        <p className="text-gray-600 mb-2">{Instructor.jobTitle}</p>
                        <p className="text-gray-600"> Courses : {Instructor.numOfCourses}</p>
                        <p className="text-gray-600"> Students : {Instructor.numOfStudents}</p>
                        <p className="text-gray-600"> Rating :
                            {Instructor.rating}</p>

                        {/* Buttons */}
                        <div className='mt-10 flex justify-around gap-1'>

                            <Link to={'/CreateCourse'}>
                                <button className='bg-white px-3 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-primaryColor hover:text-white '>
                                    Create Course
                                </button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructorProfile;
