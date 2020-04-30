import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'

function App() {
  return (
    <div className='App'>
      <Menu defaultIndex={0}>
        <MenuItem>color link</MenuItem>
        <MenuItem>color link 2</MenuItem>
        <MenuItem>color link 3</MenuItem>
      </Menu>
      <Button autoFocus>Primary</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large
      </Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button disabled size={ButtonSize.Small}>
        Small
      </Button>
      <Button btnType={ButtonType.Link} href='/'>
        Hello link
      </Button>
      <Button disabled btnType={ButtonType.Link} href='/'>
        Hello link
      </Button>
    </div>
  )
}

export default App
