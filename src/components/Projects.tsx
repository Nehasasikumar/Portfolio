import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Mental Wellness Platform",
      description: "Built a video-based therapy system with 3D avatar psychologists, multilingual support, and real-time emotion detection. Delivered scalable microservices with WebSockets, AI-driven adaptive therapy, and secure crisis intervention protocols.",
      date: "Sep 2025",
      tech: ["React", "Django", "FastAPI", "PostgreSQL", "Google Gemini AI"],
      highlights: [
        "Video-based therapy with 3D avatar psychologists",
        "Multilingual support and real-time emotion detection",
        "Scalable microservices with WebSockets",
        "AI-driven adaptive therapy and secure crisis intervention"
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      github: "https://github.com/NISHAKAR06/Mental_Wellness_AI",
      demo: "https://mentalwellnessai.vercel.app/"
    },
    {
      title: "ExitEase – Chatbot Based Outpass Generator",
      description: "Intelligent outpass management system with role-based approvals, real-time tracking, and YOLO-based ID verification achieving 95% accuracy. Reduced approval time by 60%.",
      date: "Jun 2025",
      tech: ["Flask", "MongoDB", "YOLO", "Real-time Features", "Role-based Auth"],
      highlights: [
        "95% ID verification accuracy",
        "60% reduction in approval time",
        "Real-time tracking system"
      ],
      icon: <Users className="w-6 h-6" />,
      github: "https://github.com/GopikaArumugam/op_gen",
      demo: "#"
    },
    {
      title: "AI-Powered Article Summarizer",
      description: "Two-phase summarization system using BART & SpaCy with secure authentication and React-based interactive interface for intelligent content summarization.",
      date: "Oct 2024",
      tech: ["BART", "SpaCy", "React", "NLP", "Authentication", "TypeScript"],
      highlights: [
        "Two-phase summarization",
        "BART & SpaCy integration",
        "Secure user authentication"
      ],
      icon: <ExternalLink className="w-6 h-6" />,
      github: "https://github.com/Nehasasikumar/chatbot",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing AI/ML expertise and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover slide-up h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <div className="text-primary">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <a href="https://github.com/Nehasasikumar" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
