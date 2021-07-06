import React from 'react'
import Brand from './Resume/brand'
import Content from './Resume/content'
import html2PDF from 'jspdf-html2canvas'
import { Tools } from './Resume/Toolkit'
import gsap from 'gsap'
import { FaDownload } from 'react-icons/fa'
import { GrContact } from 'react-icons/gr'

export default class Sheet extends React.Component {
  constructor () {
    super()
    this.pdfRef = React.createRef(null)
    this.state = {
      loading: false,
      isVisible: false,
      isVisibleOptions: false,
      toggleSections: {
        picture: false,
        profile: true,
        address: true,
        birth: true,
        natoinality: false,
        maritalStatus: false,
        email: true,
        phone: true,
        website: false,
        linkedin: false,
        github: false,
        twitter: false,
        insta: false,
        customTitle: false,
        name: true,
        profession: true,
        work: true,
        education: true,
        skill1: false,
        skill2: false,
        additional: false
      }
    }

    this.toPdf = this.toPdf.bind(this)
    this.makeVisibile = this.makeVisibile.bind(this)
    this.makeItVisibile = this.makeItVisibile.bind(this)
    this.showSections = this.showSections.bind(this)
    console.clear()
  }

  showSections (field, value) {
    let temp = this.state.toggleSections
    temp[field] = value
    this.setState({ toggleSections: temp })
  }

  toPdf = async () => {
    document.querySelector('.downloadingStatus').classList.remove('hidden')
    await html2PDF(this.pdfRef.current, {
      jsPDF: {
        unit: 'px',
        format: 'a3'
      },
      html2canvas: {
        scrollX: 0,
        scrollY: -window.scrollY
      },
      imageType: 'image/jpeg',
      imageQuality: 1,
      output: 'Resume.pdf'
    }).then(() => {
      document.querySelector('.downloadingStatus').classList.add('hidden')
    })
  }

  componentDidMount () {
    gsap.from('.fadeIn', { duration: 0.5, opacity: 0 })
    gsap.from('.toolsContainer', {
      duration: 1,
      delay: 0.6,
      scale: 0.4,
      opacity: 0,
      ease: 'elastic.out(1.7)'
    })
    gsap.from('.btn1', {
      duration: 1,
      delay: 1.6,
      scale: 0.4,
      opacity: 0,
      ease: 'elastic.inOut(1.7)'
    })
    gsap.from('.btn2', {
      duration: 1,
      delay: 1.8,
      scale: 0.4,
      opacity: 0,
      ease: 'elastic.inOut(1.7)'
    })
    gsap.from(this.pdfRef.current, {
      duration: 0.5,
      delay: 0.2,
      y: 200,
      opacity: 0,
      ease: 'back.out(1.7)'
    })
  }

  makeVisibile () {
    let temp = this.state.isVisible
    window.addEventListener('click', e => {
      const c = document.querySelector('.fadeIn')
      if (e.target === c) {
        console.log(this.state)
        this.setState({ isVisible: !temp })
      }
    })
    this.setState({ isVisible: !temp })
  }

  makeItVisibile () {
    let temp = this.state.isVisibleOptions
    window.addEventListener('click', e => {
      const c = document.querySelector('.fadeIn')
      if (e.target === c) {
        console.log(this.state)
        this.setState({ isVisibleOptions: !temp })
      }
    })
    this.setState({ isVisibleOptions: !temp })
  }

  render () {
    return (
      <div class='sheet w-full h-auto block bg-gradient-to-r from-blue-400 to-blue-500 py-32 relative'>
        <div
          className='fixed downloadingStatus bg-gradient-to-r top-0 hidden h-screen text-4xl flex justify-center items-center block w-full overflow-hidden from-blue-400 to-purple-500'
          style={{ zIndex: 9999 }}
        >
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
        {this.state.isVisible || this.state.isVisibleOptions ? (
          <div
            class='block fadeIn w-full h-screen fixed top-0 bottom-0 left-0 right-0'
            style={{ background: 'rgba(17, 17, 17, 0.685)', zIndex: 1 }}
          ></div>
        ) : null}
        <div
          className='toolsContainer text-4xl text-gray-300 fixed left-1/2 top-12 transform -translate-x-1/2 bg-gray-800 rounded-lg shadow-2xl scale-90 2xl:scale-95'
          style={{ zIndex: '999' }}
        >
          <Tools
            click={this.makeVisibile}
            click2={this.makeItVisibile}
            canIShow={this.state.isVisible}
            showThis={this.state.isVisibleOptions}
            toggleOptions={this.state.toggleSections}
            showThings={this.showSections}
          />
        </div>
        <div
          className='bg-white rounded-lg relative mx-auto h-full transform scale-90 2xl:scale-95 xl:-mt-32 2xl:-mt-12 '
          style={{ width: '29.7cm', minHeight: '42cm' }}
          ref={this.pdfRef}
        >
          <ul className='m-0 p-0 relative'>
            <li>
              <Brand toggleOptions={this.state.toggleSections} />
            </li>
            <li>
              <Content toggleOptions={this.state.toggleSections} />
            </li>
          </ul>
          <div
            className='bottomLimit w-full h-1 border-b-2 border-gray-400 border-dashed absolute'
            style={{ opacity: 0 }}
          ></div>
        </div>
        <button
          className='btn1 fixed right-12 bottom-12 bg-yellow-400 text-gray-800 text-3xl p-8 rounded-full'
          onClick={this.toPdf}
        >
          <FaDownload />
        </button>
        <button
          className='btn2 fixed left-12 bottom-12 bg-red-400 text-gray-200 text-3xl rounded-full'
          onClick={this.toPdf}
        >
          <a
            href='mailto:kv641998@gmail.com?Thanks for using our Resume Maker. It definately helps you.'
            rel='nolooper noopener'
            className='p-8 block text-gray-100'
          >
            <GrContact />
          </a>
        </button>
      </div>
    )
  }
}
