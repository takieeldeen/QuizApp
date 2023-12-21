import { useState } from "react";
export default function Switch({
  width = 4,
  trackColor = `#8e44ad`,
  buttonColor = "#fff",
  onSwitch,
}) {
  const [active, setActive] = useState(false);
  const handleClick = function () {
    setActive(!active);
    onSwitch(!active);
  };
  return (
    <div
      style={{
        width: `${width}rem`,
        height: `${width / 2}rem`,
        backgroundColor: `${trackColor}`,
        padding: `${width / 16}rem`,
      }}
      className="relative switch transition-all  cursor-pointer rounded-full   "
      onClick={handleClick}
    >
      <div
        style={{
          left: `${active ? "95%" : "48%"}`,
          width: `${width / 2 - width / 16}rem`,
          height: `${width / 2 - width / 16}rem`,
          backgroundColor: `${buttonColor}`,
        }}
        className="absolute top-[50%] translate-x-[-100%] translate-y-[-50%] transition-all rounded-full cursor-default"
      ></div>
    </div>
  );
}
