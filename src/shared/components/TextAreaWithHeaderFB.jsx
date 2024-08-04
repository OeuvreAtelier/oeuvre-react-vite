import { Label, Textarea } from "flowbite-react"
import React from "react"

export default function TextAreaWithHeaderFB({
  id,
  nameLabel,
  nameInput,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <Label htmlFor={id} className="sm-semibold-gray block mb-3 -mt-3">
        {nameLabel}
      </Label>
      <Textarea
        maxLength={100}
        className="w-full pb-3 mb-3"
        id={id}
        name={nameInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        required
      />
    </div>
  )
}
