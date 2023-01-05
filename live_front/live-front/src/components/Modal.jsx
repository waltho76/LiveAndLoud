import { React, useState } from "react";
import "./Modal.css";


export default function Modal() {
    const [venue, band] = useState([])
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
    setModal(!modal);
    };

console.log(venue)

if (!band) {
  return <h2> Loading Page </h2>
} else{
  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
          INFO
      </button>
      {modal && (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <div className="container">
                <div className="bands">
                    <div key={venue}
                        className="modalCard" >
                        <h2>{band.name}</h2>
                        <img  className="band-img" src={band.photo_url} alt="#"/>                                               
                        <p>{band.genre_name}</p>
                        <p>{band.venue_name}</p>
                        <p></p>
                        <button className="close-modal" onClick={toggleModal}>
                          X
                        </button>
                    </div>
                </div> 
                </div> 
              </div>
        </div>
      )}
    </> 
  );
}
}