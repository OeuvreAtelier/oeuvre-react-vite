import React, {useState} from "react";
import CardPictureTileWithButtons from "../../../shared/components/CardPictureTileWithButtons";
import {useDispatch} from "react-redux";
import {deleteProduct, fetchMerchandises} from "../../../redux/features/productSlice";
import FloatingActionButton from "../../../shared/components/FloatingActionButton";
import {useNavigate} from "react-router-dom";
import ConfirmationModal from "../../../shared/components/ConfirmationModal.jsx";
import Lottie from "lottie-react";
import Animation from "../../../assets/empty.json";
import TextButton from "../../../shared/components/TextButton.jsx";

export default function ProductList({artist, merchandises}) {
    const [openModal, setOpenModal] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEdit = (artist, merchandise) => {
        navigate('/register-update', {
            state: {
                merchandise: merchandise,
                artist: artist
            }
        })
    }

    const handleAdd = (artist) => {
        navigate('/register-update', {
            state: {
                artist: artist
            }
        })
    }

    const handleDeleteModal = (id) => {
        setOpenModal(true)
        setDeleteId(id)
    }

    const handleDelete = () => {
        dispatch(deleteProduct(deleteId))
            .unwrap()
            .then(() => {
                dispatch(fetchMerchandises())
            })
            .catch((error) => console.error('Deletion failed:', error));
        setOpenModal(false)
    };


    return (
        <>
            <ConfirmationModal
                show={openModal}
                onClose={() => setOpenModal(false)}
                text="Do you want to delete this merchandise?"
                yes="Yes"
                no="No"
                onYesClick={handleDelete}
                onNoClick={() => setOpenModal(false)}
            />

            {merchandises.length === 0 ? (
                <div className="px-40 mb-10 mx-auto flex flex-row ">
                    <div
                        className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-l-lg">
                        <h1 className="text-gray-900 dark:text-white text-4xl font-semibold mb-5 mt-16">
                            {"There's nothing in here..."}
                        </h1>
                        <p className="text-lg font-normal text-gray-800 dark:text-gray-400 mb-2">
                            {"How about you add some stuff by clicking the button on the bottom after these paragraphs?"}
                        </p>
                        <p className="text-lg font-normal text-gray-800 dark:text-gray-400 mb-6">
                            {"With merchandises available here, you can connect to the entire world by showing off your creative skills, or just selling some items that people loved."}
                        </p>
                        <div
                            onClick={() => handleAdd(artist)}
                            className="hover:cursor-pointer inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Add Merchandise
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-r-lg">
                        <div style={{width: 500, height: 500}}>
                            <Lottie animationData={Animation}/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-200 flex flex-col justify-center items-center mb-10">
                    <FloatingActionButton btnName="Add Merchandise" onClick={() => handleAdd(artist)}/>
                    <div className="grid grid-cols-3 grid-rows-1 gap-8 px-40">
                        {merchandises.map((merchandise) => (
                            <CardPictureTileWithButtons
                                key={merchandise.id}
                                image={
                                    "https://c4.wallpaperflare.com/wallpaper/623/809/137/anime-anime-girls-simple-background-hololive-virtual-youtuber-hd-wallpaper-preview.jpg"
                                }
                                name={merchandise.name}
                                category={merchandise.category ? merchandise.category.category : "Uncategorized"}
                                price={merchandise.price}
                                onEdit={() => handleEdit(artist, merchandise)}
                                onDelete={() => handleDeleteModal(merchandise.id)}
                            />
                        ))}
                    </div>

                </div>
            )}

        </>
    );
}
