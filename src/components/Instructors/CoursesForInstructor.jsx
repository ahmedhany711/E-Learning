
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import html from "../../images/Html.jpg";
import css from "../../images/css.png";
import js from "../../images/JSpng.png";
import php from "../../images/php.png";
import nodejs from "../../images/nodejs.png";
import react from "../../images/React.png";


export const selectLoggedInUserId = (state) => state.auth.user?.id;




const CoursesForInstructor = ({ showFooter, courses, setSelectedCourse }) =>
{


    // State to track the account details
    const [accountDetails, setAccountDetails] = useState([]);

    // Function to toggle account details
    const toggleAccountDetails = (data) =>
    {
        // Check if account details are already present
        if (accountDetails.length === 0) {
            // If not present, add the details
            setAccountDetails([data]);
        } else {
            // If already present, remove and add the details
            setAccountDetails([]);
            setAccountDetails([data]);
        }
    };
    const [selectedCourseId, setSelectedCourseId] = useState(null);
    const handleCourseSelection = (courseId) =>
    {
        // Assuming you have a state to track the selected course

        // Check if the clicked course is already selected
        if (selectedCourseId === courseId) {
            // If already selected, deselect the course
            setSelectedCourseId(null);
        } else {
            // If not selected, update the selected course
            setSelectedCourseId(courseId);
        }
    };


    return (
        <>
            {/* <InstructorNAV /> */}
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
                            {courses.map((data) => (
                                <div
                                    key={data.id}
                                    className={` pb-10 rounded shadow-md  relative ${data.archived ? 'opacity-70 bg-gray-300 ' : 'bg-white'}`}
                                >
                                    {/* Category + Price */}
                                    <div className="text-center absolute top-0 left-0 text-xs">
                                        <div className="flex flex-col gap-[1px]">
                                            <p className={` text-white py-1 mb-0 px-2 rounded-lg
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
                                                <p className={`text-white py-1 px-0 mb-0  rounded-lg text-lg
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
                                            // to={`/courses/${data.title}/${data.id}`}
                                            onClick={() =>
                                            {
                                                setSelectedCourse(data)
                                                // dispatch(Details(data));
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
                                            data.archived === false ? (
                                                <Link
                                                    // to={`/courses/${data.title}/${data.id}`}
                                                    onClick={() =>
                                                    {
                                                        toggleAccountDetails(data)
                                                    }}
                                                >
                                                    <button className="bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton  hover:bg-SecondButton hover:text-white ">
                                                        Add Assingment
                                                    </button>
                                                </Link>
                                            ) : (
                                                <Link
                                                    to={`/courses/${data.title}/${data.id}`}
                                                    onClick={() =>
                                                    {
                                                        toggleAccountDetails(data)
                                                    }}
                                                >
                                                    <button className="bg-white px-4 py-2 rounded-2xl border-4 font-semibold border-SecondButton text-SecondButton hover:bg-SecondButton hover:text-white">
                                                        Add Assingment
                                                    </button>
                                                </Link>
                                            )}


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div className="-mt-20">
                {
                    showFooter && <Footer />
                }
            </div>
        </>
    );
};
// export default CoursesForInstructor;



const CourseDetails = ({ selectedCourse }) =>
{
    return (
        <>
            <div className="course-details">
                <h2>{selectedCourse.title}</h2>
                {/* Display other details of the selected course */}
            </div>
        </>
    );
};
const CourseManager = () =>
{
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Assuming you have the courses data
    const courses = [
        {
            id: 1,
            title: "HTML",
            students: [],
            img: html,
            description:
                "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
            studentsEnrolled: 0,
            instructor: "Ahmed hany",
            publishedDate: " 1 - 1 - 2024",
            numOfCourses: 3,
            category: "Front_End",
            price: 25,
            rating: 5,
            aosDelay: 0,
            archived: true,
            progress: { grade: 85, completed: true },
            readings: [
                {
                    id: 1,
                    title: "HTML Basics",
                    content: "Learn about the basic structure of HTML documents...",
                },
                {
                    id: 2,
                    title: "HTML Tags and Attributes",
                    content: "Explore common HTML tags such as <p>, <h1> to <h6>...",
                },
            ],
            multimedia: [
                {
                    id: 1,
                    title: "HTML Basics Video",
                    videoLink: "https://www.youtube.com/watch?v=123456789",
                },
                {
                    id: 2,
                    title: "HTML Tags and Attributes Video",
                    videoLink: "https://www.youtube.com/watch?v=987654321",
                },
            ],
            lectures: [
                {
                    id: 1,
                    title: "Introduction to HTML",
                    videolink: "video_link_1",
                    completed: false,
                },
                {
                    id: 2,
                    title: "HTML Document Structure",
                    videolink: "video_link_2",
                    completed: false,
                },
                {
                    id: 3,
                    title: "HTML Elements and Tags",
                    videolink: "video_link_3",
                    completed: false,
                },
                {
                    id: 4,
                    title: "Text Formatting and Semantic Elements",
                    videolink: "video_link_4",
                    completed: false,
                },
                { id: 5, title: "Links and Images", videolink: "video_link_5" },
                { id: 6, title: "Tables and Forms", videolink: "video_link_6" },
                {
                    id: 7,
                    title: "HTML5 Features: Audio, Video, Canvas",
                    videolink: "video_link_7",
                    completed: false,
                },
                {
                    id: 8,
                    title: "Responsive Web Design with HTML",
                    videolink: "video_link_8",
                    completed: false,
                },
                {
                    id: 9,
                    title: "HTML Best Practices and Accessibility",
                    videolink: "video_link_9",
                    completed: false,
                },
            ],
            assignments: [
                {
                    id: 1,
                    title: "Create a Basic HTML Page",
                    description:
                        "Create a basic HTML page with headings, paragraphs, and lists.",
                    file: [],
                    deadline: "2024-05-15",
                    grade: 0,
                    submitted: false,
                },
                {
                    id: 2,
                    title: "Build a Simple Form",
                    description:
                        "Create an HTML form with input fields, radio buttons, checkboxes, and a submit button.",
                    deadline: "2024-05-15",
                    grade: 0,
                    submitted: false,
                },
                {
                    id: 3,
                    title: "Design a Personal Portfolio Page",
                    description:
                        "Design and develop a personal portfolio page using HTML and CSS.",
                    deadline: "2024-05-15",
                    file: [],
                    grade: 0,
                    submitted: false,
                },
            ],
        },
        // 2 CSS
        {
            id: 2,
            students: [],
            title: "CSS",
            img: css,
            archived: false,

            instructor: "Ahmed hany",
            description:
                "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
            numOfCourses: 3,
            studentsEnrolled: 0,
            publishedDate: " 1 - 1 - 2024",
            category: "Front_End",
            price: 13,
            rating: 5,
            aosDelay: 0,
            progress: { grade: 85, completed: true },
            readings: [
                {
                    id: 1,
                    title: "CSS Basics",
                    content:
                        "Understand the fundamentals of CSS, including selectors, properties, and values...",
                },
                {
                    id: 2,
                    title: "CSS Box Model",
                    content:
                        "Learn about the CSS box model and how elements are rendered on the web page...",
                },
            ],
            multimedia: [
                {
                    id: 1,
                    title: "CSS Basics Video",
                    videoLink: "https://www.youtube.com/watch?v=123456789",
                },
                {
                    id: 2,
                    title: "CSS Box Model Video",
                    videoLink: "https://www.youtube.com/watch?v=987654321",
                },
            ],

            lectures: [
                {
                    id: 1,
                    title: "Introduction to CSS",
                    videolink: "video_link_1",
                    completed: false,
                },
                {
                    id: 2,
                    title: "CSS Syntax and Selectors",
                    videolink: "video_link_2",
                    completed: false,
                },
                {
                    id: 3,
                    title: "CSS Box Model",
                    videolink: "video_link_3",
                    completed: false,
                },
                {
                    id: 4,
                    title: "CSS Flexbox",
                    videolink: "video_link_4",
                    completed: false,
                },
                {
                    id: 5,
                    title: "CSS Grid",
                    videolink: "video_link_5",
                    completed: false,
                },
                {
                    id: 6,
                    title: "Responsive Design with CSS",
                    videolink: "video_link_6",
                    completed: false,
                },
                {
                    id: 7,
                    title: "CSS Transitions and Animations",
                    videolink: "video_link_7",
                    completed: false,
                },
                {
                    id: 8,
                    title: "CSS Preprocessors",
                    videolink: "video_link_8",
                    completed: false,
                },
                {
                    id: 9,
                    title: "CSS Frameworks",
                    videolink: "video_link_9",
                    completed: false,
                },
            ],

            assignments: [
                {
                    id: 1,
                    title: "Create a CSS Stylesheet",
                    description:
                        "Create a CSS stylesheet and apply basic styles such as colors, fonts, and backgrounds.",
                    deadline: "2024-05-15",
                    file: [],
                    submitted: false,
                },
                {
                    id: 2,
                    title: "Responsive Design Exercise",
                    description:
                        "Implement responsive design principles to make a webpage mobile-friendly.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 3,
                    title: "CSS Animations and Transitions",
                    description:
                        "Create CSS animations and transitions to enhance user experience on a webpage.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
            ],
        },
        // 3 JS
        {
            id: 3,
            title: "JS",
            img: js,
            students: [],
            archived: false,

            instructor: "Ahmed hany",
            description:
                "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
            numOfCourses: 3,
            studentsEnrolled: 0,
            publishedDate: " 1 - 1 - 2024",
            category: "Front_End",
            price: 55,
            rating: 5,
            aosDelay: 0,
            progress: { grade: 85, completed: true },
            readings: [
                {
                    id: 1,
                    title: "Introduction to JavaScript",
                    content:
                        "Get introduced to JavaScript and its role in web development...",
                },
                {
                    id: 2,
                    title: "JavaScript Functions",
                    content:
                        "Dive deeper into JavaScript functions, including function declaration, parameters, return values...",
                },
            ],
            multimedia: [
                {
                    id: 1,
                    title: "JavaScript Basics Video",
                    videoLink: "https://www.youtube.com/watch?v=123456789",
                },
                {
                    id: 2,
                    title: "JavaScript Functions Video",
                    videoLink: "https://www.youtube.com/watch?v=987654321",
                },
            ],

            lectures: [
                {
                    id: 1,
                    title: "Introduction to JavaScript",
                    videolink: "video_link_1",
                    completed: false,
                },
                {
                    id: 2,
                    title: "JavaScript Variables and Data Types",
                    videolink: "video_link_2",
                    completed: false,
                },
                {
                    id: 3,
                    title: "JavaScript Operators and Expressions",
                    videolink: "video_link_3",
                    completed: false,
                },
                {
                    id: 4,
                    title: "JavaScript Functions",
                    videolink: "video_link_4",
                    completed: false,
                },
                {
                    id: 5,
                    title: "JavaScript Arrays",
                    videolink: "video_link_5",
                    completed: false,
                },
                {
                    id: 6,
                    title: "JavaScript Objects",
                    videolink: "video_link_6",
                    completed: false,
                },
                {
                    id: 7,
                    title: "JavaScript DOM Manipulation",
                    videolink: "video_link_7",
                    completed: false,
                },
                {
                    id: 8,
                    title: "Asynchronous JavaScript",
                    videolink: "video_link_8",
                    completed: false,
                },
                { id: 9, title: "JavaScript Frameworks", videolink: "video_link_9" },
            ],
            assignments: [
                {
                    id: 1,
                    title: "Basic JavaScript Exercises",
                    description:
                        "Complete basic JavaScript exercises to understand variables, data types, and control flow.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 2,
                    title: "DOM Manipulation Project",
                    description:
                        "Build a project that involves manipulating the Document Object Model (DOM) using JavaScript.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 3,
                    title: "Asynchronous JavaScript",
                    description:
                        "Learn asynchronous JavaScript concepts such as callbacks, promises, and async/await.",
                    deadline: "2024-05-15",
                    file: [],
                    submitted: false,
                },
            ],
        },

        // 4 Node
        {
            id: 4,
            title: "NodeJS",
            img: nodejs,
            description:
                "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
            numOfCourses: 3,
            instructor: "Ahmed hany",
            students: [],
            archived: false,

            studentsEnrolled: 0,
            publishedDate: " 1 - 1 - 2024",
            category: "Back_End",
            price: "Free",
            rating: 5,
            aosDelay: 0,
            progress: { grade: 85, completed: true },
            readings: [
                {
                    id: 1,
                    title: "Introduction to Node.js",
                    content:
                        "Learn about Node.js, its features, and how it differs from traditional server-side languages...",
                },
                {
                    id: 2,
                    title: "Node.js Express Framework",
                    content:
                        "Explore the Express framework for building web applications with Node.js...",
                },
            ],
            multimedia: [
                {
                    id: 1,
                    title: "Node.js Introduction Video",
                    videoLink: "https://www.youtube.com/watch?v=123456789",
                },
                {
                    id: 2,
                    title: "Express Framework Video",
                    videoLink: "https://www.youtube.com/watch?v=987654321",
                },
            ],

            lectures: [
                {
                    id: 1,
                    title: "Introduction to Node.js",
                    videolink: "video_link_1",
                    completed: false,
                },
                {
                    id: 2,
                    title: "Node.js Modules",
                    videolink: "video_link_2",
                    completed: false,
                },
                {
                    id: 3,
                    title: "Node.js File System",
                    videolink: "video_link_3",
                    completed: false,
                },
                {
                    id: 4,
                    title: "Node.js Events and Event Loop",
                    videolink: "video_link_4",
                    completed: false,
                },
                {
                    id: 5,
                    title: "Node.js HTTP Module",
                    videolink: "video_link_5",
                    completed: false,
                },
                {
                    id: 6,
                    title: "Node.js Express Framework",
                    videolink: "video_link_6",
                    completed: false,
                },
                {
                    id: 7,
                    title: "Node.js RESTful APIs",
                    videolink: "video_link_7",
                    completed: false,
                },
                {
                    id: 8,
                    title: "Node.js Authentication and Authorization",
                    videolink: "video_link_8",
                },
                {
                    id: 9,
                    title: "Node.js Deployment",
                    videolink: "video_link_9",
                    completed: false,
                },
            ],
            assignments: [
                {
                    id: 1,
                    title: "Node.js Basics",
                    description:
                        "Complete exercises to understand Node.js fundamentals such as modules, events, and streams.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 2,
                    title: "Build a RESTful API",
                    description:
                        "Develop a RESTful API using Express.js and MongoDB as the database.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 3,
                    title: "Authentication with JWT",
                    description:
                        "Implement JSON Web Token (JWT) based authentication in a Node.js application.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
            ],
        },

        // 5 React
        {
            id: 5,
            students: [],
            title: "ReactJs",
            img: react,
            description:
                "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
            numOfCourses: 3,
            archived: false,

            instructor: "Ahmed hany",
            studentsEnrolled: 0,
            publishedDate: " 1 - 1 - 2024",
            category: "Front_End",
            price: 25,
            rating: 5,
            aosDelay: 0,
            progress: { grade: 85, completed: true },
            readings: [
                {
                    id: 1,
                    title: "Introduction to React",
                    content:
                        "Understand the basics of React, including components, JSX syntax, and the virtual DOM...",
                },
                {
                    id: 2,
                    title: "React Hooks",
                    content:
                        "Dive into React Hooks and learn how to use useState, useEffect, and other built-in hooks...",
                },
            ],
            multimedia: [
                {
                    id: 1,
                    title: "React Basics Video",
                    videoLink: "https://www.youtube.com/watch?v=123456789",
                },
                {
                    id: 2,
                    title: "React Hooks Video",
                    videoLink: "https://www.youtube.com/watch?v=987654321",
                },
            ],

            lectures: [
                {
                    id: 1,
                    title: "Introduction to React",
                    videolink: "video_link_1",
                    completed: false,
                },
                {
                    id: 2,
                    title: "React Components",
                    videolink: "video_link_2",
                    completed: false,
                },
                {
                    id: 3,
                    title: "React Props and State",
                    videolink: "video_link_3",
                    completed: false,
                },
                {
                    id: 4,
                    title: "React Hooks",
                    videolink: "video_link_4",
                    completed: false,
                },
                {
                    id: 5,
                    title: "React Router",
                    videolink: "video_link_5",
                    completed: false,
                },
                {
                    id: 6,
                    title: "React Context API",
                    videolink: "video_link_6",
                    completed: false,
                },
                {
                    id: 7,
                    title: "React Lifecycle Methods",
                    videolink: "video_link_7",
                    completed: false,
                },
                {
                    id: 8,
                    title: "React Forms",
                    videolink: "video_link_8",
                    completed: false,
                },
                {
                    id: 9,
                    title: "React Best Practices",
                    videolink: "video_link_9",
                    completed: false,
                },
            ],
            assignments: [
                {
                    id: 1,
                    title: "React Components Exercise",
                    description:
                        "Build React components to display user interface elements and manage state.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 2,
                    title: "Create a Todo List Application",
                    description:
                        "Develop a Todo List application using React to practice state management and event handling.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 3,
                    title: "Integration with External API",
                    description:
                        "Integrate an external API with a React application to fetch and display data.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
            ],
        },
        // 6 PHP
        {
            id: 6,
            students: [],
            title: "PHP",
            img: php,
            studentsEnrolled: 0,
            publishedDate: " 1 - 1 - 2024",
            description:
                "David Powell Instructor  Complete HTML, CSS and Javascript Course.",
            category: "Back_End",
            numOfCourses: 4,
            instructor: "Ahmed hany",
            price: "Free",
            rating: 5,
            archived: false,

            aosDelay: 0,
            progress: { grade: 85, completed: true },
            readings: [
                {
                    id: 1,
                    title: "Introduction to PHP",
                    content: "Get started with PHP, a server-side scripting language...",
                },
                {
                    id: 2,
                    title: "PHP Forms and Sessions",
                    content:
                        "Explore form handling in PHP, including processing user input, form validation...",
                },
            ],
            multimedia: [
                {
                    id: 1,
                    title: "PHP Introduction Video",
                    videoLink: "https://www.youtube.com/watch?v=123456789",
                },
                {
                    id: 2,
                    title: "PHP Forms and Sessions Video",
                    videoLink: "https://www.youtube.com/watch?v=987654321",
                },
            ],

            lectures: [
                {
                    id: 1,
                    title: "Introduction to PHP",
                    videolink: "video_link_1",
                    completed: false,
                },
                {
                    id: 2,
                    title: "PHP Syntax and Variables",
                    videolink: "video_link_2",
                    completed: false,
                },
                {
                    id: 3,
                    title: "PHP Arrays and Functions",
                    videolink: "video_link_3",
                    completed: false,
                },
                {
                    id: 4,
                    title: "PHP Forms and Sessions",
                    videolink: "video_link_4",
                    completed: false,
                },
                {
                    id: 5,
                    title: "PHP Database Connectivity",
                    videolink: "video_link_5",
                    completed: false,
                },
                {
                    id: 6,
                    title: "PHP Object-Oriented Programming",
                    videolink: "video_link_6",
                    completed: false,
                },
                {
                    id: 7,
                    title: "PHP Security",
                    videolink: "video_link_7",
                    completed: false,
                },
                {
                    id: 8,
                    title: "PHP Frameworks",
                    videolink: "video_link_8",
                    completed: false,
                },
                {
                    id: 9,
                    title: "PHP Best Practices",
                    videolink: "video_link_9",
                    completed: false,
                },
            ],
            assignments: [
                {
                    id: 1,
                    title: "PHP Basics",
                    description:
                        "Complete exercises to understand PHP syntax, variables, and control structures.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 2,
                    title: "Build a Simple CMS",
                    description:
                        "Develop a basic Content Management System (CMS) using PHP and MySQL.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
                {
                    id: 3,
                    title: "Authentication and Authorization in PHP",
                    description:
                        "Implement user authentication and authorization features in a PHP web application.",
                    deadline: "2024-05-15",
                    submitted: false,
                },
            ],
        },
    ];

    return (
        <>
            {/* Render either CoursesForInstructor or CourseDetails based on selectedCourse */}
            {selectedCourse === false ? (
                <CourseDetails selectedCourse={selectedCourse} />
            ) : (
                <CoursesForInstructor courses={courses} setSelectedCourse={setSelectedCourse} />
            )}
        </>
    );
};

export default CourseManager;