import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseDetails, editCourseDetails } from "../../rtk/Slices/CoursesSlice";
import { Details } from "../../rtk/Slices/DetailsSlice";

const EditCoursePage = () =>
{
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const [courseDetails, setCourseDetails] = useState({});

    // Fetch course details when component mounts
    useEffect(() =>
    {
        dispatch(Details(courseId));
    }, [dispatch, courseId]);

    // Get course details from Redux state
    const course = useSelector((state) => state.Courses.courseDetails);

    // Update local state when course details are fetched
    useEffect(() =>
    {
        setCourseDetails(course);
    }, [course]);

    // Handle form submission to update course details
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        dispatch(editCourseDetails({ courseId, updatedDetails: courseDetails }));
    };

    // Handle input changes
    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setCourseDetails({ ...courseDetails, [name]: value });
    };

    return (
        <div>
            <h1>Edit Course</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={courseDetails.title || ''} onChange={handleChange} />

                {/* Add more form fields for other course details */}

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditCoursePage;
