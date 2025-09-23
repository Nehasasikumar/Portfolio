import { Card, CardContent } from "@/components/ui/card";
import { Brain, Globe, BarChart3, MessageSquare } from "lucide-react";

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning Solutions",
      description: "Developing intelligent systems using advanced ML algorithms, computer vision with YOLO, and deep learning frameworks like TensorFlow.",
      features: [
        "Computer Vision & Object Detection",
        "Predictive Analytics & Modeling", 
        "Deep Learning & Neural Networks",
        "Model Optimization & Deployment"
      ],
      gradient: "from-primary to-primary-dark"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development (Full Stack)",
      description: "Creating scalable, secure web applications with modern frameworks, RESTful APIs, and database integration.",
      features: [
        "React.js & TypeScript Frontend",
        "Flask & Django Backend",
        "REST API Development",
        "Database Design & Management"
      ],
      gradient: "from-secondary to-secondary-dark"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & Predictive Modeling",
      description: "Extracting insights from complex datasets using statistical analysis, visualization, and predictive modeling techniques.",
      features: [
        "Exploratory Data Analysis (EDA)",
        "Statistical Modeling & Analysis",
        "Data Visualization with Plotly",
        "Ensemble Methods & XGBoost"
      ],
      gradient: "from-primary to-secondary"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "NLP & Summarization Tools",
      description: "Building natural language processing solutions for text analysis, summarization, and intelligent content processing.",
      features: [
        "Text Summarization with BART",
        "Named Entity Recognition",
        "Sentiment Analysis & Classification",
        "Language Model Integration"
      ],
      gradient: "from-secondary to-primary"
    }
  ];

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Areas of <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized knowledge spanning AI, web development, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <Card key={index} className="card-hover slide-up group">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${area.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {area.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto card-hover">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-full">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold">Recognition</h3>
                  <p className="text-muted-foreground">BrainDead – Revelation 25</p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Selected among <strong>Top 25 teams</strong> in BrainDead – Revelation 25, 
                a national-level ML/AI hackathon by IIEST Shibpur
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Expertise;