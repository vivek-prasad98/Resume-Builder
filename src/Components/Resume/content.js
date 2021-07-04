import Personal from './personal'
import Profession from './professional'
export default function Content () {
  function handleChange () {
    alert('Changed!')
  }
  return (
    <ul
      className='contentOptions px-32 flex text-left mt-16 h-full'
      onClick={handleChange}
    >
      <li className='relative'>
        <Personal />
      </li>
      <li className='relative'>
        <Profession />
      </li>
    </ul>
  )
}
