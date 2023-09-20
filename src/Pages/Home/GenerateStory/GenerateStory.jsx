import React from 'react'
import { BiSolidUpvote } from 'react-icons/bi';
const GenerateStory = () => {
    return (
        <div>
            <div>
                {/* <h3 className='text-4xl font-semibold mb-5'>Provide your story</h3> */}
                <div className='shadow-lg rounded-md bg-white mt-16'>
                    <div className='flex justify-between px-5 pt-5 border-b-2'>
                        <div>
                            <h4 className='text-2xl font-medium mb-3'>Short story</h4>
                        </div>
                        <div>
                            <button><BiSolidUpvote></BiSolidUpvote></button>
                            <button></button>
                        </div>
                    </div>
                    <form>
                        <textarea 
                            className="textarea text-lg w-full h-[220px] focus:outline-none" 
                            placeholder="Short story...">
                        </textarea>
                    </form>
                </div>
            </div>
        </div>
      )
}

export default GenerateStory