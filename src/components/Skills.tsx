import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Brain, 
  Wrench,
  Server,
  FileCode2,
  Zap,
  Globe,
  Palette,
  Monitor,
  Flame,
  Target,
  Link,
  Leaf,
  HardDrive,
  Bot,
  Eye,
  MessageCircle,
  Rocket,
  BarChart3,
  GitBranch,
  Lightbulb,
  FileText,
  Container,
  Cloud,
  TrendingUp,
  BookOpen,
  Package,
  RotateCcw,
  Brush
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Languages & Frontend",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { 
          name: "Python", 
          icon: FileCode2,
          description: "Primary language for AI/ML development"
        },
        { 
          name: "JavaScript/TypeScript", 
          icon: Zap,
          description: "Modern web development"
        },
        { 
          name: "React.js", 
          icon: Globe,
          description: "Frontend framework"
        },
        { 
          name: "HTML/CSS", 
          icon: Palette,
          description: "Web styling & structure"
        },
        { 
          name: "C/C++", 
          icon: Monitor,
          description: "Systems programming"
        }
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend & APIs",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { 
          name: "Flask", 
          icon: Flame,
          description: "Lightweight web framework"
        },
        { 
          name: "Django", 
          icon: Target,
          description: "Full-featured web framework"
        },
        { 
          name: "REST APIs", 
          icon: Link,
          description: "API development & integration"
        }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      color: "text-primary",
      bgColor: "bg-primary/10", 
      skills: [
        { 
          name: "MongoDB", 
          icon: Leaf,
          description: "NoSQL database"
        },
        { 
          name: "SQL", 
          icon: HardDrive,
          description: "Relational databases"
        }
      ]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "ML & AI",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      skills: [
        { 
          name: "Scikit-learn", 
          icon: Bot,
          description: "Machine learning library"
        },
        { 
          name: "TensorFlow", 
          icon: Brain,
          description: "Deep learning framework"
        },
        { 
          name: "OpenCV", 
          icon: Eye,
          description: "Computer vision"
        },
        { 
          name: "YOLO", 
          icon: Target,
          description: "Object detection"
        },
        { 
          name: "SpaCy/NLTK", 
          icon: MessageCircle,
          description: "Natural language processing"  
        },
        { 
          name: "XGBoost", 
          icon: Rocket,
          description: "Gradient boosting"
        },
        { 
          name: "Pandas/NumPy", 
          icon: BarChart3,
          description: "Data manipulation & analysis"
        }
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { 
          name: "Git/GitHub", 
          icon: GitBranch,
          description: "Version control"
        },
        { 
          name: "VS Code", 
          icon: Lightbulb,
          description: "Code editor"
        },
        { 
          name: "Google Colab", 
          icon: FileText,
          description: "ML development environment"
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover slide-up">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-2 bg-background rounded-lg shadow-sm">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{skill.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {skill.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Docker", icon: Container },
              { name: "AWS", icon: Cloud },
              { name: "Firebase", icon: Flame },
              { name: "Plotly", icon: TrendingUp },
              { name: "Matplotlib", icon: BarChart3 },
              { name: "Jupyter", icon: BookOpen },
              { name: "Linux", icon: Monitor },
              { name: "Postman", icon: Package },
              { name: "Redux", icon: RotateCcw },
              { name: "Bootstrap", icon: Brush }
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <tech.icon className="w-4 h-4" />
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;