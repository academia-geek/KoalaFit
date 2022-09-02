import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Progress } from "@material-tailwind/react";


const DashboardProfile = () => {
    return (
        <div className='bg-secondary w-full h-screen flex flex-col items-center pt-8 md:px-20 px-4 justify-around' >
            <div className='bg-white shadow-md max-w-xs w-full flex flex-col items-center rounded-3xl px-8 pb-8 min-w-min'>
                <div className='h-24 w-24 flex justify-center -mt-10'>
                    <img src="https://res.cloudinary.com/dzsd7vfjr/image/upload/v1661192604/tp7onnln0bsjvyfmlusf.jpg" alt=""
                        className='h-full rounded-full object-cover'
                    />
                </div>
                <div className='flex flex-col mt-4 text-center gap-2 border-b-2 w-[70%] pb-3'>
                    <p className='font-bold'>Cosplay de Ibai por Kevin</p>
                    <p className='text-textColor'>29 years, Medellin</p>
                </div>

                <div className='flex justify-around items-center pt-4 w-full'>
                    <div className='flex flex-col'>
                        <p className='text-primary text-sm'>Weight</p>
                        <p className='text-lg font-semibold'>64 kg</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-primary text-sm'>Height</p>
                        <p className='text-lg font-semibold'>1,70 m</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-primary text-sm'>Goal</p>
                        <p className='text-orange-400 font-semibold'>58 kg</p>
                    </div>

                </div>

            </div>

            <div className='bg-white shadow-md max-w-xs w-full flex flex-col rounded-3xl px-8 pb-8 pt-8 min-w-min '>
                <p className=''>Calorie Counter</p>
                <div className='flex justify-between items-center'>
                    <div>
                        <div className='mt-6'>
                            <p className='text-textColor'>Eaten</p>
                            <p>1230 kcal</p>
                        </div>

                        <div className='mt-6'>
                            <p className='text-textColor'>Burned</p>
                            <p>430 kcal</p>
                        </div>
                    </div>
                    <div className='h-36 w-36 text-center font-semibold text-primary mb-4'>
                        <CircularProgressbar value={40} text={"40%"}
                            styles={buildStyles({
                                trailColor: '#d6d6d6',
                                pathColor: '#0FC185',
                                textColor: '#0FC185'
                            })}

                        />
                        Kcal left
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div>

                    </div>
                </div>
            </div>

            <div className='bg-white shadow-md max-w-xs w-full flex flex-col rounded-3xl px-8 pb-8 pt-8 min-w-min'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p>Drunk</p>
                        <p>1910 ml /    <span className='text-textColor'>3000 ml</span></p>
                    </div> 
                    <div className='h-24 w-24'>
                    <CircularProgressbar value={20} text={"20%"}
                            styles={buildStyles({
                                trailColor: '#d6d6d6',
                                pathColor: '#0FC185',
                                textColor: '#0FC185'
                            })}

                        />
                    </div>          
                </div>
            </div>

        </div>
    )
}

export default DashboardProfile