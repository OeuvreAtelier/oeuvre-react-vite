import { Button, Modal } from "flowbite-react"
import React from "react"

export default function ScrollableModal({show, onClose, title, body, btnOnClick, btnText}) {
  return (
    <Modal
      show={show}
      size="xl"
      onClose={onClose}
      className="m-auto bg-gray-700 bg-opacity-60"
      dismissible={true}
    >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={btnOnClick} color="blue">{btnText}</Button>
      </Modal.Footer>
    </Modal>
  )
}
