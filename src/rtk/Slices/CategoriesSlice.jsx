import { createSlice } from "@reduxjs/toolkit";
import html from "../../images/Html.jpg";
import css from "../../images/css.png";
import js from "../../images/JSpng.png";
import php from "../../images/php.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/React.png";



const initialState = [
    {
        id: 1,
        title: "HTML",
        img: html,
        description: "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
        category: "Front_End",
        numOfCourses:4,
        price: 25,
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 2,
        title: "CSS",
        img: css,
        description: "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
        category: "Front_End",
        numOfCourses: 3,
        price: 13,
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 3,
        title: "JS",
        img: js,
        description: "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
        category: "Front_End",
        numOfCourses: 6,
        price: 55,
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 4,
        title: "NodeJS",
        img: nodejs,
        description: "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
        category: "Back_End",
        numOfCourses: 3,

        price: "Free",
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 5,
        title: "ReactJs",
        img: react,
        description: "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
        category: "Front_End",
        numOfCourses: 3,

        price: 25,
        rating: 5,
        aosDelay: 0,

    },
    {
        id: 6,
        title: "PHP",
        img: php,
        description: "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
        category: "Back_End",
        numOfCourses: 8,

        price: "Free",
        rating: 5,
        aosDelay: 0,

    },

]

export const Categories = createSlice({
    initialState,
    name: "Categories",
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
    Categories.actions;
export default Categories.reducer;
