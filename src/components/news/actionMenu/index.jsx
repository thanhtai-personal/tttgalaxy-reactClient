import React, { useState } from 'react'
import { MenuStyled } from './styled.js'

const NewsComponent = (props) => {
  const [isActive, setIsActive] = useState(false)

  const handleOpenMenu = () => {
    setIsActive(!isActive)
  }

  return (
    <MenuStyled>
      <div className={`action-icon ${isActive ? 'icon-hide': 'icon-show'}`}
        onClick={handleOpenMenu}
      > 
        <div class="chevron"></div>
        <div class="chevron"></div>
      </div>
      <div className={`action-menu ${isActive ? 'active': ''}`}>

      </div>
    </MenuStyled>
  )
}

export default NewsComponent