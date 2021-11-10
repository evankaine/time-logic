import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { NavData } from "../Data/NavData"


export default function NavBar() {
  return (
    <div className="navbar">
      
      <div className="navbar-data-container">
        {NavData.map((item, index) => {
          return (
          <li key={index} className={item.className}>
            <Link className="link" to={item.path}>
                <span className="icon">{item.icon}</span>
              <span className="link-name">{item.title}</span>
            </Link>
          </li>
        )
        })}
      </div>

    </div>
  )
}
