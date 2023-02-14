import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from "react-redux";

const CreateTask = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleKeyDown = (e: any) => {
    const trimmedText = e.target.value.trim();
    if (e.key === "Enter" && trimmedText) {
      dispatch({ type: "tasks/addTask", payload: trimmedText });
      setText("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="What is on your mind"
        autoFocus={true}
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default CreateTask;
