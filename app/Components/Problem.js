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
  paragraph: "mt-8 text-lg text-gray-600 leading-relaxed",
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
  const [displayedParagraph2, setDisplayedParagraph2] = useState("");

  const subheading =
    "Unveiling the gaps in genomic research and data accessibility";
  const paragraph1 = `
  Genomic data holds the key to understanding our health, ancestry,
  and so much more. But right now, accessing that information feels
  like hunting for treasure in a maze—scattered databases,
  complicated tools, and limited collaboration make it frustrating
  and inefficient for anyone trying to make sense of it all,
  especially for beginners. This discourages many people from
  choosing a field that could make or break our future as a species.`;
  const paragraph2 = `
  is here to change the game. We’re creating a user-friendly
  platform that brings everything together: clean data, intuitive
  tools, and a collaborative space for researchers and enthusiasts
  alike. No more dead ends, just seamless exploration and discovery. 
  Don't get me wrong, we don't intend to replace, we intend to bridge the gap.`;

  useEffect(() => {
    const animateText = async () => {
      await typeWriter(subheading, setDisplayedSubheading, 10);
      await typeWriter(paragraph1, setDisplayedParagraph1, 1);
      await typeWriter(paragraph2, setDisplayedParagraph2, 1);
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
            <p className={styles.paragraph}>{displayedParagraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;