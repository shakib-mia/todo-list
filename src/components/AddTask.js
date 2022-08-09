import React from "react";

const AddTask = ({ addTask, setName }) => {
  return (
    <form
      className="px-5 pt-7 text-black w-11/12 h-3/4 lg:h-1/2"
      onSubmit={addTask}
    >
      <h3 className="text-3xl text-center py-3 text-white">Add Task</h3>
      <div className="mt-10 lg:px-10 h-full ">
        <div className="w-full">
          <input
            type="text"
            className="w-full p-2 rounded my-2"
            onChange={(e) => setName(e.target.value)}
            placeholder="Add Task Here"
          />

          <div className="text-end mt-2">
            <input
              type="submit"
              value="Add Task"
              className="bg-white px-7 py-2 cursor-pointer rounded"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
