import { Component } from 'react'
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiFillCheckCircle
} from 'react-icons/ai'
import { AddButton, GenerateId, GetHeight, HideLimit } from './helpers'

export class Other extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 1 }
    this.generateList = this.generateList.bind(this)
    this.increaseList = this.increaseList.bind(this)
    this.decreaseList = this.decreaseList.bind(this)
  }
  increaseList () {
    GetHeight()
    this.setState({ count: this.state.count + 1 })
  }
  decreaseList () {
    HideLimit()
    if (this.state.count < 2) return
    this.setState({ count: this.state.count - 1 })
  }
  generateList () {
    let totalList = []
    for (let i = 1; i <= this.state.count; ++i) {
      totalList[i] = (
        <li
          className='professionList text-left pl-8 py-2 relative'
          key={i * 505}
        >
          <AddButton
            content='Add New'
            click={this.increaseList}
            icon={AiFillPlusCircle}
            classes={'-top-4 right-2'}
          />
          <AddButton
            content='remove'
            click={this.decreaseList}
            icon={AiFillMinusCircle}
            classes={'-top-4  right-12'}
          />
          <span className='w-4 h-4 bg-blue-500 block absolute rounded-full left-3 top-6'></span>
          <span className='verticalLine w-1 h-5/6 bg-gray-300 block absolute left-4 top-14'></span>
          <p
            className='text-2xl font-bold text-gray-600 p-0 uppercase'
            placeholder='Position'
            contentEditable='true'
          >
            Position
          </p>
          <section className='flex justify-between'>
            <p
              className='text-xl font-bold text-gray-500 p-0 uppercase'
              placeholder='Employer'
              contentEditable='true'
            >
              Employer
            </p>
            <p className='text-xl text-right font-bold text-gray-400 p-0 uppercase'>
              <span
                placeholder='From-Until'
                contentEditable='true'
                className='block whitespace-nowrap'
              ></span>
            </p>
          </section>
          <p
            placeholder='In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer.'
            contentEditable='true'
            className='text-xl text-gray-500'
          ></p>
        </li>
      )
    }
    return totalList
  }

  render () {
    return this.generateList()
  }
}

export class Education extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 1 }
    this.generateList = this.generateList.bind(this)
    this.increaseList = this.increaseList.bind(this)
    this.decreaseList = this.decreaseList.bind(this)
  }
  increaseList () {
    GetHeight()
    this.setState({ count: this.state.count + 1 })
  }
  decreaseList () {
    HideLimit()
    if (this.state.count < 2) return
    this.setState({ count: this.state.count - 1 })
  }
  generateList () {
    let totalList = []
    for (let i = 1; i <= this.state.count; ++i) {
      totalList[i] = (
        <li
          className='professionList text-left pl-8 py-2 relative'
          key={i + 101}
        >
          <AddButton
            content='Add New'
            click={this.increaseList}
            icon={AiFillPlusCircle}
            classes={'-top-4  right-2'}
          />
          <AddButton
            content='remove'
            click={this.decreaseList}
            icon={AiFillMinusCircle}
            classes={'-top-4  right-12'}
          />
          <span className='w-4 h-4 bg-blue-500 block absolute rounded-full left-3 top-6'></span>
          <span className='verticalLine w-1 h-5/6 bg-gray-300 block absolute left-4 top-14'></span>
          <p
            className='text-2xl font-bold text-gray-600 p-0 uppercase'
            placeholder='Degree'
            contentEditable='true'
          >
            Degree
          </p>
          <section className='flex justify-between'>
            <p
              className='text-xl font-bold text-gray-500 p-0 uppercase'
              placeholder='School'
              contentEditable='true'
            >
              School
            </p>
            <p className='text-xl text-right font-bold text-gray-400 p-0 uppercase'>
              <span
                placeholder='From-Until'
                contentEditable='true'
                className='block whitespace-nowrap'
              ></span>
            </p>
          </section>
          {/* <p
            placeholder='In this text field your can describe your duties. Try to focus on accomplishments that serve as concrete examples to the type of problems you can solve to your future employer.'
            contentEditable='true'
            className='text-xl text-gray-500'
          ></p> */}
        </li>
      )
    }
    return totalList
  }

  render () {
    return this.generateList()
  }
}

