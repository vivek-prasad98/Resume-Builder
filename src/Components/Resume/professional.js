import {
  Other,
  Education,
  Customtitle,
  ListCustomtitle
} from './../../Utilities/Others'

export default function Professional () {
  return (
    <ul className='m-0 p-0 space-y-8'>
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
    </ul>
  )
}
