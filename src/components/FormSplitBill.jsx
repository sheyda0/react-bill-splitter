import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
	const [bill, setBill] = useState('');
	const [paidByUser, setPaidByUser] = useState('');
	const [whoIsPaying, setWhoIsPaying] = useState('user');
	const paidByFriend = bill ? bill - paidByUser : '';

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!bill || !paidByUser) return;
		onSplitBill(whoIsPaying == 'user' ? paidByFriend : -paidByUser);
	};

	return (
		<form
			className="bg-orange-200 p-8 rounded-md md:ml-10 md:mt-0 mt-10 flex flex-col items-end"
			onSubmit={handleSubmit}>
			<h2 className="uppercase font-bold text-xl mb-6">
				split a bill with {selectedFriend.name}
			</h2>
			<Input
				label="Bill value"
				type="text"
				value={bill}
				onChange={(e) => setBill(Number(e.target.value))}
			/>
			<Input
				label="Your expense"
				type="text"
				value={paidByUser}
				onChange={(e) =>
					setPaidByUser(
						Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
					)
				}
			/>
			<Input
				label={`${selectedFriend.name}'s expense`}
				type="text"
				value={paidByFriend}
			/>
			<div className="w-full flex justify-between mb-4">
				<label>Who is paying the bill?</label>
				<select
					className="rounded-md py-1 px-2 w-[249px]"
					value={whoIsPaying}
					onChange={(e) => setWhoIsPaying(e.target.value)}>
					<option value="user">You</option>
					<option value="friend">{selectedFriend.name}</option>
				</select>
			</div>
			<Button>Split bill</Button>
		</form>
	);
};

export default FormSplitBill;
