
import About from "@/components/about/About";
import EnquiryForm from "@/components/EnquiryForm";
import Facilities from "@/components/facilities/Facilities";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Home from "@/components/home/Home";
import Header from "@/components/layout/Header";
import Locations from "@/components/location/Locations";
import Services from "@/components/services/Services";

export default function App() {
  return <>
  <Header/>
  <Home/>
  <About/>
  <Services/>
  <Facilities/>
  <Gallery/>
  <Locations/>
  <EnquiryForm/>
  <Footer/>
  </>;
}
