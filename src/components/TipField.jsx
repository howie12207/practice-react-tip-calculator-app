import React from "react";
import clsx from "clsx";

const TipField = ({ label, id, onChange }) => {
  const tipOptions = [
    { label: "5%", value: 5, default: true },
    { label: "10%", value: 10 },
    { label: "15%", value: 15 },
    { label: "25%", value: 25 },
    { label: "50%", value: 50 },
  ];

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
                onChange={(e) => onChange("tip", e.target.value)}
              />
              <label
                className={clsx(
                  "inline-block w-full",
                  "bg-cyan-900 peer-checked:bg-cyan-500",
                  "rounded-md",
                  "text-white text-center text-xl font-black h-12 leading-3rem peer-checked:text-cyan-900",
                )}
                htmlFor={item.id}
              >
                {item.label}
              </label>
            </div>
          );
        })}
        {/* <div className="relative">
          <input
            className="w-full h-full absolute left-0 opacity-0 peer"
            name={id}
            type="radio"
            id="custom"
          />
          <label
            className={clsx(
              "inline-block w-full",
              "bg-cyan-900 peer-checked:bg-cyan-500",
              "rounded-md",
              "text-white text-center text-xl font-black h-12 leading-3rem peer-checked:text-cyan-900",
            )}
            htmlFor="custom"
          >
            Custom
          </label>
        </div> */}
      </div>
    </section>
  );
};

export default TipField;
