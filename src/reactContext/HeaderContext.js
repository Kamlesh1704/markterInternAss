import React from 'react'

const HeaderContext = React.createContext({
  isActive: 'HOME',
  changeToHome: () => {},
  changeToClasses: () => {},
})

export default HeaderContext