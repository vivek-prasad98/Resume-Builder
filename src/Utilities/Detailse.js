import { Component } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import {
  FaInstagram,
  FaRegEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaLinkedinIn,
  FaGithubAlt,
  FaTwitter
} from 'react-icons/fa'
export function Personaldetails ({ selectOptions }) {
  const options = [
    {
      title: 'Birth Date',
      visibility: selectOptions.birth
    },
    {
      title: 'Address',
      visibility: selectOptions.address
    },
    {
      title: 'Nationality',
      visibility: selectOptions.natoinality
    },
    {
      title: 'Marital Status',
      visibility: selectOptions.maritalStatus
    }
  ]

  return options.map((option, index) => {
    let str = 'Enter your ' + option.title
    if (option.visibility) {
      return (
        <>
          <li key={index} className='mb-3 pr-6'>
            <p
              className='p-0 font-bold text-blue-400'
              contentEditable='true'
              placeholder={option.title}
            >
              {option.title}
            </p>
            <p className='p-0' contentEditable='true' placeholder={str}></p>
          </li>
        </>
      )
    } else return null
  })
}

export function Social ({ selectOptions }) {
  const icons = [
    {
      name: 'Email',
      icon: <FaRegEnvelope />,
      visibility: selectOptions.email
    },
    {
      name: 'phone number',
      icon: <FaPhoneAlt />,
      visibility: selectOptions.phone
    },
    {
      name: 'Website Url',
      icon: <FaGlobe />,
      visibility: selectOptions.website
    },
    {
      name: 'Username',
      icon: <FaLinkedinIn />,
      visibility: selectOptions.linkedin
    },
    {
      name: 'Username',
      icon: <FaGithubAlt />,
      visibility: selectOptions.github
    },
    {
      name: 'Username',
      icon: <FaTwitter />,
      visibility: selectOptions.twitter
    },
    {
      name: 'Username',
      icon: <FaInstagram />,
      visibility: selectOptions.insta
    }
  ]
  let lists = icons.map((iconData, index) => {
    let str = 'Enter your ' + iconData.name
    let idx = index * 100
    if (iconData.visibility) {
      return (
        <li className='iconContainer flex items-center pr-12' key={idx}>
          <section
            className='w-9 h-9 mr-3 rounded-full bg-blue-500 flex justify-center items-center text-gray-200 text-base'
            style={{ width: '23px' }}
          >
            {iconData.icon}
          </section>
          <section>
            <span
              className='border-b border-gray-400 pb-2'
              placeholder={str}
              contentEditable='true'
            >
              {/* {str} */}
            </span>
          </section>
        </li>
      )
    } else return null
  })
  return lists
}

export class SomeOtherOptions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initialData: [
        {
          title: 'Title',
          subTitle: 'Enter details'
        }
      ]
    }
    this.addOption = this.addOption.bind(this)
    this.removeOption = this.removeOption.bind(this)
  }

  addOption () {
    console.log('Add called!')
    let temp = this.state.initialData
    temp.push({
      title: 'Title',
      subTitle: 'Enter details'
    })
    this.setState({ initialData: temp })
  }

  removeOption () {
    if (this.state.initialData.length < 2) return
    console.log('Remove Called!')
    this.setState(this.state.initialData.pop())
  }

  componentDidMount () {
    console.log('componentDidMount!')
  }
  render () {
    console.log(this.state)
    return this.state.initialData.map((data, index) => {
      let idx = index * 201
      return (
        <li
          key={idx}
          className=' options relative inline-block bg-gray-100 p-1 rounded-md text-xl text-gray-500 '
        >
          <span
            className='text-xl text-gray-500'
            placeholder={data.subTitle}
            contentEditable='true'
          ></span>
          <button
            className='addBtn absolute -top-3 right-6 text-blue-500'
            onClick={this.addOption}
          >
            <AiFillPlusCircle />
          </button>
          <button
            className='removeBtn absolute -top-3 right-0 text-blue-500'
            onClick={this.removeOption}
          >
            <AiFillMinusCircle />
          </button>
        </li>
      )
    })
  }
}
