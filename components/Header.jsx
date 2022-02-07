import React from 'react';
import Link from 'next/link';

export default function header() {
  return (
    <header>
      <div className="header">
        <li>
          <Link href="/">
            <a>CONTENTS</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>CONTENTS</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>MAIN</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>CONTENTS</a>
          </Link>
        </li>

        <li>
          <Link href="/">
            <a>CONTENTS</a>
          </Link>
        </li>
      </div>
    </header>
  );
}
