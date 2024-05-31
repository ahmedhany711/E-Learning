import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from '../components/Hero/hero'
import TopCategory from '../components/Top Category/Top Category'
import CourseComponent from '../components/Course/Course'
import BottomHero from '../components/BottomHero/BottomHero'
import Footer from '../components/Footer/Footer'
import NAV from '../components/Nav/NAV'

export default function Home()
{
    return (
        <div>
            <Routes>
                <Route path='/' element={

                    <>
                        <NAV />
                        <Hero />
                        <TopCategory />
                        <CourseComponent />
                        <BottomHero />
                        <Footer />{" "}

                    </>
                }>
                </Route>
            </Routes>
        </div>
    )
}
