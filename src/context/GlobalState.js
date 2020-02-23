import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';
//initial state

const initialState = {
	transactions: [
		{ id: 1, text: 'Flower', amount: -20 },
		{ id: 2, text: 'Salary', amount: 300 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 },
		{ id: 5, text: 'Freelance', amount: 200 }
	]
};

//Global Context
export const GlobalContext = createContext(initialState);

//Provide Component
export const GlobalProvider = ({ children }) => {
	console.log(children);
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
