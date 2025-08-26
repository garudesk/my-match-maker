import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Star, Download } from "lucide-react";
import template1 from "@/assets/biodata-template-1.jpg";
import template2 from "@/assets/biodata-template-2.jpg";
import template3 from "@/assets/biodata-template-3.jpg";

const templates = [
  {
    id: 1,
    name: "Royal Burgundy",
    category: "Traditional",
    image: template1,
    rating: 4.9,
    downloads: 15000,
    featured: true
  },
  {
    id: 2,
    name: "Golden Elegance", 
    category: "Modern",
    image: template2,
    rating: 4.8,
    downloads: 12000,
    featured: false
  },
  {
    id: 3,
    name: "Royal Blue",
    category: "Premium",
    image: template3,
    rating: 4.9,
    downloads: 18000,
    featured: true
  }
];

const TemplateGallery = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge 
            variant="outline" 
            className="mb-4 border-primary/20 text-primary"
          >
            Template Gallery
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Perfect Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From traditional to modern, our curated biodata templates will create the best impression for your marriage profile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {templates.map((template) => (
            <Card 
              key={template.id}
              className={`group relative overflow-hidden bg-gradient-card shadow-elegant hover:shadow-glow transition-smooth cursor-pointer border-2 ${
                selectedTemplate === template.id 
                  ? 'border-primary ring-4 ring-primary/20' 
                  : 'border-border hover:border-primary/30'
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              {template.featured && (
                <Badge 
                  className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground"
                >
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="flex-1">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {template.name}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span>{template.rating}</span>
                  </div>
                  <span>{template.downloads.toLocaleString()} downloads</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateGallery;