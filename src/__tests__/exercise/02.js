// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'

import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Counter from '../../components/counter'
import userEvent from '@testing-library/user-event'


beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)

  const increment = screen.getByRole('button' , {name : /increment/i})
 const decrement = screen.getByRole('button' , {name : /decrement/i})

 const message = screen.getByText(/Current count/i)
 

  

 
  
  userEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
 
  userEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
  
})
