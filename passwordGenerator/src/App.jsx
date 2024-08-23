import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')
  const [numAllowed, setnumAllowed] = useState(false)
  const [symAllowed, setsymAllowed] = useState(false)
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllowed) str += '0123456789'
    if (symAllowed) str += '!@#$%^&*()_+'
    
for (let i = 0; i < length; i++) {
  pass += str.charAt(Math.floor(Math.random() * str.length))
  }
  setPassword(pass)
}, [length, numAllowed, symAllowed, setPassword])

const copyPasswordToClipboard = useCallback(() => {
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 999)
  //document.execCommand('copy')
  alert('Password copied to clipboard')
},[password])

const resettoPrevious = useCallback(() => {
  setLength(8)
  setnumAllowed(false)
  setsymAllowed(false)
  setPassword('')
}, [password])

useEffect(() => {passwordGenerator()}, [length,numAllowed,symAllowed,passwordGenerator])

  return (
    <>
         
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

<button
        onClick={resettoPrevious}
        className='outline-none bg-red-700 text-white px-3 py-0.5 shrink-0'
        >Reset</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setnumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={symAllowed}
              id="characterInput"
              onChange={() => {
                  setsymAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
    </>
  )
}

export default App
