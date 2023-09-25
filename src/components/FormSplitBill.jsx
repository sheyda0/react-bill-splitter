import Button from "./Button";
import Input from "./Input";
import { useFriendContext } from "../context/Context.js";

const FormSplitBill = () => {
  const {
    bill,
    setBill,
    paidByUser,
    setPaidByUser,
    whoIsPaying,
    setWhoIsPaying,
    paidByFriend,
    selectedFriend,
    handleSubmitBill,
    friendsList
  } = useFriendContext();

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-4">
        Split a bill with{" "}
        {selectedFriend ? selectedFriend.name : friendsList[0].name}
      </h2>
      <div className="p-4 md:mt-0 mt-10 flex flex-col rounded-2xl border border-zinc-200">
        {/* <div className="w-full">
          <div className="p-1 border border-[#FEA63C] rounded-full h-max w-max m-auto">
            <img
              src={selectedFriend ? selectedFriend.image : friendsList[0].image}
              className=" w-16 rounded-full"
              alt=""
            />
          </div>
        </div> */}
        <form onSubmit={(e) => handleSubmitBill(e)}>
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
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value)
              )
            }
          />
          <Input
            label={`${
              selectedFriend ? selectedFriend.name : friendsList[0].name
            }'s expense`}
            type="text"
            value={paidByFriend}
          />
          <div className="w-full flex justify-between mb-4">
            <label>Who is paying the bill?</label>
            <select
              className="rounded-md py-1 px-2 [249pxw-]"
              value={whoIsPaying}
              onChange={(e) => setWhoIsPaying(e.target.value)}
            >
              <option value="user">You</option>
              <option value="friend">
                {selectedFriend ? selectedFriend.name : friendsList[0].name}
              </option>
            </select>
          </div>
          <div className="w-full flex justify-center mt-2">
            <Button
              className="red-button text-white font-semibold w-[15rem]"
              // type="submit"
            >
              split bill
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSplitBill;
