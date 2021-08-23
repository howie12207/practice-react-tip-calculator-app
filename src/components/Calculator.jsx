import React from "react";
import clsx from "clsx";

const ResultItem = ({ title, desc, value }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <strong className="block text-white text-sm">{title}</strong>
        <span className="text-gray-300 text-xs">{desc}</span>
      </div>
      <span className="text-cyan-500 text-3xl font-black">$ {value}</span>
    </div>
  );
};

const Calculator = ({ tipAmount, total, onReset }) => {
  const resultItem = [
    { title: "Tip Amount", desc: "/ person", value: tipAmount },
    { title: "Total", desc: "/ person", value: total },
  ];

  return (
    <section className="bg-cyan-900 p-6 rounded-lg space-y-6 flex-1 relative">
      {resultItem.map((item) => {
        return (
          <ResultItem
            key={item.title}
            title={item.title}
            desc={item.desc}
            value={item.value}
          />
        );
      })}
      <button
        className={clsx(
          "bg-cyan-500",
          "text-cyan-900 font-black text-xl",
          "w-full p-2 rounded-md",
          "md:absolute md:w-4/5 bottom-4 left-0 right-0 mx-auto",
        )}
        type="reset"
        onClick={onReset}
      >
        RESET
      </button>
    </section>
  );
};

export default Calculator;
