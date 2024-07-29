import React, { useEffect, useState } from "react"
import { Button, Label, Select } from "flowbite-react"
import { useLocation, useNavigate } from "react-router-dom"
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB"
import TextAreaWithHeaderFB from "../../../shared/components/TextAreaWithHeaderFB"
import { useDispatch } from "react-redux"
import {
  createProduct,
  updateProduct,
} from "../../../redux/features/productSlice"
import FileUploadButton from "../../../shared/components/FileUploadButton"

export default function AddEditContainer() {
  const [formData, setFormData] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    console.log("State AddEdit:", state)
    if (state !== null) {
      if (state.merchandise) {
        console.log("State to be updated:", state.merchandise)
        setFormData({
          id: state.merchandise.id,
          name: state.merchandise.name,
          category: state.merchandise.category,
          price: state.merchandise.price,
          stock: state.merchandise.stock,
          user_id: state.merchandise.user.id,
          type: state.merchandise.type,
          description: state.merchandise.description,
        })
      } else {
        setFormData({
          name: "",
          category: "",
          price: "",
          stock: "",
          user_id: state.artist.id,
          type: "",
          description: "",
        })
      }
    } else {
      navigate("/my-store")
    }
  }, [navigate, state])

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
      (name === "price" || name === "stock") &&
      value < 0 &&
      event.replace(/[^0-9]/g, "")
        ? 0
        : value
    setFormData({
      ...formData,
      [name]: updatedValue,
    })
    console.log("Form:", formData)
  }

  const handleImage = (event) => {
    setSelectedImage(event.target.files[0])
    console.log("Selected File", event.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      if (formData.id === undefined) {
        if (!selectedImage) {
          alert("Please upload an image!")
          return
        } else {
          handleCreateProduct()
        }
      } else {
        handleUpdateProduct()
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handleCreateProduct = async () => {
    try {
      const data = new FormData()
      console.log("Initial form data:", formData)
      data.append("product", JSON.stringify(formData))
      data.append("image", selectedImage)
      console.log("Appended form data:", data)
      const action = createProduct(data)
      await dispatch(action).unwrap()
      navigate("/my-store")
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  const handleUpdateProduct = async () => {
    try {
      const data = new FormData()
      console.log("Form data to be updated:", formData)
      data.append("product", JSON.stringify(formData))
      if (selectedImage) {
        data.append("image", selectedImage)
      }
      console.log("Appended form data:", data)
      const action = updateProduct(data)
      await dispatch(action).unwrap()
      navigate("/my-store")
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1482160549825-59d1b23cb208?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
      <div className="mt-40 mb-20 w-full max-w-lg bg-white border border-gray-200 p-12 flex flex-col justify-center items-center rounded-3xl">
        {state?.merchandise ? (
          <h1 className="xxl-semibold-black">Edit Product</h1>
        ) : (
          <h1 className="xxl-semibold-black">Add Product</h1>
        )}
        <form
          className="flex w-full flex-col gap-4 pt-6 px-4"
          onSubmit={handleSubmit}
        >
          <TextInputWithHeaderFB
            id="name"
            nameLabel="Name"
            nameInput="name"
            type="text"
            placeholder="Oratrice Mecanique d'Analyse Cardinale"
            value={formData.name}
            onChange={handleChange}
          />
          <div className="-mt-2 mb-1">
            <Label
              htmlFor="category"
              className="block text-sm font-semibold text-gray-700 pb-3"
            >
              Select a category:
            </Label>
            <Select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="pb-3"
            >
              <option value="">Select a category</option>
              <option value="AUDIO">Audio</option>
              <option value="COSPLAY">Cosplay</option>
              <option value="FASHION">Fashion</option>
              <option value="FIGURES">Figures, Plushies & Dolls</option>
              <option value="GAMES">Games</option>
              <option value="GOODS">Goods</option>
              <option value="ILLUSTRATION">Illustration</option>
              <option value="MUSIC">Music</option>
              <option value="NOVEL_BOOKS">Novel & Books</option>
              <option value="PHOTOGRAPH">Photograph</option>
              <option value="SOFTWARE_HARDWARE">Software & Hardware</option>
              <option value="VIDEO">Video</option>
            </Select>
          </div>
          <TextInputWithHeaderFB
            id="price"
            nameInput="price"
            nameLabel="Price (Rp)"
            type="number"
            placeholder="Example: 123000"
            value={formData.price}
            onChange={handleNumber}
          />
          <TextInputWithHeaderFB
            id="stock"
            nameLabel="Stock"
            nameInput="stock"
            type="number"
            placeholder="Example: 45"
            value={formData.stock}
            onChange={handleNumber}
          />
          <div className="-mt-2 mb-4">
            <Label
              htmlFor="type"
              className="block text-sm font-semibold text-gray-700 pb-3"
            >
              Select a type:
            </Label>
            <Select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select a type</option>
              <option value="DIGITAL">Digital</option>
              <option value="PHYSICAL">Physical</option>
            </Select>
          </div>
          <TextAreaWithHeaderFB
            id="description"
            nameLabel="Description"
            nameInput="description"
            placeholder="Describe your product here..."
            value={
                // state?.merchandise
                //   ? JSON.stringify(
                //       state.merchandise.description.description
                //     ).slice(1, -1)
                //   :
                formData.description
            }
            onChange={handleChange}
          />
          <div className="bg-slate-100 w-full h-96 rounded-lg"></div>
          <FileUploadButton
            id="image"
            label="Product Image"
            helper="Upload the image of your product here."
            onChange={handleImage}
          />
          <Button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-xl"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
