import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCourses } from '../../rtk/Slices/CoursesSlice';
import { v4 as uuidv4 } from 'uuid';

export default function CreateCourse()
{
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '', // Ensure this is a string, not a number
        title: '',
        img: '',
        description: '',
        studentsEnrolled: '',
        instructor: '',
        publishedDate: '',
        numOfCourses: '',
        category: '',
        price: '',
        rating: '',
        aosDelay: '',
        progress: { grade: '', completed: false },
        readings: [{ id: "", title: "", content: "" }],
        multimedia: [{ id: "", title: "", videolink: "" }],
        lectures: [{ id: "", title: "", videolink: "" }],
        assignments: [{
            id: "", title: "", description: "", deadline: "",
            submitted: false
        }],
    });
    // ******************************************************************************************
    const handleChange = (e) =>
    {
        const { name, value, type, checked } = e.target;
        const [key, index, field] = name.split('.');

        if (key && index && field) {
            // Array fields
            handleArrayChange(parseInt(index), key, field, type === 'checkbox' ? checked : value);
        } else if (type === 'checkbox') {
            // Checkbox fields
            setFormData(prevState => ({
                ...prevState,
                [name]: checked,
            }));
        } else {
            // Non-array fields
            setFormData(prevState => ({
                ...prevState,
                [name]: name === 'id' && value === '' ? generateUniqueId() : value,
            }));
        }
    };


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const courseWithId = { ...formData, id: generateUniqueId() }; // Corrected to call generateUniqueId()
        dispatch(addToCourses(courseWithId));
        resetForm();
    };

    const handleArrayChange = (index, key, field, newValue) =>
    {
        setFormData(prevState => ({
            ...prevState,
            [key]: prevState[key].map((item, i) =>
                i === index ? { ...item, [field]: newValue } : item
            ),
        }));
    };



    const resetForm = () =>
    {
        setFormData({
            id: '', // Ensure this is a string, not a number
            title: '',
            img: '',
            description: '',
            studentsEnrolled: '',
            instructor: '',
            publishedDate: '',
            numOfCourses: '',
            category: '',
            price: '',
            rating: '',
            aosDelay: '',
            progress: { grade: '', completed: false },
            readings: [{ id: "", title: "", content: "" }],
            multimedia: [{ id: "", title: "", videolink: "" }],
            lectures: [{ id: "", title: "", videolink: "" }],
            assignments: [{ id: "", title: "", description: "", deadline: "", submitted: false }],
        });
    };

    const generateUniqueId = () =>
    {
        // Retrieve the last used ID from local storage or default to 0 if it doesn't exist
        let lastId = parseInt(localStorage.getItem('lastId')) || 0;
        // Increment the last ID
        lastId++;
        // Save the updated last ID back to local storage
        localStorage.setItem('lastId', lastId.toString());
        // Return the new ID as a string
        return lastId.toString();
    };

    const handleAddLecture = () =>
    {
        setFormData((prevState) => ({
            ...prevState,
            lectures: [
                ...prevState.lectures,
                { id: generateUniqueId(), title: '', videolink: '' },
            ],
        }));
    };
    const handleAddAssignment = () =>
    {
        setFormData((prevState) => ({
            ...prevState,
            assignments: [
                ...prevState.assignments,
                { id: uuidv4(), title: '', description: '', deadline: '', submitted: false },
            ],
        }));
    };
    const handleAddMultimedia = () =>
    {
        setFormData((prevState) => ({
            ...prevState,
            multimedia: [
                ...prevState.multimedia,
                { id: uuidv4(), title: '', videolink: '' },
            ],
        }));
    };
    const handleAddReading = () =>
    {
        setFormData((prevState) => ({
            ...prevState,
            readings: [
                ...prevState.readings,
                { id: uuidv4(), title: '', content: '' },
            ],
        }));
    };

    return (
        <div className='bg-gray-100 py-24'>
            <div className='mx-auto mt-10 p-10 max-w-2xl bg-white shadow-md rounded-md'>
                <h2 className='text-4xl mb-12 font-bold text-center text-title' >Create New Course</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Input fields for course details */}
                    <div className='grid grid-cols-2 gap-x-4 gap-y-4'>
                        <div>
                            <label htmlFor="title" className='block mb-1'>Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                        </div>
                        <div>
                            <label htmlFor="id" className='block mb-1'>Course ID:</label>
                            <input
                                type="text"
                                id="id"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                        </div>
                    </div>
                    <label htmlFor="img" className='block mb-1'>Image URL:</label>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    />
                    <label htmlFor="description" className='block mb-1'>Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    ></textarea>
                    <label htmlFor="studentsEnrolled" className='block mb-1'>Students Enrolled:</label>
                    <input
                        type="number"
                        id="studentsEnrolled"
                        name="studentsEnrolled"
                        value={formData.studentsEnrolled}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    />
                    <label htmlFor="instructor" className='block mb-1'>Instructor:</label>
                    <input
                        type="text"
                        id="instructor"
                        name="instructor"
                        value={formData.instructor}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    />
                    <label htmlFor="publishedDate" className='block mb-1'>Published Date:</label>
                    <input
                        type="date"
                        id="publishedDate"
                        name="publishedDate"
                        value={formData.publishedDate}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    />
                    <label htmlFor="numOfCourses" className='block mb-1'>Number of Courses:</label>
                    <input
                        type="number"
                        id="numOfCourses"
                        name="numOfCourses"
                        value={formData.numOfCourses}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    />
                    {/* Category */}
                    <label className='block mb-1'>Category:</label>
                    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
                        <div>
                            <input
                                type="checkbox"
                                id="frontEnd"
                                name="category"
                                value="Front_End"
                                checked={formData.category === "Front_End"}
                                onChange={() => setFormData({ ...formData, category: "Front_End" })}
                            />
                            <label htmlFor="frontEnd" className='ml-2'>Front End</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="backEnd"
                                name="category"
                                value="Back_End"
                                checked={formData.category === "Back_End"}
                                onChange={() => setFormData({ ...formData, category: "Back_End" })}
                            />
                            <label htmlFor="backEnd" className='ml-2'>Back End</label>
                        </div>
                    </div>

                    {/* Price */}
                    <label htmlFor="price" className='block mb-1'>Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    />
                    {/* Rating */}
                    <label htmlFor="rating" className='block mb-1'>Rating:</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    />
                    {/* Progress Grade */}
                    <label htmlFor="progressGrade" className='block mb-1'>Progress Grade:</label>
                    <input
                        type="number"
                        id="progressGrade"
                        name="progress.grade"
                        value={formData.progress.grade}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md px-3 py-2'
                    />
                    {/* Progress Completed */}
                    <div className='flex items-center'>
                        <input
                            type="checkbox"
                            id="progressCompleted"
                            name="progress.completed"
                            checked={formData.progress.completed}
                            onChange={handleChange}
                            className='mr-2'
                        />
                        <label htmlFor="progressCompleted" className='mb-1'>Progress Completed</label>
                    </div>
                    {/* Readings */}
                    {formData.readings.map((reading, index) => (
                        <div key={index} className='border border-gray-300 rounded-md p-4 mb-4'>
                            <label htmlFor={`readings-${index}-id`} className='block mb-1'>Reading ID:</label>
                            <input
                                type="text"
                                id={`readings-${index}-id`}
                                name={`readings.${index}.id`}
                                value={reading.id}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />

                            <label htmlFor={`readings-${index}-title`} className='block mb-1'>Reading Title:</label>
                            <input
                                type="text"
                                id={`readings-${index}-title`}
                                name={`readings.${index}.title`}
                                value={reading.title}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <label htmlFor={`readings-${index}-content`} className='block mb-1'>Reading Content:</label>
                            <input
                                type="text"
                                id={`readings-${index}-content`}
                                name={`readings.${index}.content`}
                                value={reading.content}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <button type="button" onClick={handleAddReading} className='bg-SecondButton text-white px-4 py-2 rounded-md mt-2'>Add Reading</button>
                        </div>
                    ))}

                    {/* Multimedia */}
                    {formData.multimedia.map((item, index) => (
                        <div key={index} className='border border-gray-300 rounded-md p-4 mb-4'>
                            <label htmlFor={`multimedia-${index}-id`} className='block mb-1'>Multimedia ID:</label>
                            <input
                                type="text"
                                id={`multimedia-${index}-id`}
                                name={`multimedia.${index}.id`}
                                value={item.id}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <label htmlFor={`multimedia-${index}-title`} className='block mb-1'>Multimedia Title:</label>
                            <input
                                type="text"
                                id={`multimedia-${index}-title`}
                                name={`multimedia.${index}.title`}
                                value={item.title}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <label htmlFor={`multimedia-${index}-videolink`} className='block mb-1'>Video Link:</label>
                            <input
                                type="text"
                                id={`multimedia-${index}-videolink`}
                                name={`multimedia.${index}.videolink`}
                                value={item.videolink}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <button type="button" onClick={handleAddMultimedia} className='bg-SecondButton text-white px-4 py-2 rounded-md mt-2'>Add Multimedia</button>
                        </div>
                    ))}

                    {/* Lectures */}
                    {formData.lectures.map((item, index) => (
                        <div key={index} className='border border-gray-300 rounded-md p-4 mb-4'>
                            <label htmlFor={`lectures-${index}-id`} className='block mb-1'>Lecture ID:</label>
                            <input
                                type="text"
                                id={`lectures-${index}-id`}
                                name={`lectures.${index}.id`}
                                value={item.id}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <label htmlFor={`lectures-${index}-title`} className='block mb-1'>Lecture Title:</label>
                            <input
                                type="text"
                                id={`lectures-${index}-title`}
                                name={`lectures.${index}.title`}
                                value={item.title}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <label htmlFor={`lectures-${index}-videolink`} className='block mb-1'>Video Link:</label>
                            <input
                                type="text"
                                id={`lectures-${index}-videolink`}
                                name={`lectures.${index}.videolink`}
                                value={item.videolink}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <button type="button" onClick={handleAddLecture} className='bg-SecondButton text-white px-4 py-2 rounded-md mt-2'>Add Lecture</button>
                        </div>
                    ))}

                    {/* Assignments */}
                    {formData.assignments.map((item, index) => (
                        <div key={index} className='border border-gray-300 rounded-md p-4 mb-4'>
                            <label htmlFor={`assignments-${index}-id`} className='block mb-1'>Assignment ID:</label>
                            <input
                                type="text"
                                id={`assignments-${index}-id`}
                                name={`assignments.${index}.id`}
                                value={item.id}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <label htmlFor={`assignments-${index}-title`} className='block mb-1'>Assignment Title:</label>
                            <input
                                type="text"
                                id={`assignments-${index}-title`}
                                name={`assignments.${index}.title`}
                                value={item.title}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <label htmlFor={`assignments-${index}-description`} className='block mb-1'>Description:</label>
                            <input
                                type="text"
                                id={`assignments-${index}-description`}
                                name={`assignments.${index}.description`}
                                value={item.description}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <label htmlFor={`assignments-${index}-deadline`} className='block mb-1'>Deadline:</label>
                            <input
                                type="date"
                                id={`assignments-${index}-deadline`}
                                name={`assignments.${index}.deadline`}
                                value={item.deadline}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-md px-3 py-2'
                            />
                            <div className='flex items-center'>
                                <input
                                    type="checkbox"
                                    id={`assignments-${index}-submitted`}
                                    name={`assignments.${index}.submitted`}
                                    checked={item.submitted}
                                    onChange={handleChange}
                                    className='mr-2'
                                />
                                <label htmlFor={`assignments-${index}-submitted`} className='mb-1'>Submitted</label>
                            </div>
                            <button type="button" onClick={handleAddAssignment} className='bg-SecondButton text-white px-4 py-2 rounded-md mt-2'>Add Assignment</button>
                        </div>
                    ))}


                    <button type="submit" className='bg-SecondButton text-white px-4 py-2 rounded-md'>Create Course</button>
                </form>
            </div>
        </div>
    );

}
