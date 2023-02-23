import React from "react";
import Fields from "../Components/Fields";
import fieldsJSON from "../Components/Fields.json";

export default function Form(props) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {fieldsJSON.map((value) => {
          return (
            <Fields
              key={value.id ? value.id : value.name}
              tagType={value.tagType}
              labelName={value.labelName}
              type={value.type}
              name={value.name}
              id={value.id}
              placeholder={value.placeholder}
            />
          );
        })}
      </form>
    </>
  );
}
