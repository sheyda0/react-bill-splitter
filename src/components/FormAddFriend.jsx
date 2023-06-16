import Button from './Button';
import Input from './Input';
import { useState } from 'react';

const FormAddFriend = ({ onAddFriend }) => {
	const [name, setName] = useState('');
	const [image, setImage] = useState('https://i.pravatar.cc/48');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !image) return;

		const id = crypto.randomUUID();
		const newFriend = {
			id,
			name,
			image: `${image}?=${id}`,
			balance: 0
		};

		onAddFriend(newFriend);

		setName('');
		setImage('https://i.pravatar.cc/48');
	};

	return (
		<form
			className="bg-orange-200 px-3 py-4 flex flex-col items-end mt-5 rounded-lg"
			onSubmit={handleSubmit}>
			<Input
				label="Friend Name"
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Input
				label="Image URL"
				type="text"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>
			<Button className="w-[248px]">Add</Button>
		</form>
	);
};

export default FormAddFriend;
