import React, { useState } from 'react'


function App() {

const api_key = import.meta.env.VITE_API_KEY
console.log(api_key)
const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=ritorno+al+futuro`
console.log(url)



  return (
    <></>
  )
}

export default App
