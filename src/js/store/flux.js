const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [],
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
			//CREAR AGENDA
			crearAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/HSimonVS', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
				})
					.then((response) => {
						console.log(response);
						return response.json()
					})

					.then((data) => console.log(data))
					.catch((error) => console.log(error))
			},
			//AGREGAR CONTACTO
			agregarContacto: (name, phone, email, address) => {
				if (name != '', phone != '', email != '', address != '') {
					fetch('https://playground.4geeks.com/contact/agendas/HSimonVS/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address

						})
					})
						.then((response) => {
							console.log(response);
							return response.json()
						})

						.then((data) => console.log(data))
						.catch((error) => console.log(error))
				}
			},

			// ACTUALIZAR CONTACTO
			actualizarContacto: (id, name, phone, email, address) => {
				let actions = getActions();
				if (name != '', phone != '', email != '', address != '') {
					fetch(`https://playground.4geeks.com/contact/agendas/HSimonVS/contacts/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address
						})
					})
						.then((response) => {
							console.log(response);
							if (response.status === 200) {
								actions.traerContactos()
							}
							return response.json()
						})

						.then((data) => console.log(data))
						.catch((error) => console.log(error))
				}
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
							actions.crearAgenda()
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
