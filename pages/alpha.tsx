import React from "react";

export default function Alpha() {

  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div>
      Alpha
    </div>
  )
}
