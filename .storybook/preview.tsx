import React from 'react' // Outside of next, need to import
import { Preview } from '@storybook/react'

import GlobalStyles from '../src/styles/global'

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </>
    )
  ]
}

export default preview
