// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Github, Linkedin, Mail, ChevronDown, ChevronUp, Info } from "lucide-react";
// import Link from "next/link";

// export default function Portfolio() {
//   const [showMoreProjects, setShowMoreProjects] = useState(false);
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <main className="p-6 max-w-4xl mx-auto text-gray-900">
//       {/* Hero */}
//       <section className="text-center my-16">
//         <h1 className="text-4xl font-bold">Dayasagar Krishnanmani</h1>
//         <p className="text-lg mt-4">Software Developer | Cloud Enthusiast | DevOps Learner</p>
//         <div className="flex justify-center gap-4 mt-6">
//           <Link href="mailto:dkrishna@syr.edu"><Mail /></Link>
//           <Link href="https://github.com/dayaasaagar" target="_blank"><Github /></Link>
//           <Link href="https://linkedin.com/in/kmr-dayaasaagar" target="_blank"><Linkedin /></Link>
//         </div>
//       </section>

//       {/* About + Education Toggle */}
//       <section className="my-12">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-semibold">About Me & Education</h2>
//           <Button variant="ghost" onClick={() => setShowAbout(!showAbout)}>
//             <Info className="mr-2" /> {showAbout ? "Hide" : "Show"}
//           </Button>
//         </div>
//         {showAbout && (
//           <Card className="mb-6">
//             <CardContent className="space-y-4">
//               <div>
//                 <h3 className="text-xl font-bold">About Me</h3>
//                 <p>
//                   I am currently pursuing my Master's in Computer Science at Syracuse University with a strong focus on backend development,
//                   cloud architecture, and DevOps. I'm passionate about building scalable systems and solving real-world engineering problems.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">Education</h3>
//                 <p><strong>Syracuse University</strong> — Master of Science in Computer Science<br />Aug 2023 – May 2025 | GPA: 3.8</p>
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </section>

//       {/* Experience Section */}
//       <section className="my-12">
//         <h2 className="text-2xl font-semibold mb-4">Experience</h2>

//         <Card className="mb-4">
//           <CardContent>
//             <h3 className="text-xl font-bold">Freelance Software Engineer</h3>
//             <p className="text-sm text-gray-600">Aug 2024 – Present</p>
//             <ul className="list-disc list-inside">
//               <li>Built cloud-native APIs with FastAPI and PostgreSQL for commercial fleet tracking.</li>
//               <li>Deployed microservices on AWS EC2 using Docker and GitHub Actions.</li>
//               <li>Implemented trip history and maintenance tracking with scalable architecture.</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className="mb-4">
//           <CardContent>
//             <h3 className="text-xl font-bold">Valuemomentum – Automation Intern</h3>
//             <p className="text-sm text-gray-600">Jun 2024 – Aug 2024</p>
//             <ul className="list-disc list-inside">
//               <li>Developed custom PCF components in Power Apps.</li>
//               <li>Built AngularJS dashboards with Plotly; integrated Power BI.</li>
//               <li>Improved workflow efficiency through automation tools.</li>
//             </ul>
//           </CardContent>
//         </Card>

//         <Card className="mb-4">
//           <CardContent>
//             <h3 className="text-xl font-bold">Reliance Industries – Software Development Engineer</h3>
//             <p className="text-sm text-gray-600">Nov 2022 – Aug 2023</p>
//             <ul className="list-disc list-inside">
//               <li>Built Java microservices for order and shipping batch workflows.</li>
//               <li>Created Angular dashboards using Plotly Dash for real-time pricing.</li>
//               <li>Automated batch job monitoring with Jenkins + PowerShell.</li>
//             </ul>
//           </CardContent>
//         </Card>
//       </section>

//       {/* Projects Section */}
//       <section className="my-12">
//         <h2 className="text-2xl font-semibold mb-4">Projects</h2>

