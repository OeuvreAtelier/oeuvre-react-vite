import React from "react";
import { faAdd, faAudioDescription, faBookJournalWhills, faBookSkull, faBox, faCartFlatbed, faDemocrat, faDollyBox, faFloppyDisk, faGamepad, faHeart, faMusic, faPaintBrush, faPersonBooth, faPhotoFilm, faRing, faShirt, faTemperature1, faVideo } from "@fortawesome/free-solid-svg-icons";
import CategoryTiles from "../../../shared/components/CategoryTiles";

export default function Category() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center pb-6 pt-3">
      <p className="xxxl-semibold-black py-10 tracking-wide">Categories</p>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 px-4">
        <CategoryTiles icon={faAudioDescription} text="Audio" onClick={() => {}}/>
        <CategoryTiles icon={faPersonBooth} text="Cosplay" onClick={() => {}}/>
        <CategoryTiles icon={faShirt} text="Fashion" onClick={() => {}}/>
        <CategoryTiles icon={faDollyBox} text="Figures, Plushies & Dolls" onClick={() => {}}/>
        <CategoryTiles icon={faGamepad} text="Games" onClick={() => {}}/>
        <CategoryTiles icon={faCartFlatbed} text="Goods" onClick={() => {}}/>
        <CategoryTiles icon={faDemocrat} text="Illustrations" onClick={() => {}}/>
        <CategoryTiles icon={faMusic} text="Music" onClick={() => {}}/>
        <CategoryTiles icon={faBookJournalWhills} text="Novels & Books" onClick={() => {}}/>
        <CategoryTiles icon={faPhotoFilm} text="Photograph" onClick={() => {}}/>
        <CategoryTiles icon={faFloppyDisk} text="Software & Hardware" onClick={() => {}}/>
        <CategoryTiles icon={faVideo} text="Video" onClick={() => {}}/>
      </div>
    </div>
  );
}
