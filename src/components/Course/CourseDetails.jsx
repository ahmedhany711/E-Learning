import React from 'react';
import {  useSelector } from 'react-redux';
import './C_Details.scss';
import Footer from '../Footer/Footer';
import CourseDetailsProfile from './CourseDetailsProfile';
import InstructorNAV from '../Instructors/InstructorNAV';

const CourseDetails = ({showNAv }) =>
{
    // const { courseId } = useParams();
    const courses = useSelector((state) => state.Details);
    // const [completedLectures, setCompletedLectures] = useState([]);
    // const [progress, setProgress] = useState(0);


    // useEffect(() =>
    // {
    //     const course = courses.find(course => course.id === parseInt(courseId));
    //     if (course && course.lectures) {
    //         const totalLectures = course.lectures.length;
    //         const completedCount = completedLectures.length;
    //         const progress =
    //           totalLectures > 0 ? (completedCount / totalLectures) * 100 : 0;
    //         setProgress(progress);
    //     }
    // }, [completedLectures, courseId, courses]);

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
                   
                </div>




                <div className='mt-[250px]'>
                    <Footer />
                </div>
            </div >


        </>

    );
};

export default CourseDetails;