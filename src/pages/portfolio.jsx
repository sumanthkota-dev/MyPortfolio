import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Portfolio.module.css";
import skillsData from '../data/skills.js';
import experiences from "../data/experience";
import projects from "../data/projects";
import contact from "../data/contact";
import education from "../data/education";
import aboutMe from "../data/aboutme";


export default function Portfolio() {
  // Track multiple expanded cards
  const [expandedExpIds, setExpandedExpIds] = useState(new Set());
  const [expandedProjIds, setExpandedProjIds] = useState(new Set());

  const toggleExp = (id) => {
    setExpandedExpIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const toggleProj = (id) => {
    setExpandedProjIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  return (
    <>
      <Head>
        <title>Sumanth Kota | Portfolio</title>
      </Head>

      <main className={styles.pageWrapper}>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.name}>Sumanth Kota</h1>
            <p className={styles.about}>{aboutMe}</p>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.profilePicContainer}>
              <Image
                src="/images/hero.png"
                alt="Hero"
                fill
                style={{ objectFit: "cover", borderRadius: "8px" }}
                sizes="(max-width: 768px) 200px, 320px"
                priority
              />
            </div>
          </div>
        </section>


        {/* SKILLS */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>

          {/* General Skills */}
          <div className={styles.skillsGrid}>
            {skillsData.skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                {skill}
              </div>
            ))}
          </div>

          {/* Technologies */}
          {Object.entries(skillsData.technologies).map(([category, techList], idx) => (
            <div key={idx} className={styles.techCategory}>
              <h3 className={styles.techCategoryTitle}>{category}</h3>
              <div className={styles.skillsGrid}>
                {techList.map((tech, i) => (
                  <div key={i} className={styles.skillCard}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Tools */}
          <div className={styles.techCategory}>
            <h3 className={styles.techCategoryTitle}>Tools</h3>
            <div className={styles.skillsGrid}>
              {skillsData.tools.map((tool, i) => (
                <div key={i} className={styles.skillCard}>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          <div className={styles.cardGrid}>
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`${styles.card} ${expandedExpIds.has(exp.id) ? styles.expandedCard : ""}`}
                onClick={() => toggleExp(exp.id)}
              >
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardSub}>
                  {exp.company} | {exp.startDate}
                </p>
                {expandedExpIds.has(exp.id) && (
                  <div className={styles.cardDesc}>
                    <p><strong>Location:</strong> {exp.location}</p>
                    <p><strong>Skills:</strong> {exp.skills.join(", ")}</p>
                    <p><strong>Tools:</strong> {exp.tools.join(", ")}</p>
                    <p><strong>Technologies:</strong> {exp.technologies.join(", ")}</p>
                    <ul>
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <div className={styles.cardGrid}>
            {projects.map((proj) => (
              <div
                key={proj.id}
                className={`${styles.card} ${expandedProjIds.has(proj.id) ? styles.expandedCard : ""}`}
                onClick={() => toggleProj(proj.id)}
              >
                <h3 className={styles.cardTitle}>{proj.title}</h3>

                {/* Expanded content */}
                {expandedProjIds.has(proj.id) && (
                  <div className={styles.cardDesc}>
                    {/* Meta info */}
                    {proj.status && <p><strong>Status:</strong> {proj.status}</p>}
                    {proj.technologies?.length > 0 && (
                      <p><strong>Technologies:</strong> {proj.technologies.join(", ")}</p>
                    )}
                    {proj.skills?.length > 0 && (
                      <p><strong>Skills:</strong> {proj.skills.join(", ")}</p>
                    )}
                    {proj.tools?.length > 0 && (
                      <p><strong>Tools:</strong> {proj.tools.join(", ")}</p>
                    )}
                    {proj.githubLink && (
                      <p>
                        <strong>GitHub:</strong>{" "}
                        <a href={proj.githubLink} target="_blank" rel="noopener noreferrer">
                          {proj.githubLink}
                        </a>
                      </p>
                    )}
                    {proj.liveLink && (
                      <p>
                        <strong>Live:</strong>{" "}
                        <a href={proj.liveLink} target="_blank" rel="noopener noreferrer">
                          {proj.liveLink}
                        </a>
                      </p>
                    )}

                    {/* Description as paragraph */}
                    {proj.description && (
                      <p className={styles.projectDescription}>{proj.description}</p>
                    )}

                    {/* Details as bullet points */}
                    {proj.details?.length > 0 && (
                      <ul className={styles.projectDetails}>
                        {proj.details.map((detail, i) => (
                          <li key={`detail-${i}`}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* Collapsed preview */}
                {!expandedProjIds.has(proj.id) && (
                  <p className={styles.cardSub}>{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>



        {/* EDUCATION */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationList}>
            {education.map((edu) => (
              <div key={edu.id} className={styles.educationItem}>
                <p className={styles.eduDegree}>{edu.degree}</p>
                <p className={styles.eduInstitution}>
                  {edu.institution} | <span className={styles.eduYear}>{edu.endYear}</span>
                </p>
                <p className={styles.eduGrade}>{edu.grade}</p>
                <p className={styles.eduLocation}>{edu.location}</p>
              </div>
            ))}
          </div>
        </section>


        {/* CONTACT */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contactChips}>
            {contact.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactChip}
              >
                {c.type}: {c.value}
              </a>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
