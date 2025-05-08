"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, ChevronUp, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Portfolio() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">About Me & Education</h2>
          <Button variant="ghost" onClick={() => setShowAbout(!showAbout)}>
            <Info className="mr-2" /> {showAbout ? "Hide" : "Show"}
          </Button>
        </div>
        {showAbout && (
          <Card className="mb-6">
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">About Me</h3>
                <p>I am currently pursuing my Master's in Computer Science at Syracuse University with a strong focus on backend development, cloud architecture, and DevOps. I'm passionate about building scalable systems and solving real-world engineering problems.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Education</h3>
                <p><strong>Syracuse University</strong> — Master of Science in Computer Science<br />Aug 2023 – May 2025 | GPA: 3.8</p>
              </div>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
       
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
