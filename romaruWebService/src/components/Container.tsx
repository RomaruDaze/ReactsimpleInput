import { SetStateAction, useState } from "react";
import Alert from "./Alert";
import Button from "./Button";
import Input from "./Input";
import "./components.css";

const Container = () => {
  const [vis, setvis] = useState(false);
  const [name, setName] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  return (
    <div className="container text-center">
      <br />
      {vis && (
        <Alert
          onClose={() => {
            setvis(false);
            setName("");
          }}
        >
          My name is {name}
        </Alert>
      )}
      <div className="row">
        <div className="col">
          <Input onChange={handleChange} name="" />
        </div>
        <br />
        <div className="col align-self-center">
          <Button onClick={() => setvis(true)}>Enter</Button>
        </div>
      </div>
    </div>
  );
};

export default Container;
