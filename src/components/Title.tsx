import React from "react";

const title = () => {
  const points: string[] = ["• Go to home", "• Return home"];

  const points1 = [{ label: "• Go to home" }, { label: "• Return home" }];

  const points2 = ["Go to home", "Return home"];

  const generateTooltip = () => {
    return points2
      .map((point, index) => `${index > 0 ? "\n" : ""}• ${point}`)
      .join("");
  };

  return (
    <div>
      <a
        href="#"
        title="• Go to home
• Return home"
      >
        Home
      </a>
      <div>
        <a href="#" title={points.join("\n")}>
          Home1
        </a>
      </div>
      <div>
        <a href="home" title={points1.map((point) => point.label).join("\n")}>
          Home2
        </a>
      </div>
      <div>
        <a href="#" title={generateTooltip()}>
          Home
        </a>
      </div>
    </div>
  );
};

export default title;
