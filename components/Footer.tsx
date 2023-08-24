const Footer = () => {
  return (
    <div className="bg-yellow-200 mt-12">
      <div className="mx-auto w-10/12 py-2 grid md:grid-cols-5 md:place-items-center gap-4">
        <div>
          <h2 className="font-bold text-2xl">JAWA-IN</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            neque, repellat cumque ipsam accusamus eius labore dolorum ratione
            aspernatur temporibus
          </p>
        </div>
        <div>
          <h2 className="font-bold">Legalitas</h2>
          <p>Kebijakan Privasi</p>
          <p>Persyaratan Layanan</p>
        </div>
        <div>
          <h2 className="font-bold">Jelajahi</h2>
          <p>Kursus</p>
          <p>Beasiswa</p>
        </div>
        <div>
          <h2 className="font-bold">Perusahaan</h2>
          <p>Hubungi Kami</p>
          <p>Tentang Kami</p>
        </div>
        <div>
          <h2 className="font-bold">Newsletter</h2>
          <p>Dapatkan Pembaruan yang menarik dari kami</p>
          <input type="text" />
          <br />
          <button className="bg-indigo-600 px-2 mt-2 p-1 text-white rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
export default Footer
