import React from "react";
import {
  Faq,
  Features,
  Footer,
  Header,
  Hero,
  Pricing,
  Download,
  Testimonials,
} from "./index";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
