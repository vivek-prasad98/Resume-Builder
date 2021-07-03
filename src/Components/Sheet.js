import { useRef } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import Brand from './Resume/brand'
import Content from './Resume/content'

export default function Sheet () {
  const pdfRef = useRef(null)

  const toPdf = () => {
    html2canvas(pdfRef.current).then(canvas => {
      console.log(canvas)
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'px', 'a3')
      pdf.addImage(imgData, 'PNG', 0, 0)
      pdf.save('download.pdf')
    })
  }

  return (
    <div class='sheet w-full h-auto block bg-gradient-to-r from-blue-400 to-blue-500 py-32 relative'>
      <div className='text-4xl text-gray-300 fixed left-1/2 top-16 transform -translate-x-1/2 bg-gray-700 p-6 rounded-lg shadow-2xl'>
        Toolkit
      </div>
      {/* <div> */}
      <div
        className='bg-white rounded-lg relative mx-auto'
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