//         <Card className="mb-4">
//           <CardContent>
//             <h3 className="text-xl font-bold">Task Scheduler API <Link href="" className="text-blue-600 underline">(GitHub)</Link></h3>
//             <ul className="list-disc list-inside">
//               <li>Built Django REST API for managing scheduled tasks.</li>
//               <li>Deployed on AWS EC2 with Gunicorn, Nginx, and CI/CD pipelines.</li>
//             </ul>
//           </CardContent>
//         </Card>
//         <Card className="mb-4">
//           <CardContent>
//             <h3 className="text-xl font-bold">Cloud Log Anomaly Detection System <Link href="https://github.com/dayaasaagar/Cloud-Anamoly-Detection" className="text-blue-600 underline">(GitHub)</Link></h3>
//               <ul className="list-disc list-inside">
//                 <li>Ingested logs from EC2, EKS, and RabbitMQ using AWS Lambda and Kinesis.</li>
//                 <li>Parsed logs using Python + Regex; stored structured data in Amazon Redshift.</li>
//                 <li>Detected anomalies and triggered alerts via Slack using Lambda.</li>
//                 <li>Built Spring Boot dashboard to visualize logs and alerts in real-time.</li>
//               </ul>
//            </CardContent>
//         </Card>


//         <Card className="mb-4">
//           <CardContent>
//             <h3 className="text-xl font-bold">GenAI Chatbot API <Link href="https://github.com/dayaasaagar/Gen-AI-Chatbot" className="text-blue-600 underline">(GitHub)</Link></h3>
//             <ul className="list-disc list-inside">
//               <li>Built FastAPI backend with OpenAI GPT, HuggingFace, and FAISS search.</li>
//               <li>Delivered domain-specific chatbot experiences using RAG techniques.</li>
//             </ul>
//           </CardContent>
//         </Card>
//          <Card className="mb-4">
//           <CardContent>
//               <h3 className="text-xl font-bold">Context-Aware Standup Bot for Engineering Teams <Link href="#" className="text-blue-600 underline">(GitHub)</Link></h3>
//               <ul className="list-disc list-inside">
//                 <li>Built a Slack-integrated assistant that parses GitHub commits, JIRA updates, and PR activity to auto-generate daily standups using OpenAI GPT-4 and developer metadata.</li>
//                 <li>Engineered backend services in FastAPI with Redis caching and PostgreSQL storage for sprint-wise summaries.</li>
//                 <li>Developed a React dashboard for engineers to review, edit, and approve AI-generated standup entries with real-time updates and overrides.</li>
//               </ul>
//           </CardContent>
//         </Card>

//         <Card className="mb-4">
//           <CardContent>
//             <h3 className="text-xl font-bold">PeopleFirst – Reliance HR App</h3>
//             <p>Spring Boot + Angular platform for managing payroll, leave, and reimbursements.</p>
//           </CardContent>
//         </Card>
//               <Card className="mb-4">
//           <CardContent>
//             <h3 className="text-xl font-bold">Food Delivery App <Link href="https://github.com/dayaasaagar/Food-Delivery-App/tree/feature-branch" className="text-blue-600 underline">(GitHub)</Link></h3>
//             <ul className="list-disc list-inside">
//               <li>MERN stack app for browsing menus, placing orders, and tracking deliveries.</li>
//               <li>Integrated POSTMATES API and role-based JWT authentication.</li>
//             </ul>
//           </CardContent>
//         </Card>
        

//         {/* More Projects Toggle */}
//         {showMoreProjects && (
//           <>
//             {[1, 2, 3, 4, 5].map(n => (
//               <Card key={n} className="mb-4">
//                 <CardContent>
//                   <h3 className="text-xl font-bold">Project {n + 4}</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </>
//         )}

