export default function Professional () {
  return (
    <ul className='m-0 p-0'>
      <li>
        <p
          contentEditable='true'
          placeholder='Profile'
          className='uppercase text-gray-800'
        >
          PROFILE
        </p>
        <p
          contentEditable='true'
          placeholder='Write a notes about your profile'
          className='p-2 text-2xl'
          style={{ width: '100%' }}
        ></p>
      </li>
    </ul>
  )
}
