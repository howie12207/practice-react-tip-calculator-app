import React from "react";
import clsx from "clsx";
import { ReactComponent as IconDollar } from "./img/icon-dollar.svg";
import { ReactComponent as IconPerson } from "./img/icon-person.svg";

const TextField = ({
  label,
  id,
  type = "text",
  icon,
  value,
  min,
  onChange,
  isValid,
  errorTips,
}) => {
  const cal = (id, value) => {
    onChange(id, value);
  };

  return (
    <section>
      <label className="block text-cyan-900 font-bold mb-1" htmlFor={id}>
        {label}
      </label>
      <div className="relative flex items-center">
        {icon === "icon-dollar" && <IconDollar className="absolute left-4" />}
        {icon === "icon-person" && <IconPerson className="absolute left-4" />}
        <input
          className={clsx([
            "w-full",
            "text-right font-black text-cyan-900",
            "bg-gray-100",
            "py-2 pr-4 pl-8 rounded-md",
            "outline-none border border-transparent focus:border-cyan-500",
          ])}
          type={type}
          id={id}
          name={id}
          value={value}
          min={min}
          onChange={(e) => {
            onChange(id, e.target.value);
          }}
        />
      </div>
      <p
        className={clsx(
          "text-xs text-red-500 text-right mt-1",
          isValid && "hidden",
        )}
      >
        {errorTips}
      </p>
    </section>
  );
};

export default TextField;
