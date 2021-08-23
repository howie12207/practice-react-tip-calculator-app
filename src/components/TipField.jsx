import React, { useRef } from "react";
import clsx from "clsx";

const TipField = ({ label, id, onChange }) => {
  const customRef = useRef(null);

  const tipOptions = [
    { label: "5%", value: 5, default: true },
    { label: "10%", value: 10 },
    { label: "15%", value: 15 },
    { label: "25%", value: 25 },
    { label: "50%", value: 50 },
    { label: "custom", value: "custom" },
  ];

  const changeHandle = (e) => {
    if (e.target.value === "custom") {
      customRef.current.focus();
    } else {
      customRef.current.value = 0;
    }
    onChange("tip", e.target.value);
  };

  const customChange = (e) => {
    onChange("tip", e.target.value);
  };

  return (
    <section>
      <label className="block text-cyan-900 font-bold mb-3">{label}</label>
      <div className="grid grid-cols-2 gap-4">
        {tipOptions.map((item) => {
          return (
            <div key={item.value} className="relative">
              <input
                className="w-full h-full absolute left-0 opacity-0 peer cursor-pointer"
                name={id}
                type="radio"
                id={item.id}
                value={item.value}
                defaultChecked={item.default}
                onChange={changeHandle}
              />
              <label
                className={clsx(
                  "inline-block w-full",
                  "bg-cyan-900 peer-checked:bg-cyan-500",
                  "rounded-md",
                  "text-white text-center text-xl font-black h-12 leading-3rem peer-checked:text-cyan-900",
                  item.value === "custom" && "peer-checked-hidden",
                )}
                htmlFor={item.id}
              >
                {item.label}
              </label>
              {item.value === "custom" && (
                <input
                  className={clsx(
                    "hidden peer-checked:inline",
                    "w-full h-full",
                    "absolute left-0",
                    "text-right",
                    "pr-4 rounded-md",
                    "outline-none  border border-transparent focus:border-cyan-500",
                    "bg-gray-100",
                  )}
                  ref={customRef}
                  type="number"
                  onChange={customChange}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TipField;
