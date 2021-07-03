import { Personaldetails } from './../../Utilities/Detailse'
export default function Professional () {
  return (
    <ul className='m-0 p-0 sidemenu space-y-8'>
      <li>
        <div className=' w-full '>
          <p
            className='text-3xl font-bold text-gray-700'
            contentEditable='true'
          >
            Profile
          </p>
          <p
            className='text-2xl pl-1 text-gray-600 -mt-1 '
            contentEditable='true'
            placeholder='Write about your profile that'
          ></p>
        </div>
      </li>
      <li>
        <p
          className='text-3xl font-bold text-gray-700 -ml-1'
          contentEditable='true'
          placeholder='Personal Details'
        >
          Personal Details
        </p>
        <ul className='pl-1 text-2xl mt-2 pt-2'>
          <Personaldetails />
        </ul>
      </li>
    </ul>
  )
}
