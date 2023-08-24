import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Information from '@/components/Information'
import Package from '@/components/Package'
import Testimony from '@/components/Testimony'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="font-main tracking-wider mx-auto">
      <Navbar />
      <section className="font-main tracking-wider mx-auto w-10/12">
        <Hero />
        <Information />
        <Package />
        <Testimony />
      </section>
      <Footer />
    </main>
  )
}
