import {
  FaInstagram,
  FaRegEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter
} from 'react-icons/fa'
export function Personaldetails () {
  const options = ['Birth Date', 'Natinality', 'Address', 'Marital Status']

  return options.map((option, index) => {
    let str = 'Enter your ' + option
    return (
      <>
        <li key={index} className='mb-3'>
          <p
            className='p-0 font-bold'
            contentEditable='true'
            placeholder={option}
          >
            {option}
          </p>
          <p className='p-0' contentEditable='true' placeholder={str}></p>
        </li>
      </>
    )
  })
}

export function Social () {
  const icons = [
    {
      name: 'Email',
      icon: <FaRegEnvelope />
    },
    {
      name: 'phone number',
      icon: <FaPhoneAlt />
    },
    {
      name: 'Website Url',
      icon: <FaGlobe />
    },
    {
      name: 'Username',
      icon: <FaLinkedinIn />
    },
    {
      name: 'Username',
      icon: <FaGithubAlt />
    },
    {
      name: 'Username',
      icon: <FaTwitter />
    },
    {
      name: 'Username',
      icon: <FaInstagram />
    }
  ]
}
