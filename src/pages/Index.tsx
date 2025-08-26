import Hero from "@/components/Hero";
import TemplateGallery from "@/components/TemplateGallery";
import BiodataForm from "@/components/BiodataForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <TemplateGallery />
      <BiodataForm />
    </main>
  );
};

export default Index;