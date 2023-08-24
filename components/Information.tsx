import Image from 'next/image'

const Information = () => {
  return (
    <div
      id="information"
      className="flex flex-col md:flex-row justify-center my-24 items-center">
      <div className="w-full md:w-1/2 mx-auto block">
        <h2 className="text-xl mt-2 text-center my-8">
          Layanan Kami Dalam Membantu Anda
        </h2>

        <Image
          src={'/images/cs.png'}
          width={500}
          height={500}
          alt="customer-service"
          className="block mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="grid lg:place-items-center lg:grid-cols-2 gap-2">
          <div className="p-1 rounded-md w-52 h-52">
            <div className="bg-yellow-500 bg-opacity-75 rounded-md p-1 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="font-bold my-4">Materi Update</h2>
            <p>
              Facilis provident rerum officiis quisquam? Eius tenetur quas
              provident sequi nostrum facere qui,
            </p>
          </div>
          <div className="p-1 rounded-md w-52 h-52">
            <div className="bg-yellow-500 bg-opacity-75 rounded-md p-1 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="font-bold my-4">Jam yang Fleksibel</h2>
            <p>
              Facilis provident rerum officiis quisquam? Eius tenetur quas
              provident sequi nostrum facere qui,
            </p>
          </div>
          <div className="p-1 rounded-md w-52 h-52">
            <div className="bg-yellow-500 rounded-md bg-opacity-75 p-1 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>

            <h2 className="font-bold my-4">Dibimbing oleh Mentor</h2>
            <p>
              Facilis provident rerum officiis quisquam? Eius tenetur quas
              provident sequi nostrum facere qui,
            </p>
          </div>
          <div className="p-1 rounded-md w-52 h-52">
            <div className="bg-yellow-500 rounded-md bg-opacity-75 p-1 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>

            <h2 className="font-bold my-4">Mendapat Sertifikat</h2>
            <p>
              Facilis provident rerum officiis quisquam? Eius tenetur quas
              provident sequi nostrum facere qui,
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Information
