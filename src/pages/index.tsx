import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import { LampDemo } from "@/components/lamp";


import {
  ChevronRight,
  ChevronLeft,
  Code2,
  
  MonitorSmartphone,
  Smartphone,
  Server,
  Globe,
  Cpu,
  Database,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";



  const aboutStats = [
    { value: '5+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '15+', label: 'Happy Clients' },
    { value: '10+', label: 'Mobile Apps Launched' }
  ];

  const skills = [
    {
      icon: <Code2 className="h-6 w-6 text-purple-400" />,
      title: "Full-Stack Development",
      tech: "TypeScript, Next.js, Tailwind"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-400" />,
      title: "Mobile Development",
      tech: "Kotlin, Android SDK, Jetpack Compose"
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6 text-green-400" />,
      title: "AI Integration",
      tech: "Machine Learning, AI APIs"
    },
    {
      icon: <Server className="h-6 w-6 text-orange-400" />,
      title: "Backend Systems",
      tech: "Node.js, Spring Boot, REST APIs"
    }
  ];

const projects = [
  {
    title: "GateKepper",
    description: "Software for IEEE-RVCE this software is designed to streamline and enhance the event permission approval process within the IEEE RVCE organizational structure",
    image: "/assets/1.jpeg",
    href: "https://gate.ieee-rvce.org/login",
    github: "https://github.com/AyushRatan1/GateKepper",
    tags: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "VED-AI",
    description: "Developed an AI-powered chatbot platform that ofers personalized learning and connectivity by leveraging RAG-based AI, LLM technology, and custom knowledge graphs.",
    image: "/assets/VED2.mp4",
    href: "https://ved-ai.com/",
    github: "https://github.com/AyushRatan1/VED-AI",
    tags: ["AI", "LLM", "Next.js"]
  },
  {
    title: "Website",
    description: "Freelance project",
    image: "/assets/5.mp4",
    href: "https://ayushratan1.github.io/Marbella/",
    github: "https://github.com/AyushRatan1/Marbella",
    tags: ["React", "CSS", "JavaScript"]
  },
  {
    title: "CSITSS",
    description: "Website for CSITSS International conference",
    image: "/assets/3.png",
    href: "https://csitss.ieee-rvce.org/",
    github: "https://github.com/AyushRatan1/CSITSS",
    tags: ["Next.js", "TypeScript"]
  },
  {
    title: "Coin Split",
    description: "A Web3 based project to allow splitwise features but on cryptocurrency and makes it easy to share and recieve crypto",
    image: "/assets/6.png",
    href: "https://csitss.ieee-rvce.org/",
    github: "https://github.com/AyushRatan1/CoinSplit",
    tags: ["Web3", "Solidity", "React"]
  },
  {
    title: "Community Nexus",
    description: "AI based application for Community Developemnt",
    image: "/assets/5.jpeg",
    href: "https://github.com/HarshJha454/Com_nex",
    github: "https://github.com/HarshJha454/Com_nex",
    tags: ["AI", "Python", "React"]
  },
  {
    title: "EMG sensor",
    description: "Robotics-arm motion detection",
    image: "/assets/4.png",
    href: "https://github.com/AyushRatan1/EMG-Sensor-based-VR-Controller",
    github: "https://github.com/AyushRatan1/EMG-Sensor-based-VR-Controller",
    tags: ["IoT", "Arduino", "C++"]
  }
];

const services = [
  {
    icon: Code2,
    service: "Full-Stack Development",
    description: "End-to-end web applications built with modern technologies and best practices.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Smartphone,
    service: "Mobile Development",
    description: "Native and cross-platform mobile apps with stunning UI and smooth performance.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    service: "Web Development",
    description: "Responsive, fast, and SEO-friendly websites that drive results.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Cpu,
    service: "AI Integration",
    description: "Implementing cutting-edge AI solutions to enhance your applications.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: Database,
    service: "Database Design",
    description: "Scalable and efficient database architectures for your applications.",
    gradient: "from-orange-500 to-yellow-500"
  }
];
export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle mouse movement for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty('--mouse-x', `${x}%`);
        section.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Lamp Demo */}
        <section  className="bg-black relative isolate min-h-screen">
          <div className="absolute inset-0 bg-black -z-10" />
          <LampDemo />
        </section>

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-20 sm:mt-40 px-4 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>next.js</span>
              <span className={styles.pill}>tailwindcss</span>
              <span className={styles.pill}>typescript</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-4xl sm:text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-4xl sm:text-6xl 2xl:text-8xl">
                  Ayush Ratan.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground text-base sm:text-lg 2xl:text-xl"
              >
                Undergraduate Student at RV College of Engineering
              </p>
              <br></br>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground text-base sm:text-lg 2xl:text-xl"
              >
                An experienced full-stack website developer with a passion for
                crafting unique digital experiences.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              
                <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-10 sm:mt-14 h-[300px] sm:h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="https://prod.spline.design/NL3sY1jG3mCpVnZ1/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-16 sm:py-24 px-4">
          <div className="mx-auto max-w-6xl">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute right-1/2 top-0 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-purple-500/10 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            {/* Main content */}
            <div className="flex flex-col gap-8 sm:gap-16">
              {/* Intro text */}
              <div className="relative">
                <h2 className="max-w-4xl text-2xl sm:text-3xl font-light leading-relaxed tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  I&apos;m an experienced{' '}
                  <span className="animate-text-gradient bg-gradient-to-r from-purple-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                    full-stack & mobile developer
                  </span>{' '}
                  proficient in{' '}
                  <Link
                    href="https://create.t3.gg/"
                    target="_blank"
                    className="group relative inline-block overflow-hidden"
                  >
                    <span className="relative z-10 underline decoration-blue-500/50 decoration-2 underline-offset-4 transition-colors duration-300 hover:decoration-blue-500">
                      TypeScript, Kotlin, and Next.js
                    </span>
                  </Link>
                </h2>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="group relative rounded-xl border border-border/50 bg-card/50 p-4 sm:p-6 transition-all duration-300 hover:border-border hover:bg-card"
                  >
                    <div className="mb-4">{skill.icon}</div>
                    <h3 className="mb-2 text-base sm:text-lg font-semibold">{skill.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{skill.tech}</p>
                    <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-purple-500/50 transition-all duration-300 group-hover:bg-purple-500" />
                  </div>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
                {aboutStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative rounded-xl border border-border/50 bg-card/50 p-4 sm:p-6 transition-all duration-300 hover:border-border hover:bg-card"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-2xl sm:text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-muted-foreground md:text-base">
                        {stat.label}
                      </span>
                    </div>
                    <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-purple-500/50 transition-all duration-300 group-hover:bg-purple-500" />
                  </div>
                ))}
              </div>

              {/* Experience highlights */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Full-Stack & Mobile Leadership</h3>
                  <p className="text-muted-foreground">
                    Led innovative web and mobile projects at WIPRO, developing cutting-edge applications using Kotlin and modern web technologies.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                  <h3 className="mb-3 text-lg font-semibold">Cross-Platform Expertise</h3>
                  <p className="text-muted-foreground">
                    Experienced in delivering client-focused solutions at IEEE-RVCE and Postman, specializing in both web and mobile development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects */}
        <section id="projects" data-scroll-section className="px-4">
          <div data-scroll data-scroll-speed=".4" className="my-32 sm:my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Experiences.
            </h2>
            <p className="mt-1.5 text-sm sm:text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;ve worked on a variety of projects, from small websites to
              large-scale web applications. Here are some of my favorites:
            </p>

            {/* Carousel */}
            <div className="mt-8 sm:mt-14 relative">
              <Carousel
                setApi={setCarouselApi}
                className="w-full"
                opts={{
                  align: "start",
                }}
              >
                <CarouselContent>
                  {projects.map((project, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <Link
                        key={index}
                        href={project.href}
                        target="_blank"
                        className="group relative block w-full overflow-hidden rounded-lg bg-card p-2 transition-all hover:bg-accent sm:p-4"
                      >
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                          {project.image.endsWith('.mp4') ? (
                            <video
                              src={project.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={1920}
                              height={1080}
                              className="h-full w-full object-cover"
                            />
                          )}
                        </div>
                        <div className="mt-4 flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-medium">{project.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 transform text-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-foreground" />
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {/* Enhanced Navigation Controls */}
                <div className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <CarouselPrevious className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-background/80 hover:bg-background border border-border/50 backdrop-blur" />
                </div>
                <div className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <CarouselNext className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-background/80 hover:bg-background border border-border/50 backdrop-blur" />
                </div>
              </Carousel>

              {/* Enhanced Progress Indicator */}
              <div className="mt-6 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => carouselApi?.scrollPrev()} 
                    className="p-2 hover:bg-accent rounded-full transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  </button>
                  <span className="text-sm sm:text-base font-medium">
                    <span className="text-foreground">{current}</span>
                    <span className="text-muted-foreground"> / {count}</span>
                  </span>
                  <button 
                    onClick={() => carouselApi?.scrollNext()} 
                    className="p-2 hover:bg-accent rounded-full transition-colors"
                  >
                    <ChevronRight className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: count }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => carouselApi?.scrollTo(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === current - 1 
                          ? "w-6 bg-primary" 
                          : "w-1.5 bg-muted hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="relative py-16 sm:py-24 px-4">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-32 sm:h-64 w-32 sm:w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute right-1/4 top-3/4 h-32 sm:h-64 w-32 sm:w-64 rounded-full bg-secondary/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 sm:mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl sm:text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Need more info?
                <br />
                <span className="text-gradient clash-grotesk">
                  I got you covered.
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-sm sm:text-lg tracking-tighter text-secondary-foreground">
                Here are some of the services I offer. Each solution is tailored to your specific needs
                and built with the latest technologies.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.service}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 bg-gradient-to-br ${service.gradient}`} />
                  
                  {/* Icon container */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-colors duration-300 group-hover:bg-white/10">
                    <service.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-lg sm:text-xl font-semibold tracking-tight">
                    {service.service}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary-foreground">
                    {service.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute right-4 top-4 h-20 w-20 rounded-full border border-white/5 opacity-20" />
                  <div className="absolute right-8 top-8 h-12 w-12 rounded-full border border-white/5 opacity-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-32 sm:my-64 px-4">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-4 sm:px-8 py-12 sm:py-16 text-center xl:py-24"
          >
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-sm sm:text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href="mailto:ayushratan082@gmail.com" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
