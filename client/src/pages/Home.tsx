import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Download, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * Portfolio Design: Modern Dark Elegance
 * - Dark background (#0f0f0f) with purple accents (#a78bfa)
 * - Circular photo frame with glow effect
 * - Asymmetric layout with geometric elements
 * - Smooth animations and transitions
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Joël</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition">
              About
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition">
              Experience
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition">
              Projects
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition">
              Skills
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </a>
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-secondary text-foreground placeholder-muted-foreground rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
              Log in
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-border p-4 space-y-3">
            <a href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition">
              About
            </a>
            <a href="#experience" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Experience
            </a>
            <a href="#projects" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Projects
            </a>
            <a href="#skills" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Skills
            </a>
            <a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-primary text-sm font-semibold uppercase tracking-widest">Welcome</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                  Joël Deboston
                  <br />
                  <span className="text-primary">TCHINDA TCHOUALA</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Data Engineer | QA Testing | AI Enthusiast | Data Analyst
                </p>
              </div>

              <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
                Passionate about data engineering, machine learning, and building scalable solutions. Experienced in ETL pipelines, data visualization, cloud technologies, and comprehensive QA testing strategies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-8">
                <a href="mailto:tchindajoel25120@gmail.com" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition group">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
                </a>
                <a href="tel:+33744821780" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition group">
                  <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition group">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition group">
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition" />
                </a>
              </div>

              {/* Website Link */}
              <div className="pt-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                  www.website.com
                </a>
              </div>
            </div>

            {/* Right - Circular Photo */}
            <div className="relative flex items-center justify-center">
              {/* Photo frame */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/50" />
                <div className="absolute inset-2 rounded-full border border-primary/30" />

                {/* Image */}
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663433300233/CuEdwGJWA9kmTeBf7m4Fn7/Gemini_Generated_Image_prz6gnprz6gnprz6_21baec8c.png"
                  alt="Joël Deboston TCHINDA TCHOUALA"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full border-2 border-primary/40" />
              <div className="absolute bottom-10 left-10 w-12 h-12 rounded-full bg-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-lg">ESIEA - Master's in Data Engineering</h4>
                  <p className="text-muted-foreground text-sm">École d'Ingénieurs 3iL (BAC+5) | Limoges, France</p>
                  <p className="text-muted-foreground">2023 – 2026</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mastère Expert Data, Ingénierie de l'Intelligence Artificielle et des Applications
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Courses: Data & IA, SQL, Machine Learning, Java avancé, Méthodes linéaires multivariées, Réseaux, Modélisation & analyse des systèmes, Web, AWS, Virtualisation & Cloud, Cybersécurité
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-bold text-lg">Classes Préparatoires (MPSI)</h4>
                  <p className="text-muted-foreground text-sm">Prépavogt</p>
                  <p className="text-muted-foreground">2021 – 2023</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Courses: Algèbre, Analyse, Électromagnétisme, Mécanique, Électrocinétique, Informatique
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Passions & Interests</h3>
              <div className="space-y-4">
                <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                  <h4 className="font-bold text-lg mb-2">QA Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive testing strategies including API testing, UI automation, and infrastructure validation
                  </p>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                  <h4 className="font-bold text-lg mb-2">Artificial Intelligence</h4>
                  <p className="text-sm text-muted-foreground">
                    Machine learning models, data analysis, and intelligent automation solutions
                  </p>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                  <h4 className="font-bold text-lg mb-2">Data Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Business intelligence, data visualization, and actionable insights generation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Professional Experience</h2>

          <div className="space-y-8">
            {/* Connect France */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Application Engineer</h3>
                  <p className="text-primary text-sm font-semibold">Connect France Financial Services | Reims, France</p>
                  <p className="text-muted-foreground text-sm">October 2025 – August 2026</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-bold text-lg mb-2">CeynaPay – Money Transfer Platform (Europe-Africa)</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>QA Testing & Delivery validation with comprehensive anomaly documentation</li>
                    <li>Support team training and knowledge transfer</li>
                    <li>API testing campaigns design and execution (Postman)</li>
                    <li>UI automation testing with Cypress and Maestro</li>
                    <li>AWS infrastructure audit and testing</li>
                    <li>Competitive intelligence tool development for exchange rates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">KOMA – BTP Project Management Platform</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Database modeling and design</li>
                    <li>BTP pricing engine conception (cost matrices, risk coefficients, unit price calculation)</li>
                    <li>Delivery validation and anomaly documentation</li>
                    <li>Web Design with AI integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Symetrie */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Data Engineer & Data Analyst</h3>
                  <p className="text-primary text-sm font-semibold">Symetrie | Nîmes, France</p>
                  <p className="text-muted-foreground text-sm">April – September 2025</p>
                </div>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Financial, billing, and hours tracking dashboards with Power BI</li>
                <li>ETL pipeline construction with Python, SQL, Apache Airflow, MariaDB in Docker container</li>
                <li>Power BI report update automation</li>
                <li>Database administration and optimized SQL query construction</li>
                <li>ETL pipeline implementation in Microsoft Fabric</li>
                <li>Financial analysis of closed projects for future cost estimation</li>
                <li>Complete documentation and team handover</li>
              </ul>
            </div>

            {/* Boston Sarl */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Assistant Analyst</h3>
                  <p className="text-primary text-sm font-semibold">Boston Sarl</p>
                  <p className="text-muted-foreground text-sm">June – August 2022</p>
                </div>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Data cleaning with Excel (filters, sorting, conditional formulas)</li>
                <li>Business SQL view creation and star schema table modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                Data Engineer – Google Cloud Platform
                <ExternalLink className="w-4 h-4 text-primary" />
              </h3>
              <p className="text-sm text-muted-foreground mb-4">NYC Yellow Taxi Trips Analysis</p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Complete ELT pipeline design and deployment on Google Cloud Platform</li>
                <li>BigQuery, GCS, and Airflow integration</li>
                <li>Data ingestion and transformation automation (Python, SQL)</li>
                <li>Trend modeling with BigQuery ML and machine learning models</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold mb-2">Pentesting Gamified Platform</h3>
              <p className="text-sm text-muted-foreground mb-4">Laravel 12, PHP 8.4, PostgreSQL</p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>REST API development simulating online store for web pentesting training</li>
                <li>12 integrated web security challenges (SQL Injection, XSS, IDOR, etc.)</li>
                <li>Dynamic scoring system with HMAC-SHA256 flags</li>
                <li>Postman API test suite and PHPUnit test coverage</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold mb-2">Agentic BI Platform (In Progress)</h3>
              <p className="text-sm text-muted-foreground mb-4">AI-Powered Data Analysis Assistant</p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>AI-driven data analysis assistant with natural language querying</li>
                <li>Multi-source connectors and SQL generation/validation</li>
                <li>Automated visualizations and insights generation</li>
                <li>SaaS/Enterprise architecture with orchestrator and adapters</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold mb-2">Image Processing with AI</h3>
              <p className="text-sm text-muted-foreground mb-4">Medical Image Anomaly Detection</p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Anomaly detection on medical images for improved diagnosis</li>
                <li>Computer vision and machine learning implementation</li>
                <li>Tkinter interface for new image analysis</li>
              </ul>
            </div>

            {/* Project 5 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold mb-2">AR Rehabilitation App – TERAPACE 2</h3>
              <p className="text-sm text-muted-foreground mb-4">Unity 3D, C#, Meta Quest 3</p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Meta Quest 3 deployment for optimal patient immersion</li>
                <li>New game assets integration for engagement maintenance</li>
                <li>Secure HDS hosting implementation</li>
              </ul>
            </div>

            {/* Project 6 */}
            <div className="bg-background p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold mb-2">Children's Quiz Application</h3>
              <p className="text-sm text-muted-foreground mb-4">Java, JavaFX, SQLite</p>
              <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                <li>Engaging learning application for children</li>
                <li>Agile methodology in 4-person team</li>
                <li>Use case and scenario documentation</li>
                <li>Intuitive user experience design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tools & Methodologies */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-primary mb-6">Tools & Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Git', 'JIRA', 'Postman', 'Cypress', 'Maestro Studio', 'PostgreSQL'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-primary mb-6">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'Java', 'R', 'C#', 'C', 'PHP', 'JavaScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data & Visualization */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-primary mb-6">Data & Visualization</h3>
              <div className="flex flex-wrap gap-2">
                {['Power BI', 'Tableau', 'Matplotlib', 'Seaborn', 'Excel'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & Big Data */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-primary mb-6">Cloud & Big Data</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Google Cloud Platform', 'Apache Airflow', 'BigQuery', 'Microsoft Fabric'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-primary mb-6">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'BigQuery', 'MariaDB'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & ML */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-primary mb-6">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'Keras', 'Numpy', 'Pandas', 'BigQuery ML'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Systems & Infrastructure */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-primary mb-6">Systems & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {['Linux', 'VirtualBox', 'Hyper-V', 'Shell Scripting', 'Cybersecurity'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="bg-secondary/50 p-8 rounded-lg border border-border hover:border-primary/50 transition">
              <h3 className="text-xl font-bold text-primary mb-6">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'React', 'Node.js', 'Express', 'Laravel'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-secondary/30 p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Certifications & Languages</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-3">Certifications</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Power BI Analyst & SQL Certification</li>
                  <li>• AWS Cloud Practitioner</li>
                  <li>• Data Science & ANSSI Cybersecurity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Languages</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• French (Native)</li>
                  <li>• English B1+ (Professional)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Strengths</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Analytical mindset & autonomy</li>
                  <li>• Reading & synthesis skills</li>
                  <li>• Strategic thinking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-secondary/30">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Interested in collaborating on data engineering, QA testing, or AI projects? Let's discuss how I can contribute to your team.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="mailto:tchindajoel25120@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition">
              <Mail className="w-5 h-5" />
              <span>tchindajoel25120@gmail.com</span>
            </a>
            <a href="tel:+33744821780" className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition">
              <Phone className="w-5 h-5" />
              <span>07 44 82 17 80</span>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="#" className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition group">
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition group">
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-8 text-center text-muted-foreground">
        <p>© 2026 Joël Deboston TCHINDA TCHOUALA. All rights reserved.</p>
      </footer>
    </div>
  );
}
