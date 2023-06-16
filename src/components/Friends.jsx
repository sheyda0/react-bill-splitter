import Button from './Button';

const Friends = ({ friends, onSelection, selectedFriend }) => {
	return (
		<ul>
			{friends.map((friend) => (
				<li
					className={`flex justify-between px-3 py-4 items-center transition duration-200 hover:bg-orange-100 rounded-md ${
						friend.id === selectedFriend?.id ? 'bg-orange-100' : ''
					}`}>
					<div className="flex">
						<img
							src={friend.image}
							alt="profile"
							className="w-[60px] h-[60px] object-cover rounded-full mr-3"
						/>
						<div>
							<h3 className="font-bold text-lg">{friend.name}</h3>
							{friend.balance < 0 && (
								<p className="text-orange-700">
									You owe {friend.name} {Math.abs(friend.balance)} $
								</p>
							)}
							{friend.balance > 0 && (
								<p className="text-green-700">
									{friend.name} owes you {Math.abs(friend.balance)} $
								</p>
							)}
							{friend.balance === 0 && <p>You and {friend.name} are even</p>}
						</div>
					</div>
					<Button onClick={() => onSelection(friend)}>
						{friend.id === selectedFriend?.id ? 'close' : 'select'}
					</Button>
				</li>
			))}
		</ul>
	);
};

export default Friends;
