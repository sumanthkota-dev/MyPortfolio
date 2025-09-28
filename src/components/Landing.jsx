import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Landing() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
    { name: "GitHub", href: "https://github.com/yourprofile", icon: <FaGithub /> },
    { name: "Twitter", href: "https://twitter.com/yourprofile", icon: <FaTwitter /> },
  ];

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-8 md:px-20 gap-16 bg-gray-50 dark:bg-black">
      
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6">
        {/* Profile Image */}
        <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/hero.png"
            alt="Profile"
            width={192}
            height={192}
            className="object-cover"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          John Doe
        </h1>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px bg-gray-300 dark:bg-gray-600 h-80" />

      {/* Right Side */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6 max-w-lg text-center md:text-left">
        {/* About Me */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I am a Full-Stack Developer passionate about building modern, responsive, and user-friendly web applications.
          I specialize in React, Next.js, Tailwind CSS, and Node.js.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <button
            onClick={() => window.location.href="/resume.pdf"}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Resume
          </button>

          <button
            onClick={() => window.location.href="/portfolio"}
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
          >
            Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
