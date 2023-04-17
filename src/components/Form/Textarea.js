import React from "react";
import { useField } from "formik";

const Textarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea
          className="p-4 rounded-md border border-gray-300 h-[150px] resize-none"
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="text-sm text-red-500">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Textarea;
