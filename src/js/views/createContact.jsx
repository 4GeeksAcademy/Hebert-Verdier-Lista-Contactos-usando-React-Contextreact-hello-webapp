import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CreateContact = () => {
    // ESTADOS - VARIABLES	
    const { store, actions } = useContext(Context);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputFullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="exampleInputFullName" aria-describedby="emailHelp" placeholder='Full name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputMail" className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputMail" placeholder='Email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
                    <input type="number" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} id="exampleInputPhone" placeholder='Phone' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} id="exampleInputAddress" placeholder='Address' />
                </div>
                <button type="submit" className="btn btn-primary" onClick={() => actions.agregarContacto(name, phone, email, address)}>Submit</button>
            </form>
            <Link to='/'>Ver Contactos</Link>
        </div>
    );
}