import React, { useEffect, useState } from "react"
import { faRefresh, faSearch } from "@fortawesome/free-solid-svg-icons"
import CardPictureTileSmall from "../../../shared/components/CardPictureTileSmall"
import {
  fetchMerchandises,
  fetchProductsByType,
  fetchProductsByCategory,
  fetchProductsByName,
} from "../../../redux/features/productSlice"
import { useDispatch, useSelector } from "react-redux"
import convertEnum from "../../../constants/convertEnum"
import TextInputForm from "../../../shared/components/TextInputForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Accordion, Label, Radio } from "flowbite-react"
import Animation from "../../../assets/nothing.json"
import EmptyContentSmall from "../../../shared/components/EmptyContentSmall"

export default function DiscoverProductList({ merchandises }) {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const { paging: totalPages } = useSelector((state) => state.merchandises)

  useEffect(() => {
    dispatch(fetchMerchandises({ page: currentPage }))
  }, [dispatch, currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const [form, setForm] = useState({
    search: "",
  })

  const handleKeyboardChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
    console.log(form)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(
      fetchProductsByName({ productName: form.search, page: currentPage })
    )
    console.log("Searching:", form.search)
  }

  const resetSearchFilter = () => {
    setForm({
      search: "",
    })
    dispatch(fetchMerchandises({ page: currentPage }))
  }

  const handleCategoryChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
    console.log("SELECTED RADIO (CATEGORY):", form.category)
  }

  const handleTypeChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
    console.log("SELECTED RADIO (TYPE):", form.type)
  }

  const handleFilterByCategory = (category) => {
    dispatch(fetchProductsByCategory({ category: category, page: currentPage }))
    console.log("CATEGORY:", category)
  }

  const handleFilterByType = (type) => {
    dispatch(fetchProductsByType({ type: type, page: currentPage }))
    console.log("TYPE:", type)
  }

  return (
    <div className="container mx-auto pt-28 pb-8">
      <div className="flex flex-row justify-center mx-10">
        <div className="w-1/4 mx-5 flex flex-col rounded-lg">
          <form
            className="flex flex-row justify-between"
            onSubmit={handleSearch}
          >
            <TextInputForm
              type="text"
              id="search"
              name="search"
              placeholder="Search items..."
              onChange={handleKeyboardChange}
              value={form.search}
            />
            <div className="p-2 mb-6 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-center hover:cursor-pointer text-white">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div
              className="p-2 mb-6 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-center hover:cursor-pointer text-white"
              onClick={resetSearchFilter}
            >
              <FontAwesomeIcon icon={faRefresh} />
            </div>
          </form>
          <Accordion className="bg-white">
            <Accordion.Panel>
              <Accordion.Title>Filter by category:</Accordion.Title>
              <Accordion.Content>
                <fieldset className="flex max-w-md flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Radio
                      id=""
                      name="category"
                      value=""
                      defaultChecked
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="">All Categories</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="AUDIO"
                      name="category"
                      value="AUDIO"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="AUDIO">Audio</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="COSPLAY"
                      name="category"
                      value="COSPLAY"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="COSPLAY">Cosplay</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="FASHION"
                      name="category"
                      value="FASHION"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="FASHION">Fashion</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="FIGURES"
                      name="category"
                      value="FIGURES"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="FIGURES">Figures, Plushies & Dolls</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="GAMES"
                      name="category"
                      value="GAMES"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="GAMES">Games</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="GOODS"
                      name="category"
                      value="GOODS"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="GOODS">Goods</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="ILLUSTRATION"
                      name="category"
                      value="ILLUSTRATION"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="ILLUSTRATION">Illustration</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="MUSIC"
                      name="category"
                      value="MUSIC"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="MUSIC">Music</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="NOVEL_BOOKS"
                      name="category"
                      value="NOVEL_BOOKS"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="NOVEL_BOOKS">Novel & Books</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="PHOTOGRAPH"
                      name="category"
                      value="PHOTOGRAPH"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="PHOTOGRAPH">Photograph</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="SOFTWARE_HARDWARE"
                      name="category"
                      value="SOFTWARE_HARDWARE"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="SOFTWARE_HARDWARE">
                      Software & Hardware
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="VIDEO"
                      name="category"
                      value="VIDEO"
                      onChange={handleCategoryChange}
                    />
                    <Label htmlFor="VIDEO">Video</Label>
                  </div>
                </fieldset>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Filter by type:</Accordion.Title>
              <Accordion.Content>
                <fieldset className="flex max-w-md flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <Radio
                      id=""
                      name="type"
                      value=""
                      defaultChecked
                      onChange={handleTypeChange}
                    />
                    <Label htmlFor="">All Types</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="DIGITAL"
                      name="type"
                      value="DIGITAL"
                      onChange={handleTypeChange}
                    />
                    <Label htmlFor="DIGITAL">Digital</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="PHYSICAL"
                      name="type"
                      value="PHYSICAL"
                      onChange={handleTypeChange}
                    />
                    <Label htmlFor="PHYSICAL">Physical</Label>
                  </div>
                </fieldset>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="w-3/4 flex flex-col ps-4">
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-semibold mb-6">Discover</h1>
          </div>
          {merchandises.length === 0 ? (
            <EmptyContentSmall
              title={"Nothing to show here..."}
              middleText={
                "Try changing your filters or reset your search first, to make sure the product you want is available."
              }
              lowerText={"Or perhaps, there's nothing to sell in here..."}
              animation={Animation}
            />
          ) : (
            <div className="grid grid-cols-4 grid-rows-1 gap-3 mb-5">
              {merchandises.map((merchandise) => (
                <CardPictureTileSmall
                  key={merchandise.id}
                  image={
                    merchandise.image
                      ? merchandise.image.path
                      : "https://ik.imagekit.io/muffincrunchy/oeuvre-images/user-picture/default_picture.jpg"
                  }
                  category={convertEnum[merchandise.category]}
                  name={merchandise.name}
                  seller="Mihoyo"
                  price={merchandise.price}
                />
              ))}
            </div>
          )}
          <div className="flex flex-row gap-2 mt-6 justify-end">
            {[...Array(totalPages.totalPages)].map((_, index) => (
              <div
                className={
                  currentPage === index + 1
                    ? `p-2 cursor-pointer rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold`
                    : `p-2 cursor-pointer rounded-lg bg-white hover:bg-gray-100 text-gray-600`
                }
                key={index}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
