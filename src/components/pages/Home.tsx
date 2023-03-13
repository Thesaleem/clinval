import Hero from "../Landing Page/Hero";
import Features from "../Landing Page/Features";
import Form from "../Landing Page/ContactForm";
import Footer from "../Landing Page/Footer";
import About from '../Landing Page/About'
import Testimonials from "../Landing Page/Testimonials";
const Home = () => {
  return (
    <div className="">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
