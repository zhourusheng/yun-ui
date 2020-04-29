import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'
import '../../styles/index.scss'

const defaultButton = () => (
  <Button onClick={action('clicked')}>默认按钮</Button>
)

storiesOf('Button Component', module)
.add('默认 Button', defaultButton)