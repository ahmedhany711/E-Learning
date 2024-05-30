
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Assingment from '../Assingment/Assingment';
import { markLectureCompleted } from '../../rtk/Slices/StudentsSlice';
import './C_Details.scss';
import Footer from '../Footer/Footer';
import { gradeAssignment } from '../../rtk/Slices/CoursesSlice';

// const CourseDetailsProfile = ({ courseDetails }) =>
// {
//     const dispatch = useDispatch();
//     const [completedLectures, setCompletedLectures] = useState([]);
//     const [progress, setProgress] = useState(0);

//     const handleLectureCompletion = (lectureId) =>
//     {
//         if (!completedLectures.includes(lectureId)) {
//             setCompletedLectures([...completedLectures, lectureId]);
//             dispatch(markLectureCompleted({ courseId: courseDetails.id, lectureId }));
//         } else {
//             setCompletedLectures(completedLectures.filter(id => id !== lectureId));
//             // Dispatch an action to update lecture completion status in Redux
//         }
//     };

//     useEffect(() =>
//     {
//         if (courseDetails && courseDetails.lectures) {
//             const totalLectures = courseDetails.lectures.length;
//             const completedCount = completedLectures.length;
//             const progress = totalLectures > 0 ? (completedCount / totalLectures) * 100 : 0;
//             setProgress(progress);
//         }
//     }, [completedLectures, courseDetails]);

const CourseDetailsProfile = ({ courseDetails, studentId }) =>
{
    const dispatch = useDispatch();
    const [completedLectures, setCompletedLectures] = useState([]);
    const [progress, setProgress] = useState({ grade: 0, completed: false });
    const [selectedAssignment, setSelectedAssignment] = useState(null); // New state for selected assignment

    const handleLectureCompletion = (lectureId) =>
    {
        if (!completedLectures.includes(lectureId)) {
            setCompletedLectures([...completedLectures, lectureId]);
            dispatch(markLectureCompleted({ courseId: courseDetails.id, lectureId, studentId }));
        } else {
            setCompletedLectures(completedLectures.filter(id => id !== lectureId));
            // Dispatch an action to update lecture completion status in Redux
        }
    };

    useEffect(() =>
    {
        if (courseDetails && courseDetails.lectures) {
            const totalLectures = courseDetails.lectures.length;
            const completedCount = completedLectures.length;
            const grade = totalLectures > 0 ? (completedCount / totalLectures) * 100 : 0;
            const completed = completedCount === totalLectures;
            setProgress({ grade, completed });
            // Store progress data in local storage
            localStorage.setItem(`progress_${studentId}_${courseDetails.id}`, JSON.stringify({ grade, completed }));
        }
    }, [completedLectures, courseDetails, studentId]);

    const handleGradeAssignment = (assignment) =>
    {
        dispatch(gradeAssignment({ courseId: courseDetails.id, assignmentId: assignment.id, grade: assignment.grade }));
    };

    const handleAssignmentSelect = (assignmentId) =>
    {
        setSelectedAssignment(assignmentId);
    };



    return (
        <div>
            <div className="bg-gray-100 min-h-screen px-10 py-2">
                <div className='grid grid-cols-3 gap-4 container pt-8 pb-12'>
                    <div className="max-w-4xl">
                        <div key={courseDetails.id} className="bg-white rounded-lg shadow-md p-8 mt-20">
                            <div className="flex justify-center items-center mb-4">
                                <img className="w-[50%] h-[150px]" src={courseDetails.img} alt={courseDetails.title} />
                            </div>
                            <div className="lectures bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-2 text-title">Lectures</h3>
                                <ul>
                                    {courseDetails.lectures.map(lecture => (
                                        <li key={lecture.id} className="mb-1">
                                            <input
                                                type="checkbox"
                                                checked={completedLectures.includes(lecture.id)}
                                                onChange={() => handleLectureCompletion(lecture.id)}
                                                className="mr-2"
                                            />
                                            <span>{lecture.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-2 text-title">Progress</h3>
                                <progress className="custom-progress" value={progress.grade} max="100">{progress.grade}%</progress>
                                <span className="text-sm font-bold mt-1 text-title">{progress.grade}%</span>
                                <p><strong>Completed:</strong> {progress.completed ? 'Yes' : 'No'}</p>
                            </div>
                            {/* 
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-2 text-title">Progress</h3>
                                <p><strong>Grade:</strong> {progress.grade}%</p>
                                <p><strong>Completed:</strong> {progress.completed ? 'Yes' : 'No'}</p>
                            </div> */}

                        </div>
                    </div>
                    {/* Assingment */}
                    <div className="max-w-4xl">
                        <div key={courseDetails.id} className="bg-white rounded-lg shadow-md p-8 mt-20">
                            {/* Assingments */}
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-2 text-title">Assignments</h3>
                                <ul>
                                    {courseDetails.assignments.map(assignment => (
                                        <li key={assignment.id} className="mb-2">
                                            <strong className='block'>{assignment.title} :-</strong>  <p className='pl-4'>{assignment.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Multimedia */}
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-2 text-title">Multimedia</h3>
                                <ul>
                                    {courseDetails.multimedia.map(media => (
                                        <li key={media.id} className="mb-1">
                                            <strong>{media.title}</strong>: <a href={media.videoLink}>{media.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="max-w-4xl">
                        <div key={courseDetails.id} className="bg-white rounded-lg shadow-md p-8 mt-20">
                            {/* readings */}
                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-2 text-title">Readings</h3>
                                <ul>
                                    {courseDetails.readings.map(reading => (
                                        <li key={reading.id} className="mb-1">
                                            <strong className='block'>{reading.title} :- </strong>
                                            <p className='pl-4'>{reading.content}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                                <h3 className="text-xl font-bold mb-2 text-title">Information</h3>
                                <p><strong>Instructor:</strong> {courseDetails.instructor}</p>
                                <p><strong>Published Date:</strong> {courseDetails.publishedDate}</p>
                                <p><strong>Students Enrolled:</strong> {courseDetails.studentsEnrolled}</p>
                                <p><strong>Category:</strong> {courseDetails.category}</p>
                                <p><strong>Price:</strong> {courseDetails.price}</p>
                                <p><strong>Rating:</strong> {courseDetails.rating}</p>
                                <p><strong>(Grade)progress:</strong> {courseDetails.progress.grade}</p>

                            </div>
                        </div>
                    </div>


                </div>
            </div >
            <div className='flex justify-center mb-[300px]'>
                {/* Add a dropdown menu to select assignments */}
                <div className='mt-20  '>
                    <p className=' text-nowrap mb-4 mr-5'> Select Assignment  :</p>
                    <select className='outline outline-SecondButton px-2 py-1 w-fit h-fit ml-20' value={selectedAssignment} onChange={(e) => handleAssignmentSelect(e.target.value)} >
                        <option value="">Select Assignment</option>
                        {courseDetails.assignments.map(assignment => (
                            <option key={assignment.id} value={assignment.id}>{assignment.title}</option>
                        ))}
                    </select>
                    {/* Render the selected assignment */}
                    {selectedAssignment && (
                        <Assingment
                            courseId={courseDetails.id}
                            assignmentId={selectedAssignment}
                            assignmentTitle={
                                courseDetails.assignments.find(assignment => assignment.id === parseInt(selectedAssignment))?.title || "Assignment Title Not Available"
                            }
                        />
                    )}

                </div>
            </div>


        </div >

    );
};

export default CourseDetailsProfile;

