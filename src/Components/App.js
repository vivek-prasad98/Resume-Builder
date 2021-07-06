import './../Assets/CSS/App.css'
import Sheet from './Sheet'
import { useState, useEffect } from 'react'
import Loading from './../Utilities/Loading'
import gsap from 'gsap'
function App () {
  let [showInstructions, updateInstructions] = useState(true)
  let [loading, updateLoading] = useState(true)
  function hideInstructions () {
    updateInstructions(false)
  }
  useEffect(() => {
    console.log('rendered!')
    setTimeout(() => {
      updateLoading(false)
      gsap.from('.Info', { duration: 0.5, scale: 0.2, ease: 'back.out(1.7)' })
    }, 500)
  }, [])
  return (
    <div className='App'>
      <div
        className='noAccess bg-gradient-to-r from-red-400 to-pink-500 w-screen h-screen overflow-hidden fixed flex flex-col justify-center items-center space-y-6 xl:hidden'
        style={{ zIndex: 99999 }}
      >
        <p className='text-6xl md:text-8xl font-bold text-gray-200'>SORRY !</p>
        <p className='text-2xl md:text-5xl text-gray-300'>
          {' '}
          For inconvenience this is Only accessed
          <br /> Either in laptop or PC
        </p>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>{showInstructions ? Instructions(hideInstructions) : <Sheet />}</>
      )}
    </div>
  )
}

function Instructions (hideInstructions) {
  return (
    <div
      className='w-screen h-screen fixed left-0 top-0 flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500'
      style={{ zIndex: 9999 }}
    >
      <div
        className=' Info bg-gray-100 rounded-md h-auto shadow-2xl'
        style={{ width: '500px' }}
      >
        <section className='w-full p-8 text-center bg-gray-200 rounded-tl-md rounded-tr-md'>
          <p className='text-3xl uppercase font-bold text-gray-600'>
            -: Notice :-
          </p>
        </section>
        <section className='w-full p-8 text-2xl text-left'>
          <p className='m-0 p-0 text-gray-500 text-xl'>
            Welcome to My new Resume maker Web App. Here are some points, that
            need to be kept in mind.
          </p>
          <ul className='p-4 space-y-3'>
            <li>
              <p className='m-0 p-0 text-gray-500 text-xl flex'>
                <span className='h-full block w-8'>1. </span>
                <span>You can modify the fileds as you want.</span>
              </p>
            </li>
            <li>
              <p className='m-0 p-0 text-gray-500 text-xl flex'>
                <span className='h-full block w-8'>2 .</span>
                <span>
                  {' '}
                  On the top there is a option called Sections, Here you can add
                  the sections and remove.
                </span>
              </p>
            </li>
            <li>
              <p className='m-0 p-0 text-gray-500 text-xl flex'>
                <span className='h-full block w-8'>3 .</span>
                <span> You can Change the fonts of the entire page.</span>
              </p>
            </li>
            <li>
              <p className='m-0 p-0 text-gray-500 text-xl flex'>
                <span className='h-full block w-8'>4 .</span>
                <span>
                  {' '}
                  For more formating options like Bolding a text or uderline any
                  text you can use the shortcut keys as used in MS Word.
                </span>
              </p>
            </li>
            <li>
              <p className='m-0 p-0 text-gray-500 text-xl flex'>
                <span className='h-full block w-12'>5 .</span>
                <span>
                  (Limitation) when you download the resume it will be in two
                  pages, so make it on single page app. Do go with following
                  simple steps.
                  <span>
                    <ul className='mt-4'>
                      <li>
                        <p className='m-0 p-0 text-gray-500 text-xl flex'>
                          <span className='h-full block w-8'>a .</span>
                          <span> Download the Resume</span>
                        </p>
                      </li>
                      <li>
                        <p className='m-0 p-0 text-gray-500 text-xl flex'>
                          <span className='h-full block w-8'>b .</span>
                          <span>
                            {' '}
                            Open with Chrome and click op Print Options.
                          </span>
                        </p>
                      </li>
                      <li>
                        <p className='m-0 p-0 text-gray-500 text-xl flex'>
                          <span className='h-full block w-8'>a .</span>
                          <span> Now set the page type to 'A3' and print.</span>
                        </p>
                      </li>
                    </ul>
                  </span>
                </span>
              </p>
            </li>
          </ul>
          <p className='text-gray-700 my-4 text-xl'>
            :- I am working on certain limitaions. Thanks for showing interest.
          </p>
          <p className='text-gray-500 text-center'>
            <button
              className='my-6 bg-gray-800 py-4 px-5 text-gray-200 rounded-lg'
              onClick={hideInstructions}
            >
              Close
            </button>
          </p>
        </section>
      </div>
    </div>
  )
}

export default App
