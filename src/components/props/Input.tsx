import React from "react";

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, handleChange }: InputProps) {
  return <input type="text" value={value} onChange={handleChange} />;
}

// or create handleChange not as a props like this

// export default function Input(props: InputProps) {
//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//       console.log(event);
//     };
//     return <input type="text" value={props.value} onChange={handleInputChange} />;
//   }
