import './../Assets/CSS/App.css'
export default function Loading () {
  return (
    <div className='bg-gradient-to-r h-screen text-4xl flex justify-center items-center block w-full overflow-hidden from-blue-400 to-purple-500'>
      <svg
        width='95'
        id='spinnerSvg'
        height='55'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='20' cy='20' r='18' id='spinnerContainer' />
        <circle cx='20' cy='20' r='18' id='spinnerBar' />
      </svg>
    </div>
  )
}
