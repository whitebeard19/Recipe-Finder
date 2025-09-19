import React from 'react'
import Cheflogo from '../images/chef-icon.png'

export default function Header() {
  return (
    <header>
        <img src={Cheflogo} alt="chef-logo" />
        <h1>AI CHEF</h1>
    </header>
  )
}
