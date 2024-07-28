import React from "react"
import { Label, TextInput } from "flowbite-react"

export default function TextInputWithHeaderFB({
  isDisabled,
  id,
  nameLabel,
  nameInput,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <Label
        htmlFor={id}
        className="sm-semibold-gray block mb-3 -mt-3"
      >
        {nameLabel}
      </Label>
      <TextInput
        disabled={isDisabled}
        id={id}
        name={nameInput}
        type={type}
        className="w-full pb-3"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}
