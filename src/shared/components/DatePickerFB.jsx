import { Datepicker, Label } from "flowbite-react"
import React, { useState } from "react"

export default function DatePickerFB({
  id,
  nameLabel,
  value,
  handleDateChange,
}) {
  return (
    <div>
      <Label htmlFor={id} className="sm-semibold-gray block mb-3 -mt-2">
        {nameLabel}
      </Label>
      <Datepicker
        icon={null}
        onSelectedDateChanged={handleDateChange}
        id={id}
        name={id}
        className="w-full pb-3"
        value={value}
        minDate={new Date(1945, 8, 17)}
        maxDate={new Date(2024, 8, 6)}
      />
    </div>
  )
}
