
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CourseDetails from "./CourseDetails";
import Footer from "../Footer/Footer";
import { Details } from "../../rtk/Slices/DetailsSlice";
import { addToCourses, updateEnrolledCourses } from "../../rtk/Slices/StudentsSlice";
import { addStudentToCourse, deleteCourse, editCourseDetails } from "../../rtk/Slices/CoursesSlice";
import StudentNAV from "../Students/StudentNAV";
export const selectLoggedInUserId = (state) => state.auth.user?.id;

const CoursesPageForStudent = ({ showFooter }) =>
{
    const CourseData = useSelector((state) => state.Courses.courses);
    const dispatch = useDispatch();

    // Retrieve the logged-in user ID from the students slice
    const loggedInUserId = useSelector(
        (state) => state.StudentS.find((student) => student.isLoggedIn)?.id
    );

    const handleCourseSelection = (course) =>
    {
        dispatch(addToCourses({ studentId: loggedInUserId, courseData: course }));
    };


    return (
        <>
            <StudentNAV />
            <div id="" className="mx-auto my-2">
                {/* Header Section */}
                <div className="py-32 mx-0 bg-[#FAF6F6] text-center">
                    <h1 className="text-6xl font-bold text-title" data-aos="fade-up">
                        Courses
                    </h1>
                </div>

                {/* Body */}
                <div className="bg-[#fafafa] py-20">
                    <div className="text-center px-20">
                        {/* All Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {CourseData.map((data) => (
                                <div
                                    key={data.id}
                                    className={` pb-10 rounded shadow-md  relative ${data.archived ? 'opacity-70 bg-gray-300 ' : 'bg-white'}`}
                                >
                                    {/* Category + Price */}
                                    <div className="text-center absolute top-0 left-0 text-xs">
                                        <div className="flex flex-col gap-[1px]">
                                            <p className={` text-white py-1 mb-0 px-2 rounded-lg
                        ${data.archived ? ' bg-gray-400 ' : 'bg-primaryColor'}
                        `}>
                                                {data.category}
                                            </p>
                                            {data.price === "Free" ? (
                                                <p className={`text-white py-1 px-0 mb-0  rounded-lg text-lg 
                        ${data.archived ? ' bg-gray-400 ' : 'bg-[#83cd29]'}
                        `}>
                                                    {data.price}
                                                </p>
                                            ) : (
                                                <p className={`text-white py-1 px-0 mb-0  rounded-lg text-lg
                        ${data.archived ? ' bg-gray-400 ' : 'bg-primaryColor'}
                        `}>
                                                    $ {data.price}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="h-[300px]">
                                        <Link
                                            to={`/courses/${data.title}/${data.id}`}
                                            onClick={() =>
                                            {
                                                dispatch(Details(data));
                                            }}
                                        >
                                            <img
                                                src={data.img}
                                                alt="Course 1"
                                                className="mb-4 w-full object-contain rounded-2xl p-5"
                                            />
                                        </Link>
                                    </div>
                                    {/* title */}
                                    <h2 className="text-3xl font-semibold text-title">
                                        {data.title}
                                    </h2>
                                    {/* Description */}
                                    <p className="text-xl text-headerText px-2 ">
                                        {data.description}
                                    </p>

                                    {/* Enroll Now Delete */}
                                    <div className="mt-10 flex flex-col gap-3 justify-center mx-auto">

                                        {
                                            data.archived === false ? (
                                                <Link
                                                    to={"/CoursesForStudent "}
                                                    onClick={() =>
                                                    {
                                                        handleCourseSelection(data);

                                                    }}
                                                >
                                                    <button className="bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-SecondButton hover:text-white ">
                                                        Enroll Now
                                                    </button>
                                                </Link>
                                            ) : (
                                                <Link
                                                    to={""}
                                                    onClick={() =>
                                                    {


                                                    }}
                                                >
                                                    <button className="bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton hover:bg-SecondButton hover:text-white">
                                                        Not Enroll
                                                    </button>
                                                </Link>
                                            )}




                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          

            {/* Footer */}
            <div className="-mt-20">
                {
                    showFooter && <Footer />
                }
            </div>
        </>
    );
};
export default CoursesPageForStudent;



