import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import CardText from "../../../shared/components/CardText"
import ConfirmationModal from "../../../shared/components/ConfirmationModal"
import {
  deleteAddress,
  fetchAddressesByUserId,
} from "../../../redux/features/addressSlice"
import FloatingActionButton from "../../../shared/components/FloatingActionButton"
import Lottie from "lottie-react"
import Animation from "../../../assets/empty.json"

export default function ManageAddresses({ artist, addresses }) {
  const [openModal, setOpenModal] = useState(false)
  const [deleteId, setDeleteId] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAddressesByUserId(artist.id))
  }, [dispatch, artist.id])

  const handleAdd = (artist) => {
    navigate("/address-form", {
      state: {
        artist: artist,
      },
    })
  }

  const handleEdit = (artist, address) => {
    navigate("/address-form", {
      state: {
        address: address,
        artist: artist,
      },
    })
  }

  const handleDeleteModal = (id) => {
    setOpenModal(true)
    setDeleteId(id)
  }

  const handleDelete = () => {
    dispatch(deleteAddress(deleteId))
      .unwrap()
      .then(() => {
        dispatch(fetchAddressesByUserId(artist.id))
      })
      .catch((error) => console.error("Deletion failed:", error))
    setOpenModal(false)
  }

  // const [artist, setArtist] = useState({})
  // const [address, setAddress] = useState({})

  // useEffect(() => {
  //   console.log("State Address:", state)
  //   if (state !== null) {
  //     if (state.address) {
  //       console.log("Address:", state.address)
  //       setFormData({
  //         id: state.address.id,
  //         userId: state.address.user.id,
  //         country: state.address.country,
  //         state: state.address.state,
  //         city: state.address.stock,
  //         detail: state.address.detail,
  //         postalCode: state.address.postalCode,
  //         phoneNumber: state.address.phoneNumber,
  //       })
  //     } else {
  //       setFormData({
  //         userId: state.address.user.id,
  //         country: "",
  //         state: "",
  //         city: "",
  //         detail: "",
  //         postalCode: "",
  //         phoneNumber: "",
  //       })
  //     }
  //   }
  // }, [state])

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   })
  //   console.log("FormData", formData)
  // }

  // const handleNumber = (event) => {
  //   const { name, value } = event.target
  //   const updatedValue =
  //     name === "phoneNumber" && value < 0 && event.replace(/[^0-9]/g, "")
  //       ? 0
  //       : value
  //   setFormData({
  //     ...formData,
  //     [name]: updatedValue,
  //   })
  //   console.log("FormData", formData)
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const action = formData.id === undefined ? handleAdd : handleEdit
  //     await dispatch(action).unwrap()
  //   } catch (error) {
  //     console.error("Error submitting form:", error)
  //   }
  // }

  // const handleAdd = () => {
  //   setArtist(artist)
  //   try {
  //     createAddress(formData)
  //   } catch (error) {
  //     console.error("Error submitting form:", error)
  //   }
  // }

  // const handleEdit = () => {
  //   setArtist(artist)
  //   setAddress(state.address)
  //   try {
  //     updateAddress(formData)
  //   } catch (error) {
  //     console.error("Error submitting form:", error)
  //   }
  // }

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

      {addresses.length === 0 ? (
        <div className="px-40 mb-10 mx-auto flex flex-row">
          <div className="bg-gray-50 border border-gray-200 p-8 rounded-l-lg shadow-md">
            <h1 className="text-gray-800 text-4xl font-semibold mb-5 mt-16">
              {"There's nothing in here..."}
            </h1>
            <p className="text-lg font-normal text-gray-800 mb-2">
              {
                "How about you add some stuff by clicking the button on the bottom after these paragraphs?"
              }
            </p>
            <p className="text-lg font-normal text-gray-800 mb-6">
              {
                "With merchandises available here, you can connect to the entire world by showing off your creative skills, or just selling some items that people loved."
              }
            </p>
            <div
              onClick={() => handleAdd(artist)}
              className="hover:cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300"
            >
              Add Address
            </div>
          </div>
          <div className="bg-white rounded-r-lg shadow-md border border-gray-200">
            <div style={{ width: 500, height: 500 }}>
              <Lottie animationData={Animation} />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-slate-100 flex flex-col justify-center items-center mb-10">
          <FloatingActionButton
            btnName="Add Address"
            onClick={() => handleAdd(artist)}
          />
          <div className="grid grid-cols-5 grid-rows-1 gap-3 mt-28 px-10">
            {addresses.map((address) => (
              <CardText
                key={address.id}
                heading={address.detail}
                upperText={address.city}
                middleText={`${address.state}, ${address.country} ${address.postalCode}`}
                lowerText={address.phoneNumber}
                onEdit={handleEdit}
                onDelete={() => handleDeleteModal(address.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* <div className="container mx-auto pt-28 pb-8">
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
            {addresses.length === 0 ? (
              <div className="text-center">
                <p className="text-lg font-bold">No addresses found</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 grid-rows-1 gap-3 mb-5 justify-between">
                {addresses.map((address) => (
                  <CardText
                    heading={address.detail}
                    upperText={address.city}
                    middleText={`${address.state}, ${address.country} ${address.postalCode}`}
                    lowerText={address.phoneNumber}
                    onEdit={handleEdit}
                    onDelete={() => handleDeleteModal(address.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div> */}
    </>
  )
}
