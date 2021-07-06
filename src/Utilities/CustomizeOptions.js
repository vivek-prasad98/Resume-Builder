import React, { useEffect } from 'react'
import gsap from 'gsap'

export function SelectFont () {
  const fonts = {
    Poppins: "'Poppins', sans-serif",
    MerriWeather: "'Merriweather Sans', sans-serif",
    Fira: "'Fira Sans', sans-serif",
    Source: "'Source Sans Pro', sans-serif"
  }
  function changeFonts (e) {
    let currentFont = e.target.value.split(' ')[0]
    console.log(e.target.value.split(' ')[0])
    let body = document.body
    if (body.hasAttribute('style')) {
      body.removeAttribute('style')
      body.setAttribute('style', `font-family:${fonts[currentFont]}`)
    } else {
      body.setAttribute('style', `font-family:${fonts[currentFont]}`)
    }
  }
  return (
    <section>
      <select
        className='text-gray-700 text-2xl  rounded-lg cursor-pointer outline-none p-3'
        onChange={changeFonts}
      >
        <option>Fira Sans</option>
        <option>Poppins</option>
        <option>MerriWeather</option>
        <option>Source Sans Pro</option>
      </select>
    </section>
  )
}

export function ColorPicker (props) {
  const colorsAvailable = [
    'blue-500',
    'red-500',
    'yellow-500',
    'green-500',
    'gray-700'
  ]

  function getColor (colorsPosible, arrayOfClasses, prefix) {
    let hasColor = ''
    colorsPosible.forEach(color => {
      if (arrayOfClasses.indexOf(prefix + color) !== -1) hasColor = color
    })
    return hasColor
  }
  function elementsToChange (elesToChange, classes, prefix) {
    const nextColor = getColor(colorsAvailable, classes, 'bg-')
    elesToChange.forEach(ele => {
      let currentClass = getColor(colorsAvailable, [...ele.classList], prefix)
      if (currentClass.length > 0) {
        ele.classList.remove(prefix + currentClass)
        ele.classList.add(prefix + nextColor)
      }
    })
  }
  function ChangeColors (e) {
    const classes = [...e.target.classList]
    const elementToChangeColor = [...document.querySelectorAll('.myColor')]
    elementsToChange(elementToChangeColor, classes, 'text-')
    const elementsToChangeBackground = [
      ...document.querySelectorAll('.myBgColor')
    ]
    elementsToChange(elementsToChangeBackground, classes, 'bg-')
  }

  useEffect(() => {
    if (props.showMe) {
      gsap.from('.pickerMenu', { duration: 0.8, y: 50 })
    } else {
      gsap.from('.pickerMenu', { duration: 0.5, opacity: 1 })
    }
  })

  function generatePicker () {
    let colorSet = colorsAvailable.map((color, index) => {
      let classes = 'block w-14 h-14 rounded-full bg-' + color
      return (
        <li key={index * 5152} onClick={ChangeColors}>
          <span className={classes}></span>
        </li>
      )
    })
    return colorSet
  }

  return (
    <div className='relative'>
      <span
        className='block w-16 h-16 rounded-full bg-blue-400 border-2 border-gray-100 cursor-pointer'
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

export function SectionOptions ({ options, show }) {
  useEffect(() => {
    gsap.from('.sectionForOptions', { duration: 0.5, y: 70 })
  }, [])
  return (
    <div
      className='sectionForOptions w-1/2  h-auto rounded-xl shadow-2xl bg-gray-100 absolute top-full left-2/4 transform -translate-x-1/2 xl:scale-75 xl:-translate-y-32 2xl:scale-95 2xl:-translate-y-2'
      style={{ width: '630px' }}
    >
      <span
        className='block w-4 h-4 absolute left-1/2 bg-gray-200 -top-2 transform -translate-x-1/2 rotate-45'
        style={{ zIndex: 1 }}
      ></span>
      <div className='block w-full bg-gray-200 shadow-inner relative rounded-tl-xl rounded-tr-xl'>
        <p className='text-gray-500 text-2xl h-full  flex items-center py-8 justify-center'>
          Select the available options to build the Resume on your own
        </p>
      </div>
      <div>
        <ul className='listOfOptions text-lefttext-gray-700 flex '>
          <li className='border-r border-gray-300 p-8'>
            {sideOneOptions(options, show)}
          </li>
          <li className='border-r border-gray-300 p-8'>
            {rightSideOptions(options, show)}
          </li>
        </ul>
      </div>
    </div>
  )
}

function sideOneOptions (options, show) {
  return (
    <div>
      <ul>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <section className='opacity-100 pointer-events-none'>
            <span>
              {generateOptionWithLabels(
                'Picture',
                'text-2xl',
                options.picture,
                'picture',
                show
              )}
            </span>
          </section>
          <span>
            {generateOptionWithLabels(
              'Profile',
              'text-2xl',
              options.profile,
              'profile',
              show
            )}
          </span>
        </li>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Personal Info
          </spna>
          <section className='opacity-80 pointer-events-none'>
            <span>
              {generateOptionWithLabels(
                'Date of Birth',
                'text-lg',
                options.birth,
                'birth',
                show
              )}
            </span>
          </section>
          <span>
            {generateOptionWithLabels(
              'Nationality',
              'text-lg',
              options.natoinality,
              'natoinality',
              show
            )}
          </span>
          <section className='opacity-80 pointer-events-none'>
            <span>
              {generateOptionWithLabels(
                'Address',
                'text-lg',
                options.address,
                'address',
                show
              )}
            </span>
          </section>
          <span>
            {generateOptionWithLabels(
              'Marital status',
              'text-lg',
              options.maritalStatus,
              'maritalStatus',
              show
            )}
          </span>
        </li>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Contact
          </spna>
          <section className='opacity-80 pointer-events-none'>
            <span>
              {generateOptionWithLabels(
                'Email',
                'text-lg',
                options.email,
                'email',
                show
              )}
            </span>
            <span>
              {generateOptionWithLabels(
                'Phone',
                'text-lg',
                options.phone,
                'phone',
                show
              )}
            </span>
          </section>
          <span>
            {generateOptionWithLabels(
              'your Website',
              'text-lg',
              options.website,
              'website',
              show
            )}
          </span>
          <span>
            {generateOptionWithLabels(
              'Linkedin',
              'text-lg',
              options.linkedin,
              'linkedin',
              show
            )}
          </span>
          <span>
            {generateOptionWithLabels(
              'Github',
              'text-lg',
              options.github,
              'github',
              show
            )}
          </span>
          <span>
            {generateOptionWithLabels(
              'twitter',
              'text-lg',
              options.twitter,
              'twitter',
              show
            )}
          </span>
          <span>
            {generateOptionWithLabels(
              'instagram',
              'text-lg',
              options.insta,
              'insta',
              show
            )}
          </span>
        </li>
        <li>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Optionals
          </spna>
          <p className='text-xl -mt-2 mb-6 p-0 text-left text-gray-600'>
            Specify your custom options here. This on is totally optional.
          </p>
          <span>
            {generateOptionWithLabels(
              'Custome title',
              'text-lg',
              options.customTitle,
              'customTitle',
              show
            )}
          </span>
        </li>
      </ul>
    </div>
  )
}

function rightSideOptions (options, show) {
  return (
    <div>
      <ul>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <section className='opacity-80 pointer-events-none'>
            <span>
              {generateOptionWithLabels('Name', 'text-2xl', options.name, show)}
            </span>
          </section>
          <span>
            {generateOptionWithLabels(
              'Profession',
              'text-2xl',
              options.profession,
              'profession',
              show
            )}
          </span>
          <span>
            {generateOptionWithLabels(
              'Work experience',
              'text-2xl',
              options.work,
              'work',
              show
            )}
          </span>
          <section className='opacity-80 pointer-events-none'>
            <span>
              {generateOptionWithLabels(
                'education',
                'text-2xl',
                options.education,
                'education',
                show
              )}
            </span>
          </section>
        </li>
        <li className='border-b block w-full border-gray-300 pb-4'>
          <spna className='text-2xl text-gray-600 text-left block my-5 font-bold uppercase'>
            Skills
          </spna>
          <p className='text-xl -mt-2 mb-6 p-0 text-left text-gray-600'>
            List your personal and professional skills
          </p>
          <section className='flex flex-between space-x-6'>
            <span>
              {generateOptionWithLabels(
                'sample skill 1',
                'text-lg',
                options.skill1,
                'skill1',
                show
              )}
            </span>
            <span>
              {generateOptionWithLabels(
                'sample skill 2',
                'text-lg',
                options.skill2,
                'skill2',
                show
              )}
            </span>
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
            <span>
              {generateOptionWithLabels(
                'Additinal info',
                'text-lg',
                options.additional,
                'additional',
                show
              )}
            </span>
            {/* <span>{generateOptionWithLabels('Nationality', 'text-lg')}</span> */}
          </section>
        </li>
      </ul>
    </div>
  )
}

function generateOptionWithLabels (label, fontSize, isValid, KEY, show) {
  const currentColor = isValid ? 'blue-500' : 'gray-400'
  const currentLabelColor = isValid ? 'gray-500' : 'gray-400'
  let lableStylings =
    'font-bold uppercase text-' + currentLabelColor + ' ' + fontSize

  return (
    <section className='flex space-x-4 mb-3'>
      <span>{Toggler(isValid, currentColor, KEY, show)}</span>
      <span className={lableStylings}>{label}</span>
    </section>
  )
}

function switchToggler (isItValid, bar) {
  if (isItValid) {
    if (bar.current.hasAttribute('style')) bar.current.removeAttribute('style')
    gsap.to(bar.current, { duration: 0.5, right: '4px' })
  } else {
    gsap.to(bar.current, { duration: 0.5, left: '4px' })
  }
}

function Toggler (isValid, color, KEY, show) {
  const bar = React.createRef(null)
  const contClasses =
    'toggler w-16 h-8 block border-2 relative p-1 flex items-center rounded-full border-' +
    color
  const barClasses = 'bar block w-6 h-4 rounded-full absolute bg-' + color
  useEffect(() => {
    switchToggler(isValid, bar)
  }, [])

  const handleToggler = () => {
    switchToggler(!isValid, bar)
    show(KEY, !isValid)
  }

  return (
    <span className={contClasses} onClick={handleToggler}>
      <span ref={bar} className={barClasses}></span>
    </span>
  )
}
