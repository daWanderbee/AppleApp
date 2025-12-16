import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p> More ways to shop: Visit an Apple Store, call 1-800-MY-APPLE, or find a reseller. </p>
        <img src='/logo.svg' alt="Apple Logo" />
      </div>

      <br/>

      <div className="links">
        <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({label,link}) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
