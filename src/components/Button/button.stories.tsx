import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './index'
import '../../styles/index.scss'

const buttonType = () => (
  <div
    style={{ display: 'flex', justifyContent: 'space-around', margin: '50px' }}
  >
    <Button type='primary'>主按钮</Button>
    <Button>默认按钮</Button>
    <Button type='danger'>危险按钮</Button>
    <Button type='link' href='/'>
      文本按钮
    </Button>
  </div>
)

storiesOf('Button 按钮', module).add('按钮类型', buttonType)
