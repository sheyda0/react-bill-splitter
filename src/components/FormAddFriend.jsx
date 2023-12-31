import Button from "./Button";
import Input from "./Input";
import { useFriendContext } from "../context/Context.js";
import Title from "./Title";

const FormAddFriend = () => {
  const {
    handleSubmit,
    name,
    setName,
    image,
    setImage,
    setShowAddFriend,
    handleImageChange
  } = useFriendContext();

  return (
    <div>
      <Title>Add new friend</Title>
      <form
        className="border border-zinc-20 px-4 py-6 flex flex-col items-end rounded-lg"
        onSubmit={(e) => handleSubmit(e)}
      >
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
          disabled={true}
        />
        <div className="flex gap-6 w-full">
          <Button
            className="red-button text-white font-semibold w-full"
            onClick={() => setShowAddFriend(false)}
          >
            close
          </Button>
          <Button className="blue-button text-white font-semibold w-full">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormAddFriend;
