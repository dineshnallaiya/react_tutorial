"use client";
import React, { useState } from "react";

interface ErrorProps {
  field: string;
  error: string;
  id?: string;
}

export const useForm = () => {
  const [error, setError] = useState<ErrorProps[]>([]);

  const getFormValue = ({ field, value, id }: any) => {
    let errorMessage = " ";
    if (field == "text" && !/^[A-Za-z]+$/g.test(value)) {
      errorMessage = "only Ahpa";
    } else if (field == "number" && !/^[0-9]+$/g.test(value)) {
      errorMessage = "only Number";
    }
    setError((prev) => {
      prev = prev.filter((item) => item.id != id);
      if (errorMessage != " ")
        return (prev = [...prev, { field: id, error: errorMessage, id: id }]);
      return prev;
    });
  };

  const isFormSubmit = () => {
    return error.some((value) => value.error);
  };

  return { getFormValue, isFormSubmit, error };
};
