import { useState } from "react";

interface validation {
  field: string;
  typeValidation: string;
  value: string;
}
export const useDynamicForm = () => {
  const [error, setError] = useState<any>();

  const getValue = ({ field, typeValidation, value }: validation) => {
    // console.log("field", field);
    let errorMessage = "";
    if (typeValidation == "text") {
      !/^[A-Za-z]+$/.test(value)
        ? (errorMessage = "Only text")
        : (errorMessage = "");
    }
    setError((prev: any) => {
      const dataIndex = prev?.findIndex(
        (item: validation) => item.field === field
      );
      if (errorMessage != "" && dataIndex == -1) {
        return [...prev, { field: field, error: errorMessage }];
      }
      if (errorMessage == "" && dataIndex) {
        return prev.filter((_: any, i: number) => i != dataIndex);
      }
    });
  };

  return { getValue, error };
};
