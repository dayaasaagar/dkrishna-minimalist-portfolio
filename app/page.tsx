"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, ChevronUp, Info } from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <main className="p-6 max-w-4xl mx-auto text-gray-900">
      {/* Hero */}
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold">Dayasagar Krishnanmani</h1>3
        <p className="text-lg mt-4">Software Developer | Cloud Enthusiast | DevOps Learner</p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="mailto:dkrishna@syr.edu"><Mail /></Link>
          <Link href="https://github.com/dayaasaagar" target="_blank"><Github /></Link>
          <Link href="https://linkedin.com/in/kmr-dayaasaagar" target="_blank"><Linkedin /></Link>
        </div>
      </section>

      {/* About + Education Toggle */}
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
                <p>
                  I am currently pursuing my Master's in Computer Science at Syracuse University with a strong focus on backend development,
                  cloud architecture, and DevOps. I'm passionate about building scalable systems and solving real-world engineering problems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Education</h3>
                <p><strong>Syracuse University</strong> — Master of Science in Computer Science<br />Aug 2023 – May 2025 | GPA: 3.8</p>
              </div>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Experience Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Freelance Software Engineer</h3>
            <p className="text-sm text-gray-600">Aug 2024 – Present</p>
            <ul className="list-disc list-inside">
              <li>Built cloud-native APIs with FastAPI and PostgreSQL for commercial fleet tracking.</li>
              <li>Deployed microservices on AWS EC2 using Docker and GitHub Actions.</li>
              <li>Implemented trip history and maintenance tracking with scalable architecture.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Valuemomentum – Automation Intern</h3>
            <p className="text-sm text-gray-600">Jun 2024 – Aug 2024</p>
            <ul className="list-disc list-inside">
              <li>Developed custom PCF components in Power Apps.</li>
              <li>Built AngularJS dashboards with Plotly; integrated Power BI.</li>
              <li>Improved workflow efficiency through automation tools.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Reliance Industries – Software Development Engineer</h3>
            <p className="text-sm text-gray-600">Nov 2022 – Aug 2023</p>
            <ul className="list-disc list-inside">
              <li>Built Java microservices for order and shipping batch workflows.</li>
              <li>Created Angular dashboards using Plotly Dash for real-time pricing.</li>
              <li>Automated batch job monitoring with Jenkins + PowerShell.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <Card className="mb-4">
          <CardContent>
            <h3 className="text-xl font-bold">Task Scheduler API <Link href="" className="text-blue-600 underline">(GitHub)</Link></h3>
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
                <li>Built a Slack-integrated assistant that parses GitHub commits, JIRA updates, and PR activity to auto-generate daily standups using OpenAI GPT-4 and developer metadata.</li>
                <li>Engineered backend services in FastAPI with Redis caching and PostgreSQL storage for sprint-wise summaries.</li>
                <li>Developed a React dashboard for engineers to review, edit, and approve AI-generated standup entries with real-time updates and overrides.</li>
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
        

        {/* More Projects Toggle */}
        {showMoreProjects && (
          <>
            {[1, 2, 3, 4, 5].map(n => (
              <Card key={n} className="mb-4">
                <CardContent>
                  <h3 className="text-xl font-bold">Project {n + 4}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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

      {/* Skills Section */}
      <section className="my-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">🛠️ Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <Card><CardContent><strong>Languages:</strong> Python, Java, SQL, JavaScript, C/C++, PHP, HTML/CSS</CardContent></Card>
          <Card><CardContent><strong>Frameworks:</strong> Django, Spring Boot, React, Angular, Express</CardContent></Card>
          <Card><CardContent><strong>DevOps:</strong> Docker, Kubernetes, GitHub Actions, Jenkins</CardContent></Card>
          <Card><CardContent><strong>Cloud:</strong> AWS (EC2, RDS, S3, CodeDeploy), Azure,GCP</CardContent></Card>
        </div>
      </section>
    </main>
  );
}
