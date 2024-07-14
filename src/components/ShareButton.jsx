import React from "react";

const ShareButton = ({ speed }) => {
  const handleShare = () => {
    const currentURL = window.location.href;
    const shareURL = `${currentURL}?speed=${speed}`;
    navigator.clipboard.writeText(shareURL);
    alert("URL copied to clipboard!");
  };

  return (
    <button
      onClick={handleShare}
      className="mt-4 w-full h-12 bg-orange-500 text-white p-2 rounded-3xl lg:max-w-md"
    >
      Share
    </button>
  );
};

export default ShareButton;
