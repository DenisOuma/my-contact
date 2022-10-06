import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	SET_ALERT,
	REMOVE_ALERT,
} from "../types";

const ContactState = (props) => {
	const initialState = {
		contacts: [],
		current: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	const addContact = (contact) => {
		contact.id = uuid();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};
	const deleteContact = (id) => {
		dispatch({ type: DELETE_CONTACT, payload: id });
	};

	const setCurrentContact = (contact) => {
		dispatch({ type: SET_CURRENT, payload: contact });
	};

	const clearContact = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	const updateContact = (contact) => {
		dispatch({ type: UPDATE_CONTACT, payload: contact });
	};

	return (
		<contactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				addContact,
				deleteContact,
				setCurrentContact,
				clearContact,
				updateContact,
			}}
		>
			{props.children}
		</contactContext.Provider>
	);
};

export default ContactState;
