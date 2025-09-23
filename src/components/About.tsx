import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about the intersection of AI, data, and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              AI/ML and Data Analytics enthusiast skilled in Flask, MongoDB, React/TypeScript, 
              and models like YOLO and BART. Experienced in secure, role-based systems, 
              real-time features, EDA, ensemble modeling, and predictive analytics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My projects span smart automation, sports analytics, and NLP summarization. 
              I'm also proficient as a Full Stack Developer, passionate about creating 
              solutions that bridge the gap between complex AI capabilities and user-friendly interfaces.
            </p>
          </div>

          {/* Education Section */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">
                        B.Tech Artificial Intelligence and Machine Learning
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        Sri Shakthi Institute of Engineering and Technology
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>2023 - 2027</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">CGPA: 8.6</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Coimbatore, Tamil Nadu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">
                        Higher Secondary Certificate (HSC)
                      </h4>
                      <p className="text-muted-foreground mb-2">
                        Bharani Park Matric Higher Secondary School
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>2023</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">83.1%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Karur, Tamil Nadu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
