import { useState } from "react";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className=" bg-gray-800 flex flex-col gap-7 justify-center   items-center w-[500px] mt-10 h-[300px] ">
      <div className="flex flex-col gap-7 w-[90%]">
        <p className=" flex flex-col w-[100%]">
          <label className=" text-gray-400 font-bold mb-2">Email</label>
          <input
            type="email"
            className={`${
              emailNotValid ? "invalid" : undefined
            }  h-[50px] w-[100%] rounded-md`}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p className=" flex flex-col w-[100%]">
          <label className=" text-gray-400 font-bold mb-2">Password</label>
          <input
            type="password"
            className={`${
              passwordNotValid ? "invalid" : undefined
            }  h-[50px] w-[100%] rounded-md`}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className=" flex justify-end bg-cyan-300">
        <button type="button" className=" text-yellow-500">
          Create a new account
        </button>
        <button className="   bg-yellow-500 text-black font-bold p-2 rounded-md" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
