import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="md:w-2/5">
        <h2 className="text-3xl font-bold">
          Solusi <span className="text-blue-300">Terbaik</span> Untuk Belajar
          Bahasa Jawa
        </h2>
        <p className="my-4 text-md text-xl">
          Kursus online gratis yang menyediakan beragam fasilitas dan dapat
          membantu dalam mengasah kemampuan berbahasa jawamu
        </p>
        <Button />
      </div>
      <div className=" hidden md:block md:w-3/5">
        <Image
          src={'/images/banner.png'}
          width={1000}
          height={1000}
          alt="Rumah tradisional dan Baju tradisional"
        />
      </div>
    </div>
  )
}
export default Hero
