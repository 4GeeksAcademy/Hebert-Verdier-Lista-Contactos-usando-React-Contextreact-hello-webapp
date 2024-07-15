import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { ModalEditar } from "./modalEditar.jsx";

export const Card = ({ name, email, phone, address, id }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                {/* CARD, CONTACTOS QUE SE TRAJEROS */}
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Phone: {phone}</p>
                        <p className="card-text">Email: {email}</p>
                        <p className="card-text">Address: {address}</p>
                    </div>
                </div>
                <div>
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={"#modalEditar-" + id}>
                        <i className="fa fa-pen"></i>
                    </button>
                    <ModalEditar id={id} />
                    <button className="btn btn-outline-danger" onClick={() => actions.eliminarContacto(id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Card;