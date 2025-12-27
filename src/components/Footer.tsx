import { personalInfo } from "@/data/personalInfo";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-3">
        <div>
          <h3 className="text-xl font-bold">Nguyễn Khánh Duy</h3>
          <p>Frontend Developer building beautiful web experiences.</p>
          {/* Social icons */}
          <div className="flex space-x-2">
            <a href={personalInfo.github} target="_blank">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank">
              LinkedIn
            </a>
            <a href={personalInfo.instagram} target="_blank">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h3>EXPLORE</h3>
          <ul>
            <li>Posts</li>
            <li>Projects</li>
            <li>About Me</li>
            <li>Resume</li>
          </ul>
        </div>
        <div>
          <h3>CONTACT</h3>
          <p>☎ {personalInfo.phone}</p>
          <p>✉ {personalInfo.email}</p>
        </div>
      </div>
      <p className="text-center mt-4">© 2025 Nguyễn Khánh Duy. All rights reserved.</p>
    </footer>
  );
};
