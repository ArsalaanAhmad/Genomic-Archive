"use client";

import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const styles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
  headingContainer: "max-w-md mx-auto text-center",
  heading: "text-3xl font-bold text-gray-900",
  subHeading: "mt-4 text-base font-medium text-gray-500",
  grid: "grid grid-cols-1 mt-12 gap-x-6 gap-y-10 sm:mt-16 lg:mt-20 sm:grid-cols-2 lg:grid-cols-4",
  phaseContainer: "mt-6 overflow-hidden bg-white rounded-lg",
  phaseContent: "px-4 py-5 sm:p-6",
  phaseTitle: "text-sm font-semibold tracking-wide text-gray-400 uppercase",
  phaseSubtitleContainer: "relative mt-2",
  phaseSubtitleLine: "absolute inset-0 flex items-center",
  phaseSubtitleTextContainer: "relative flex justify-start",
  phaseSubtitle: "pr-5 text-xl font-bold text-gray-900 bg-gray-50",
  iconContainer: "flex items-center",
  icon: "w-5 h-5 text-gray-900 shrink-0",
  completedIcon: "w-5 h-5 text-purple-600 shrink-0", // Purple for completed tasks
  textBase: "ml-2 text-base font-medium text-gray-900",
};

const roadmapPhases = [
  {
    title: "Phase 1",
    name: "Planning & Research",
    tasks: [
      "Define Project Goals",
      "Conduct Market Research",
      "Explore Genomic APIs and Data Sources",
      "Finalize Feature List",
      "Create Initial Wireframes",
      "Set Up Collaboration Tools",
    ],
    completedTasks: [
      "Define Project Goals",
      "Conduct Market Research",
      "Explore Genomic APIs and Data Sources",
      "Finalize Feature List",
    ],
  },
  {
    title: "Phase 2",
    name: "Development Kickoff",
    tasks: [
      "Set Up Next.js Environment",
      "Integrate Tailwind CSS",
      "Design Landing Page",
      "Implement Core Components",
      "Build API Connections",
      "Develop Basic Search Features",
    ],
    completedTasks: [
      "Set Up Next.js Environment",
      "Integrate Tailwind CSS",
      "Design Landing Page",
    ],
  },
  {
    title: "Phase 3",
    name: "Feature Expansion",
    tasks: [
      "Enhance Search Capabilities",
      "Add Advanced Filters",
      "Develop Comparison Tools",
      "Integrate User Accounts",
      "Implement Interactive Visualizations",
      "Begin Testing",
    ],
    completedTasks: [],
  },
  {
    title: "Phase 4",
    name: "Pre-Launch & Feedback",
    tasks: [
      "Conduct Internal Testing",
      "Collect Feedback from Test Users",
      "Fix Bugs & Refine Features",
      "Create User Documentation",
      "Plan Marketing Campaign",
      "Prepare for Launch",
    ],
    completedTasks: [],
  },
  {
    title: "Phase 5",
    name: "Launch & Post-Launch",
    tasks: [
      "Launch the Website",
      "Monitor Performance",
      "Collect User Feedback",
      "Add New Features Based on Feedback",
      "Optimize for Scalability",
      "Collaborate with Genomic Research Partners",
    ],
    completedTasks: [],
  },
];

const Development = () => {
  const slideInVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="Roadmap" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h2 className={styles.heading}>Full Roadmap</h2>
          <p className={styles.subHeading}>
            Follow our detailed project roadmap to see how we bring The Genomic Archive to life.
          </p>
        </div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {roadmapPhases.map((phase, index) => (
            <motion.div
              key={index}
              variants={slideInVariants}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <p className={styles.phaseTitle}>{phase.title}</p>
              <div className={styles.phaseSubtitleContainer}>
                <div className={styles.phaseSubtitleLine} aria-hidden="true">
                  <div className="w-full border-t border-gray-300 border-dashed"></div>
                </div>
                <div className={styles.phaseSubtitleTextContainer}>
                  <span className={styles.phaseSubtitle}>{phase.name}</span>
                </div>
              </div>

              <div className={styles.phaseContainer}>
                <div className={styles.phaseContent}>
                  <ul className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className={styles.iconContainer}>
                        {phase.completedTasks.includes(task) ? (
                          <FaCircleCheck className={styles.completedIcon} />
                        ) : (
                          <FaRegCircle className={styles.icon} />
                        )}
                        <span className={styles.textBase}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Development;