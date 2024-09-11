import {render, screen} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'
import App from './App'
import userEvent from '@testing-library/user-event'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

const RenderComponent = (
  <MemoryRouter>
    <App />
  </MemoryRouter>
)
describe('renders Application correctly', () => {
  test('renders homepage correctly', () => {
    // Render component
    render(RenderComponent)

    // Check if unliked icon is present in documnet
    const favoriteButton = screen.getByTestId('notLikedButton')
    expect(favoriteButton).toBeInTheDocument()
  })

  test('renders react logo correctly', () => {
    // Render component
    render(RenderComponent)

    // Check if unliked icon is present in documnet
    const favoriteButton = screen.getByTestId('notLikedButton')
    expect(favoriteButton).toBeInTheDocument()

    // Click favorite button
    userEvent.click(favoriteButton)

    // Check that react logo appeared
    const reactLogo = screen.getByTestId('reactLogo')
    expect(reactLogo).toBeInTheDocument()
  })

  test('renders react logo correctly', () => {
    // Render component
    render(RenderComponent)

    // Check if unliked icon is present in documnet
    const favoriteButton = screen.getByTestId('notLikedButton')
    expect(favoriteButton).toBeInTheDocument()

    // Click favorite button
    userEvent.click(favoriteButton)

    // Check that react logo appeared
    const reactLogo = screen.getByTestId('reactLogo')
    expect(reactLogo).toBeInTheDocument()
  })

  test('when react logo is clicked route to /About', () => {
    // Render component
    render(RenderComponent)

    // Check if unliked icon is present in documnet
    const favoriteButton = screen.getByTestId('notLikedButton')
    expect(favoriteButton).toBeInTheDocument()

    // Click favorite button
    userEvent.click(favoriteButton)

    // Check that react logo appeared
    const reactLogo = screen.getByTestId('reactLogo')
    expect(reactLogo).toBeInTheDocument()

    // Click on react logo
    userEvent.click(reactLogo)

    // Check if url param changed to /About
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/About')
  })
})
