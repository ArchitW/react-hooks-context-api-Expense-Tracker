import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	console.log(transactions);
	return (
		const sum = transactions.map(tra => tra.amount)

		<div>
			<h4>Your Balance</h4>
			<h1>$0.00</h1>
		</div>
	);
};
