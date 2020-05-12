import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Publish = ({ user }) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("file", file);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title && description && price && file) {
      try {
        setIsLoading(true);
        const response = await axios.post(
          "https://leboncoin-api.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              Authorization: "Bearer " + user,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setIsLoading(false);
        const id = response.data._id;
        history.push(`/offer/${id}`);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      alert("All fields must be filled !");
    }
  };

  return (
    <div className="content publish" onSubmit={handleSubmit}>
      <div>Déposer une annonce</div>
      <form className="form-publish">
        <span>Titre de l'annonce *</span>
        <input
          className="field"
          type="text"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <span>Texte de l'annonce *</span>
        <textarea
          className="description"
          name="description"
          value={description}
          rows="5"
          cols="30"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <span>Prix en € *</span>
        <input
          className="price"
          type="number"
          name="price"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <span>Photo *</span>
        <input
          className="file"
          type="file"
          name="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        <input
          className="submit-button"
          type="submit"
          disabled={isLoading ? true : false}
          value="Valider"
        />
      </form>
    </div>
  );
};

export default Publish;
