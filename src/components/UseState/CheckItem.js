import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS"
  },
  {
    id: 2,
    name: "Javascipt"
  },
  {
    id: 3,
    name: " ReactJS"
  }
];

export default function CheckItem() {
  const [checkedforRadio, setCheckedforRadio] = useState(1); 

  const handleSubmitRadio = () => {
    console.log({ ids: checkedforRadio });
  };

  const [checkedforCheckbox, setCheckedforCheckbox] = useState([]); 
  const handleSubmitCheckbox = () => {
    console.log({ ids: checkedforCheckbox });
  };

  const handleCheckbox = (id) => {
    setCheckedforCheckbox((prev) => {
      const isChecked = checkedforCheckbox.includes(id);
      if (isChecked) {
        return checkedforCheckbox.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="App">
      <div className="radio">
        <h2>Input radio</h2>
        {courses.map((course, index) => (
          <div key={course.id}>
            <input
              type="radio"
              checked={checkedforRadio === course.id}
              onChange={() => setCheckedforRadio(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmitRadio}>Submit</button>
      </div>

      <div className="checkBox">
        <h2>Input checkbox</h2>
        {courses.map((course, index) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checkedforCheckbox.includes(course.id)}
              onChange={() => handleCheckbox(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmitCheckbox}>Submit</button>
      </div>
    </div>
  );
}
