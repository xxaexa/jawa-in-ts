'use client'

import { testimony } from '@/constant'
import Image from 'next/image'
import { useState } from 'react'

const Testimony = () => {
  let [tabs, setTabs] = useState(0)

  const handlePrevious = () => {
    if (tabs === 0) {
      setTabs((tabs = 4))
    } else {
      setTabs(tabs - 1)
    }
  }
  const handleNext = () => {
    if (tabs === 4) {
      setTabs((tabs = 0))
    } else {
      setTabs(tabs + 1)
    }
  }

  return (
    <div id="testimony" className="my-24 md:w-1/2 mx-auto">
      <h2 className="font-bold text-2xl lg:text-center">
        APA YANG MEMBER KAMI KATAKAN
      </h2>

      <div className="flex flex-col w-full border-b-2 border-black">
        <div className="flex flex-row justify-between items-center">
          <button onClick={handlePrevious}>
            <Image
              src="/icons/chevron-left.svg"
              width={20}
              height={20}
              alt="chevron-double-left"
            />
          </button>
          <Image
            src={testimony[tabs].img}
            alt={testimony[tabs].name}
            width={70}
            height={20}
          />
          <div className="flex flex-col px-4 ">
            <p>{testimony[tabs].contents}</p>
            <p className="">{testimony[tabs].name}</p>
          </div>
          <button onClick={handleNext}>
            <Image
              src="/icons/chevron-right.svg"
              width={20}
              height={20}
              alt="chevron-right-left"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
export default Testimony
