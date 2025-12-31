import { useMemo } from "react";

interface dropdownProps {
  dropdown: any;
}

const DatePicker = ({ dropdown }: dropdownProps) => {
  console.log(dropdown);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "sun"];
  const callander = useMemo(() => {
    let temp: any = [];
    const callArray = [];
    for (let i = 1; i <= dropdown.days; i++) {
      if (temp.length >= 7) {
        callArray.push(temp);
        temp = [];
      }
      temp.push(i);
    }

    if (temp.length != 0) {
      const remaining = 7 - temp.length;
      console.log(remaining, "remaining");
      if (remaining) {
        for (let i = 1; i <= remaining; i++) {
          temp.push("");
        }
      }
      //  temp.push(i);
      callArray.push(temp);
    }
    console.log("sss", callArray, dropdown);
    return callArray;
  }, [dropdown]);
  return (
    <div style={{ width: "500px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        {days.map((day, i) => (
          <label key={i * 3} style={{ flex: 1 }}>
            {day}
          </label>
        ))}
      </div>
      <div>
        {callander.map((days, i) => {
          return (
            <div key={i * 9 * 3} style={{ display: "flex" }}>
              {days.map((cal: string, j: number) => (
                <label key={j * 12 * 3} style={{ flex: 1 }}>
                  {cal}
                </label>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DatePicker;
