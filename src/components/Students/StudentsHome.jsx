import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoursesPage from '../Course/CoursesPage'
import Profile from '../../Pages/Profile'
import Footer from '../Footer/Footer'
import StudentNAV from './StudentNAV'
import Welcome from '../../Pages/Welcome'
import StudentsForRole from './StudentsForRole'
import CoursesPageForStudent from '../Course/CoursesPageForStudent'

export default function StudentsHome()
{
    return (
        <div className='bg-[#fafafa] -mt-32'>


            <div className='pt-36'>

                <Routes>
                    <Route path='' element={

                        <>
                            <StudentNAV />
                            <Welcome role="student" />
                            <StudentsForRole />

                            {/* <Profile showtTitle={false} /> */}
                            {/* <CoursesPage showFooter={false} /> */}

                            <Footer />{" "}

                        </>
                    }>

                    </Route>
                </Routes>
</div>
        </div>
    )
}
