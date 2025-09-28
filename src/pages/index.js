import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../styles/Landing.module.css";
import aboutMe from "../data/aboutme";
import Head from 'next/head';

<Head>
  <title>Sumanth Kota | Software Engineer Portfolio</title>
  <meta name="description" content="Portfolio of Sumanth Kota, specializing in Spring Boot, Flutter, and full-stack development." />
  <meta name="keywords" content="Spring Boot, Flutter, Java, Backend Development, Portfolio, Software Engineer" />
  <meta name="author" content="Sumanth Kota" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

export default function Landing() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sumanthkota-dev/", icon: <FaLinkedin /> },
    { name: "GitHub", href: "https://github.com/sumanthkota-dev", icon: <FaGithub /> },
  ];

  return (
    <section className={styles.container}>
      {/* Left Side */}
      <div className={styles.left}>
        <Image src="/images/hero.png" alt="Profile" width={200} height={200} />
        <h1>Sumanth Kota</h1>

        <button
          className={styles.emailButton}
          onClick={() => (window.location.href = "mailto:sumanthkota333@gmail.com")}
        >
          Email Me
        </button>

        <div className={styles.socialIcons}>
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        <h2>About Me</h2>
        <p>{aboutMe}</p>

        <div className={styles.actionButtons}>
          <a href="/SumanthKota_Resume-MicroservicesDeveloper.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>
            Resume
          </a>
          <Link href="/portfolio" className={styles.button}>
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
