import React, { useState } from "react";
import "./create.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";

const Create = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="create">
      <div className="post-container">
        <div className="post-header">
          <h2>Create new post</h2>
        </div>
        <div className="post-body">
          <div className="image-container">
            {image ? (
              <img src={image} alt="Uploaded" />
            ) : (
              <div className="upload-icon">
                <FontAwesomeIcon icon={faPhotoFilm} />
                <span>Drag photos and videos here</span>
              </div>
            )}
          </div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      </div>
    </div>
  );
};

export default Create;
