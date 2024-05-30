import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img3 from '../../images/img3.jpg'
import img4 from '../../images/img4.jpg'
import img5 from '../../images/img5.jpg'
import img6 from '../../images/img6.png'
import { Link } from 'react-router-dom';

// Data of Profiles
const data = [
    {
        id: 1,
        img: img1,
        title: "Ahmed Omar",
        btn: "UnFollow"

    },
    {
        id: 2,
        img: img2,
        title: "Omar Mohamed",
        btn: "UnFollow"
    },
    {
        id: 3,
        img: img3,
        title: "Aya Ahmed",
        btn: "UnFollow"

    },
    {
        id: 4,
        img: img4,
        title: "Youssef  Maged",
        btn: "UnFollow"

    },
    {
        id: 5,
        img: img5,
        title: "Adham Sami",
        btn: "UnFollow"

    },
    {
        id: 6,
        img: img6,
        title: "Marwa Eid",
        btn: "UnFollow"

    },
    {
        id: 7,
        img: img2,
        title: "Heba Ahmed",
        btn: "UnFollow"

    },
    {
        id: 8,
        img: img3,
        title: "Mahmoud Ali",
        btn: "UnFollow"

    },
    {
        id: 9,
        img: img1,
        title: "Ahmed Hany",
        btn: "UnFollow"

    },
]

export default function Following()
{
    const [isFollow, setISFollow] = useState(() =>
    {
        const isFollowState = localStorage.getItem("isFollowed");
        return isFollowState ? JSON.parse(isFollowState) : {};
    })

    useEffect(() =>
    {
        localStorage.setItem("isFollowed", JSON.stringify(isFollow)|| false);
    }, [isFollow]);

    return (
        <div className=' border-4 border-black rounded-xl m-1 bg-gradient-to-b from-[#FACD91] to-[#EC808D] '>

            <div className='pl-12 py-20'>
                {/* Header */}
                <div className='flex  items-center ml-8'>
                    <Link to={'/'} className='text-black hover:-translate-x-2 duration-300'>
                        <FaArrowLeft className='text-6xl  ' />
                    </Link>
                    <div className='mx-auto'>
                        <h1 className='text-center text-6xl -ml-36'>Following</h1>
                    </div>
                </div>

                {/* Body */}
                <div className='flex flex-col gap-10   mt-32 items-start  px-4'>
                    {
                        data.map((data) =>
                        {
                            return (
                                <div className='flex gap-5 justify-between items-center '>
                                    {/* Image */}
                                    <div className='px-2 w-[200px]'>
                                        <img src={data.img} alt="" className='w-32 h-32 rounded-full' />
                                    </div>
                                    {/* Title */}
                                    <div className='w-[200px] md:w-[250px] lg:w-[350px] xl:w-[400px] -ml-10'>
                                        <h3 className='pt-4 text-2xl  md:text-3xl lg:text-4xl'>{data.title}</h3>
                                    </div>
                                    {/* button */}
                                    <div className=' w-[300px] md:w-[400px] xl:w-[600px] 2xl:w-[650px] text-right ml-0 xl:ml-10 '>

                                        <button className='bg-gradient-to-t from-[#FACD91] to-[#EC808D] shadow-md border-2 border-black px-5 text-3xl  py-3 rounded-3xl '
                                            onClick={() =>
                                            {
                                                setISFollow((prev) => ({
                                                    ...prev,
                                                    [data.id]: !prev[data.id],
                                                }))
                                                if (!isFollow[data.id])
                                                {
                                                    data.btn = "UnFollow"
                                                }
                                                else
                                                {
                                                    data.btn = "Follow"
                                                }
                                            }}
                                        >
                                            {data.btn}
                                        </button>


                                    </div>
                                </div>
                            )
                        })
                    }

                </div>






            </div>
        </div>
    )
}
