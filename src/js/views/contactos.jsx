import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/card.jsx"

export const Contactos = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.traerContactos()
    }, [])

    return (
        <div>
            <Link to={"/createContact"}>
                <button className="btn btn-primary">Crear nuevo contacto</button>
            </Link >
            {store.contactList.length > 0 ?
                store.contactList.map((item, index) => (
                    <Card
                        key={index}
                        name={item.name}
                        email={item.email}
                        phone={item.phone}
                        address={item.address}
                        id={item.id}
                    />
                ))
                : <p>No hay contactos</p>
            }
        </div>
    );
}