//         <div className="flex justify-center mt-4">
//           <Button onClick={() => setShowMoreProjects(!showMoreProjects)} variant="outline">
//             {showMoreProjects ? (
//               <><ChevronUp className="mr-2" /> Show Less</>
//             ) : (
//               <><ChevronDown className="mr-2" /> Show More</>
//             )}
//           </Button>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="my-12 bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-6 text-center">🛠️ Technical Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//           <Card><CardContent><strong>Languages:</strong> Python, Java, SQL, JavaScript, C/C++, PHP, HTML/CSS</CardContent></Card>
//           <Card><CardContent><strong>Frameworks:</strong> Django, Spring Boot, React, Angular, Express</CardContent></Card>
//           <Card><CardContent><strong>DevOps:</strong> Docker, Kubernetes, GitHub Actions, Jenkins</CardContent></Card>
//           <Card><CardContent><strong>Cloud:</strong> AWS (EC2, RDS, S3, CodeDeploy), Azure,GCP</CardContent></Card>
//         </div>
//       </section>
//     </main>
//   );
// }
// "use client";

// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Github, Linkedin, Mail, ChevronDown, ChevronUp, Info } from "lucide-react";
// import Link from "next/link";

// export default function Portfolio() {
//   const [showMoreProjects, setShowMoreProjects] = useState(false);
//   const [showAbout, setShowAbout] = useState(false);

//   return (
//     <main className="p-6 max-w-4xl mx-auto text-gray-900 bg-gradient-to-b from-white via-gray-50 to-white min-h-screen">
//       {/* Hero */}
//       <section className="text-center my-16">
//         <h1 className="text-4xl font-bold">Dayasagar Krishnanmani</h1>
//         <p className="text-lg mt-4">Software Developer | Cloud Enthusiast | DevOps Engineer</p>
//         <div className="flex justify-center gap-4 mt-6">
//           <Link href="mailto:dkrishna@syr.edu" className="hover:scale-110 transition-transform duration-300"><Mail /></Link>
//           <Link href="https://github.com/dayaasaagar" target="_blank" className="hover:scale-110 transition-transform duration-300"><Github /></Link>
//           <Link href="https://linkedin.com/in/kmr-dayaasaagar" target="_blank" className="hover:scale-110 transition-transform duration-300"><Linkedin /></Link>
//         </div>
//       </section>

//       {/* About + Education Toggle */}
//       <section className="my-12">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="inline-block text-2xl font-bold px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full shadow-sm">
//             About Me & Education
//           </h2>
//           <Button variant="ghost" onClick={() => setShowAbout(!showAbout)}>
//             <Info className="mr-2" /> {showAbout ? "Hide" : "Show"}
//           </Button>
//         </div>
//         {showAbout && (
//           <Card className="mb-6 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
//             <CardContent className="space-y-4">
//               <div>
//                 <h3 className="text-xl font-bold">About Me</h3>
//                 <p>
//                   With a Master’s in Computer Science from Syracuse University and over 2.5 years of experience, I approach engineering with a strong sense of ownership and a deep commitment to delivering customer-centric solutions. My work spans backend development, cloud-native systems, and DevOps automation—always guided by a bias for action, a drive to simplify complex problems, and a relentless focus on results.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">Education</h3>
//                 <p><strong>Syracuse University</strong> — Master of Science in Computer Science<br />Aug 2023 – May 2025 | GPA: 3.8</p>
//                 <p><strong>Mumbai Unviversity</strong>- Bachelor of Technology in Computer Science<br />Aug 2018 - May 2022 | GPA: 3.7</p>
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </section>

//       {/* Experience Section */}
//       <section className="my-12">
//         <h2 className="inline-block text-2xl font-bold px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full shadow-sm mb-4">
//           Experience
//         </h2>