export class Customtitle extends Component {
  constructor (props) {
    super(props)
    let tempId = GenerateId(10)
    this.state = {
      it: [
        {
          id: tempId,
          data: this.generateNewItem(tempId)
        }
      ]
    }
    this.addOneItem = this.addOneItem.bind(this)
    this.removeOneItem = this.removeOneItem.bind(this)
    this.generateNewItem = this.generateNewItem.bind(this)
  }

  // Adds one more item
  addOneItem () {
    GetHeight()
    const newId = GenerateId(10)
    let temp = [...this.state.it]
    temp.push({
      id: newId,
      data: this.generateNewItem(newId)
    })
    this.setState({ it: temp })
  }

  // Removes one item where clicked
  removeOneItem (id) {
    HideLimit()
    let temp = [...this.state.it]
    let idx
    temp.forEach((item, index) => {
      if (item.id === id) idx = index
    })
    temp.splice(idx, 1)
    this.setState({ it: temp })
  }

  // gererate One item
  generateNewItem (id) {
    // let id = GenerateId(10)
    console.log(id)
    const li = (
      <li
        className='customList text-gray-500 rounded-lg bg-gray-100 inline-block mr-10 relative mb-4'
        id={id}
        key={id}
      >
        <p
          className='text-2xl text-gray-600 p-1 capitalize text-center'
          placeholder='Enter skill'
          contentEditable='true'
        ></p>
        <AddButton
          content='Add New'
          click={() => {
            this.addOneItem()
          }}
          icon={AiFillPlusCircle}
          classes={'-top-4 right-0'}
        />
        <AddButton
          content='remove'
          click={() => {
            this.removeOneItem(id)
          }}
          icon={AiFillMinusCircle}
          classes={'-top-4  right-8'}
        />
      </li>
    )
    return li
  }
  render () {
    return this.state.it.map(item => item.data)
  }
}

export class ListCustomtitle extends Component {
  constructor (props) {
    super(props)
    let tempId = GenerateId(10)
    this.state = {
      it: [
        {
          id: tempId,
          data: this.generateNewItem(tempId)
        }
      ]
    }
    this.addOneItem = this.addOneItem.bind(this)
    this.removeOneItem = this.removeOneItem.bind(this)
    this.generateNewItem = this.generateNewItem.bind(this)
  }

  // Adds one more item
  addOneItem () {
    const newId = GenerateId(10)
    let temp = [...this.state.it]
    temp.push({
      id: newId,
      data: this.generateNewItem(newId)
    })
    this.setState({ it: temp })
  }

  // Removes one item where clicked
  removeOneItem (id) {
    HideLimit()
    let temp = [...this.state.it]
    let idx
    temp.forEach((item, index) => {
      if (item.id === id) idx = index
    })
    temp.splice(idx, 1)
    this.setState({ it: temp })
  }

  // gererate One item
  generateNewItem (id) {
    // let id = GenerateId(10)
    console.log(id)
    const li = (
      <li
        className='customList cList text-gray-500 flex items-center w-2/5 hover:border-4 hover:border-gray-500 rounded-sm inline-block mr-10 relative mb-4'
        id={id}
        key={id}
      >
        <spna className='text-3xl absolute left-4 top-1 text-blue-500'>
          <AiFillCheckCircle className='inline-block' />
        </spna>
        <p
          className='text-2xl text-gray-600 mx-12 inline-block'
          placeholder='Enter Text'
          contentEditable='true'
          style={{ width: '90%' }}
        ></p>
        <AddButton
          content='Add New'
          click={() => {
            this.addOneItem()
          }}
          icon={AiFillPlusCircle}
          classes={'-top-4 right-0'}
        />
        <AddButton
          content='remove'
          click={() => {
            this.removeOneItem(id)
          }}
          icon={AiFillMinusCircle}
          classes={'-top-4  right-8'}
        />
      </li>
    )
    return li
  }
  render () {
    return this.state.it.map(item => item.data)
  }
}
