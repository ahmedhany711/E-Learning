import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCourses } from '../rtk/Slices/StudentsSlice';

const Enroll = () =>
{
    const dispatch = useDispatch();
    const courses = useSelector(state => state.Courses);
    const students = useSelector(state => state.Students);

    const handleCourseSelection = (course) =>
    {
        students.forEach(student =>
        {
            // Dispatch action to add the selected course to each student's profile
            dispatch(addToCourses({ studentId: student.id, courseData: course }));
        });
    };

    const handleEnroll = () =>
    {
        // Redirect to student profile
        window.location.href = '/profile';
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Enroll in Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {courses.map(course => (
                    <div key={course.id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={course.img} alt={course.title} className="w-full h-48 object-cover mb-4 rounded-md" />
                        <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                        <p className="text-gray-600 mb-2">{course.description}</p>
                        <p className="text-gray-600">Price: {course.price}</p>
                        <button onClick={() => handleCourseSelection(course)} className="bg-primaryColor text-white px-4 py-2 rounded-md mt-4 hover:bg-primaryColorDark transition duration-300">
                            Select Course
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <button onClick={handleEnroll} className="bg-primaryColor text-white px-6 py-3 rounded-md hover:bg-primaryColorDark transition duration-300">
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default Enroll;
