import { AiFillCamera } from 'react-icons/ai'
import axios from 'axios'

export default function Brand ({ toggleOptions }) {
  const handleFileUpload = e => {
    const formData = new FormData()
    const file = e.target.files[0]
    const name = e.target.files[0].name
    formData.append('myFile', file, name)
    axios.post('./', formData)
  }

  let nameClasses = 'text-left block w-full relative flex items-center'
  nameClasses += !toggleOptions.picture ? ' my-10' : ''

  return (
    <ul className='brand m-0 p-0 px-32 pt-24 brand flex items-center'>
      {toggleOptions.picture ? (
        <li className='block'>
          <div className='w-80 h-80 -ml-2 rounded-full my-0 mx-auto bg-gray-400 text-gray-200 font-bold flex flex-col text-xl flex justify-center items-center'>
            <label
              for='upload'
              className='text-center flex space-x-3 cursor-pointer'
            >
              <span className='text-3xl'>
                <AiFillCamera />
              </span>
              <span>upload photo</span>
            </label>
            <span className='preview w-32 h-32 absolute top-2/4 left-2/4'></span>
            <input
              type='file'
              className='block hidden'
              id='upload'
              onChange={handleFileUpload}
            />
          </div>
        </li>
      ) : null}
      <li className={nameClasses}>
        <div className='-space-y-2'>
          <p
            contentEditable='true'
            placeholder='Your name'
            className='text-8xl font-bold text-gray-700 uppercase'
          ></p>
          {toggleOptions.profession ? (
            <p
              contentEditable='true'
              placeholder='Profession'
              className='text-4xl font-bold text-gray-500 uppercase'
            ></p>
          ) : null}
        </div>
      </li>
    </ul>
  )
}
