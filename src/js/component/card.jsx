import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = ({ item1, index1 }) => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({ name: '', email: '', phone: '', address: '' });


    return (
        <li key={index1}>

            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    {/* CARD, CONTACTOS QUE SE TRAJEROS */}
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item1.name}</h5>
                            <p className="card-text">Phone: {item1.phone}</p>
                            <p className="card-text">Email: {item1.email}</p>
                            <p className="card-text">Address: {item1.address}</p>
                        </div>
                    </div>
                    {/* BOTON EDITAR CON MODAL */}
                    <div>
                        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i className="fa fa-pen"></i>
                        </button>
                        {/* MODAL DE EDITAR */}
                        <div className="modal fade" id="exampleModal" tabIndex1="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modificar Contacto</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    {/* INPUTS DEL MODAL */}
                                    <div className="modal-body d-flex flex-column">
                                        <label htmlFor="exampleInputName" className="form-label">Name:</label>
                                        <input type="" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value }, console.log(contact))} />

                                        <label htmlFor="exampleInputEmail" className="form-label">Email:</label>
                                        <input type="" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value }, console.log(contact))} />

                                        <label htmlFor="exampleInputPhone" className="form-label">Phone:</label>
                                        <input type="" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value }, console.log(contact))} />

                                        <label htmlFor="exampleInputAddress" className="form-label">Address:</label>
                                        <input type="" value={contact.address} onChange={(e) => setContact({ ...contact, address: e.target.value }, console.log(contact))} />

                                    </div>
                                    {/* BOTONES CERRAS Y GUARDAR */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" data-bs-dismiss="modal" onClick={() => actions.actualizarContacto(item1.id, contact)} className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* BOTON ELIMINAR CONTACTO */}
                        <button className="btn btn-outline-danger" onClick={() => actions.eliminarContacto(item1.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}