import { AiFillCamera } from 'react-icons/ai'

export default function Brand () {
  return (
    <ul className='brand m-0 p-0 px-32 pt-24 brand flex items-center'>
      <li className='block'>
        <div className='w-80 h-80 -ml-2 rounded-full my-0 mx-auto bg-gray-400 text-gray-200 font-bold flex flex-col text-xl flex justify-center items-center'>
          <span className='text-3xl'>
            <AiFillCamera />
          </span>
          <span>upload photo</span>
        </div>
      </li>
      <li className='text-left block w-full relative flex items-center'>
        <div className='-space-y-2'>
          <p
            contentEditable='true'
            placeholder='Your name'
            className='text-8xl font-bold text-gray-700 uppercase'
          ></p>
          <p
            contentEditable='true'
            placeholder='Profession'
            className='text-4xl font-bold text-gray-500 uppercase'
          ></p>
        </div>
      </li>
    </ul>
  )
}
