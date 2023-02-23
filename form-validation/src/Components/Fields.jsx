import React from "react";

export default function Fields(props) {
  const { tagType, labelName, type, name, id, placeholder } = props;

  return (
    <>
      <h1>hello</h1>
      {tagType === "input" ? (
        <>
          <label htmlFor={id ? id : name}>{labelName}</label>
          <input
            type={type}
            name={name}
            id={id ? id : name}
            placeholder={placeholder}
          />
        </>
      ) : (
        <>
          <label htmlFor={name}>{labelName}</label>
          <textarea name={name} id={name} placeholder={placeholder}></textarea>
        </>
      )}
    </>
  );
}
