import { AboutHeader } from "@/components/AboutHeader";
import { StatsSection } from "@/components/StatsSection";
import { personalInfo } from "@/data/personalInfo";

export default function AboutMe() {
  return (
    <div className="p-8">
      <AboutHeader />
      <StatsSection />
      <section className="mt-8">
        <h2>Skills</h2>
        <ul>
          <li>Frontend: HTML, CSS, SASS, Tailwind, Bootstrap, JS, TS, React, Next.js, Angular</li>
          <li>Backend: Node.js, PHP, SQL, MySQL, Prisma, PostgreSQL</li>
          {/* Thêm từ CV */}
        </ul>
      </section>
      <section className="mt-8">
        <h2>Education</h2>
        <p>{personalInfo.education}</p>
      </section>
      {/* Thêm work exp, certifications */}
    </div>
  );
}
