import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoie une requête POST vers le service de création de posts
      await axios.post(`${process.env.REACT_APP_POSTS_SERVICE_URL}/posts`, {
        title,
      });

      // Réinitialise le champ de titre après la soumission
      setTitle("");
    } catch (error) {
      console.error("Error submitting post:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
