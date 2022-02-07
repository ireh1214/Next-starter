import React from 'react'
import Link from 'next/link'

export default function header() {
    return (
        <header>
          <div className="header">

          <li><Link href="/Notice">
          <a>NOTICE</a>
        </Link></li>

            <li><Link href="/World">
          <a>WORLD</a>
        </Link></li>


 <li><Link href="/">
          <a><img src="img/logo.png" /></a>
        </Link></li>

                <li><Link href="/System">
          <a>SYSTEM</a>
        </Link></li>

                 <li><Link href="/Guest">
          <a>GUESTS</a>
        </Link></li>
</div>
        </header>
    )
}
