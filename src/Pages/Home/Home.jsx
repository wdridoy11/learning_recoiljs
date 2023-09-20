import React from 'react'
import ProvideStory from './ProvideStory/ProvideStory'
import GenerateStory from './GenerateStory/GenerateStory'

const Home = () => {
  return (
    <div>
        <div className='container mx-auto px-5 py-20'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <ProvideStory></ProvideStory>
                </div>
                <div>
                    <GenerateStory></GenerateStory>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home