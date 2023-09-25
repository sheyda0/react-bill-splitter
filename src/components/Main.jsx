"use client";

import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import Friends from "./Friends";
import FormSplitBill from "./FormSplitBill";
import { useFriendContext } from "../context/Context.js";

const Main = () => {
  const { showAddFriend, handleShowAddFriend } = useFriendContext();

  return (
    <div className="max-w-[900px] mx-auto mt-32 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/2 w-full">
        <Friends />
        {!showAddFriend && (
          <Button
            onClick={() => handleShowAddFriend()}
            className="mt-3 blue-button text-white font-semibold flex items-center gap-1"
          >
            <span>Add friend</span>{" "}
            <span className="text-[1.5rem] mb-1">+</span>
          </Button>
        )}
      </div>
      <div className="md:w-1/2 w-full">
        {showAddFriend ? <FormAddFriend /> : <FormSplitBill />}
      </div>
    </div>
  );
};

export default Main;