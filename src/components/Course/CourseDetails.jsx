import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Assingment from '../Assingment/Assingment';
import { markLectureCompleted } from '../../rtk/Slices/StudentsSlice';
import './C_Details.scss';
import Footer from '../Footer/Footer';
import CourseDetailsProfile from './CourseDetailsProfile';
import InstructorNAV from '../Instructors/InstructorNAV';

const CourseDetails = ({showNAv }) =>
{
    const { courseId } = useParams();
    const courses = useSelector((state) => state.Details);
    const dispatch = useDispatch();
    const [completedLectures, setCompletedLectures] = useState([]);
    const [progress, setProgress] = useState(0);

    const handleLectureCompletion = (lectureId) =>
    {
        if (!completedLectures.includes(lectureId)) {
            setCompletedLectures([...completedLectures, lectureId]);
            dispatch(markLectureCompleted({ courseId, lectureId }));
        } else {
            setCompletedLectures(completedLectures.filter(id => id !== lectureId));
            // Dispatch an action to update lecture completion status in Redux
        }
    };

    useEffect(() =>
    {
        const course = courses.find(course => course.id === parseInt(courseId));
        if (course && course.lectures) {
            const totalLectures = course.lectures.length;
            const completedCount = completedLectures.length;
            const progress = totalLectures > 0 ? (completedCount / totalLectures) * 100 : 0;
            setProgress(progress);
        }
    }, [completedLectures, courseId, courses]);

    return (
        <>
            {
                showNAv && <InstructorNAV/> 
            }
            <div className="bg-gray-100 min-h-screen">
           
                {courses.map(course => (
                    <div key={course.id} className='mt-10 '>
                        
                            <div key={course.id} className=''>
                                { course.id && <CourseDetailsProfile courseDetails={course} studentId={course.id} />}
                            </div>
                       
                    </div>
                ))}
                <div className='flex justify-center'>
                    {/* <Assingment courseId={parseInt(courseId)} /> */}
                </div>




                <div className='mt-[250px]'>
                    <Footer />
                </div>
            </div >


        </>

    );
};

export default CourseDetails;