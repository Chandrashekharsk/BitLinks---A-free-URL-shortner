"use client";
import React from "react";

const Shorten = () => {
  const [url, setUrl] = React.useState("");
  const [shortUrl, setShortUrl] = React.useState("");
  const [generated, setGenerated] = React.useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shortUrl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("");
        setShortUrl("");
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
      })
      .catch((error) => console.error(error));
    
  };

  return (
    <div className="max-w-lg mx-auto bg-purple-100 my-18 p-8 rounded-lg hover:bg-purple-200">
      <h1 className="font-bold text-2xl text-center">
        Generate your short URLs
      </h1>
      <div className="flex flex-col gap-5 mt-4">
        <input
          type="text "
          className="px-4 py-2 focus:outline-purple-600 bg-white text-black"
          placeholder="Enter your URL"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <input
          type="text "
          className="px-4 py-2 focus:outline-purple-600 bg-white text-black"
          placeholder="Enter your preferred short URL text"
          onChange={(e) => setShortUrl(e.target.value)}
          disabled={generated}
          value={shortUrl}
        />
        <button
          onClick={generate}
          className="font-bold text-white bg-purple-500 rounded-2xl py-1 shadow-lg p-3"
        >
          Generate
        </button>
      </div>
      {generated && (
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold">Your Shortened URL:</p>
          <a
            href={generated}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            {generated}
          </a>
        </div>
      )}
    </div>
  );
};

export default Shorten;
