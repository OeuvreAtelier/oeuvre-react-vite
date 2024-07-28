import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button, Label, Select } from "flowbite-react"
import { useDispatch } from "react-redux"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import TextAreaWithHeaderFB from "../../../shared/components/TextAreaWithHeaderFB"
import TextButton from "../../../shared/components/TextButton"
import CardText from "../../../shared/components/CardText"
import ConfirmationModal from "../../../shared/components/ConfirmationModal"

export default function ManageAddresses() {
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  useEffect(() => {
    if (state !== null) {
      if (state.address) {
        console.log(state.address)
        setFormData({
          id: state.address.id,
          userId: state.address.user.id,
          country: state.address.country,
          state: state.address.state,
          city: state.address.stock,
          detail: state.address.detail,
          postalCode: state.address.postalCode,
          phoneNumber: state.address.phoneNumber,
        })
      } else {
        setFormData({
          userId: state.address.user.id,
          country: "",
          state: "",
          city: "",
          detail: "",
          postalCode: "",
          phoneNumber: "",
        })
      }
    }
  }, [navigate, state])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleNumber = (event) => {
    const { name, value } = event.target
    const updatedValue =
      name === "phoneNumber" && value < 0 && event.replace(/[^0-9]/g, "")
        ? 0
        : value
    setFormData({
      ...formData,
      [name]: updatedValue,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const action = formData.id === undefined
      //   ? createProduct(formData)
      //   : updateProduct(formData)
      await dispatch(action).unwrap()
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handleAdd = (artist) => {
    // navigate("/register-update", {
    //   state: {
    //     artist: artist,
    //   },
    // })
  }

  const handleEdit = (artist, merchandise) => {
    // navigate("/register-update", {
    //   state: {
    //     merchandise: merchandise,
    //     artist: artist,
    //   },
    // })
  }

  const handleDeleteModal = (id) => {
    // setOpenModal(true)
    // setDeleteId(id)
  }

  const handleDelete = () => {
    // dispatch(deleteProduct(deleteId))
    //   .unwrap()
    //   .then(() => {
    //     dispatch(fetchMerchandises({ page: currentPage }))
    //   })
    //   .catch((error) => console.error("Deletion failed:", error))
    // setOpenModal(false)
  }

  return (
    <>
      <ConfirmationModal
        show={openModal}
        onClose={() => setOpenModal(false)}
        text="Do you want to delete this address?"
        yes="Yes"
        no="No"
        onYesClick={handleDelete}
        onNoClick={() => setOpenModal(false)}
        isHidden={false}
      />
      <div className="container mx-auto pt-28 pb-8">
        <h1 className="xxl-semibold-black text-center mb-6">
          Manage Addresses
        </h1>
        <div className="flex flex-row justify-center mx-10">
          <form
            className="w-3/12 px-5 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <TextInputWithHeaderFB
              id="country"
              nameInput="country"
              nameLabel="Country/Region"
              type="text"
              placeholder="Example: Indonesia"
              value={formData.country}
              onChange={handleChange}
            />
            <TextInputWithHeaderFB
              id="state"
              nameInput="state"
              nameLabel="State/Province"
              type="text"
              placeholder="Example: DKI Jakarta"
              value={formData.state}
              onChange={handleChange}
            />
            <TextInputWithHeaderFB
              id="city"
              nameInput="city"
              nameLabel="City"
              type="text"
              placeholder="Example: South Jakarta"
              value={formData.city}
              onChange={handleChange}
            />
            <TextAreaWithHeaderFB
              id="detail"
              nameInput="detail"
              nameLabel="Detailed Address"
              placeholder="Example: 10 Downing Street, Croydon Borough, Stamford Bridge, etc."
              value={formData.detail}
              onChange={handleChange}
            />
            <TextInputWithHeaderFB
              id="postalCode"
              nameInput="postalCode"
              nameLabel="Postal/Zip Code"
              type="text"
              placeholder="Example: 12345, SW1A 2AA, etc."
              value={formData.postalCode}
              onChange={handleChange}
            />
            <TextInputWithHeaderFB
              id="phoneNumber"
              nameInput="phoneNumber"
              nameLabel="Phone Number"
              type="number"
              placeholder="Example: 081234567890"
              value={formData.phoneNumber}
              onChange={handleNumber}
            />
            <Button
              type="submit"
              className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-xl"
            >
              Submit Address
            </Button>
          </form>
          <div className="w-9/12 flex flex-col ps-4">
            <div className="grid grid-cols-2 grid-rows-1 gap-3 mb-5 justify-between">
              <CardText
                heading="11 Downing Street"
                upperText="South Jakarta"
                middleText="DKI Jakarta, Indonesia 12345"
                lowerText="081234567890"
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
