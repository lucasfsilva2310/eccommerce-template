import { render, screen } from '@testing-library/react'

import Main from './index'

describe('Main Component', () => {
  it('Should render Main component', () => {
    // Render component
    const { container } = render(<Main />)

    // Get the rendered component
    const component = screen.getByRole('heading', { name: /Hello world/i })

    // Check if component exists
    expect(component).toBeInTheDocument()

    // Match snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