//         {/* {[
//           {
//             title: "Syracuse University - Research Intern",
//             duration: "June 2025 – Present",
//             points: [
//               "Built cloud-native APIs with FastAPI and PostgreSQL for commercial fleet tracking.",
//               "Deployed microservices on AWS EC2 using Docker and GitHub Actions.",
//               "Implemented trip history and maintenance tracking with scalable architecture."
//             ]
//           },
//           {
//             title: "Valuemomentum – Automation Intern",
//             duration: "Jun 2024 – Aug 2024",
//             points: [
//               "Developed custom PCF components in Power Apps.",
//               "Built AngularJS dashboards with Plotly; integrated Power BI.",
//               "Improved workflow efficiency through automation tools."
//             ]
//           },
//           {
//             title: "Reliance Industries – Software Development Engineer",
//             duration: "Nov 2022 – Aug 2023",
//             points: [
//               "Built Java microservices for order and shipping batch workflows.",
//               "Created Angular dashboards using Plotly Dash for real-time pricing.",
//               "Automated batch job monitoring with Jenkins + PowerShell."
//             ]
//           },
//           {
//             title: "Jio-British Petroleum - Software Engineer Intern",
//             duration: "May 2020 – Aug 2020",
//             points: [
//               "Built cloud-native APIs with FastAPI and PostgreSQL for commercial fleet tracking.",
//               "Deployed microservices on AWS EC2 using Docker and GitHub Actions.",
//               "Implemented trip history and maintenance tracking with scalable architecture."
//             ]
//           }
//         ].map((job, index) => (
//           <Card key={index} className="mb-4 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
//             <CardContent>
//               <h3 className="text-xl font-bold">{job.title}</h3>
//               <p className="text-sm text-gray-600">{job.duration}</p>
//               <ul className="list-disc list-inside">
//                 {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
//               </ul>
//             </CardContent>
//           </Card>
//         ))} */
        
//         [
//   {
//     title: "Syracuse University - Research Intern",
//     duration: "June 2025 – Present",
//     points: [
//       "Developed GenAI-powered chatbot API with FastAPI, LangChain, and Hugging Face Transformers.",
//       "Built RAG-based responses using FAISS vector search and OpenAI GPT models.",
//       "Improved ticket resolution by 35% and reduced response time by 50%."
//     ]
//   },
//   {
//     title: "Valuemomentum – Automation Intern",
//     duration: "June 2024 – August 2024",
//     points: [
//       "Developed 10+ RESTful APIs in Java and Node.js, cutting backend integration time by 40%.",
//       "Used LLM-based classification to organize internal tickets and HR documents.",
//       "Collaborated with product managers on API specs, saving $8K in engineering costs."
//     ]
//   },
//   {
//     title: "Reliance Industries – Software Engineer",
//     duration: "November 2022 – August 2023",
//     points: [
//       "Developed 20+ REST APIs in Java Spring Boot for automated workflows across 3 business units.",
//       "Deployed CI/CD pipelines on Azure; automated batch job monitoring with PowerShell and Jenkins.",
//       "Resolved a Kafka consumer failure in the attendance system by debugging message offsets and restarting services — added logging and retry logic for resilience."
//     ]
//   },
//   {
//     title: "Jio-British Petroleum – Software Engineer Intern",
//     duration: "May 2020 – August 2020",
//     points: [
//       "Refactored monolithic modules into modular Spring Boot services with layered architecture.",
//       "Documented API contracts and CI/CD steps using Swagger and Confluence.",
//       "Integrated SonarQube into Jenkins pipelines, increasing test coverage to 85%."
//     ]
//   }
// ].map((job, index) => (
//   <Card key={index} className="mb-4 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
//     <CardContent>
//       <h3 className="text-xl font-bold">{job.title}</h3>
//       <p className="text-sm text-gray-600">{job.duration}</p>
//       <ul className="list-disc list-inside">
//         {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
//       </ul>
//     </CardContent>
//   </Card>
// ))}

        
        
        
        
        
//       </section>

//       {/* Projects Section */}
//       <section className="my-12">
//         <h2 className="inline-block text-2xl font-bold px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full shadow-sm mb-4">
//           Projects
//         </h2>

