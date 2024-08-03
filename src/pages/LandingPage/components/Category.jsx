import React from "react"
import {
  faAudioDescription,
  faBookJournalWhills,
  faCartFlatbed,
  faDemocrat,
  faDollyBox,
  faFloppyDisk,
  faGamepad,
  faMusic,
  faPersonBooth,
  faPhotoFilm,
  faShirt,
  faVideo,
} from "@fortawesome/free-solid-svg-icons"
import CategoryTiles from "../../../shared/components/CategoryTiles"

export default function Category() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center pb-6 pt-3">
      <p className="xxxl-semibold-black py-10 tracking-wide">Categories</p>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 px-4">
        <CategoryTiles icon={faAudioDescription} text="Audio" />
        <CategoryTiles icon={faPersonBooth} text="Cosplay" />
        <CategoryTiles icon={faShirt} text="Fashion" />
        <CategoryTiles icon={faDollyBox} text="Figures, Plushies & Dolls" />
        <CategoryTiles icon={faGamepad} text="Games" />
        <CategoryTiles icon={faCartFlatbed} text="Goods" />
        <CategoryTiles icon={faDemocrat} text="Illustrations" />
        <CategoryTiles icon={faMusic} text="Music" />
        <CategoryTiles icon={faBookJournalWhills} text="Novels & Books" />
        <CategoryTiles icon={faPhotoFilm} text="Photograph" />
        <CategoryTiles icon={faFloppyDisk} text="Software & Hardware" />
        <CategoryTiles icon={faVideo} text="Video" />
      </div>
    </div>
  )
}
