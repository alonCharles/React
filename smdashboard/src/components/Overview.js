import React from 'react'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import youtube from '../images/icon-youtube.svg'
import up from '../images/icon-up.svg'
import down from '../images/icon-down.svg'

export default function Overview() {
  return (
    <>
      <h2 className='text-2xl md:text-3xl font-bold text-darkgrayblue mb-5'>Overview - Today</h2>
      <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <article className='bg-verypaleblue p-5 rounded shadow shadow-slate-50'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-darkgrayblue font-bold'>Page Views</li>
            <li><img src={facebook} alt='' /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-verydarkblue text-3xl'>87</li>
            <li className='flex items-center text-LimeGreen font-bold text-sm'>
              <img src={up} alt='' className='w-3 mr-2' />
              3%
            </li>
          </ul>
        </article>
        <article className='bg-verypaleblue p-5 rounded shadow shadow-slate-50'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-darkgrayblue font-bold'>Likes</li>
            <li><img src={facebook} alt='' /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-verydarkblue text-3xl'>52</li>
            <li className='flex items-center font-bold text-brightRed text-sm'>
              <img src={down} alt='' className='w-3 mr-2' />
              2%
            </li>
          </ul>
        </article>
        <article className='bg-verypaleblue p-5 rounded shadow shadow-slate-50'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-darkgrayblue font-bold'>Likes</li>
            <li><img src={instagram} alt='' /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-verydarkblue text-3xl'>5462</li>
            <li className='flex items-center text-LimeGreen font-bold text-sm'>
              <img src={up} alt='' className='w-3 mr-2' />
              2257%
            </li>
          </ul>
        </article>
        <article className='bg-verypaleblue p-5 rounded shadow shadow-slate-50'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-darkgrayblue font-bold'>Profile Views</li>
            <li><img src={instagram} alt='' /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-verydarkblue text-3xl'>52k</li>
            <li className='flex items-center text-LimeGreen font-bold text-sm'>
              <img src={up} alt='' className='w-3 mr-2' />
              1375%
            </li>
          </ul>
        </article>
        <article className='bg-verypaleblue p-5 rounded shadow shadow-slate-50'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-darkgrayblue font-bold'>Retweets</li>
            <li><img src={twitter} alt='' /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-verydarkblue text-3xl'>117</li>
            <li className='flex items-center text-LimeGreen font-bold text-sm'>
              <img src={up} alt='' className='w-3 mr-2' />
              303%
            </li>
          </ul>
        </article>
        <article className='bg-verypaleblue p-5 rounded shadow shadow-slate-50'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-darkgrayblue font-bold'>Likes</li>
            <li><img src={twitter} alt='' /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-verydarkblue text-3xl'>507</li>
            <li className='flex items-center text-LimeGreen font-bold text-sm'>
              <img src={up} alt='' className='w-3 mr-2' />
              553%
            </li>
          </ul>
        </article>
        <article className='bg-verypaleblue p-5 rounded shadow shadow-slate-50'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-darkgrayblue font-bold'>Likes</li>
            <li><img src={youtube} alt='' /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-verydarkblue text-3xl'>107</li>
            <li className='flex items-center text-brightRed font-bold text-sm'>
              <img src={down} alt='' className='w-3 mr-2' />
              19%
            </li>
          </ul>
        </article>
        <article className='bg-verypaleblue p-5 rounded shadow shadow-slate-50'>
          <ul className='flex items-center justify-between mb-5'>
            <li className='text-darkgrayblue font-bold'>Total Views</li>
            <li><img src={youtube} alt='' /></li>
          </ul>
          <ul className='flex items-center justify-between'>
            <li className='font-bold text-verydarkblue text-3xl'>1407</li>
            <li className='flex items-center text-brightRed font-bold text-sm'>
              <img src={down} alt='' className='w-3 mr-2' />
              12%
            </li>
          </ul>
        </article>
        
      </section>
    </>
  )
}
