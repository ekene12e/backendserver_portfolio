import React, {  useState } from "react";
import "./addexperience.css";
import Nav from "./Nav";


const AddExperience = () => {
  const [formData, setFormData] = useState({
    company_name: "",
            title: "",
            tags: [],
            date: "",
            createdAt: "",
  });
  const [warning, setWarning] = useState(false);
  const [l_tags, setL_tags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length >= 4) {
      setWarning(false);
      const tags = l_tags.split("#");
      console.log(formData)

      fetch("https://portfolio-ekene-40c3fd1f58b7.herokuapp.com/add/experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name: formData.company_name,
          title: formData.title,
          date: formData.date,
          createdAt: Date.now(),
          tags: [...tags],
        }),
      })
        .then((res) => {
          return res.json();
        }).then((data) => alert(`Added successfully`))
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setFormData({
            company_name: "",
            title: "",
            tags: "",
            date: "",
            createdAt: "",
          });
          setL_tags("");
        });
    } else {
      setWarning(true);
    }
  };

  const handleChange = (e, title) => {
    setFormData((prev) => ({ ...prev, [title]: e.target.value }));
  };

  return (
    <>
   
    <div className="ap-wrapper">
    <Nav/>
      <h1>Experience Details</h1>
      <form className="AddExperience">
        <div className="input-group">
          <label htmlFor="company_name">Company Name</label>
          <input
            onChange={(e) => handleChange(e, "company_name")}
            autoComplete="off"
            value={formData.company_name}
            required
            type="text"
            id="comapny_name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="company_name">Role</label>
          <input
            onChange={(e) => handleChange(e, "title")}
            autoComplete="off"
            value={formData.title}
            required
            type="text"
            id="comapny_name"
          />
        </div>
    
        <div className="input-group">
          <label htmlFor="date">From When to When</label>
          <input
            onChange={(e) => handleChange(e, "date")}
            autoComplete="off"
            type="text"
            value={formData.date}
            id="date"
          />
        </div>
        <div className="tags input-group">
          <p>Key Learnings:</p>
          <div className="tech">
            <textarea
              onChange={(e) => setL_tags(e.target.value)}
              placeholder="Enter key learnings each separated by a #"
              type="text"
              className="tag"
              value={l_tags}
            />
          </div>
        </div>
        {warning && <small>textarea all fields</small>}
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};
export default AddExperience;
