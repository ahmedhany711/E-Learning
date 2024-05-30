// Dashboard.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryTheme, Background } from 'victory';
import Footer from '../components/Footer/Footer';

const Dashboard = () =>
{
    const instructorData = useSelector(state => state.Instructors);

    return (<>


        <div className="container mx-auto my-36">
            <h1 className="text-3xl text-title font-semibold text-center mb-12">Instructor Dashboard</h1>

            {/* Render a chart for each instructor */}
            <div className='grid grid-cols-4 gap-10'>
                {instructorData.map(instructor => (
                    <div key={instructor.id} className="bg-white rounded-lg shadow-xl p-6 mb-8">
                        <div className="h-full flex flex-col justify-between">
                            <div className='flex gap-4   items-center'>
                                <img src={instructor.img} alt="Course 1" className="mb-4 w-28 h-28 rounded-full object-contain  p-1" />
                                <h2 className="text-lg font-semibold text-center">{instructor.name}</h2>
                            </div>
                            <div>
                                <VictoryChart
                                    domainPadding={{ x: 180 }} // Adjust the value as needed for proper spacing
                                    disableInlineStyles={true}
                                    theme={VictoryTheme.material}
                                    padding={{ top: 30, bottom: 80, left: 30, right: 30 }}
                                    width={300}
                                    height={300}
                                >
                                    {/* X-axis label */}
                                    <VictoryAxis
                                        label=""
                                        tickValues={['Courses', 'Students']}
                                        // Set tick values to display only 'Courses' and 'Students'
                                        style={{ axisLabel: { padding: 35 }, fill: '#3182CE' }}
                                    />
                                    {/* Y-axis label */}
                                    <VictoryAxis
                                        dependentAxis
                                        label=" "
                                        style={{ axisLabel: { padding: 35, fill: '#ff6575', fontSize: 18 } }}
                                    />
                                    <VictoryBar
                                        data={[
                                            { x: 'Courses', y: instructor.numOfCourses },
                                            { x: 'Students', y: instructor.numOfStudents }
                                        ]}
                                        x="x"
                                        y="y"
                                        barWidth={30}
                                        style={{ data: { fill: ({ datum }) => (datum.x === 'Courses' ? '#B4A7F5' : '#ff6575'), paddingBlock: 50 }, labels: { fill: '#3182CE' } }}
                                        labels={({ datum }) => datum.y} // Show data labels on bars
                                        labelComponent={<VictoryLabel dy={-10} />} // Adjust label position
                                    />
                                    {/* Display number of courses and students at the bottom of bars */}
                                    {/* <VictoryLabel
                                        x={50}
                                        y={235}
                                        text={`${instructor.numOfCourses} Courses`}
                                        style={{ fontSize: 12, fill: '#3182CE' }}
                                    />
                                    <VictoryLabel
                                        x={200}
                                        y={235}
                                        text={`${instructor.numOfStudents} Students`}
                                        style={{ fontSize: 12, fill: '#3182CE' }}
                                    /> */}
                                </VictoryChart>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </>

    );
};

export default Dashboard;
