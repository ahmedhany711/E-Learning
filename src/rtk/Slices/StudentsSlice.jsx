import { createSlice } from "@reduxjs/toolkit";
import c1 from "../../images/img1.jpg";
import c2 from "../../images/img2.jpg";
import c3 from "../../images/img3.jpg";
import c4 from "../../images/img4.jpg";
import c5 from "../../images/img5.jpg";
import c6 from "../../images/img6.png";

const initialState = [
  {
    isLoggedIn: true,
    id: 1,
    title: "Ahmed Hany",
    email: "ahmed@gmail.com",
    img: c1,
    description: "Ain shams, Faculty of Computer science",
    aosDelay: 0,
    level: 4,
    takenCourses: [],
    numOfCourses: 0,
  },
  {
    isLoggedIn: false,
    id: 2,
    title: "Ahmed Hany",
    img: c2,
    email: "ahmed@gmail.com",

    description: "Ain shams, Faculty of Computer science",
    aosDelay: 0,
    level: 4,
    takenCourses: [],
    numOfCourses: 0,
  },
  {
    id: 3,
    isLoggedIn: false,
    email: "ahmed@gmail.com",

    title: "Ahmed Hany",
    img: c3,
    description: "Ain shams, Faculty of Computer science",
    aosDelay: 0,
    level: 4,
    takenCourses: [],
    numOfCourses: 0,
  },
  {
    id: 4,
    isLoggedIn: false,
    email: "ahmed@gmail.com",

    title: "Ahmed Hany",
    img: c4,
    description: "Ain shams, Faculty of Computer science",
    numOfCourses: 0,
    takenCourses: [],
    aosDelay: 0,
    level: 4,
  },
  {
    id: 5,
    isLoggedIn: false,
    title: "Ahmed Hany",
    email: "ahmed@gmail.com",

    img: c5,
    description: "Ain shams, Faculty of Computer science",
    numOfCourses: 0,
    takenCourses: [],
    aosDelay: 0,
    level: 4,
  },
  {
    id: 6,
    isLoggedIn: false,
    email: "ahmed@gmail.com",

    title: "Ahmed Hany",
    img: c6,
    description: "Ain shams, Faculty of Computer science",
    takenCourses: [],
    numOfCourses: 0,
    aosDelay: 0,
    level: 4,

  },
  {
    id: 7,
    title: "Ahmed Hany",
    img: c1,
    email: "ahmed@gmail.com",

    description: "Ain shams, Faculty of Computer science",
    numOfCourses: 0,
    aosDelay: 0,
    takenCourses: [],
    level: 4,
    courseMaterials: [
      { id: 1, type: "lecture", title: "Lecture 1", content: "..." },
      { id: 2, type: "reading", title: "Reading 1", content: "..." },
      // Other course materials for Course 1
    ],
    assignments: [
      {
        id: 1,
        title: "Assignment 1",
        deadline: "2024-05-15",
        submitted: false,
      },
      // Other assignments for Course 1
    ],
    progress: { grade: 85, completed: true }, // Progress tracking for Course 1
  },
];

export const Students = createSlice({
  initialState,
  name: "Students",
  reducers: {
    addToCourses: (state, action) =>
    {
      const { studentId, courseData } = action.payload;
      const studentIndex = state.findIndex(
        (student) => student.id === studentId
      );

      // If student is found, update the state immutably
      if (studentIndex !== -1) {
        const student = state[studentIndex];
        // Check if the course already exists in the student's takenCourses array
        const isCourseTaken = student.takenCourses.some(
          (course) => course.id === courseData.id
        );
        if (!isCourseTaken) {
          return state.map((student, index) =>
          {
            if (index === studentIndex) {
              // Toggle isLoggedIn for the clicked student and set others to false
              return {
                ...student,
                isLoggedIn: true,
                numOfCourses: student.numOfCourses + 1,
                takenCourses: [...student.takenCourses, courseData],
              };
            }
            return { ...student, isLoggedIn: false }; // Set others to false
          });
        }
      }
      return state; // Return unchanged if student is not found or course already exists
    },
    updateEnrolledCourses: (state, action) =>
    {
      const { studentId, enrolledCourses } = action.payload;
      const student = state.find(student => student.id === studentId);
      if (student) {
        student.takenCourses = enrolledCourses;
      }
    },
    markLectureCompleted: (state, action) =>
    {
      const { studentId, courseId, lectureId } = action.payload;
      const student = state.find((student) => student.id === studentId);
      if (student) {
        const course = student.takenCourses.find(
          (course) => course.id === courseId
        );
        if (course) {
          course.progress = course.progress || {};
          course.progress[lectureId] = true;
        }
      }
    },

    Details: (state, action) =>
    {
      state.push(action.payload);
    },
    submitAssignment: (state, action) =>
    {
      const { studentId, courseId, assignmentId } = action.payload;
      const studentIndex = state.findIndex(
        (student) => student.id === studentId
      );
      if (studentIndex !== -1) {
        const courseIndex = state[studentIndex].takenCourses.findIndex(
          (course) => course.id === courseId
        );
        if (courseIndex !== -1) {
          const assignmentIndex = state[studentIndex].takenCourses[
            courseIndex
          ].assignments.findIndex(
            (assignment) => assignment.id === assignmentId
          );
          if (assignmentIndex !== -1) {
            state[studentIndex].takenCourses[courseIndex].assignments[
              assignmentIndex
            ].submitted = true;
          }
        }
      }
    },
    deleteStudent: (state, action) =>
    {
      const studentIdToDelete = action.payload;
      return state.filter(student => student.id !== studentIdToDelete);
    },
    deleteCourse: (state, action) =>
    {
      const courseIdToDelete = action.payload;
      // Loop through all students and remove the course from their enrolled courses
      state.forEach((student) =>
      {
        student.takenCourses = student.takenCourses.filter(
          (course) => course.id !== courseIdToDelete
        );
      });
    },
  },
});

export const {
  addToCourses,
  Details,
  markLectureCompleted,
  deleteStudent,
  deleteCourse,
  updateEnrolledCourses,
} = Students.actions;
export default Students.reducer;
