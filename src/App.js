import Hero from "./components/Hero";
import Layout from "./components/Layout_1";
import img1 from "./images/desktop/image-transform.jpg";
import img2 from "./images/desktop/image-stand-out.jpg";
import img3 from "./images/desktop/image-graphic-design.jpg";
import img4 from "./images/desktop/image-photography.jpg";
import assets from "./assets.json";
import Layout2 from "./components/Layout_2";
import Layout3 from "./components/Layout_3";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Layout
        image={img1}
        title={assets.content_1.title}
        desc={assets.content_1.desc}
        Button={assets.content_1.button}
      />
      <Layout2
        image={img2}
        title={assets.content_2.title}
        desc={assets.content_2.desc}
        Button={assets.content_2.button}
      />
      <Layout3
        image1={img3}
        image2={img4}
        title1={assets.content_3.title}
        title2={assets.content_4.title}
        desc1={assets.content_3.desc}
        desc2={assets.content_4.desc}
      />
      <Testimonials
        title={assets.testimonials.heading}
        test1={assets.testimonials.testimonial_1}
        test2={assets.testimonials.testimonial_2}
        test3={assets.testimonials.test3}
      />
      <Footer />
    </div>
  );
}

export default App;
