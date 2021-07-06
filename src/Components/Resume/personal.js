import { Personaldetails, Social } from './../../Utilities/Detailse'

import { Customtitle } from './../../Utilities/Others'
export default function Professional ({ options }) {
  return (
    <ul className='m-0 p-0 sidemenu space-y-10'>
      {options.profile ? (
        <li>
          <div className=' w-full '>
            <p
              className='text-3xl font-bold text-gray-700 uppercase'
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
      ) : null}
      <li>
        <p
          className='text-3xl font-bold text-gray-700 -ml-1 uppercase'
          contentEditable='true'
          placeholder='Personal Details'
        >
          Personal Details
        </p>
        <ul className='pl-1 text-2xl mt-2 pt-2'>
          <Personaldetails selectOptions={options} />
        </ul>
      </li>
      <li>
        <p
          className='text-3xl font-bold text-gray-700 -ml-1 uppercase'
          contentEditable='true'
          placeholder='Contact'
        >
          Contact
        </p>
        <ul className='pl-1 text-2xl mt-2 pt-4 space-y-6 text-gray-700'>
          <Social selectOptions={options} />
        </ul>
      </li>
      {options.customTitle ? (
        <li>
          <p
            className='text-3xl font-bold text-gray-700 -ml-1 uppercase'
            contentEditable='true'
            placeholder='Custom Title'
          >
            Custom Title
          </p>
          <ul className='pl-1 flex-wrap text-2xl mt-2 pt-4 text-gray-700 flex items-center'>
            <Customtitle />
          </ul>
        </li>
      ) : null}
    </ul>
  )
}
