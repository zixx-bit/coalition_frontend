import React from 'react'
import "./App.scss"
import Menu from './components/menu/Menu'
import Layout from './components/layout/Layout'
import PatientProvider from './lib/data'

function App() {
  return (
    <div>
      <PatientProvider>
       
      <Menu/>
      <Layout/>
       
      </PatientProvider>
    </div>
  )
}

export default App
