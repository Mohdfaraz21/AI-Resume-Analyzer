import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { resumes } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind " },
    { name: "description", content: "Smart Feedback for Your Resume!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your Applications & Resume Rating</h1>
          <h2>
            Get instant feedback on your resume and track your job applications
            in one place.
          </h2>
        </div>
        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
