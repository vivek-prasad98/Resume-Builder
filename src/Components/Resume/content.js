import Personal from './personal'
import Profession from './professional'
export default function Content () {
  return (
    <ul className='contentOptions px-32 flex text-left mt-16'>
      <li className='relative'>
        <Personal />
      </li>
      <li className='relative'>
        <Profession />
      </li>
    </ul>
  )
}
