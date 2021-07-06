import Personal from './personal'
import Profession from './professional'
export default function Content ({ toggleOptions }) {
  function handleChange () {
    alert('Changed!')
  }
  return (
    <ul
      className='contentOptions px-32 flex text-left mt-16 h-full'
      onResize={handleChange}
    >
      <li className='relative'>
        <Personal options={toggleOptions} />
      </li>
      <li className='relative'>
        <Profession options={toggleOptions} />
      </li>
    </ul>
  )
}
