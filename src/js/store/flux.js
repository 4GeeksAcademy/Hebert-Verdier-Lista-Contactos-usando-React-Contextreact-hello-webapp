const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactList: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//AGREGAR CONTACTO
			agregarContacto: (contact) => {
				fetch('https://playground.4geeks.com/contact/agendas/HSimonVS/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"name": contact.name,
						"phone": contact.phone,
						"email": contact.email,
						"address": contact.address

					})
				})
					.then((response) => {
						console.log(response);
						if (response.status === 201) {
							traerTareas()
						}
						return response.json()
					})

					.then((data) => console.log(data))
					.catch((error) => console.log(error))
			},
			// ACTUALIZAR CONTACTO
			actualizarContacto: (id, contact) => {
				fetch(`https://playground.4geeks.com/contact/agendas/HSimonVS/contacts/${id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						"name": contact.name,
						"phone": contact.phone,
						"email": contact.email,
						"address": contact.address

					})
						.then((response) => {
							if (response.status === 200) {
								traerContactos()
							}
							return response.json()
						})
						.then((data) => console.log(data))
						.catch((error) => console.log(error))
				})
			},
			//TRAER CONTACTOS
			traerContactos: () => {
				const actions = getActions(); // actions.changeColor()

				fetch('https://playground.4geeks.com/contact/agendas/HSimonVS/contacts', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => {
						if (response.status == '404') {
							// crearAgenda()
							console.log('no se obtuvo la agenda');
							return [];
						}
						return response.json()
					})
					.then((data) => setStore({ contactList: data.contacts }))
					.catch((error) => console.log(error))
			},
			// ELIMINAR CONTACTO
			eliminarContacto: (id) => {
				const store = getStore();
				fetch(`https://playground.4geeks.com/contact/agendas/HSimonVS/contacts/${id}`, {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					},
				})
					.then((response) => {
						console.log(response);
						if (response.status === 404) {
							return false;
						}
						if (response.ok) {
							return response;
						}
					})
					.then((data) => {
						if (data) {
							const newArray = store.contactList.filter(item => item.id != id)
							setStore({ contactList: newArray })
						}
					})
					.catch((error) => console.log(error))
			},
		}
	};
};

export default getState;
