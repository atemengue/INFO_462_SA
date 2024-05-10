import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envoie une requête POST vers le service de création de commentaires pour un post spécifique
      await axios.post(`${process.env.REACT_APP_COMMENTS_SERVICE_URL}/posts/${postId}/comments`, {
        content,
      });

      // Réinitialise le champ de contenu après la soumission
      setContent("");
    } catch (error) {
      console.error("Error submitting comment:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
