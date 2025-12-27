import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
