import React from 'react'

export default function Header() {
  return (
    <header className='flex items-center bg-verypaleblue'>
        <div>
            <h1 className='font-bold text-2xl text-verydarkblue'>Social Media Dashboard</h1>
            <p className='text-darkgrayblue font-bold'>Total Followers: 23,004</p>
        </div>

        <div className="toggle">
          <label
            htmlFor="checkbox"
            className="font-bold text-darkgrayblue dark:text-slate-400 text-sm cursor-pointer"
          >
            Dark Mode
          </label>
          <input
            type="checkbox"
            className="checkbox bg-verydarkblue"
            id="checkbox"
            /* checked={!darkMode}
            onChange={toggleTheme} */
          />
          <label for="checkbox" className="label">
            <div className="ball"></div>
          </label>
        </div>
    </header>
  )
}
