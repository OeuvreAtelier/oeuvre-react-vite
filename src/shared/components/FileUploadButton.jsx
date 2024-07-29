import { FileInput, Label } from "flowbite-react"
import React from "react"

export default function FileUploadButton({
  id,
  label,
  helper,
  value,
  onChange,
}) {
  return (
    <div className="mb-3">
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <FileInput
        id={id}
        helperText={helper}
        onChange={onChange}
        accept="image/*"
      />
    </div>
  )
}
