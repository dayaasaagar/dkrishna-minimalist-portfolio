"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [showAbout, setShowAbout] = useState(false);

  /* ---------- Experience Data ---------- */
  const experience = [
    {
      title: "Syracuse University - Research Intern",
      duration: "June 2025 – Present",
      points: [
        "Developed GenAI-powered chatbot API with FastAPI, LangChain, and Hugging Face Transformers.",
        "Built RAG-based responses using FAISS vector search and OpenAI GPT models.",
        "Improved ticket resolution by 35% and reduced response time by 50%."
      ]
    },
    {
      title: "Valuemomentum – Automation Intern",
      duration: "June 2024 – August 2024",
      points: [
        "Developed 10+ RESTful APIs in Java and Node.js, cutting backend integration time by 40%.",
        "Used LLM-based classification to organize internal tickets and HR documents.",
        "Collaborated with product managers on API specs, saving $8K in engineering costs."
      ]
    },
    {
      title: "Reliance Industries – Software Engineer",
      duration: "November 2022 – August 2023",
      points: [
        "Developed 20+ REST APIs in Java Spring Boot for automated workflows across 3 business units.",
        "Deployed CI/CD pipelines on Azure; automated batch job monitoring with PowerShell and Jenkins.",
        "Resolved a Kafka consumer failure in the attendance system by debugging message offsets and restarting services — added logging and retry logic for resilience."
      ]
    },
    {
      title: "Mumbai University Startup Launchpad – Backend Engineer Consultant",
      duration: "July 2021 – June 2022",
      points: [
        "Developed containerized Spring Boot services for user onboarding and notification dispatch, deployed via Docker on campus-hosted servers, enabling the platform to handle 5x more student activity during peak demo weeks.",
        "Conducted 30+ code reviews, mentored 3 junior developers, and established automated testing practices using JUnit and Mockito, increasing test coverage by 40% and reducing post-deployment bugs by 25%."
      ]
    },
    {
      title: "Jio-British Petroleum – Software Engineer Intern",
      duration: "May 2020 – August 2020",
      points: [
        "Refactored monolithic modules into modular Spring Boot services with layered architecture.",
        "Documented API contracts and CI/CD steps using Swagger and Confluence.",
        "Integrated SonarQube into Jenkins pipelines, increasing test coverage to 85%."
      ]
    }
  ];

  /* ---------- Skills Data ---------- */
  const skills = [
    { name: "AWS", logo: "/logos/aws.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
    { name: "Azure", logo: "/logos/azure.svg" },
    { name: "GCP", logo: "/logos/gcp.svg" },
    { name: "Terraform", logo: "/logos/terraform.svg" },
    { name: "Java", logo: "/logos/java.svg" },
    { name: "Spring Boot", logo: "/logos/spring.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Express", logo: "/logos/express.svg" },
    { name: "React", logo: "/logos/react.svg" },
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "TypeScript", logo: "/logos/typescript.svg" },
    { name: "JavaScript", logo: "/logos/javascript.svg" },
    { name: "Python", logo: "/logos/python.svg" },
    { name: "Go", logo: "/logos/go.svg" },
    { name: "Rust", logo: "/logos/rust.svg" },
    { name: "GraphQL", logo: "/logos/graphql.svg" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    { name: "MySQL", logo: "/logos/mysql.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
    { name: "Redis", logo: "/logos/redis.svg" },
    { name: "Jenkins", logo: "/logos/jenkins.svg" },
    { name: "GitHub Actions", logo: "/logos/githubactions.svg" },
    { name: "SonarQube", logo: "/logos/sonarqube.svg" },
    { name: "PowerShell", logo: "/logos/powershell.svg" },
  ];

  return (
    <main className="p-6 max-w-5xl mx-auto min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      
      {/* ---------- Hero Section ---------- */}
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold text-[#232F3E]">Dayasagar Krishnanmani</h1>
        <p className="text-lg mt-4">Software Developer | Cloud Enthusiast | DevOps Engineer</p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="mailto:dkrishna@syr.edu" className="hover:scale-110 transition-transform duration-300"><Mail /></Link>
          <Link href="https://github.com/dayaasaagar" target="_blank" className="hover:scale-110 transition-transform duration-300"><Github /></Link>
          <Link href="https://linkedin.com/in/kmr-dayaasaagar" target="_blank" className="hover:scale-110 transition-transform duration-300"><Linkedin /></Link>
        </div>
      </section>

      {/* ---------- About Section ---------- */}
      <section className="my-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="inline-block text-2xl font-bold px-4 py-2 bg-[#FFEDD5] text-[#FF9900] rounded-full shadow-sm">
            About Me & Education
          </h2>
          <Button variant="ghost" onClick={() => setShowAbout(!showAbout)}>
            <Info className="mr-2" /> {showAbout ? "Hide" : "Show"}
          </Button>
        </div>
        {showAbout && (
          <Card className="mb-6 animate-fadeIn">
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">About Me</h3>
                <p>
                  I hold a Master’s degree in Computer Science from Syracuse University and bring over 2.5 years of experience in backend development, cloud infrastructure, and DevOps. I thrive in fast-paced environments where customer obsession, ownership, and continuous improvement are valued.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Education</h3>
                <p><strong>Syracuse University</strong> — Master of Science in Computer Science<br />Aug 2023 – May 2025 | GPA: 3.8</p>
                <p><strong>Mumbai University</strong> — Bachelor of Technology in Computer Science<br />Aug 2018 - May 2022 | GPA: 3.7</p>
              </div>
            </CardContent>
          </Card>
        )}
      </section>

      {/* ---------- Experience Timeline ---------- */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#232F3E]">📌 Experience Timeline</h2>
        <div className="relative border-l-4 border-orange-300 ml-4">
          {experience.map((job, index) => (
            <div
              key={index}
              className="mb-10 ml-6 relative opacity-0 animate-slideIn"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
            >
              <span className="absolute -left-4 top-2 w-6 h-6 rounded-full bg-orange-400 border-4 border-white shadow"></span>
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{job.duration}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Skills Section ---------- */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#232F3E]">🛠 Tech & Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 bg-black/5 rounded-xl hover:scale-105 transition cursor-pointer"
              title={skill.name}
            >
              <Image src={skill.logo} alt={skill.name} width={50} height={50} />
              <span className="text-xs mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-6 italic">
          ...and plenty more technologies I'm exploring & mastering every day.
        </p>
      </section>
    </main>
  );
}
