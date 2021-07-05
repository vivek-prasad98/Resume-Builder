import React from 'react'
import { IoOptions } from 'react-icons/io5'
import {
  SelectFont,
  ColorPicker,
  SectionOptions
} from './../../Utilities/CustomizeOptions'
export class Tools extends React.Component {
  //   constructor (props) {
  //     super(props)
  //   }

  render () {
    return (
      <ul className='flex'>
        <li className='relative border-r border-gray-100 py-6 px-12 flex flex-col items-center space-y-2'>
          <ColorPicker click={this.props.click} showMe={this.props.canIShow} />
          <span className='font-bold text-lg uppercase'>COLOR</span>
        </li>
        <li className='relative border-r border-gray-100 py-8 px-12 flex flex-col items-center space-y-2 '>
          <SelectFont />
          <span className='font-bold text-lg uppercase'>Fonts</span>
        </li>
        <li className='relative py-8 px-12 space-y-2 cursor-pointer'>
          <span
            className='text-center flex flex-col items-center text-6xl'
            onClick={this.props.click2}
          >
            <IoOptions />
            <span className='font-bold text-lg uppercase'>sections</span>
          </span>
          {this.props.showThis ? <SectionOptions /> : null}
        </li>
      </ul>
    )
  }
}
