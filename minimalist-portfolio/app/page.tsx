// Minimalist Portfolio based on Dayasagar's Resume
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <main className="p-6 max-w-4xl mx-auto text-gray-900">
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold">Dayasagar Krishnanmani</h1>
        <p className="text-lg mt-4">Software Developer | Cloud Enthusiast | DevOps Learner</p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="mailto:dkrishna@syr.edu"><Mail /></Link>
          <Link href="https://github.com/dayaasaagar" target="_blank"><Github /></Link>
          <Link href="https://linkedin.com/in/kmr-dayaasaagar" target="_blank"><Linkedin /></Link>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        {/* Experience cards remain unchanged */}
        {/* Existing experience content goes here */}
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        {/* Main Projects */}
        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Task Scheduler API <Link href="#" className="text-blue-600 underline">(GitHub)</Link></h3>
            <ul className="list-disc list-inside">
              <li>Built REST API using Django REST Framework for task scheduling and management.</li>
              <li>Implemented JWT-based auth, AWS S3 for file storage, and RDS (PostgreSQL) for database.</li>
              <li>CI/CD with GitHub Actions and AWS CodeDeploy, deployed to EC2 using Nginx & Gunicorn.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">GenAI Chatbot API <Link href="#" className="text-blue-600 underline">(GitHub)</Link></h3>
            <ul className="list-disc list-inside">
              <li>Developed FastAPI backend integrated with OpenAI GPT API for natural language chat.</li>
              <li>Used FAISS for fast semantic search and Hugging Face Transformers for custom fine-tuning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Food Delivery App <Link href="#" className="text-blue-600 underline">(GitHub)</Link></h3>
            <ul className="list-disc list-inside">
              <li>Built MERN stack app with real-time order tracking and role-based user authentication.</li>
              <li>Designed scalable MongoDB schema; used POSTMATES API for delivery integration.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">PeopleFirst – Reliance HR App</h3>
            <p>Developed Spring Boot APIs and Angular UI for leave, reimbursement, and payroll modules.</p>
          </CardContent>
        </Card>

        {/* Toggleable Extra Projects */}
        {showMoreProjects && (
          <>
            <Card className="mb-4"><CardContent><h3 className="text-xl font-bold">Project 1</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></CardContent></Card>
            <Card className="mb-4"><CardContent><h3 className="text-xl font-bold">Project 2</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></CardContent></Card>
            <Card className="mb-4"><CardContent><h3 className="text-xl font-bold">Project 3</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></CardContent></Card>
            <Card className="mb-4"><CardContent><h3 className="text-xl font-bold">Project 4</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></CardContent></Card>
            <Card className="mb-4"><CardContent><h3 className="text-xl font-bold">Project 5</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></CardContent></Card>
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

      <section className="my-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">🛠️ Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <Card><CardContent><strong>Languages:</strong> Python, Java, SQL, JavaScript, C/C++, PHP, HTML/CSS</CardContent></Card>
          <Card><CardContent><strong>Frameworks & Libraries:</strong> Django, Spring Boot, Angular, React, Node.js, Express.js</CardContent></Card>
          <Card><CardContent><strong>Tools & Platforms:</strong> Docker, Kubernetes, GitHub Actions, Jenkins, Postman</CardContent></Card>
          <Card><CardContent><strong>Cloud & DevOps:</strong> AWS (EC2, CodeDeploy, RDS, S3), Azure</CardContent></Card>
        </div>
      </section>
    </main>
  );
}
