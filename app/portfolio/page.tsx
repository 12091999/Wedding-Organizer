import { ModeToggle } from "@/components/components_portfolio/mode-toggle"
import { Button } from "@/components/components_portfolio/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/components_portfolio/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/components_portfolio/ui/tabs"
import { Badge } from "@/components/components_portfolio/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/components_portfolio/ui/avatar"
import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import ProjectCard from "@/components/components_portfolio/project-card"
import ExperienceCard from "@/components/components_portfolio/experience-card"
import SkillBadge from "@/components/components_portfolio/skill-badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">Fajar Kurniawan</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#education" className="text-sm font-medium transition-colors hover:text-primary">
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Back
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button variant="outline" size="sm" asChild className="hidden md:flex">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Hi, I'm <span className="text-primary">Fajar Kurniawan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">Web Developer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed md:leading-loose">
                A passionate web developer specializing in Laravel with a drive to explore new technologies. I adapt
                quickly to new environments, allowing me to integrate seamlessly with diverse teams and projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md hover:bg-accent"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-lg transition-all duration-500 hover:border-primary/40 hover:shadow-xl">
                <AvatarImage src="/placeholder.svg?height=192&width=192" alt="Holiq Ibrahim" />
                <AvatarFallback className="text-4xl">HI</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
            <Link href="https://github.com/holiq" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/holiq-ibrahim" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:holiq.ibrahim376@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section - Refactored */}
        <section id="about" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-extrabold tracking-tight">About Me</h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>

            <div className="max-w-4xl mx-auto bg-card rounded-xl p-6 md:p-8 shadow-sm border">
              <div className="space-y-6">
                <p className="text-xl font-medium leading-relaxed md:leading-loose">
                  I'm a passionate <span className="text-primary font-semibold">Web Developer</span> with specialized
                  expertise in Laravel and PHP ecosystems.
                </p>

                <div className="space-y-5 text-base md:text-lg leading-relaxed md:leading-loose text-card-foreground/90">
                  <p>
                    My journey in web development began with a curiosity about how websites work, which quickly evolved
                    into a passion for building robust, user-friendly applications. Over the years, I've honed my skills
                    through hands-on experience at organizations like KoalaFacade, Seccodeid, and Ekskul.co.id, where
                    I've contributed to various projects ranging from e-learning platforms to community forums.
                  </p>

                  <p>
                    What drives me is the continuous learning process that comes with web development. I thrive in
                    environments where I can explore new technologies and methodologies, constantly pushing the
                    boundaries of what I can create. My experience with Laravel has given me a strong foundation in
                    building scalable, maintainable applications, but I'm always eager to expand my toolkit.
                  </p>

                  <blockquote className="pl-4 border-l-4 border-primary/50 italic my-6 md:my-8 py-2">
                    <p className="text-lg md:text-xl font-light">
                      I believe in writing clean, maintainable code that solves real problems. I value collaboration and
                      knowledge sharing within development teams.
                    </p>
                  </blockquote>

                  <p>
                    When I'm not coding, I enjoy contributing to open-source projects and sharing knowledge with the
                    developer community. I approach challenges with curiosity and persistence, always committed to
                    delivering high-quality solutions that meet both user needs and business objectives.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
                  >
                    <Link href="#projects" className="flex items-center gap-2">
                      <span>View My Work</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md hover:bg-accent"
                  >
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Download Resume
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Work Experience</h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <div className="grid gap-6">
              <ExperienceCard
                title="Maintainer"
                company="KoalaFacade"
                location="Palu, Indonesia"
                type="Volunteer"
                period="November 2022 - Present"
                description="KoalaFacade is an organization that develops various open source packages in the Laravel ecosystem."
                responsibilities={[
                  "Review and merge pull requests submitted by contributors, ensuring each code meets established standards.",
                  "Identify and fix bugs, and perform regular updates to maintain package performance and stability.",
                  "Maintain and improve documentation, providing explanations and examples for usage and ensuring documentation is always up-to-date and relevant to the latest version of the released package.",
                  "Collaborate with other maintainers and contributors in implementing new features and fixing various issues or bugs that arise.",
                ]}
              />

              <ExperienceCard
                title="Web Developer"
                company="Seccodeid"
                location="Yogyakarta, Indonesia"
                type="Volunteer"
                period="April 2020 - Present"
                description="Seccodeid is a free discussion forum platform from Indonesia that discusses computer technology, programming, hacking, and various other information."
                responsibilities={[
                  "Build and manage the Seccodeid forum using Laravel framework and Bootstrap.",
                  "Maintain the forum as an admin, perform database backups, and identify and fix emerging bugs.",
                  "Create the seccodeid.com landing page using TailwindCSS, ensuring responsive design and optimal SEO.",
                  "Interact with other admins and users to ensure no violations of terms and policies, and create a positive and beneficial discussion environment.",
                ]}
              />

              <ExperienceCard
                title="Backend Developer"
                company="Ekskul.co.id"
                location="Tangerang, Indonesia"
                type="Part-time"
                period="June 2021 - October 2021"
                description="Ekskul.co.id is an e-learning platform in Indonesia."
                responsibilities={[
                  "Create REST API using Laravel framework for the e-learning platform.",
                  "Integrate Midtrans payment gateway for the course ordering system and handle the payment process, ensuring smooth transactions.",
                  "Integrate notification features using FCM (Firebase Cloud Message) so users can get the latest updates from the application.",
                  "Deploy REST API on VPS and ensure all endpoints can run.",
                  "Collaborate with the Mobile team in implementing REST API into the application and ensuring all APIs can work as they should.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Projects</h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="FilaTeam"
                period="August 2024"
                description="Implementation of team features based on laravel/jetstream using Filament on Laravel 11, implementing team switching features with Livewire and automatic refresh after team changes."
                technologies={["Laravel 11", "Filament", "Livewire"]}
                imageUrl="/placeholder.svg?height=300&width=600"
                githubUrl="https://github.com/holiq/filateam"
              />

              <ProjectCard
                title="Landing Page Seccodeid"
                period="April 2023"
                description="Seccodeid landing page created using TailwindCSS with responsive design and optimal SEO."
                technologies={["TailwindCSS", "HTML", "JavaScript"]}
                imageUrl="/placeholder.svg?height=300&width=600"
                liveUrl="https://seccodeid.com"
              />

              <ProjectCard
                title="CIlog"
                period="May 2024 - June 2024"
                description="A campus assignment project from the Programming course to create a blog application using CodeIgniter4 and Bootstrap, equipped with category features, post slugs, admin panel, and comments and replies."
                technologies={["CodeIgniter4", "Bootstrap", "MySQL"]}
                imageUrl="/placeholder.svg?height=300&width=600"
                githubUrl="https://github.com/holiq/cilog"
              />

              <ProjectCard
                title="Blog Laravel"
                period="August 2020 - September 2020"
                description="A simple blog created with Laravel 7, Tailwind CSS, and AlpineJS, equipped with admin panel features, roles and permissions, comments and replies on posts, as well as slugs and tags on posts."
                technologies={["Laravel 7", "Tailwind CSS", "AlpineJS", "MySQL"]}
                imageUrl="/placeholder.svg?height=300&width=600"
                githubUrl="https://github.com/holiq/blog-laravel"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Technical Skills</h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <Tabs defaultValue="backend" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="backend">Backend</TabsTrigger>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="database">Database</TabsTrigger>
                    <TabsTrigger value="tools">Tools</TabsTrigger>
                  </TabsList>
                  <TabsContent value="backend" className="mt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Backend Technologies</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <SkillBadge name="PHP" level="Advanced" />
                      <SkillBadge name="Laravel" level="Advanced" />
                      <SkillBadge name="CodeIgniter" level="Intermediate" />
                      <SkillBadge name="REST API" level="Advanced" />
                    </div>
                  </TabsContent>
                  <TabsContent value="frontend" className="mt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Frontend Technologies</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <SkillBadge name="HTML" level="Advanced" />
                      <SkillBadge name="CSS" level="Advanced" />
                      <SkillBadge name="Tailwind CSS" level="Advanced" />
                      <SkillBadge name="Bootstrap" level="Advanced" />
                      <SkillBadge name="JavaScript" level="Intermediate" />
                      <SkillBadge name="Alpine.js" level="Intermediate" />
                      <SkillBadge name="jQuery" level="Intermediate" />
                    </div>
                  </TabsContent>
                  <TabsContent value="database" className="mt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Database Technologies</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <SkillBadge name="SQL" level="Advanced" />
                      <SkillBadge name="MySQL" level="Advanced" />
                    </div>
                  </TabsContent>
                  <TabsContent value="tools" className="mt-6 space-y-4">
                    <h3 className="text-xl font-semibold">Tools & Others</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <SkillBadge name="Git" level="Advanced" />
                      <SkillBadge name="GitHub" level="Advanced" />
                      <SkillBadge name="VS Code" level="Advanced" />
                      <SkillBadge name="Postman" level="Intermediate" />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Education</h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <div className="grid gap-6">
              <Card className="shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">Universitas Muhammadiyah Banten</CardTitle>
                      <CardDescription className="text-base font-medium mt-1">
                        Teknik Informatika (Informatics Engineering)
                      </CardDescription>
                    </div>
                    <Badge className="w-fit mt-1 sm:mt-0">2022 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Currently pursuing a degree in Informatics Engineering, focusing on software development and web
                    technologies.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold">SMK Miftahul Jannnah</CardTitle>
                      <CardDescription className="text-base font-medium mt-1">
                        Teknik Komputer dan Jaringan (Computer Engineering and Networking)
                      </CardDescription>
                    </div>
                    <Badge className="w-fit mt-1 sm:mt-0">2019 - 2022</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Completed vocational education in Computer Engineering and Networking, building a strong foundation
                    in technical skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-extrabold tracking-tight">Get In Touch</h2>
              <div className="h-px flex-1 bg-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                  <CardDescription className="text-base">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full text-primary shrink-0">
                      <Mail className="h-5 w-5" />
                    </Button>
                    <div>
                      <p className="font-semibold text-base">Email</p>
                      <p className="text-sm text-muted-foreground">holiq.ibrahim376@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full text-primary shrink-0">
                      <Phone className="h-5 w-5" />
                    </Button>
                    <div>
                      <p className="font-semibold text-base">Phone</p>
                      <p className="text-sm text-muted-foreground">+6282298249439</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="rounded-full text-primary shrink-0">
                      <MapPin className="h-5 w-5" />
                    </Button>
                    <div>
                      <p className="font-semibold text-base">Location</p>
                      <p className="text-sm text-muted-foreground">Tangerang, Indonesia</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="font-semibold text-base mb-3">Social Profiles</p>
                    <div className="flex gap-3">
                      <Link href="https://github.com/holiq" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                      <Link href="https://linkedin.com/in/holiq-ibrahim" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full transition-all duration-300 hover:bg-accent hover:scale-110"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold">Send Me a Message</CardTitle>
                  <CardDescription className="text-base">I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          placeholder="Your name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        placeholder="Message subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message"
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Holiq Ibrahim. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
