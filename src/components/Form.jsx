import React, { useState } from "react";
import clsx from "clsx";

import TextField from "./TextField";
import TipField from "./TipField";
import Calculator from "./Calculator";

const roundToTwo = (num) => +(Math.round(num + "e+2") + "e-2");

const Form = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(5);
  const [people, setPeople] = useState(1);
  const [numberIsValid, setNumberIsValid] = useState(true);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const onChange = (target, value) => {
    let nowBill = bill;
    let nowTip = tip;
    let nowPeople = people;
    if (target === "bill") {
      nowBill = Number(value);
      setBill(nowBill);
    } else if (target === "tip") {
      nowTip = Number(value);
      setTip(nowTip);
    } else if (target === "people") {
      nowPeople = Number(value);
      setPeople(nowPeople);
      // 不可小於等於 0 且 不可為小數
      const isValid = nowPeople > 0 && Math.floor(nowPeople) === nowPeople;
      setNumberIsValid(isValid);
    }
    let tipAmtCal = roundToTwo((nowBill * (nowTip / 100)) / nowPeople);
    setTipAmount(isFinite(tipAmtCal) ? tipAmtCal : 0);
    setTotal(
      isFinite(tipAmtCal) ? roundToTwo(tipAmtCal + nowBill / nowPeople) : 0,
    );
  };

  const onReset = () => {
    setBill(0);
    setTip(5);
    setPeople(1);
    setTipAmount(0);
    setTotal(0);
    setNumberIsValid(true);
  };

  return (
    <form className="p-8 bg-white rounded-t-3xl space-y-4 md:flex md:space-y-0 md:space-x-4 md:rounded-3xl">
      <section className="flex-1 md:space-y-4">
        <TextField
          label="Bill"
          id="bill"
          type="number"
          icon="icon-dollar"
          value={bill}
          onChange={onChange}
        />
        <TipField
          label="Select Tip %"
          id="tip"
          value={tip}
          onChange={onChange}
        />
        <TextField
          label="Number of People"
          id="people"
          type="number"
          icon="icon-person"
          value={people}
          min="1"
          onChange={onChange}
          isValid={numberIsValid}
          errorTips={`Can't be zero, negative or decimal`}
        />
      </section>
      <Calculator tipAmount={tipAmount} total={total} onReset={onReset} />
    </form>
  );
};

export default Form;
