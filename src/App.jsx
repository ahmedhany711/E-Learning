import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Students from "./components/Students/Students";
import Home from "./Pages/Home";
import CoursesPage from "./components/Course/CoursesPage";
import Categories from "./Pages/Categories";
import Dashboard from "./Pages/Dashboard";
import CourseDetails from "./components/Course/CourseDetails";
import Profile from "./Pages/Profile";
import Assingment from "./components/Assingment/Assingment";
import InstructorProfile from "./components/Instructors/InstructorProfile";
import CreateCourse from "./components/Course/CreateCourse";
import StudentsHome from "./components/Students/StudentsHome";
import RoleSelector from "./Pages/Role";
import CoursesPageForStudent from "./components/Course/CoursesPageForStudent";
import ProfileForStudents from "./components/Students/ProfileForStudents";
import HomeForInstructor from "./components/Instructors/HomeForInstructor";
import NAV from "./components/Nav/NAV";
import StudentsForInstructor from "./components/Instructors/StudentsForInstructors";
import CoursesForInstructor from "./components/Instructors/CoursesForInstructor";
import InstructorsPage from "./components/Instructors/InstructorsPage";




function App()
{
    // Animation
    useEffect(() =>
    {
        Aos.init({
            offset: 50,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
        Aos.refresh();
    }, []);

    return (
        <div className=" ">
            <div id="section1 ">
                <NAV role="admin" />

            </div>{" "}
            <Routes>
                <Route path="/" element={<Home />} />{" "}
                <Route path="login" element={<RoleSelector />} />{" "}

                <Route path="studentsHome" element={<StudentsHome />} />{" "}

                <Route path="instructorsHome" element={<HomeForInstructor />} />{" "}

                <Route path="students" element={<Students />} />{" "}

                <Route path="Courses" element={<CoursesPage showFooter={false} />} />{" "}

                <Route path="CoursesForStudent" element={<CoursesPageForStudent showFooter={false} />} />{" "}

                <Route path="CoursesForInstructor" element={<CoursesForInstructor />} />{" "}


                <Route path="StudentsForInstructor" element={<StudentsForInstructor />} />{" "}

                <Route path="Categories" element={<Categories />} />{" "}

                <Route path="Dashboard" element={<Dashboard />} />{" "}

                <Route path="/courses/:courseTitle/:courseId" element={<CourseDetails showNAv={true} />} />{" "}

                <Route path="Profile" element={<Profile showtTitle={true} />} />{" "}

                <Route path="ProfileForStudents" element={<ProfileForStudents showtTitle={true} />} />{" "}


                <Route path="Assingment" element={<Assingment />} />{" "}

                <Route path="Instructors" element={<InstructorsPage />} />{" "}
                <Route path="InstructorProfile" element={<InstructorProfile showTitle={false} />} />{" "}
                <Route path="CreateCourse" element={<CreateCourse />} />{" "}



            </Routes>{" "}


        </div>
    );
}

export default App;
