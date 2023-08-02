import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

export default function Followers() {
  return (
    <>
      <section className='py-10 grid grid-cols-1 gap-8
      md:grid-cols-2 lg:grid-cols-4'>
        <article className='bg-lightgrayishblue p-5
        rounded-lg shadow shadow-slate-50'>
          <ul className='flex items-center justify-center text-center'>
            <li><img src={facebook} alt='Facebook' className='mr-2'/></li>
            <li className='text-sm font-bold text-darkgrayblue'>@nathanf</li>
          </ul>

          <h2 className='text-5xl font-bold text-verydarkblue text-center my-5'>1987 
          <span className='text-sm block text-darkgrayblue 
          font-bold uppercase tracking-widest text-center'>Followers</span></h2>

          <p className='text-center text-LimeGreen flex items-center justify-center text-sm font-bold'>
            <img src={up} alt='' className='mr-2 w-3'/>
            12 today
          </p>
        </article>
        <article className='bg-lightgrayishblue p-5
        rounded-lg shadow shadow-slate-50'>
          <ul className='flex items-center justify-center text-center'>
            <li><img src={twitter} alt='twitter' className='mr-2'/></li>
            <li className='text-sm font-bold text-darkgrayblue'>@nathanf</li>
          </ul>

          <h2 className='text-5xl font-bold text-verydarkblue text-center my-5'>1044 
          <span className='text-sm block text-darkgrayblue 
          font-bold uppercase tracking-widest text-center'>Followers</span></h2>

          <p className='text-center text-LimeGreen flex items-center justify-center text-sm font-bold'>
            <img src={up} alt='' className='mr-2 w-3'/>
            99 today
          </p>
        </article>
        <article className='bg-lightgrayishblue p-5
        rounded-lg shadow shadow-slate-50'>
          <ul className='flex items-center justify-center text-center'>
            <li><img src={instagram} alt='instagram' className='mr-2'/></li>
            <li className='text-sm font-bold text-darkgrayblue'>@realnathanf</li>
          </ul>

          <h2 className='text-5xl font-bold text-verydarkblue text-center my-5'>11k 
          <span className='text-sm block text-darkgrayblue 
          font-bold uppercase tracking-widest text-center'>Followers</span></h2>

          <p className='text-center text-LimeGreen flex items-center justify-center text-sm font-bold'>
            <img src={up} alt='' className='mr-2 w-3'/>
            1099 today
          </p>
        </article>
        <article className='bg-lightgrayishblue p-5
        rounded-lg shadow shadow-slate-50'>
          <ul className='flex items-center justify-center text-center'>
            <li><img src={youtube} alt='youtube' className='mr-2'/></li>
            <li className='text-sm font-bold text-darkgrayblue'>@nathanf</li>
          </ul>

          <h2 className='text-5xl font-bold text-verydarkblue text-center my-5'>8239 
          <span className='text-sm block text-darkgrayblue 
          font-bold uppercase tracking-widest text-center'>Subscribers</span></h2>

          <p className='text-center text-brightRed flex items-center justify-center text-sm font-bold'>
            <img src={down} alt='' className='mr-2 w-3'/>
            144 today
          </p>
        </article>
      </section>
    </>
  )
}
