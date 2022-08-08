import React from "react";

const TodoList = ({ projects, setDeletedCount }) => {
  const deleteItem = (item) => {
    fetch(`http://localhost:5000/todos/${item}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setDeletedCount(data.deletedCount));
  };

  const completeItem = (item) => {
    item.isDone = true;

    fetch(`http://localhost:5000/todos/${item._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div id="todoList" className="pt-7 w-11/12 h-3/4 lg:h-1/2">
      <p className="text-center text-3xl text-white">Task List</p>
      <ol className="pt-1 px-2">
        {projects.map((project) => (
          <li className="flex justify-between " key={project._id}>
            {project.title}{" "}
            <span>
              <i
                className={`fa fa-check mr-2 ${
                  project.isDone ? "text-green-800" : "text-slate-400"
                }`}
                onClick={() => completeItem(project)}
              ></i>
              <i
                className={`fa fa-trash ${
                  project.isDone ? "text-slate-500" : "text-black"
                }`}
                onClick={() => deleteItem(project._id)}
              ></i>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
