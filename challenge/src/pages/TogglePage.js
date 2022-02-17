import React, { useState } from "react";
import Switch from "../components/Switch";


function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <Switch
        rounded={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      />
    </div>
  );
}

export default Toggle;

