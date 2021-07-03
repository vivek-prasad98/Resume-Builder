import { VscTriangleDown } from 'react-icons/vsc'
export function AddButton (props) {
  let mainClasses = 'maniBtn text-yellow-500 text-3xl absolute ' + props.classes
  return (
    <button onClick={props.click} className={mainClasses}>
      <props.icon />
      <span className='hintText block p-2 text-sm font-bold rounded-md text-gray-300 bg-gray-700 whitespace-nowrap uppercase absolute bottom-full left-1/2 transform -translate-x-2/4 -translate-y-1/4'>
        {props.content}
        <span class='block w-5 h-5 text-gray-700 absolute left-1/2 transform -translate-x-2/4 flex justify-center text-2xl'>
          <VscTriangleDown />
        </span>
      </span>
    </button>
  )
}

export function RemoveContent (id) {
  let item = document.querySelector(`#${id}`)
  item.remove()
}

export function GenerateId (length) {
  const rawString =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let strId = ''
  for (let i = 1; i <= length; ++i)
    strId += rawString[Math.floor(Math.random() * rawString.length)]
  return strId
}
