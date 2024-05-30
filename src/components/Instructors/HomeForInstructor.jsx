import React from 'react'
import Welcome from '../../Pages/Welcome'
import StudentNAV from '../Students/StudentNAV'
import { Route, Routes } from 'react-router-dom'
import StudentsForRole from '../Students/StudentsForRole'
import Footer from '../Footer/Footer'
import InstructorNAV from './InstructorNAV'
import InstructorProfile from './InstructorProfile'

export default function HomeForInstructor()
{
    return (
        <div className='bg-[#fafafa] -mt-32'>
<InstructorNAV/>

            <div className='pt-36'>
                <Routes>
                    <Route path='' element={

                        <>
                            <InstructorNAV />
                            <Welcome role="instructor" />
                            {/* <StudentsForRole /> */}

                            <InstructorProfile />


                            <Footer />{" "}

                        </>
                    }>

                    </Route>
                </Routes>

            </div>
        </div>
    )
}
