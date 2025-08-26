import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { User, Phone, Mail, GraduationCap, Building, Heart } from "lucide-react";

interface BiodataFormData {
  name: string;
  age: string;
  height: string;
  education: string;
  profession: string;
  income: string;
  city: string;
  phone: string;
  email: string;
  about: string;
  familyDetails: string;
  expectations: string;
}

const BiodataForm = () => {
  const [formData, setFormData] = useState<BiodataFormData>({
    name: "",
    age: "",
    height: "",
    education: "",
    profession: "",
    income: "",
    city: "",
    phone: "",
    email: "",
    about: "",
    familyDetails: "",
    expectations: ""
  });
  
  const [selectedTemplate, setSelectedTemplate] = useState("1");

  const handleInputChange = (field: keyof BiodataFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge 
            variant="outline" 
            className="mb-4 border-primary/20 text-primary"
          >
            Create Biodata
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Fill Your Details
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Provide your information to create a beautiful marriage biodata in minutes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-elegant border-2 border-border/50">
            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-primary" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select age" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({length: 30}, (_, i) => i + 18).map(age => (
                          <SelectItem key={age} value={age.toString()}>{age} years</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height *</Label>
                    <Select value={formData.height} onValueChange={(value) => handleInputChange("height", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select height" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5'0">5'0" - 5'2"</SelectItem>
                        <SelectItem value="5'3">5'3" - 5'5"</SelectItem>
                        <SelectItem value="5'6">5'6" - 5'8"</SelectItem>
                        <SelectItem value="5'9">5'9" - 6'0"</SelectItem>
                        <SelectItem value="6'1">6'1" & above</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input 
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Education & Profession */}
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education & Career
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="education">Education *</Label>
                    <Input 
                      id="education"
                      value={formData.education}
                      onChange={(e) => handleInputChange("education", e.target.value)}
                      placeholder="e.g., B.Tech, MBA, etc."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profession *</Label>
                    <Input 
                      id="profession"
                      value={formData.profession}
                      onChange={(e) => handleInputChange("profession", e.target.value)}
                      placeholder="e.g., Software Engineer"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="income">Annual Income</Label>
                    <Select value={formData.income} onValueChange={(value) => handleInputChange("income", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select income range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 Lakhs</SelectItem>
                        <SelectItem value="5-10">5-10 Lakhs</SelectItem>
                        <SelectItem value="10-15">10-15 Lakhs</SelectItem>
                        <SelectItem value="15-25">15-25 Lakhs</SelectItem>
                        <SelectItem value="25+">25+ Lakhs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-primary" />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Additional Details
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="about">About Yourself</Label>
                    <Textarea 
                      id="about"
                      value={formData.about}
                      onChange={(e) => handleInputChange("about", e.target.value)}
                      placeholder="Tell us about yourself, your interests, hobbies, etc."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="familyDetails">Family Details</Label>
                    <Textarea 
                      id="familyDetails"
                      value={formData.familyDetails}
                      onChange={(e) => handleInputChange("familyDetails", e.target.value)}
                      placeholder="Brief information about your family"
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectations">Partner Expectations</Label>
                    <Textarea 
                      id="expectations"
                      value={formData.expectations}
                      onChange={(e) => handleInputChange("expectations", e.target.value)}
                      placeholder="What are you looking for in your life partner?"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Create My Biodata
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Preview Template
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BiodataForm;