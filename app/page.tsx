"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Info, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [showAbout, setShowAbout] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

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
    { name: "AWS", logo: "aws.svg" },
    { name: "Docker", logo: "docker.svg" },
    { name: "Kubernetes", logo: "kubernetes.svg" },
    { name: "Azure", logo: "azure.svg" },
    { name: "GCP", logo: "gcp.svg" },
    { name: "Terraform", logo: "terraform.svg" },
    { name: "Java", logo: "java.svg" },
    { name: "Spring Boot", logo: "spring.svg" },
    { name: "Node.js", logo: "nodejs.svg" },
    { name: "Express", logo: "express.svg" },
    { name: "React", logo: "react.svg" },
    { name: "Next.js", logo: "nextjs.svg" },
    { name: "TypeScript", logo: "typescript.svg" },
    { name: "JavaScript", logo: "javascript.svg" },
    { name: "Python", logo: "python.svg" },
    { name: "Go", logo: "go.svg" },
    { name: "Rust", logo: "rust.svg" },
    { name: "GraphQL", logo: "graphql.svg" },
    { name: "PostgreSQL", logo: "postgresql.svg" },
    { name: "MySQL", logo: "mysql.svg" },
    { name: "MongoDB", logo: "mongodb.svg" },
    { name: "Redis", logo: "redis.svg" },
    { name: "Jenkins", logo: "jenkins.svg" },
    { name: "GitHub Actions", logo: "githubactions.svg" },
    { name: "SonarQube", logo: "sonarqube.svg" },
    { name: "PowerShell", logo: "powershell.svg" },
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

      {/* ---------- Projects Section ---------- */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#232F3E]">🚀 Projects</h2>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Task Scheduler API <Link href="#" className="text-blue-600 underline">(GitHub)</Link></h3>
            <ul className="list-disc list-inside">
              <li>Built Django REST API for managing scheduled tasks.</li>
              <li>Deployed on AWS EC2 with Gunicorn, Nginx, and CI/CD pipelines.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Cloud Log Anomaly Detection System <Link href="https://github.com/dayaasaagar/Cloud-Anamoly-Detection" className="text-blue-600 underline">(GitHub)</Link></h3>
            <ul className="list-disc list-inside">
              <li>Ingested logs from EC2, EKS, and RabbitMQ using AWS Lambda and Kinesis.</li>
              <li>Parsed logs using Python + Regex; stored structured data in Amazon Redshift.</li>
              <li>Detected anomalies and triggered alerts via Slack using Lambda.</li>
              <li>Built Spring Boot dashboard to visualize logs and alerts in real-time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">GenAI Chatbot API <Link href="https://github.com/dayaasaagar/Gen-AI-Chatbot" className="text-blue-600 underline">(GitHub)</Link></h3>
            <ul className="list-disc list-inside">
              <li>Built FastAPI backend with OpenAI GPT, HuggingFace, and FAISS search.</li>
              <li>Delivered domain-specific chatbot experiences using RAG techniques.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Context-Aware Standup Bot for Engineering Teams <Link href="#" className="text-blue-600 underline">(GitHub)</Link></h3>
            <ul className="list-disc list-inside">
              <li>Slack-integrated assistant that parses GitHub commits, JIRA updates, and PR activity to auto-generate daily standups using OpenAI GPT-4.</li>
              <li>FastAPI backend with Redis caching and PostgreSQL storage for sprint summaries.</li>
              <li>React dashboard for engineers to review and approve AI-generated standup entries.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">PeopleFirst – Reliance HR App</h3>
            <p>Spring Boot + Angular platform for managing payroll, leave, and reimbursements.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Food Delivery App <Link href="https://github.com/dayaasaagar/Food-Delivery-App/tree/feature-branch" className="text-blue-600 underline">(GitHub)</Link></h3>
            <ul className="list-disc list-inside">
              <li>MERN stack app for browsing menus, placing orders, and tracking deliveries.</li>
              <li>Integrated POSTMATES API and role-based JWT authentication.</li>
            </ul>
          </CardContent>
        </Card>

        {showMoreProjects && (
          <>
            {[1, 2, 3].map(n => (
              <Card key={n} className="mb-4">
                <CardContent>
                  <h3 className="text-xl font-bold">Project {n + 6}</h3>
                  <p>Additional project description goes here.</p>
                </CardContent>
              </Card>
            ))}
          </>
        )}

        <div className="flex justify-center mt-4">
          <Button onClick={() => setShowMoreProjects(!showMoreProjects)} variant="outline">
            {showMoreProjects ? (
              <><ChevronUp className="mr-2" /> Show Less</>
            ) : (
              <><ChevronDown className="mr-2" /> Show More</>
            )}
          </Button>
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