//         {[
//           {
//             title: "Task Scheduler API",
//             link: "",
//             points: [
//               "Built Django REST API for managing scheduled tasks.",
//               "Deployed on AWS EC2 with Gunicorn, Nginx, and CI/CD pipelines."
//             ]
//           },
//           {
//             title: "Cloud Log Anomaly Detection System",
//             link: "https://github.com/dayaasaagar/Cloud-Anamoly-Detection",
//             points: [
//               "Ingested logs from EC2, EKS, and RabbitMQ using AWS Lambda and Kinesis.",
//               "Parsed logs using Python + Regex; stored structured data in Amazon Redshift.",
//               "Detected anomalies and triggered alerts via Slack using Lambda.",
//               "Built Spring Boot dashboard to visualize logs and alerts in real-time."
//             ]
//           },
//           {
//             title: "GenAI Chatbot API",
//             link: "https://github.com/dayaasaagar/Gen-AI-Chatbot",
//             points: [
//               "Built FastAPI backend with OpenAI GPT, HuggingFace, and FAISS search.",
//               "Delivered domain-specific chatbot experiences using RAG techniques."
//             ]
//           },
//           {
//             title: "Context-Aware Standup Bot for Engineering Teams",
//             link: "#",
//             points: [
//               "Built a Slack-integrated assistant that parses GitHub commits, JIRA updates, and PR activity to auto-generate daily standups using OpenAI GPT-4 and developer metadata.",
//               "Engineered backend services in FastAPI with Redis caching and PostgreSQL storage for sprint-wise summaries.",
//               "Developed a React dashboard for engineers to review, edit, and approve AI-generated standup entries with real-time updates and overrides."
//             ]
//           },
//           {
//             title: "PeopleFirst – Reliance HR App",
//             link: null,
//             points: ["Spring Boot + Angular platform for managing payroll, leave, and reimbursements."]
//           },
//           {
//             title: "Food Delivery App",
//             link: "https://github.com/dayaasaagar/Food-Delivery-App/tree/feature-branch",
//             points: [
//               "MERN stack app for browsing menus, placing orders, and tracking deliveries.",
//               "Integrated POSTMATES API and role-based JWT authentication."
//             ]
//           }
//         ].map((proj, index) => (
//           <Card key={index} className="mb-4 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
//             <CardContent>
//               <h3 className="text-xl font-bold">
//                 {proj.title}
//                 {proj.link !== null && (
//                   <Link href={proj.link || "#"} className="text-blue-600 underline ml-2" target="_blank">
//                     (GitHub)
//                   </Link>
//                 )}
//               </h3>
//               {proj.points ? (
//                 <ul className="list-disc list-inside">
//                   {proj.points.map((pt, i) => <li key={i}>{pt}</li>)}
//                 </ul>
//               ) : (
//                 <p>{proj.points[0]}</p>
//               )}
//             </CardContent>
//           </Card>
//         ))}

//         {showMoreProjects && (
//           <>
//             {[1, 2, 3, 4, 5].map(n => (
//               <Card key={n} className="mb-4 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
//                 <CardContent>
//                   <h3 className="text-xl font-bold">Project {n + 4}</h3>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </>
//         )}

