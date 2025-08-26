import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TemplateGallery from "@/components/TemplateGallery";
import BiodataForm from "@/components/BiodataForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TemplateGallery />
        <BiodataForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;