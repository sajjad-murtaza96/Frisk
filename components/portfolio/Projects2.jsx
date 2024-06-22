"use client";
import { portfolioData4, SHOW_PER_LOAD_MORE } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Projects2() {
  const [threshold, setThresholdValue] = useState(SHOW_PER_LOAD_MORE);

  const handleLoadMore = () => {
    setThresholdValue(threshold + SHOW_PER_LOAD_MORE);
  };

  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {portfolioData4.slice(0, threshold).map((elm, i) => (
            <div key={i} className={elm.parentClass}>
              <Link
                scroll={false}
                href={`/project-details/${elm.id}`}
                className="portfolio-wrap style3"
              >
                <div className="portfolio-thumb">
                  <Image
                    width={2000}
                    height={540}
                    src={elm.imageUrl}
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-details">
                  <ul className="portfolio-meta">
                    <li>{elm.category}</li>
                  </ul>
                  <h3 className="portfolio-title">{elm.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {portfolioData4.length !== portfolioData4.slice(0, threshold).length && (
          <div className="btn-wrap justify-content-center mt-60">
            <button className="btn" onClick={handleLoadMore}>
              <span className="link-effect">
                <span className="effect-1">LOAD MORE</span>
                <span className="effect-1">LOAD MORE</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
