"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ExternalLink = ({ url }) => {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await axios.get(url);
        const html = response.data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const metaTags = doc.querySelectorAll('meta[property^="og:"]');
        const extractedMetadata = {};

        metaTags.forEach((element) => {
          const property = element.getAttribute("property").replace("og:", "");
          const content = element.getAttribute("content");
          extractedMetadata[property] = content;
        });

        setMetadata(extractedMetadata);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };

    fetchMetadata();
  }, [url]);

  if (!metadata) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news-box">
      <div className="img">
        {metadata.image && <img src={metadata.image} alt={metadata.title} />}
      </div>
      <div className="blog-content">
        <h1>{metadata.title}</h1>
        <p>{metadata.description}</p>
        <p>
          Read more at: <a href={url}>{url}</a>
        </p>
      </div>
    </div>
  );
};

export default ExternalLink;
