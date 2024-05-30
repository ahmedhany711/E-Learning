import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import RoleSelector from "../../Pages/Role";



const menu = [
    { id: 1, name: "Home", link: "/studentsHome" },
    { id: 2, name: "Courses", link: "/CoursesForStudent" },
    // { id: 3, name: "Profile", link: "/ProfileForStudents" },
    // { id: 3, name: "Categories", link: "/Categories" },
    // { id: 8, name: "Login", link: "/Login" },
    // { id: 9, name: "Register", link: "/Register" },

];

// const dropDownMenu = [
//     { id: 1, name: "Trending Products", link: "/trending-products" },
//     { id: 2, name: "Top Rated", link: "/top-rated" },
//     { id: 3, name: "Best Selling", link: "/best-selling" },
// ];

// const secondDropDownMenu = [
//     { id: 1, name: "Men's Clothing", link: "/MensClothing" },
//     { id: 2, name: "Woman's Clothing", link: "/WomansClothing" },
//     { id: 3, name: "Electronics", link: "/electronics" },
//     { id: 4, name: "Jewelery", link: "/jewelery" },
//     { id: 5, name: "Kids Wear", link: "/Kids Wear" },
// ];

function StudentNAV({ role })
{
    return (


        <div className="container ">
            <div className="   relative z-[2222]  ">
                <div className="flex flex-col  fixed top-0 left-0 right-0 
                z-[999999]  w-full backdrop-blur-xl">
                    {/* First Nav */}
                    <div className=" py-3 w-full sm:py-0 z-[999999] ">
                        <Container className="flex justify-between items-center  my-0 gap-5 ">

                            {/* Logo + Link */}
                            <div className=" font-heading  ">
                                <Link
                                    to="/"
                                    className="font-bold text-black flex gap-3  mr-5 no-underline items-center text-2xl  sm:text-3xl"
                                >
                                    <img src="https://dreamslms-wp.dreamstechnologies.com/wp-content/themes/dreamslms/assets/images/logo.svg" alt="logo" className="w-40 h-10 uppercase " />
                                </Link>
                            </div>
                            {/* list of links */}
                            <div>
                                <ul className=" list-none flex flex-row sm:flex gap-[1px] md:gap-[18px] mr-auto items-center justify-center text-gray-800 my-1">
                                    {menu.map((data) =>
                                    {
                                        return (
                                            <li
                                                key={data.id}
                                                className={`px-1 
                                            
                                            ${(data.id >= 3) & (data.id <= 6)
                                                        ? "hidden lg:inline-block   "
                                                        : "inline-block -ml-2 "
                                                    }`}
                                            >
                                                <Link
                                                    to={data.link}
                                                    className={`
                                            no-underline font-semibold px-2 lg:text-sm text-[16px]
                                            ${(data.id < 2) ? "text-primaryColor hover:text-headerText" : "text-headerText hover:text-primaryColor "}
                                        duration-300 
                                        inline-block  ${(data.id === 2) ? "text-[10px]" : "text-sm"}`}
                                                >
                                                    {data.name}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                </ul>
                            </div>

                            
                            <div className="-mx-40">
                                <RoleSelector/>
                            </div>
                            {/* |Buttons */}
                            <div className="flex justify-between gap-3 ">
                                <Link to={'/login'}>

                                    <button className="bg-firstButton border-2 border-firstButton text-headerText px-[33px] py-[10px] rounded-full  duration-300 hover:bg-primaryColor hover:text-white
                                ">Login</button>
                                </Link>


                                <button className="bg-transparent  border-2 border-SecondButton text-SecondButton px-[33px] py-[10px] rounded-full  duration-300 hover:bg-primaryColor hover:text-white hover:border-primaryColor
                                ">Register</button>

                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default StudentNAV;
