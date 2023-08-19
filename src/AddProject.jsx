import React, { useContext, useEffect, useRef, useState } from "react";
import "./addproject.css";
import Nav from "./Nav";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import App from "./App";

const AddProject = () => {
  const { auth, handleLogin, err } = useContext(AuthContext);
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    tags: "",
    source_code_link: "",
    createdAt: "",
  });


  const [warning, setWarning] = useState(true);
  const [pic, setPic] = useState(undefined);
  const [l_tags, setL_tags] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const imgRef = useRef();
  let I_url = "";

  useEffect(() => {
    formData.name && formData.description && formData.source_code_link && l_tags
      ? setWarning(false)
      : setWarning(true);
    //console.log("ran code");
  }, [formData, l_tags]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!warning) {
      try {
        const tags = l_tags.split("#");
        await handlePicUpload();
        // const res = await fetch(
        //   "https://portfolio-ekene-40c3fd1f58b7.herokuapp.com/add/project",
        //   {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       name: formData.name,
        //       description: formData.description,
        //       image: I_url,
        //       source_code_link: formData.source_code_link,
        //       createdAt: Date.now(),
        //       tags: tags,
        //     }),
        //   }
        // );
        // const data = await res.json();

        const s = await axios.post('http://localhost:3000/add/project',{
          name: formData.name,
          description: formData.description,
          image: I_url,
          source_code_link: formData.source_code_link,
          createdAt: Date.now(),
          tags: tags,
        })
       //console.log(s)
        alert(`${s.data.name} added successfully`);
        // window.location.reload();
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setFormData({
          name: "",
          description: "",
          tags: "",
          source_code_link: "",
          createdAt: "",
        });
        setL_tags("");
        setPic(null);
        imgRef.current.value = ''
      }
    }
  };

  const handleChange = (e, title) => {
    setFormData((prev) => ({ ...prev, [title]: e.target.value }));
  };

  const handlePicUpload = async () => {
    const data = await new FormData();
    data.append("file", pic);
    data.append("upload_preset", "portfolio");
    console.log(data);
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/detksfdpn/image/upload",
        data
      );
      await setImgUrl(uploadRes.data.url);
      console.log(uploadRes.data.url);

      I_url = uploadRes.data.url;
    } catch (error) {
      console.log(error);
    }
  };
  const n = true
  return (
    <>

    { auth ? <div className="ap-wrapper">
      <Nav />
      <h1>Project Details</h1>
      <form className="addproject">
        <div className="input-group">
          <label htmlFor="name">Project Name</label>
          <input
            onChange={(e) => handleChange(e, "name")}
            autoComplete="off"
            value={formData.name}
            required
            type="text"
            id="name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="image">Image </label>
          <input
            autoComplete="off"
            required
            ref={imgRef}
            onChange={(e) => setPic(e.target.files[0])}
            type="file"
            id="image"
          />
        </div>
        <div className="input-group">
          <label htmlFor="source_code_link">Link to project Demo</label>
          <input
            onChange={(e) => handleChange(e, "source_code_link")}
            autoComplete="off"
            type="text"
            value={formData.source_code_link}
            id="source_code_link"
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Project description</label>
          <textarea
            onChange={(e) => handleChange(e, "description")}
            autoComplete="off"
            type="textArea"
            value={formData.description}
            id="description"
          />
        </div>
        <div className="tags input-group">
          <p>Technologies used:</p>
          <div className="tech">
            <input
              onChange={(e) => setL_tags(e.target.value)}
              placeholder=" Name each technology seperated by #"
              type="text"
              className="tag"
              value={l_tags}
            />
          </div>
        </div>
        {warning && <small>Input all fields</small>}
        <button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </button>
      </form>
    </div>
    : <App/>
}
    </>
  );
};
export default AddProject;
