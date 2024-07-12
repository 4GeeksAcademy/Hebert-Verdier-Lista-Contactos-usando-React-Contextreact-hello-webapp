import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CreateContact = () => {
    // ESTADOS - VARIABLES	
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({ name: '', email: '', phone: '', address: '' });

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value }, console.log(contact))} id="exampleInputFullName" aria-describedby="emailHelp" placeholder='full name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMail" className="form-label">Email</label>
                    <input type="email" className="form-control" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} id="exampleInputMail" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="number" className="form-control" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} id="exampleInputPhone" placeholder='Phone' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" value={contact.address} onChange={(e) => setContact({ ...contact, address: e.target.value }, console.log(contact))} id="exampleInputAddress" placeholder='Address' />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => actions.agregarContacto(contact)}>Submit</button>
            </form>
        </div>
    );
}