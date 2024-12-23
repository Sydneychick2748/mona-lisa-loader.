import React, { useState } from "react";
import "./MyImage.css";

const MyImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageLoad = () => {
    setUploading(false); // Stop loading animation
    setTimeout(() => {
      setIsLoaded(true); // Mark the image as loaded after a slight delay
      setMessage("Loading Complete!");
    }, 1000); // Add slight delay for opacity transition visibility
  };

  const handleUpload = (event) => {
    if (event.target.files.length > 0) {
      setShowModal(false); // Close the modal
      setUploading(true); // Start loading animation
      setShowImage(true); // Show the Mona Lisa image
      setMessage("Loading..."); // Show loading message
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="image-container">
      {/* Upload Button */}
      <button onClick={openModal} className="upload-button">
        Upload File
      </button>

      {/* Modal for Upload */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Upload File</h3>
            <input type="file" onChange={handleUpload} />
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Loading Message */}
      {showImage && <p className="loading-message">{message}</p>}

      {/* Mona Lisa Image */}
      {showImage && (
        <img
          src="/image/Mona_Lisa.jpg"
          alt="Mona Lisa"
          className={`mona-lisa ${uploading ? "loading" : isLoaded ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
      )}
    </div>
  );
};

export default MyImage;
