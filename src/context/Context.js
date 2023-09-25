import React, { createContext, useContext, useState } from "react";

const FriendContext = createContext();

export const useFriendContext = () => {
  return useContext(FriendContext);
};

export const FriendProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

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

    handleAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  const handleSubmitBill = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    handleSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  const friendsList = [
    {
      id: 1,
      name: "Clark",
      image: "https://i.pravatar.cc/48?img=40",
      balance: 20
    },
    {
      id: 2,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?img=44",
      balance: -5
    },
    {
      id: 3,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?img=32",
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
    <FriendContext.Provider
      value={{
        name,
        image,
        setName,
        setImage,
        handleSubmit,
        bill,
        setBill,
        paidByUser,
        setPaidByUser,
        whoIsPaying,
        setWhoIsPaying,
        paidByFriend,
        handleSubmitBill,
        friends,
        setFriends,
        friendsList,
        showAddFriend,
        setShowAddFriend,
        selectedFriend,
        setSelectedFriend,
        handleAddFriend,
        handleShowAddFriend,
        handleSelection,
        handleSplitBill
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};
