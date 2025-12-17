"use client";
import AutoComplete from "./components/autoComplete/autocomplete";
import DynamicForm from "./components/DynamicForm";
import CustomForm from "./components/Form";
import ParentText from "./components/reverseInput/Parent";

export default function Home() {
  return (
    <section className="m-4">
      <CustomForm />
      <div className="w-100 border border-solid mt-3"></div>
      <DynamicForm />
      <div className="w-100 border border-solid mt-3"></div>
      <AutoComplete />
      <div className="w-100 border border-solid mt-3"></div>
      <ParentText />
      <div className="w-100 border border-solid mt-3"></div>
    </section>
  );
}
