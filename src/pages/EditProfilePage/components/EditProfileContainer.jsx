import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Datepicker, Label} from "flowbite-react";
import TextInputWithHeaderFB from "../../../shared/components/TextInputWithHeaderFB";
import {updateArtist} from "../../../redux/features/profileSlice.js";

export default function EditProfileContainer() {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {state} = useLocation();

    useEffect(() => {
        if (state !== null) {
            setFormData({
                id: state.artist.id,
                name: state.artist.name,
                birthDate: state.artist.birthDate,
                phoneNo: state.artist.phoneNo,
                email: state.artist.email
            });
        } else {
            navigate("/my-store");
        }
        console.log(state)
    }, [navigate, state]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const action = updateArtist(formData);
            await dispatch(action).unwrap();
            navigate("/my-store");
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div
            className="bg-fixed flex justify-center items-center min-h-screen bg-[url('https://images.unsplash.com/photo-1482160549825-59d1b23cb208?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-gray-400 bg-blend-multiply">
            <div
                className="mt-40 mb-20 w-full max-w-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-12 flex flex-col justify-center items-center rounded-3xl">
                <h1 className="text-2xl font-semibold">Edit Profile</h1>
                <form
                    className="flex w-full flex-col gap-4 pt-6 px-4"
                    onSubmit={handleSubmit}
                >
                    <TextInputWithHeaderFB
                        id="name"
                        nameLabel="Name"
                        nameInput="name"
                        type="text"
                        placeholder="Rick Astley"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextInputWithHeaderFB
                        id="birthDate"
                        nameLabel="Date of Birth"
                        nameInput="birthDate"
                        type="text"
                        placeholder="YYYY-MM-DD"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                    <TextInputWithHeaderFB
                        id="phoneNo"
                        nameInput="phoneNo"
                        nameLabel="Phone Number"
                        type="text"
                        placeholder="08765432100"
                        value={formData.phoneNo}
                        onChange={handleChange}
                    />
                    <TextInputWithHeaderFB
                        id="email"
                        nameLabel="Email Address"
                        nameInput="email"
                        type="text"
                        placeholder="myartist@booth.art"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
