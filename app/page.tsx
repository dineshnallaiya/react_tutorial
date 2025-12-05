"use client";
import DynamicForm from "./components/DynamicForm";
import CustomForm from "./components/Form";

export default function Home() {
  return (
    <section className="m-4">
      <CustomForm />
      <div className="w-100 border border-solid mt-3"></div>
      <DynamicForm />
    </section>
  );
}
