import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-2">
              <span className="text-gradient">Neha S</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              AI/ML & Full Stack Developer
            </p>
          </div>

          {/* Center - Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/nehasasikumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/Nehasasikumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:nehasasikumar06@gmail.com"
              className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Right side - Copyright */}
          <div className="text-center md:text-right">
           
            <p className="text-xs text-muted-foreground mt-1">
              © 2025 Neha S. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            Passionate about AI/ML, Data Analytics, and Building Intelligent Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;