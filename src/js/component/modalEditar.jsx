import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const ModalEditar = ({id}) => {
    const { store, actions } = useContext(Context);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(()=> {
        const currentContact = store.contactList.find(item => item.id == id)
        setName(currentContact.name)
        setEmail(currentContact.email)
        setPhone(currentContact.phone)
        setAddress(currentContact.address)
        console.log(currentContact);
    },[id])
    
    return (
        <div className="modal fade" id={"modalEditar-" + id} tabIndex="-1" aria-labelledby="modalEditarLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="modalEditarLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <label htmlFor="fullName" className="col-htmlForm-label">Full Name:</label>
                            <input type="text" value={name} className="htmlForm-control" onChange={(e) => setName(e.target.value, console.log(id))} id="fullName" />
                        </div>
                        <div>
                            <label htmlFor="email" className="col-htmlForm-label">Email:</label>
                            <input type="email" value={email} className="htmlForm-control" onChange={(e) => setEmail(e.target.value)} id="email" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="col-htmlForm-label">Phone:</label>
                            <input type="number" value={phone} className="htmlForm-control" onChange={(e) => setPhone(e.target.value)} id="phone" />
                        </div>
                        <div>
                            <label htmlFor="address" className="col-htmlForm-label">Address:</label>
                            <input type="text" value={address} className="htmlForm-control" onChange={(e) => setAddress(e.target.value)} id="address" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={() => actions.actualizarContacto(id, name, phone, email, address)} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}