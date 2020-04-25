import React from 'react'
import Button, { ButtonType, ButtonSize } from './components/Button/button'

function App() {
  return (
    <div className='App'>
      <Button>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Hello
      </Button>
      <Button btnType={ButtonType.Link} href='baidu.com'>
        Hello link
      </Button>
    </div>
  )
}

export default App
