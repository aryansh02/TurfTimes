"use client";

import React, { useEffect, useState } from "react";

export default function BentoGrid() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news", {
          headers: {
            "Cache-Control": "no-cache",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        const filteredArticles = data.articles.filter((article) => {
          const hasValidTitle =
            article.title && !article.title.includes("Removed");
          const hasValidImage =
            article.urlToImage && !article.urlToImage.includes("placeholder");
          return hasValidTitle && hasValidImage;
        });

        const displayedArticles = filteredArticles.slice(0, 42);

        setArticles(
          displayedArticles.length > 0
            ? displayedArticles
            : [
                {
                  title: "No relevant Premier League news found at the moment.",
                  urlToImage: "https://via.placeholder.com/300",
                  url: "#",
                },
              ]
        );
      } catch (err) {
        console.error("Error fetching news:", err.message);
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center">Error fetching news: {error}</p>
    );
  }

  return (
    <div className="p-8">
      <div className="bento-grid">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url !== "#" ? article.url : undefined}
            target={article.url !== "#" ? "_blank" : "_self"}
            rel={article.url !== "#" ? "noopener noreferrer" : undefined}
            className={`bento-item ${
              index % 6 === 0 ? "large" : index % 3 === 0 ? "medium" : "small"
            }`}
            style={{
              backgroundImage: `url(${
                article.urlToImage || "https://via.placeholder.com/300"
              })`,
            }}
          >
            <div className="overlay">
              <h3 className="text-white text-lg font-semibold">
                {article.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
