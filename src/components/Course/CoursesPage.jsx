
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CourseDetails from "./CourseDetails";
import Footer from "../Footer/Footer";
import { Details } from "../../rtk/Slices/DetailsSlice";
import { addToCourses, updateEnrolledCourses } from "../../rtk/Slices/StudentsSlice";
import { addStudentToCourse, deleteCourse, editCourseDetails } from "../../rtk/Slices/CoursesSlice";
export const selectLoggedInUserId = (state) => state.auth.user?.id;

const CoursesPage = ({ showFooter }) =>
{
  const CourseData = useSelector((state) => state.Courses.courses);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.StudentS);

  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedAssignCourseId, setSelectedAssignCourseId] = useState(null);

  const [selectedCourse, setSelectedCourse] = useState(null);
  // Add state for selected course


  // Retrieve the logged-in user ID from the students slice
  const loggedInUserId = useSelector(
    (state) => state.StudentS.find((student) => student.isLoggedIn)?.id
  );

  const handleCourseSelection = (course) =>
  {
    dispatch(addToCourses({ studentId: loggedInUserId, courseData: course }));
  };

  // Ensure you're dispatching the action with the correct payload
  const handleAssignStudents = (courseId) =>
  {
    setSelectedAssignCourseId(courseId); // Set the selected course ID
    // setSelectedCourseId(courseId);
    setSelectedCourse(CourseData.find(course => course.id === courseId));
  };

  // Function to add a student to the course
  const handleAddStudentToCourse = (studentId) =>
  {
    if ((selectedCourseId || selectedAssignCourseId) && selectedCourse) {
      const studentData = students.find(student => student.id === studentId);

      if (studentData) {
        dispatch(addStudentToCourse({ courseId: (selectedCourseId || selectedAssignCourseId), studentData }));
        handleCourseSelection(selectedCourse)
      }
    }
  };

  // Editttttttttt
  // Add state for edited course details
  const [editedDetails, setEditedDetails] = useState({
    title: "",
    description: "",
    price: "",
    publishedDate: "",
    // Add other fields here...
  });

  // == null ?  selectedAssignCourseId : selectedCourseId
  // Function to handle course edit
  // Function to handle course edit
  const handleCourseEdit = () =>
  {
    dispatch(editCourseDetails({ courseId: selectedCourseId, updatedDetails: editedDetails }));
    students.forEach((student) =>
    {
      if (student.takenCourses.includes(selectedCourseId)) {
        // Dispatch action to update enrolled course details for each student
        dispatch(updateEnrolledCourses({
          studentId: student.id,
          courseId: selectedCourseId,
          updatedDetails: editedDetails
        }));
      }
    });
    // Reset editedDetails state
    setEditedDetails({
      title: "",
      description: "",
      price: "",
      publishedDate: "",
      // Reset other fields here...
    });
    // Close the modal or navigate back to the course details page
    setSelectedCourseId(null);
    setSelectedAssignCourseId(null);
  };


  // Archiveeeeeeeeeeeeeeeeeeeeee
  const [archivedCourses, setArchivedCourses] = useState([]);

  // Function to handle archiving a course
  const handleArchive = (courseId) =>
  {
    // Find the index of the course by its ID
    const courseIndex = CourseData.findIndex((course) => course.id === courseId);

    if (courseIndex !== -1) {
      // Create a copy of the course object at the found index
      const updatedCourse = { ...CourseData[courseIndex] };

      // Toggle the archived property
      updatedCourse.archived = !updatedCourse.archived;

      // Create a new array with the updated course object
      const updatedCourseData = [...CourseData];
      updatedCourseData[courseIndex] = updatedCourse;

      // Update the state with the new array
      dispatch(editCourseDetails({ courseId, updatedDetails: updatedCourse }));
    }
  };





  return (
    <>
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
                      <p className={`bg-primaryColor text-white py-1 mb-0 px-2 rounded-lg
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
                        <p className={`text-white py-1 px-0 mb-0 bg-primaryColor rounded-lg text-lg
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
                      data.archived == false ? (
                        <Link
                          to={"/Courses"}
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

                    {/* Button Delete */}
                    <div>
                      <button
                        className="bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-SecondButton hover:text-white "
                        onClick={() =>
                        {
                          dispatch(deleteCourse(data.id));
                        }}
                      >
                        Delete
                      </button>
                    </div>

                    {/* Edit button */}
                    <div>
                      <button
                        className="bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton hover:bg-SecondButton hover:text-white"
                        onClick={() =>
                        {
                          setSelectedCourseId(data.id);
                          // setSelectedAssignCourseId(data.id);
                          setSelectedCourse(data);
                          // Set initial values for editedDetails
                          setEditedDetails({
                            title: data.title,
                            description: data.description,
                            price: data.price,
                            publishedDate: data.publishedDate,
                            // Set other fields here...
                          });
                        }}
                      >
                        Edit
                      </button>
                    </div>

                    {/* Assign Students */}
                    <div className="mb-10">
                      <button
                        className="bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-SecondButton hover:text-white "
                        onClick={() =>
                        {
                          handleAssignStudents(data.id);
                        }}
                      >
                        Assign Students
                      </button>
                    </div>


                    {/* Archive */}
                    <div className={` rounded relative -mb-8`}>
                      {/* Add an Archive Button */}
                        <button
                          className={`absolute bottom-0 right-4  px-3 py-1 rounded-tr rounded-bl hover:text-white  hover:bg-SecondButton/80 ${data.archived ? 'opacity-80 bg-white text-SecondButton' : 'bg-white text-SecondButton'}`}
                          onClick={() => handleArchive(data.id)}
                        >
                          {data.archived ? "ARCHIVED" : "Archive"}

                        </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Student list modal */}
      {selectedAssignCourseId && (
        <div className="fixed z-10 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ">
          <div className="bg-white p-4 rounded shadow-lg w-[300px] ">
            <h2 className="text-xl font-semibold mb-4">Select Students</h2>
            <ul>
              {students.map((student) => (
                <li key={student.id} className="flex justify-between items-center border-b py-2">
                  <span>{student.title}</span>
                  <button
                    onClick={() =>
                    {
                      handleAddStudentToCourse(student.id)

                    }}
                    className="bg-SecondButton/80 text-white px-3 py-1 rounded hover:bg-SecondButton"
                  >
                    Add to Course
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded mt-4"
              onClick={() => setSelectedAssignCourseId(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Edit course modal */}
      {selectedCourseId && (
        <div className="fixed z-10 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg w-[300px]">
            <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
            {/* Edit form */}
            <form onSubmit={handleCourseEdit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-semibold mb-1">Title</label>
                <input
                  type="text"
                  id="title"
                  value={editedDetails.title}
                  onChange={(e) => setEditedDetails({ ...editedDetails, title: e.target.value })}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-semibold mb-1">Description</label>
                <textarea
                  id="description"
                  value={editedDetails.description}
                  onChange={(e) => setEditedDetails({ ...editedDetails, description: e.target.value })}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Price */}
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-semibold mb-1">Price</label>
                <input
                  type="text"
                  id="price"
                  value={editedDetails.price}
                  onChange={(e) => setEditedDetails({ ...editedDetails, price: e.target.value })}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Published Date */}
              <div className="mb-4">
                <label htmlFor="publishedDate" className="block text-sm font-semibold mb-1">Published Date</label>
                <input
                  type="text"
                  id="publishedDate"
                  value={editedDetails.publishedDate}
                  onChange={(e) => setEditedDetails({ ...editedDetails, publishedDate: e.target.value })}
                  className="w-full border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Other fields... */}
              <button
                type="submit"
                className="bg-primaryColor text-white px-4 py-2 rounded hover:bg-secondaryColor"
              >
                Save Changes
              </button>
            </form>
            {/* Close button */}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded mt-4"
              onClick={() => setSelectedCourseId(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="-mt-20">
        {
          showFooter && <Footer />
        }
      </div>
    </>
  );
};
export default CoursesPage;



