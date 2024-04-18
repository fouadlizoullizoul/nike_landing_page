import CustomerReviewa from "./Section/CustomerReviewa";
import Footer from "./Section/Footer";
import Hero from "./Section/Hero";
import Navbar from "./Section/Navbar";
import PopularProducts from "./Section/PopularProducts";
import Services from "./Section/Services";
import SpecialOffer from "./Section/SpecialOffer";
import Subscribe from "./Section/Subscribe";
import SuperQuality from "./Section/SuperQuality";

export default function App() {
  return (
    <main className="relative">
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviewa/>
      </section>
      <section className="padding-x w-full  sm:py-32 py-16">
      <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}