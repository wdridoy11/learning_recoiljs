import React from 'react'

const ProvideStory = () => {
  return (
    <div>
        <div>
            <h3 className='text-4xl font-semibold mb-5'>Provide your story</h3>
            <form>
                <textarea 
                    className="textarea textarea-bordered shadow-lg text-lg w-full h-[300px]" 
                    placeholder="Provide your story here...">
                </textarea>
                <button className='bg-blue-700 btn capitalize text-lg font-normal w-full mt-3'>Generate short story</button>
            </form>
        </div>
    </div>
  )
}

export default ProvideStory