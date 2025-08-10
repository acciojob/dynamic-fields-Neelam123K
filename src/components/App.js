import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  // Handle change in name or age for a specific field
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  // Add a new empty field
  const handleAdd = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  // Remove a field by index
  const handleRemove = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  // Submit all fields data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleChange(index, e)}
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleChange(index, e)}
            />
            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAdd}>
          Add More..
        </button>
        <button type="submit">Submit</button>
      </form>
      <p>After clicking submit check console for data</p>
    </div>
  );
};

export default App;
