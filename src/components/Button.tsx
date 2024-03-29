import React from "react";

const downloadDocument = () => {
  const element = document.createElement("a");
  const file = new Blob(["Sample Word Document"], {
    type: "application/msword",
  });
  element.href = URL.createObjectURL(file);
  element.download = "sample.docx";
  document.body.appendChild(element);
  element.click();
};

const Button = () => {
  return (
    <div>
      <button onClick={downloadDocument}>Download Word Document</button>
    </div>
  );
};

export default Button;
