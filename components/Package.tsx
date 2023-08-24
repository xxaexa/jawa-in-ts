import { packages } from '@/constant'
import Button from './Button'
import Image from 'next/image'

const Package = () => {
  return (
    <div
      id="package"
      className="my-24 flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-12 ">
      <div className="md:w-1/4">
        <h2 className="text-2xl font-bold lg:text-center uppercase">
          Pilih Paket
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          impedit est cum nihil, velit et harum, perspiciatis fugiat corporis
          molestiae rerum consequatur nobis? Doloribus distinctio odit adipisci
          quos harum enim.
        </p>
      </div>

      <div className="md:w-3/4">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {packages.map((contents) => (
            <div
              key={contents.id}
              className=" flex flex-col bg-yellow-100 rounded-xl p-2 box-border w-80">
              <p className="font-bold text-2xl uppercase text-center">
                {contents.title}
              </p>
              <div className="my-2 items-center">
                {contents.content.map((c, index) => (
                  <div key={index} className="flex">
                    <span className="pr-2 ">
                      <Image
                        src={'/icons/check-circle.svg'}
                        alt="check-circle"
                        width={30}
                        height={30}
                        className="bg-yellow-500 rounded-full p-1"
                      />
                    </span>
                    <p className="w-80">{c}</p>
                  </div>
                ))}
              </div>
              <Button />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Package
