import Button from "./Button";
import { useFriendContext } from "../context/Context.js";
import Title from "./Title";
// import { GrFormClose } from "react-icons/gr";

const Friends = () => {
  const {
    friends,
    selectedFriend,
    handleSelection,
    image,
    handleDeleteFriend
  } = useFriendContext();

  function formatCurrency(number) {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }

  return (
    <div>
      <Title>Near by friends</Title>
      <ul className="rounded-2xl md:border border-zinc-200 max-h-[13.5rem] md:max-h-[23.2rem] overflow-y-scroll custom-scroll">
        {friends.map((friend) => (
          <li
            className={`friend flex justify-between px-3 py-2 items-center transition duration-200 relative ${
              friend.id === selectedFriend?.id ? "md:bg-[#FBE6E7]" : ""
            }`}
          >
            {/* <GrFormClose
              onClick={() => handleDeleteFriend(friend.id)}
              className=" absolute top-1 left-[2px] text-zinc-500"
            /> */}
            <div className="flex">
              <img
                src={friend.image || image}
                // src={require(image) || friend.image}
                alt="profile"
                className="w-[55px] h-[55px] object-cover rounded-2xl mr-3"
              />
              <div>
                <h3 className="font-bold md:text-lg text-zinc-700 mb-1 mt-1">
                  {friend.name}
                </h3>
                {friend.balance < 0 && (
                  <p className="text-[#FF5C5D] text-[0.92rem]">
                    You owe {friend.name} {formatCurrency(friend.balance)}
                  </p>
                )}
                {friend.balance > 0 && (
                  <p className="text-[#47C7EA] text-[0.92rem]">
                    {friend.name} owes you {formatCurrency(friend.balance)}
                  </p>
                )}
                {friend.balance === 0 && (
                  <p className="text-[0.92rem] text-zinc-400">
                    You and {friend.name} are even
                  </p>
                )}
              </div>
            </div>
            <div>
              {friend.id === selectedFriend?.id ? (
                <Button
                  onClick={() => handleSelection(friend)}
                  className="red-button text-white font-semibold w-24"
                >
                  close
                </Button>
              ) : (
                <Button
                  onClick={() => handleSelection(friend)}
                  className="blue-button text-white font-semibold w-24"
                >
                  select
                </Button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
