    import React from 'react'
    import './hero.scss'
    import { FaSearch } from "react-icons/fa";
    import { FaArrowAltCircleRight } from "react-icons/fa";
    import { FaStar } from "react-icons/fa";
    import { FaPencilAlt } from "react-icons/fa";
    import { FaUser } from "react-icons/fa";
    import { LiaCertificateSolid } from "react-icons/lia";
    function Hero()
    {
        return (

            <div  id='hero' className='' >
                <div className='mx-auto container mb-20 pt-40 pb-20'>
                    {/* THE 2 columns  */}
                    <div className='grid grid-cols-2 gap-20'>
                        {/* Left Column (Text) */}
                        <div class="">
                            <div className='' data-aos="fade-up">
                                {/* Titles */}
                                <div class="w-[750px] ">
                                    <h5 className='text-title mb-8 text-6xl font-semibold'>Learn to Code</h5>
                                    <h1 className='text-headerText  mb-16 font-semibold text-2xl'>Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</h1>
                                    <p></p>
                                </div>
                                <div >
                                    {/* action="https://dreamslms-wp.dreamstechnologies.com/courses/" */}
                                    <form method="get" >
                                        <div class="form-inner">
                                            <div class="flex items-center relative">
                                                <input type="text" value="" name="s" placeholder="Search School, Online educational centers, etc" class="rounded-full max-w-6xl w-[2000px] h-[60px] pl-14 pr-10 placeholder-pl-10" autocomplete="on" />
                                                <FaSearch class='text-sm text-primaryColor absolute top-[50%] transform -translate-y-1/2 left-4 z-[1000]' />
                                                <input type="hidden" value="course" name="ref" />
                                                <FaArrowAltCircleRight className="text-3xl text-primaryColor hover:text-primaryColor/80 absolute top-[50%] transform -translate-y-1/2 right-4 z-[1000]" />

                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* Trust User */}
                                <div className='w-[250px]'>
                                    <p className='text-headerText my-8 text-xl'>Trusted by over 15K Users worldwide since 2022</p>
                                    {/* Numbers */}
                                    <div class=" flex items-center text-title font-semibold">
                                        <div class="">
                                            <h2 className='text-5xl'><span>290</span>+</h2>
                                        </div>
                                        <div class="flex items-center">
                                            <h2 class="ml-8 text-5xl">4.5</h2>
                                            <div className='flex justify-between ml-4 gap-1'>
                                                <FaStar className='text-lg text-yellow-500' />
                                                <FaStar className='text-lg text-yellow-500' />
                                                <FaStar className='text-lg text-yellow-500' />
                                                <FaStar className='text-lg text-yellow-500' />
                                                <FaStar className='text-lg text-yellow-500' />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column (image) */}
                        <div>
                            <div className='pr-20 pl-10 ml-24' >
                                <img fetchpriority="high" decoding="async" width="630" height="653" src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2023/01/object.png" className="object-cover =" alt="" />

                            </div>
                        </div>
                    </div>
                    {/* 4 Boxes */}
                    <div className='mt-20 z-50'>
                        <div className='flex justify-center items-center gap-5 '>
                            {/* box 1 */}
                            <div className='w-[250px] h-[150px] z-[1000] shadow- rounded-2xl flex  bg-white text-center  hover:-translate-y-3 duration-300'>
                                <div className='flex flex-col justify-center items-center mx-auto gap-3 '>
                                    <div className='flex justify-center gap-4 items-center'>
                                        <div><FaPencilAlt className="text-title text-5xl" /></div>
                                        <p className="text-title text-4xl  ">10K</p>
                                    </div>
                                    <h4 className='text-headerText'>Online Courses</h4>
                                </div>
                            </div>
                            {/* box 2 */}

                            <div className='w-[250px] h-[150px] z-[1000] shadow- rounded-2xl flex   bg-white text-center hover:-translate-y-3 duration-300'>
                                <div className='flex flex-col justify-center items-center mx-auto gap-3 '>
                                    <div className='flex justify-center gap-4 items-center'>
                                        <div><FaUser className="text-title text-5xl" />
                                        </div>
                                        <p className="text-title text-4xl ">186K</p>
                                    </div>
                                    <h4 className='text-headerText'>Expert Tutors</h4>
                                </div>
                            </div>
                            {/* box 3 */}

                            <div className='w-[250px] h-[150px] z-[1000] shadow- rounded-2xl flex  bg-white text-center hover:-translate-y-3 duration-300'>
                                <div className='flex flex-col justify-center items-center mx-auto gap-3 '>
                                    <div className='flex justify-center gap-4 items-center'>
                                        <div> <LiaCertificateSolid className="text-title text-5xl" />
                                        </div>
                                        <p className="text-title text-4xl ">5K</p>
                                    </div>
                                    <h4 className='text-headerText'>Certified Courses</h4>
                                </div>
                            </div>
                            {/* box 4 */}

                            <div className='w-[250px] h-[150px] z-[1000] shadow- rounded-2xl flex  bg-white text-center hover:-translate-y-3 duration-300'>
                                <div className='flex flex-col justify-center items-center mx-auto gap-3 '>
                                    <div className='flex justify-center gap-4 items-center'>
                                        <div>  <FaUser className="text-title text-5xl" />
                                        </div>
                                        <p className="text-title text-4xl ">55K</p>
                                    </div>
                                    <h4 className='text-headerText'>Online Students</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }

    export default Hero