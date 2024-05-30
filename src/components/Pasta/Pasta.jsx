import React from 'react'
import { FaArrowLeft, FaStar } from 'react-icons/fa'
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
// import banner from '../../images/download.jpeg'
import banner from '../../images/process-cooking-pasta-with-raw-fresh-ingredients-classic-italian-food-raw-eggs-flour-wooden-table-top-view-toning.jpg'
import { Link } from 'react-router-dom'


const buttons = ['BreakFast', 'Launch', 'Dinner', 'Snacks']



export default function Pasta()
{
    return (
        <div className=' border-4 border-black rounded-xl m-1 bg-gradient-to-b from-[#FACD91] to-[#EC808D]  mx-auto'>
            <div className=' container py-16  '>
                {/* Header */}
                <div className='flex  items-center ml-8 '>
                    <Link to={'/'} className='text-black hover:-translate-x-2 duration-300'>
                    <FaArrowLeft className='text-6xl  ' />
                    </Link>
                    <div className='mx-auto'>
                        <h1 className='text-center text-6xl -ml-36'>Pasta</h1>
                    </div>
                </div>

                {/* Body */}
                <div className='flex flex-col gap-4   mt-14 items-start  px-4 '>
                    {/* 1st Row  Profile picture + Name */}
                    <div className='flex gap-1  items-center '>
                        {/* Image */}
                        <div className=' w-[200px]'>
                            <img src={img2} alt="image2" className='w-24 h-24 rounded-full' />
                        </div>
                        {/* Title */}
                        <div className='w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] -ml-20'>
                            <h3 className='pt-2 text-xl  md:text-2xl lg:text-3xl bg-center'>Alaa Gamal</h3>
                        </div>
                    </div>

                    {/* 2nd Row  Banner Image */}
                    <div className=' w-[1250px] h-[400px] border-2 border-black rounded-xl'>
                        <img src={banner} alt="banner" className=' object-cover w-full max-h-full rounded-2xl' />
                    </div>

                    {/* 3 Buttons (Tags) + stars*/}
                    <div className=' flex justify-between gap-10 items-center w-[1250px] relative'>
                        {/* Buttons */}
                        <div className='flex gap-3'>
                            {buttons.map((data) =>
                            {
                                return (
                                    <button className='bg-gradient-to-t from-[#FACD91] to-[#EC808D] shadow-md border-2 border-black px-5 text-3xl  py-3 rounded-3xl  hover:scale-110 hover:font-semibold'
                                    >
                                        {data}
                                    </button>
                                )
                            })}

                        </div>
                        {/* Stars */}
                        <div className='flex gap-2   absolute right-0 ml-20'>
                            <FaStar className='text-5xl text-black' />
                            <FaStar className='text-5xl text-black' />
                            <FaStar className='text-5xl text-black' />
                            <FaStar className='text-5xl text-black' />
                            <FaStar className='text-5xl text-gray-500' />

                        </div>
                    </div>

                    {/* 4- Ingredients */}

                    <div className='flex flex-col my-4 gap-2  w-[900px]'>
                        <h3 className='text-4xl'>Ingredients : </h3>
                        <p className='text-xl'>
                            Chicken, Bisquick, Paprika, Salt, Pepper, Eggs, Oil, Butter, Chicken Broth, Lemon Juice, Parsley, Garlic, Pasta.

                        </p>
                    </div>

                    {/* 5- Steps */}
                    <div className='flex flex-col mb-4 gap-2 
                    w-[900px] '>
                        <h3 className='text-4xl'>Steps : </h3>
                        <p className='text-xl'>
                            preheat oven to 350 degrees',
                            preheat oil in frying pan',
                            in a bowl, add bisquick, paprika, salt, and pepper',
                            in another bowl, add the 2 eggs',
                            dip the chicken in the eggs, then coat with the bisquick mixture',
                            brown the chicken in the oil',
                            while the chicken is cooking, get a medium-size pot and add the lemon juice, chicken broth, parsley, and butter',
                            melt together',
                            when chicken is done, place in a deep pan/glass pyrex dish',
                            place the chicken in the pan, and pour the sauce over it',
                            sprin
                        </p>
                    </div>
                    { }
                    <div className='flex flex-col mb-4 gap-2 
                    w-[900px] '>
                        <h3 className='text-4xl mb-2'>Nutrations  : </h3>

                        <div className='flex flex-col'>
                            <p className='text-lg'>
                                <span className='font-bold mr-2 text-xl'>Calories:</span>  640.4
                            </p>
                            <p className='text-lg'>
                                <span className='font-bold mr-2 text-xl'>Sugar:</span>  18
                            </p>
                            <p className='text-lg'>
                                <span className='font-bold mr-2 text-xl'>Protein:</span>  40
                            </p>
                            <p className='text-lg'>
                                <span className='font-bold mr-2 text-xl'>Carbohydrates:</span>  7

                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
