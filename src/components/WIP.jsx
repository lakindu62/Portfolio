import React from 'react'
import Nav from './Nav'

import WorkBox from './WorkBox'

export default function WIP() {
  return (
    <div className='flex flex-col justify-center items-center w-full'>

      <WorkBox
        name='Z-Pal'
        imgSrc='/images/wip-assets/z-pal.jpg'
        description='Gym app to interact with friends , log your sets and visualise your progress'
        siteHref='https://z-pal.netlify.app/'
        githubHref='https://github.com/lakindu62/Z-Pal'
        skills={['react', 'react-router', 'Tailwind', "Firebase"]}

      />

      <WorkBox
        name='Lunar Labyrinth'
        imgSrc='/images/wip-assets/game.jpg'
        description='2D game with an inbuilt local storage leaderboard to compete with friends'
        siteHref = 'https://youtu.be/Ej7bL7m9nMY'
        githubHref = 'https://github.com/lakindu62/Lunar-Labyrinth-2DGame'
        skills={['HTML', 'CSS', 'Javascript']}
      />
      <div>
        <div className="flex flex-col gap-5 bg-[#1C1C1E] py-24 shadow-2xl px-36 mt-20 mx-10 rounded-[80px] items-center justify-center h-72 ">
          <div>Coming soon..</div>

        </div>
      </div>
    </div>
  )
}
