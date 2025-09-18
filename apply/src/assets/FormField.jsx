import React from "react";

const FormField = ({
  id,
  label,
  name,
  type = "text",
  as = "input", // 'input' or 'textarea'
  placeholder,
  value,
  onChange,
  error,
  required = false,
}) => {
  const commonProps = {
    id,
    name,
    className: `w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors ${error ? 'border-red-500' : 'border-gray-300'}`,
    placeholder,
    value,
    onChange,
    required,
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {as === "textarea" ? (
        <textarea {...commonProps} rows={4}></textarea>
      ) : (
        <input type={type} {...commonProps} />
      )}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;