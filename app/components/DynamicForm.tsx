import { useEffect, useState } from "react";
import { useDynamicForm } from "../customHooks/useDynamicForm";

const DynamicForm = () => {
  const fields = [
    {
      label: "FirstName",
      required: true,
      name: "firstname",
      type: "text",
    },
    {
      label: "Age",
      required: true,
      name: "firstname",
      type: "text",
      numberOnly: true,
    },
    {
      label: "Gender",
      required: true,
      name: "gender",
      type: "radio",
      options: [
        { key: "m", label: "Male" },
        { key: "f", label: "Female" },
      ],
    },
    {
      label: "Country",
      required: true,
      name: "country",
      type: "checkbox",
      options: [
        { key: "in", label: "India" },
        { key: "aus", label: "AUS" },
      ],
    },
    {
      label: "Fav Color",
      required: true,
      name: "color",
      type: "select",
      options: [
        { key: "bl", label: "Blue" },
        { key: "re", label: "Red" },
        { key: "bl", label: "Black" },
      ],
    },
  ];
  const [formValue, setFromValue] = useState({});
  const { getValue, error } = useDynamicForm();

  const triggereChanges = (event: any) => {
    console.log(event.target);
    const { name, value } = event?.target;
    if (name == "firstname") {
      getValue({ field: name, typeValidation: "text", value: value });
    }
  };
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <>
      <h3 className="text-[24px]">Dynamic Form Validation</h3>
      <div>
        {fields.map((field, i) => {
          return (
            <>
              <div key={i}>
                {field.type === "text" && (
                  <>
                    <label htmlFor="">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      onChange={triggereChanges}
                    />
                  </>
                )}
                {field.type === "radio" && (
                  <>
                    <label htmlFor="">{field.label}</label>
                    {field?.options!.map((opt) => {
                      return (
                        <>
                          <label htmlFor={opt.key}>{opt.label}</label>
                          <input
                            type={field.type}
                            id={opt.key}
                            name={field.name}
                            value={opt.key}
                          />
                        </>
                      );
                    })}
                  </>
                )}
                {field.type === "checkbox" && (
                  <>
                    <label htmlFor="">{field.label}</label>
                    {field?.options!.map((opt) => {
                      return (
                        <>
                          <label htmlFor={opt.key}>{opt.label}</label>
                          <input
                            type={field.type}
                            id={opt.key}
                            name={field.name}
                            value={opt.key}
                          />
                        </>
                      );
                    })}
                  </>
                )}
                {field.type === "select" && (
                  <>
                    <b>
                      <label htmlFor="">{field.label}</label>
                    </b>
                    <select>
                      {field.options!.map((item) => {
                        return <option value={item.key}>{item.label}</option>;
                      })}
                    </select>
                  </>
                )}
              </div>
            </>
          );
        })}
      </div>
      <button type="submit"> submit </button>
    </>
  );
};
export default DynamicForm;
