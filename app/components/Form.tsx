import { useMemo } from "react";
import { useForm } from "../customHooks/useForm";

export const ErrorFinder = ({ errors, field }: any) => {
  const error = useMemo(() => {
    return errors?.find((item: any) => item.id == field);
  }, [errors, field]);
  return <>{error?.id == field && <label>{error.error}</label>}</>;
};
export default function CustomForm() {
  const { getFormValue, isFormSubmit, error } = useForm();
  const onChangeForm = (event: any) => {
    const { name, value, id } = event?.target;
    getFormValue({ field: name, value: value, id: id });
  };
  const formSubmit = () => {
    if (!isFormSubmit()) {
      alert("farms valid");
    } else {
      alert("form in valid");
    }
  };
  return (
    <>
      <h3 className="text-[24px]">Create custom hook for from validation</h3>
      <div className="flex flex-col gap-3">
        <label htmlFor=""> Name</label>
        <input
          type="text"
          className="border border-solid rounded-sm p-1"
          name="text"
          id="userName"
          onChange={onChangeForm}
        />
        <ErrorFinder errors={error} field="userName" />
        <label></label>
        <label htmlFor=""> Age</label>
        <input
          type="text"
          className="border border-[#707070] rounded-sm p-1"
          name="number"
          id="age"
          onChange={onChangeForm}
        />
        <ErrorFinder errors={error} field="age" />
        <button onClick={formSubmit} className="border border-solid p-1 w-24">
          submit
        </button>
      </div>
    </>
  );
}