//         <div className="flex justify-center mt-4">
//           <Button 
//             onClick={() => setShowMoreProjects(!showMoreProjects)} 
//             variant="outline" 
//             className="animate-pulse hover:animate-none"
//           >
//             {showMoreProjects ? (
//               <><ChevronUp className="mr-2" /> Show Less</>
//             ) : (
//               <><ChevronDown className="mr-2" /> Show More</>
//             )}
//           </Button>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="my-12 bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold mb-6 text-center">🛠️ Technical Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//           <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"><CardContent><strong>Languages:</strong> Python, Java, SQL, JavaScript, C/C++, PHP, HTML/CSS</CardContent></Card>
//           <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"><CardContent><strong>Frameworks:</strong> Django, Spring Boot, React, Angular, Express</CardContent></Card>
//           <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"><CardContent><strong>DevOps:</strong> Docker, Kubernetes, GitHub Actions, Jenkins</CardContent></Card>
//           <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"><CardContent><strong>Cloud:</strong> AWS (EC2, RDS, S3, CodeDeploy), Azure, GCP</CardContent></Card>
//         </div>
//       </section>
//     </main>
//   );
// }
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
    <main className="p-6 max-w-4xl mx-auto text-gray-900 bg-gradient-to-b from-white via-gray-100 to-[#f3f4f6] min-h-screen">
      {/* Hero */}
      <section className="text-center my-16">
        <h1 className="text-4xl font-bold text-[#232F3E]">Dayasagar Krishnanmani</h1>
        <p className="text-lg mt-4">Software Developer | Cloud Enthusiast | DevOps Engineer</p>
        <div className="flex justify-center gap-4 mt-6">
          <Link href="mailto:dkrishna@syr.edu" className="hover:scale-110 transition-transform duration-300"><Mail /></Link>
          <Link href="https://github.com/dayaasaagar" target="_blank" className="hover:scale-110 transition-transform duration-300"><Github /></Link>
          <Link href="https://linkedin.com/in/kmr-dayaasaagar" target="_blank" className="hover:scale-110 transition-transform duration-300"><Linkedin /></Link>
        </div>
      </section>

      {/* About + Education Toggle */}
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
          <Card className="mb-6 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">About Me</h3>
                <p>
                  I hold a Master’s degree in Computer Science from Syracuse University and bring over 2.5 years of experience in backend development, cloud infrastructure, and DevOps. I thrive in fast-paced environments where customer obsession, ownership, and continuous improvement are valued. I take pride in building scalable, resilient systems that solve real-world problems, and I consistently look for ways to simplify, automate, and deliver high-impact results.
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

      {/* Experience Section */}
      <section className="my-12">
        <h2 className="inline-block text-2xl font-bold px-4 py-2 bg-[#FFEDD5] text-[#FF9900] rounded-full shadow-sm mb-4">
          Experience
        </h2>
        {[{
          title: "Syracuse University - Research Intern",
          duration: "June 2025 – Present",
          points: [
            "Developed GenAI-powered chatbot API with FastAPI, LangChain, and Hugging Face Transformers.",
            "Built RAG-based responses using FAISS vector search and OpenAI GPT models.",
            "Improved ticket resolution by 35% and reduced response time by 50%."
          ]
        }, {
          title: "Valuemomentum – Automation Intern",
          duration: "June 2024 – August 2024",
          points: [
            "Developed 10+ RESTful APIs in Java and Node.js, cutting backend integration time by 40%.",
            "Used LLM-based classification to organize internal tickets and HR documents.",
            "Collaborated with product managers on API specs, saving $8K in engineering costs."
          ]
        }, {
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
            "Developed containerized Spring Boot services for user onboarding and notification dispatch, deployed via Docker oncampus-hosted servers, enabling the platform to handle 5x more student activity during peak demo weeks",
            "Conducted 30+ code reviews, mentored 3 junior developers, and established automated testing practices using JUnit and Mockito, increasing test coverage by 40% and reducing post-deployment bugs by 25%.",
          ]
        }, {
          title: "Jio-British Petroleum – Software Engineer Intern",
          duration: "May 2020 – August 2020",
          points: [
            "Refactored monolithic modules into modular Spring Boot services with layered architecture.",
            "Documented API contracts and CI/CD steps using Swagger and Confluence.",
            "Integrated SonarQube into Jenkins pipelines, increasing test coverage to 85%."
          ]
        }].map((job, index) => (
          <Card key={index} className="mb-4 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300">
            <CardContent>
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.duration}</p>
              <ul className="list-disc list-inside">
                {job.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Skills Section */}
      <section className="my-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#232F3E]">☁️ Cloud & DevOps Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">
            <CardContent>
              <strong>AWS:</strong> EC2, RDS, S3, Lambda, Kinesis, Redshift, CodeDeploy
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">
            <CardContent>
              <strong>Azure:</strong> CI/CD pipelines, resource scaling, cloud monitoring
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">
            <CardContent>
              <strong>Google Cloud Platform (GCP):</strong> Compute Engine, IAM, Cloud Storage (basic)
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300">
            <CardContent>
              <strong>DevOps Tools:</strong> Docker, Kubernetes, Jenkins, GitHub Actions, SonarQube
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
