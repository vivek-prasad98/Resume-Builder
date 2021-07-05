import { useEffect } from 'react'
import gsap from 'gsap'

export function SelectFont () {
  return (
    <section>
      <select className='text-gray-700 text-2xl font-semibold rounded-lg cursor-pointer outline-none p-3'>
        <option>Poppins</option>
        <option>MerriWeather</option>
        <option>Fira Sans</option>
        <option>Lucida</option>
      </select>
    </section>
  )
}

export function ColorPicker (props) {
  const colorsAvailable = [
    'bg-blue-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-gray-800'
  ]

  useEffect(() => {
    if (props.showMe) {
      gsap.from('.pickerMenu', { duration: 0.5, y: 40 })
    } else {
      gsap.from('.pickerMenu', { duration: 0.5, opacity: 1 })
    }
  })

  function generatePicker () {
    let colorSet = colorsAvailable.map((color, index) => {
      let classes = 'block w-14 h-14 rounded-full ' + color
      console.log(classes)
      return (
        <li key={index * 5152}>
          <span className={classes}></span>
        </li>
      )
    })
    return colorSet
  }

  return (
    <div className='relative'>
      <span
        className='block w-16 h-16 rounded-full bg-blue-400 border-2 border-gray-400 cursor-pointer'
        onClick={props.click}
      ></span>
      {props.showMe ? (
        <ul className='bg-gray-200 pickerMenu rounded-lg space-y-3 p-3 absolute shadow-2xl left-2/4 top-full mt-2 transform -translate-x-1/2 translate-y-2'>
          <span className='block w-4 h-4 absolute left-1/2 bg-gray-200 -top-2 transform -translate-x-1/2 rotate-45'></span>
          {generatePicker()}
        </ul>
      ) : null}
    </div>
  )
}

export function SectionOptions () {
  useEffect(() => {
    gsap.from('.sectionForOptions', { duration: 0.5, y: 40 })
  })
  return (
    <div
      className='sectionForOptions w-1/2 overflow-hidden h-auto rounded-xl shadow-2xl bg-gray-100 absolute top-full left-2/4 transform -translate-x-1/2'
      style={{ width: '630px' }}
    >
      <span className='block w-4 h-4 absolute left-1/2 bg-gray-200 -top-2 transform -translate-x-1/2 rotate-45'></span>
      <div className='block w-full bg-gray-200 shadow-inner relative rounded-tl-xl rounded-tr-xl'>
        <p className='text-gray-500 text-2xl h-full  flex items-center py-8 justify-center'>
          Select the available options to build the Resume on your own
        </p>
      </div>
      <div>
        <ul className='listOfOptions text-lefttext-gray-700 flex '>
          <li className='border-r border-gray-300 p-8'>{sideOneOptions()}</li>
          <li className='border-r border-gray-300 p-8'>{rightSideOptions()}</li>
        </ul>
      </div>
    </div>
  )
}

function sideOneOptions () {
  return (
    <div>
      <ul>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <span>{generateOptionWithLabels('Picture', 'text-2xl')}</span>
          <span>{generateOptionWithLabels('Profile', 'text-2xl')}</span>
        </li>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Personal Info
          </spna>
          <span>{generateOptionWithLabels('Date of Birth', 'text-lg')}</span>
          <span>{generateOptionWithLabels('Nationality', 'text-lg')}</span>
          <span>{generateOptionWithLabels('Address', 'text-lg')}</span>
          <span>{generateOptionWithLabels('Marital status', 'text-lg')}</span>
        </li>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Contact
          </spna>
          <span>{generateOptionWithLabels('Email', 'text-lg')}</span>
          <span>{generateOptionWithLabels('Phone', 'text-lg')}</span>
          <span>{generateOptionWithLabels('your Website', 'text-lg')}</span>
          <span>{generateOptionWithLabels('Linkedin', 'text-lg')}</span>
          <span>{generateOptionWithLabels('Github', 'text-lg')}</span>
          <span>{generateOptionWithLabels('twitter', 'text-lg')}</span>
          <span>{generateOptionWithLabels('instagram', 'text-lg')}</span>
        </li>
        <li>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Optionals
          </spna>
          <p className='text-xl -mt-2 mb-6 p-0 text-left text-gray-600'>
            Specify your custom options here. This on is totally optional.
          </p>
          <span>{generateOptionWithLabels('Custome title', 'text-lg')}</span>
        </li>
      </ul>
    </div>
  )
}

function rightSideOptions () {
  return (
    <div>
      <ul>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <span>{generateOptionWithLabels('Name', 'text-2xl')}</span>
          <span>{generateOptionWithLabels('Profession', 'text-2xl')}</span>
          <span>{generateOptionWithLabels('Work experience', 'text-2xl')}</span>
          <span>{generateOptionWithLabels('education', 'text-2xl')}</span>
        </li>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Skills
          </spna>
          <p className='text-xl -mt-2 mb-6 p-0 text-left text-gray-600'>
            List your personal and professional skills
          </p>
          <section className='flex flex-between space-x-6'>
            <span>{generateOptionWithLabels('Date of Birth', 'text-lg')}</span>
            <span>{generateOptionWithLabels('Nationality', 'text-lg')}</span>
          </section>
        </li>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Additional Info
          </spna>
          <p className='text-xl -mt-2 mb-6 p-0 text-left text-gray-600'>
            Here you can specify the additional infos like And certifications or
            something else.
          </p>
          <section className='flex flex-between space-x-6'>
            <span>{generateOptionWithLabels('Date of Birth', 'text-lg')}</span>
            {/* <span>{generateOptionWithLabels('Nationality', 'text-lg')}</span> */}
          </section>
        </li>
      </ul>
    </div>
  )
}

function generateOptionWithLabels (label, fontSize) {
  let lableStylings = 'font-bold text-gray-700 uppercase ' + fontSize
  return (
    <section className='flex space-x-4 mb-3'>
      <span>{Toggler()}</span>
      <span className={lableStylings}>{label}</span>
    </section>
  )
}

function Toggler () {
  function switchToggler () {}
  return (
    <span
      className='toggler w-16 h-8 block border-2 border-blue-500 relative p-1 flex items-center rounded-full'
      onClick={switchToggler}
    >
      <span className='block w-5 h-4 rounded-full bg-blue-500 absolute left-1'></span>
    </span>
  )
}
