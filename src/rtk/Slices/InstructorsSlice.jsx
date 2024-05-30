import { createSlice } from "@reduxjs/toolkit";
import html from "../../images/Html.jpg";
import css from "../../images/css.png";
import js from "../../images/JSpng.png";
import php from "../../images/php.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/React.png";

import c1 from "../../images/img1.jpg";
import c2 from "../../images/img2.jpg";
import c3 from "../../images/img3.jpg";
import c4 from "../../images/img4.jpg";
import c5 from "../../images/img5.jpg";
import c6 from "../../images/img6.png";

const initialState = [
    {
        id: 1,
        name: "Heba Ahmed",
        img: c1,
        jobTitle: "Instructor",
        numOfCourses: 3,
        numOfStudents: 10,
        price: 25,
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 2,
        name: "Ahmed hany",
        img: c2,
        numOfStudents: 14,
        jobTitle: " Instructor  ",
        numOfCourses: 3,

        price: 13,
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 3,
        name: "Ali Ahmed",
        img: c3,
        numOfStudents: 15,
        jobTitle: "Instructor",
        numOfCourses: 3,
        price: 55,
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 4,
        name: "Abdo Ibrahim",
        img: c4,
        jobTitle: "Instructor",
        numOfCourses: 1,
        numOfStudents: 11,

        price: "Free",
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 5,
        name: "Marwa Abdin",
        img: c5,
        jobTitle: "Instructor",
        numOfCourses: 6,
        numOfStudents: 12,

        price: 25,
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 6,
        name: "Mostafa Ahmed",
        img: c6,
        jobTitle: "Instructor",
        numOfStudents: 5,

        numOfCourses: 2,

        price: "Free",
        rating: 5,
        aosDelay: 0,

    },

]

export const Instructor = createSlice({
    initialState,
    name: "Instructors",
    reducers: {
        addToCourses: (state, action) =>
        {
            state.push(action.payload);
        },
        Details: (state, action) =>
        {
            state.push(action.payload);
        },

    },
});

export const { addToSaved, DeleteFromSaved, Details, Clear } =
    Instructor.actions;
export default Instructor.reducer;
