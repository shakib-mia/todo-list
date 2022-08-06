import React from "react";

const AddTask = ({ addTask, setName }) => {
  return (
    <form
      className="px-5 pt-7 text-black w-11/12 h-3/4 lg:h-1/2"
      onSubmit={addTask}
    >
      <h3 className="text-3xl text-center pb-3 text-white">Add Task</h3>
      <input
        type="text"
        className="w-full p-2 rounded my-2"
        onChange={(e) => setName(e.target.value)}
      />

      <div className="text-end mt-2">
        <input
          type="submit"
          value="Add Task"
          className="bg-white px-7 py-2 cursor-pointer rounded"
        />
      </div>
    </form>
  );
};

export default AddTask;
