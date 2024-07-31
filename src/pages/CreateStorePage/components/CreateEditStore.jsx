import Lottie from "lottie-react"
import React, { useEffect, useState } from "react"
import CreateStore from "../../../assets/create-store.json"
import { Button, Label, Radio } from "flowbite-react"
import TextAreaWithHeaderFB from "../../../shared/components/TextAreaWithHeaderFB"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { fetchAddressesByUserId } from "../../../redux/features/addressSlice"
import TextButton from "../../../shared/components/TextButton"
import AddressForm from "../../AddressesPage/components/AddressForm"
import { createStore, updateStore } from "../../../redux/features/storeSlice"
import { useAuth } from "../../../context/AuthContext"
import { registerArtist } from "../../../redux/features/profileSlice"

export default function CreateEditStore({ address }) {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()
  const [isModalOpen, setModalOpen] = useState(false)
  const { logout } = useAuth()

  const handleOpenModal = () => {
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalOpen(false)
    dispatch(fetchAddressesByUserId(state.artist.id))
  }

  useEffect(() => {
    // const token = secureLocalStorage.getItem("token")
    // console.log("Token:", token)
    if (state !== null) {
      dispatch(fetchAddressesByUserId(state.artist.id))
      if (state.address) {
        console.log("Store to be updated:", state.store)
        setFormData({
          id: state.store.id,
          userId: state.store.user.id,
          addressId: state.store.address.id,
          description: state.store.description,
          pixiv: state.store.pixiv,
          twitter: state.store.twitter,
        })
      } else {
        console.log("Store to be created:", state.store)
        setFormData({
          userId: state.artist.id,
          addressId: "",
          description: "",
          pixiv: "",
          twitter: "",
        })
      }
    } else {
      navigate("/my-store")
    }
  }, [navigate, state])

  const handleRadioChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log("Form:", formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    console.log("Form:", formData)
  }

  const handleNumber = (event) => {
    const { name, value } = event.target
    const updatedValue =
      name === "pixiv" && value < 0 && event.replace(/[^0-9]/g, "") ? 0 : value
    setFormData({
      ...formData,
      [name]: updatedValue,
    })
    console.log("Form:", formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const action =
        formData.id === undefined
          ? createStore(formData)
          : updateStore(formData)
      await dispatch(action).unwrap()

      if (formData.id === undefined) {
        await handleLogout()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handleLogout = async () => {
    await logout()
    navigate("/login")
  }

  return (
    <>
      <AddressForm isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
        <div className="mt-40 mb-28 w-full max-w-4xl bg-white border border-gray-200 pt-6 pb-12 pe-12 ps-4 flex flex-row rounded-3xl">
          <div className="bg-white w-2/5 flex flex-col justify-start items-center text-center mx-4">
            <div style={{ width: 250, height: 250 }}>
              <Lottie animationData={CreateStore} />
            </div>
            <h1 className="lg-semibold-black mt-1">
              Start selling products with us!
            </h1>
            <p className="md-black mt-2 mb-4">
              You can do what you love and make money at the same time! Please
              add your address first to create your store.
            </p>
            <TextButton
              btnName={"Create New Address"}
              onClick={handleOpenModal}
              btnColor={"bg-sky-600"}
              textColor={"text-white"}
              hoverColor={"bg-sky-700"}
            />
          </div>
          <div className="flex flex-col w-3/5">
            <h1 className="xl-semibold-black mx-4 mt-4">Create Store</h1>
            <form
              className="flex w-full flex-col gap-4 pt-6 px-4"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <fieldset className="flex max-w-md flex-col gap-4">
                  <Label
                    htmlFor="addressId"
                    className="block sm-semibold-gray -mt-3"
                  >
                    Select an address:
                  </Label>
                  {address.length === 0 ? (
                    <p className="text-white py-2 ps-4 bg-red-500 rounded-lg">
                      No address found, you can create an address first.
                    </p>
                  ) : (
                    <div className="flex flex-col gap-2 -mt-2">
                      {address.map((selectedAddress) => (
                        <div
                          className="flex items-center gap-2"
                          onChange={handleRadioChange}
                        >
                          <Radio
                            id={selectedAddress.id}
                            value={selectedAddress.id}
                            name="addressId"
                          />
                          <Label
                            htmlFor={selectedAddress.id}
                            className="sm-black"
                          >
                            {selectedAddress.detail}, {selectedAddress.city},{" "}
                            {selectedAddress.state} {selectedAddress.postalCode}
                            , {selectedAddress.country}
                          </Label>
                        </div>
                      ))}
                    </div>
                  )}
                </fieldset>
              </div>
              <TextAreaWithHeaderFB
                id="description"
                nameInput="description"
                nameLabel="Store Description"
                placeholder="Example: This store was established in 2020 when the pandemic hits, and now we are the #1 anime store in Indonesia, etc..."
                value={formData.description}
                onChange={handleChange}
              />

              <TextInputWithHeaderFB
                id="pixiv"
                nameInput="pixiv"
                nameLabel="Pixiv ID"
                type="number"
                placeholder="Example: 123456789"
                value={formData.pixiv}
                onChange={handleNumber}
              />
              <TextInputWithHeaderFB
                id="twitter"
                nameInput="twitter"
                nameLabel="Twitter Username"
                type="text"
                placeholder="Example: taaarannn"
                value={formData.twitter}
                onChange={handleChange}
              />
              <p className="sm-lightgray">
                After creating your store, you will be logged out for a while
                and you can log in again.
              </p>
              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-xl"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
