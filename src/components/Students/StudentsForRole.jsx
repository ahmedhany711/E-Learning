import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Students.scss";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Details } from "../../rtk/Slices/DetailsSlice";

import { addToCourses, deleteCourse } from "../../rtk/Slices/StudentsSlice";
import
{
    Account_Details,
    Student_Details,
} from "../../rtk/Slices/AccountDetailsSlice";

export default function StudentsForRole({ title })
{
    const studentsData = useSelector((state) => state.StudentS);
    const CourseData = useSelector((state) => state.Courses.courses);

    const dispatch = useDispatch();

    const handleShowProfile = (student) =>
    {
        dispatch(Details(student));
    };

    const handleAccessMaterials = (studentId, courseId) => { };

    const handleSubmitAssignment = (studentId, courseId, assignmentId) =>
    {
        // Implement functionality to submit assignments
        console.log(
            `Submitting assignment for Student ID ${studentId}, Course ID ${courseId}, and Assignment ID ${assignmentId}`
        );
    };

    // Retrieve the logged-in user ID from the students slice
    const loggedInUserId = useSelector(
        (state) => state.StudentS.find((student) => student.isLoggedIn)?.id
    );

    // Update handleCourseSelection to accept the selected course
    const handleCourseSelection = (course) =>
    {
        if (course) {
            dispatch(addToCourses({ studentId: loggedInUserId, courseData: course }));
        } else {
            console.error("No course selected");
        }
    };

    return (
        <>
            <div id="" className="mx-auto mt-2 mb-10">
                {/* Body */}
                <div className="bg-[#fafafa] py-20">
                    <div className="text-center px-20 ">
                        {/* All Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10">
                            {studentsData.map(
                                (data) =>
                                    data.isLoggedIn && (
                                        <div
                                            key={data.id}
                                            className="bg-white pb-10 rounded shadow-md flex flex-col "
                                        >
                                            {/* Image and text */}
                                            <div className=" flex gap-10 items-center">
                                                {/* Image */}
                                                <div className=" p-3 ">
                                                    <Link
                                                        to={"/ProfileForStudents"}
                                                        onClick={() =>
                                                        {
                                                            dispatch(Account_Details(data));
                                                        }}
                                                    >
                                                        <img
                                                            src={data.img}
                                                            alt="Course 1"
                                                            className="mb-4 w-52 h-52 rounded-full object-contain  p-1 hover:scale-105 "
                                                        />
                                                    </Link>
                                                </div>
                                                {/* Text Details */}
                                                <div className="text-left">
                                                    {/* title */}
                                                    <Link
                                                        to={"/ProfileForStudents"}
                                                        className=" no-underline "
                                                        onClick={() =>
                                                        {
                                                            dispatch(Account_Details(data));
                                                        }}
                                                    >
                                                        <h2 className="text-4xl hover:scale-105 font-semibold text-title ">
                                                            {data.title}
                                                        </h2>
                                                    </Link>

                                                    {/* Description */}
                                                    <p className="text-xl text-headerText  text-left px-0 mx-0">
                                                        {data.description}
                                                    </p>

                                                    {/* Enrolled Courses */}
                                                    <div className="">
                                                        {data.takenCourses.length < 1 ? (
                                                            <p className="text-lg text-headerText text-left px-0 mx-0">
                                                                Enrolled Courses:{" "}
                                                                <span className="text-SecondButton text-lg">
                                                                    None
                                                                </span>
                                                            </p>
                                                        ) : (
                                                            <p className="text-lg text-headerText text-left px-0 mx-0">
                                                                Enrolled Courses:{" "}
                                                                <span className="text-SecondButton text-lg">
                                                                    {data.takenCourses &&
                                                                        data.takenCourses
                                                                            .map((course) => course.title)
                                                                            .join(", ")}
                                                                </span>
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Num of Courses */}
                                                    <p className="text-lg text-headerText text-left">
                                                        Courses :{" "}
                                                        <span className="text-SecondButton text-2xl">
                                                            {data.takenCourses.length}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Tables */}
                                            <div key={data.id} className="text-center px-20 my-10">
                                                <div key={data.id}>
                                                    {/* Enrolled Courses Table */}
                                                    <table className="border-collapse w-full mt-0">
                                                        <thead>
                                                            <tr className="bg-SecondButton text-white">
                                                                <th className="border border-SecondButton px-4 py-2">
                                                                    Course
                                                                </th>
                                                                <th className="border border-SecondButton px-4 py-2">
                                                                    Access Materials
                                                                </th>
                                                                <th className="border border-SecondButton px-4 py-2">
                                                                    Submit Assignment
                                                                </th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {data.takenCourses.map((course) => (
                                                                <tr key={course.id}>
                                                                    <td className="border border-gray-400 px-4 py-2">
                                                                        <Link
                                                                            to={`/courses/${course.title}/${course.id}`}
                                                                            className="no-underline text-black hover:text-SecondButton duration-300"
                                                                        >
                                                                            {course.title}
                                                                        </Link>
                                                                    </td>
                                                                    <td className="border border-gray-400 px-4 py-2">
                                                                        <Link
                                                                            to={`/courses/${course.title}/${course.id}`}
                                                                            onClick={() =>
                                                                            {
                                                                                dispatch(Details(course));
                                                                            }}
                                                                        >
                                                                            <button
                                                                                className="bg-white px-3 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton hover:bg-SecondButton hover:text-white"
                                                                                onClick={() =>
                                                                                    handleAccessMaterials(
                                                                                        data.id,
                                                                                        course.id
                                                                                    )
                                                                                }
                                                                            >
                                                                                Access Materials
                                                                            </button>
                                                                        </Link>
                                                                    </td>
                                                                    <td className="border border-gray-400 px-4 py-2">
                                                                        <Link
                                                                            to={`/courses/${course.title}/${course.id}`}
                                                                            onClick={() =>
                                                                            {
                                                                                dispatch(Details(course));
                                                                            }}
                                                                        >
                                                                            <button
                                                                                className="bg-white px-3 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton hover:bg-SecondButton
                                                                    hover:border-white
                                                                    hover:outline-white  hover:text-white"
                                                                                onClick={() =>
                                                                                    handleSubmitAssignment(
                                                                                        data.id,
                                                                                        course.id,
                                                                                        course.assignments[0].id
                                                                                    )
                                                                                }
                                                                            >
                                                                                Submit Assignment
                                                                            </button>
                                                                        </Link>
                                                                    </td>

                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="mt-10 flex justify-center gap-4">
                                                <Link key={data.id} to={"/CoursesForStudent"} onClick={() => { }}>
                                                    <button
                                                        className="bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton hover:bg-SecondButton
                                                                    hover:border-white
                                                                    hover:outline-white  hover:text-white "
                                                    >
                                                        Enroll Now
                                                    </button>
                                                </Link>
                                                <Link
                                                    to={"/ProfileForStudents"}
                                                    onClick={() =>
                                                    {
                                                        dispatch(Account_Details(data));
                                                    }}
                                                >
                                                    <button
                                                        className="bg-white px-3 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton hover:bg-SecondButton
                                                                    hover:border-white
                                                                    hover:outline-white  hover:text-white "
                                                    >
                                                        Show Profile
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            {/* <div div className="-mt-20">
                <Footer />
            </div> */}
        </>
    );
}
