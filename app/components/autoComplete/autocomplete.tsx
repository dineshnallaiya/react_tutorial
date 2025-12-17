import { useCallback, useMemo, useState } from "react";
const AutoComplete = () => {
  const data = ["dinses", "kanna", "lol", "praveen"];
  const [dataInput, setDataInput] = useState("");

  const autoCompeteEvent = useCallback((event: any) => {
    setDataInput(event.target.value);
  }, []);

  const filterRecord = useMemo(() => {
    if (!dataInput) return [];
    return data.filter((item) => item.includes(dataInput));
  }, [dataInput, data]);
  const selectedEvent = useCallback((event: any) => {
    setDataInput(event.target.inner.HTML);
  }, []);
  return (
    <div>
      <h3 className="text-[24px]">AutoInput</h3>
      <input
        type="text"
        value={dataInput}
        onChange={(event) => autoCompeteEvent(event)}
        placeholder="Enter a text to search"
      />

      <div style={dataInput ? { display: "block" } : { display: "none" }}>
        {filterRecord &&
          filterRecord.map((item, i) => {
            return (
              <li
                value={item}
                onClick={(event) => selectedEvent(event)}
                key={i}
              >
                {item}
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default AutoComplete;
