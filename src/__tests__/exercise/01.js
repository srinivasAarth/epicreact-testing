// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'


test('counter increments and decrements when the buttons are clicked', () => {

  const div = document.createElement('div')


  document.body.append(div)

   
    ReactDOM.render(<Counter/> , div)


    console.log(document.body.innerHTML)
  const [decrement , increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')
     console.log(message.textContent)

     expect(message.textContent).toBe('Current count: 0')
    const incrementCLickEvent = new MouseEvent('click', {
      bubble : true,
      cancelable : true,
      button : 0
    })


     increment.dispatchEvent(incrementCLickEvent)
     expect(message.textContent).toBe('Current count: 0')
     const decrementCLickEvent = new MouseEvent('click', {
      bubble : true,
      cancelable : true,
      button : 0
    })

     decrement.dispatchEvent(decrementCLickEvent)
    
     expect(message.textContent).toBe('Current count: 0')
  
  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
})

/* eslint no-unused-vars:0 */
