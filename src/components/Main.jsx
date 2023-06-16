'use client';

import { useState } from 'react';
import Button from './Button';
import FormAddFriend from './FormAddFriend';
import Friends from './Friends';
import FormSplitBill from './FormSplitBill';

const Main = () => {
	const friendsList = [
		{
			id: 1,
			name: 'Clark',
			image: 'https://i.pravatar.cc/48?img=3',
			balance: 20
		},
		{
			id: 2,
			name: 'Sarah',
			image: 'https://i.pravatar.cc/48?img=48',
			balance: -5
		},
		{
			id: 3,
			name: 'Anthony',
			image: 'https://i.pravatar.cc/48?img=2',
			balance: 0
		}
	];

	const [friends, setFriends] = useState(friendsList);
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [selectedFriend, setSelectedFriend] = useState(null);

	const handleAddFriend = (friend) => {
		setFriends((friends) => [...friends, friend]);
		setShowAddFriend(false);
	};

	const handleShowAddFriend = () => {
		setShowAddFriend(!showAddFriend);
	};

	const handleSelection = (friend) => {
		setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
		setShowAddFriend(false);
	};

	const handleSplitBill = (value) => {
		setFriends((friends) =>
			friends.map((friend) =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend
			)
		);
		setSelectedFriend(null);
	};

	return (
		<div className="max-w-6xl mx-auto mt-32 flex flex-col md:flex-row ">
			<div className="md:w-2/5 w-full">
				<Friends
					friends={friends}
					onSelection={handleSelection}
					selectedFriend={selectedFriend}
				/>
				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
				<Button onClick={() => handleShowAddFriend()} className="mt-3">
					{showAddFriend ? 'Close' : 'Add friend'}
				</Button>
			</div>
			<div className="md:w-3/5 w-full">
				{selectedFriend && (
					<FormSplitBill
						selectedFriend={selectedFriend}
						onSplitBill={handleSplitBill}
					/>
				)}
			</div>
		</div>
	);
};

export default Main;
