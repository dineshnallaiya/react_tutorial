import { useState } from "react";
import DatePicker from "./DatePickerComponent";

const DatePickerDisplay = () => {
  const [dropdown, setDropdownValue] = useState({ month: "Jan", days: 31 });
  const monthDrop = [
    { month: "Jan", days: 31 },
    { month: "Feb", days: 28 },
    { month: "Mar", days: 31 },
    { month: "Apr", days: 30 },
    { month: "May", days: 31 },
    { month: "Jun", days: 30 },
    { month: "Jul", days: 31 },
    { month: "Aug", days: 31 },
    { month: "Sep", days: 30 },
    { month: "Oct", days: 31 },
    { month: "Nov", days: 30 },
    { month: "Dec", days: 31 },
  ];
  function setDropdown(event: any) {
    const filterRecoed = monthDrop.find(
      (item) => item.month == event.target.value
    );
    setDropdownValue(filterRecoed!);
  }
  return (
    <>
      <select name="" id="" onChange={(event) => setDropdown(event)}>
        {monthDrop.map((item, i) => {
          return (
            <option value={item.month} key={i * 6}>
              {item.month}
            </option>
          );
        })}
      </select>
      <DatePicker dropdown={dropdown} />
    </>
  );
};

export default DatePickerDisplay;
