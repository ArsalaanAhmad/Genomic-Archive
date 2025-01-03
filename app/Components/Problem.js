"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DNA2 from "/public/DNA2.webp";

const styles = {
  section: "py-12 bg-gray-50 sm:py-16 lg:py-20",
  container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-6xl",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
  textContainer: "text-left",
  heading: "text-4xl font-bold text-gray-900 sm:text-5xl",
  subheading: "mt-4 text-lg text-gray-700",
  paragraph: "mt-8 text-base text-gray-600 leading-relaxed",
  bulletList: "mt-8 list-disc list-inside text-base text-gray-600",
  imageContainer: "w-full flex justify-center lg:justify-start",
};

// Helper function for the typewriter effect
const typeWriter = async (text, setText, delay = 3) => {
  for (let i = 0; i <= text.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, delay));
    setText(text.substring(0, i));
  }
};

const Problem = () => {
  const [displayedSubheading, setDisplayedSubheading] = useState("");
  const [displayedParagraph1, setDisplayedParagraph1] = useState("");
  const [displayedBulletPoints, setDisplayedBulletPoints] = useState([]);

  const subheading =
    "Unveiling the gaps in genomic research and data accessibility";
  const paragraph1 =
    "Genomic data holds the key to understanding our health, ancestry, and so much more. But right now, accessing that information feels like hunting for treasure in a maze—scattered databases, complicated tools, and limited collaboration make it frustrating and inefficient for anyone trying to make sense of it all, especially for beginners. This discourages many people from choosing a field that could make or break our future as a species.";
  const bulletPoints = [
    "Research by EMBL-EBI reveals that over 60% of researchers face issues locating relevant genetic datasets due to non-standardized formats and fragmented storage locations.",
    "Delays in finding actionable genetic data reportedly slow down research timelines by 30%–50% in pharmaceutical research.",
  ];

  useEffect(() => {
    const animateText = async () => {
      await typeWriter(subheading, setDisplayedSubheading, 10);
      await typeWriter(paragraph1, setDisplayedParagraph1, 1);
      for (const point of bulletPoints) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setDisplayedBulletPoints((prev) => [...prev, point]);
      }
    };
    animateText();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer}>
            <Image
              src={DNA2}
              alt="Genomic research visualization"
              width={650}
              height={700}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>The Problem We're Solving</h2>
            <p className={styles.subheading}>{displayedSubheading}</p>
            <p className={styles.paragraph}>{displayedParagraph1}</p>
            <ul className={styles.bulletList}>
              {displayedBulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
