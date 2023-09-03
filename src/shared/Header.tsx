import React from 'react'
import s from './header.module.scss'
import {GlobalSvgSelector}  from '../assets/icons/global/GlobalSvgSelector'
import Select from 'react-select'

export const Header = () => {
 
const options = [
 { value: 'city-1', label: 'Bishkek' },
 { value: 'city-2', label: 'Osh' },
 { value: 'city-3', label: 'Balykchy' }
]
const colorStiles = {

 control: (styles: any)=>({
  ...styles,
  backgroundColor: '##4793FF33',
  width: '194px',
  height: '37px',
  border: 'none',
  borderRadius: '10px',
zIndex: 100

  
 })
}
  return (
    <header className={s.header}>
     <div className={s.wrapper}>
      <div className={s.logo}> <GlobalSvgSelector id='header-logo'/></div>
      <div className={s.title}>react weather</div>
     </div>
     <div className={s.wrapper}>
      <div  className={s.change_theme}>  
      <GlobalSvgSelector id='change-theme'/>
    </div>

       <Select styles={colorStiles} options={options} />

     </div>


    </header>
  )
}
