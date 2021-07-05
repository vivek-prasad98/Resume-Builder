import { useRef, useState, useEffect } from 'react'
import Brand from './Resume/brand'
import Content from './Resume/content'
import html2PDF from 'jspdf-html2canvas'
import { Tools } from './Resume/Toolkit'
import gsap from 'gsap'
export default function Sheet () {
  const pdfRef = useRef(null)
  let [isVisible, updateVisible] = useState(false)
  let [isVisibleOptions, updateVisibleOptions] = useState(false)

  const toPdf = () => {
    html2PDF(pdfRef.current, {
      jsPDF: {
        format: 'a3'
      },
      html2canvas: {
        scrollX: 0,
        scrollY: -window.scrollY
      },
      imageType: 'image/jpeg',
      output: './pdf/generate.pdf'
    })
  }

  useEffect(() => {
    gsap.from('.fadeIn', { duration: 0.5, opacity: 0 })
    return () => gsap.from('.fadeIn', { duration: 0.5, opacity: 1 })
  })
  function makeVisibile () {
    updateVisible(!isVisible)
  }
  function makeItVisibile () {
    updateVisibleOptions(!isVisibleOptions)
  }

  return (
    <div class='sheet w-full h-auto block bg-gradient-to-r from-blue-400 to-blue-500 py-32 relative'>
      {isVisible || isVisibleOptions ? (
        <div
          class='block fadeIn w-full h-screen fixed top-0 bottom-0 left-0 right-0'
          style={{ background: 'rgba(17, 17, 17, 0.685)', zIndex: 1 }}
        ></div>
      ) : null}
      <div
        className='text-4xl text-gray-300 fixed left-1/2 top-16 transform -translate-x-1/2 bg-gray-800 rounded-lg shadow-2xl'
        style={{ zIndex: '999' }}
      >
        <Tools
          click={makeVisibile}
          click2={makeItVisibile}
          canIShow={isVisible}
          showThis={isVisibleOptions}
        />
      </div>
      {/* <div> */}
      <div
        className='bg-white rounded-lg relative mx-auto h-full'
        style={{ width: '29.7cm', minHeight: '42cm' }}
        ref={pdfRef}
      >
        <ul className='m-0 p-0 relative'>
          <li>
            <Brand />
          </li>
          <li>
            <Content />
          </li>
        </ul>
        <div
          className='bottomLimit w-full h-1 border-b-2 border-gray-400 border-dashed absolute'
          style={{ opacity: 0 }}
        ></div>
      </div>
      {/* </div> */}
      <button
        className='fixed right-12 bottom-12 bg-yellow-400 text-gray-900 text-2xl p-6'
        onClick={toPdf}
      >
        Download
      </button>
    </div>
  )
}
