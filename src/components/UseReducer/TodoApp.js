import { useReducer, useRef } from "react";

const initState = {
  job: "",
  jobs: []
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  };
};

// 3. Reducer
const reducer = (state, action) => {
  console.log("Action: ", action);
  console.log("Prev state: ", state);

  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      };
      break;

    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
      break;

    case DELETE_JOB:
      const newJob = [...state.jobs];
      newJob.splice(action.payload, 1);
      newState = {
        ...state,
        jobs: newJob
      };
      break;
    default:
      throw new Error("Invalid action.");
  }
  console.log("New state: ", newState);
  return newState;
};

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo ..."
        onChange={(e) => {
          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
