import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className='App'>
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
