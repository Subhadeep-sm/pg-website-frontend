import { useEffect } from "react";

function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="my-8">
      <div className="elfsight-app-188f6124-2d9d-4cf0-94ab-bf9e59a16237"></div>
    </div>
  );
}

export default GoogleReviews;