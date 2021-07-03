import Personal from './personal'
export default function Content () {
  return (
    <ul className='contentOptions px-32 flex text-left mt-16'>
      <li className='relative'>
        <Personal />
      </li>
      <li className='bg-green-300'> hello world 1</li>
    </ul>
  )
}
