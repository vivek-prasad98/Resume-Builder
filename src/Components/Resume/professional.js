import {
  Other,
  Education,
  Customtitle,
  ListCustomtitle
} from './../../Utilities/Others'

export default function Professional ({ options }) {
  return (
    <ul className='m-0 p-0 space-y-8'>
      {options.work ? (
        <li>
          <p
            className='text-3xl m-0 p-0 font-bold text-gray-700 uppercase'
            placeholder='Work Experience'
            contentEditable='true'
          >
            Work Experience
          </p>
          <ul className='space-y-4'>
            <Other />
          </ul>
        </li>
      ) : null}
      <li>
        <p
          className='text-3xl m-0 p-0 font-bold text-gray-700 uppercase'
          placeholder='Education'
          contentEditable='true'
        >
          Education
        </p>
        <ul className='space-y-4'>
          <Education />
        </ul>
      </li>
      {options.skill1 ? (
        <li>
          <p
            className='text-3xl m-0 p-0 font-bold text-gray-600 uppercase'
            placeholder='custom title'
            contentEditable='true'
          >
            custom title
          </p>
          <ul className='pl-2 pt-7'>
            <Customtitle />
          </ul>
        </li>
      ) : null}
      {options.skill2 ? (
        <li>
          <p
            className='text-3xl m-0 p-0 font-bold text-gray-600 uppercase'
            placeholder='custom title'
            contentEditable='true'
          >
            custom title
          </p>
          <ul className='pl-2 pt-7'>
            <Customtitle />
          </ul>
        </li>
      ) : null}
      {options.additional ? (
        <li>
          <p
            className='text-3xl m-0 p-0 font-bold text-gray-600 uppercase'
            placeholder='custom title'
            contentEditable='true'
          >
            custom title
          </p>
          <ul className='pl-2 pt-7 flex flex-wrap'>
            <ListCustomtitle />
          </ul>
        </li>
      ) : null}
    </ul>
  )
}
