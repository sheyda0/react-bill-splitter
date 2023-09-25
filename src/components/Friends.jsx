import Button from "./Button";
import { useFriendContext } from "../context/Context.js";

const Friends = () => {
  const { friends, selectedFriend, handleSelection } = useFriendContext();

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">Near by friends</h2>
      <ul className="rounded-2xl border border-zinc-200">
        {friends.map((friend) => (
          <li
            className={`flex justify-between px-3 py-2 items-center transition duration-200 rounded-2xl ${
              friend.id === selectedFriend?.id ? "bg-[#FBE6E7]" : ""
            }`}
          >
            <div className="flex">
              <img
                src={friend.image}
                alt="profile"
                className="w-[60px] h-[60px] object-cover rounded-2xl mr-3"
              />
              <div>
                <h3 className="font-bold text-lg text-zinc-800 mb-2">
                  {friend.name}
                </h3>
                {friend.balance < 0 && (
                  <p className="text-[#FF5C5D] text-[0.92rem]">
                    You owe {friend.name} ${Math.abs(friend.balance)}
                  </p>
                )}
                {friend.balance > 0 && (
                  <p className="text-[#47C7EA] text-[0.92rem]">
                    {friend.name} owes you ${Math.abs(friend.balance)}
                  </p>
                )}
                {friend.balance === 0 && (
                  <p className="text-[0.92rem] text-zinc-400">
                    You and {friend.name} are even
                  </p>
                )}
              </div>
            </div>
            <Button
              onClick={() => handleSelection(friend)}
              className="red-button text-white font-semibold w-24"
            >
              {friend.id === selectedFriend?.id ? "close" : "select"}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
