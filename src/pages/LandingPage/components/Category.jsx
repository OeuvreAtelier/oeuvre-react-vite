import React from "react";
import { faAdd, faAudioDescription, faBookJournalWhills, faBookSkull, faBox, faCartFlatbed, faDemocrat, faDollyBox, faFloppyDisk, faGamepad, faHeart, faMusic, faPaintBrush, faPersonBooth, faPhotoFilm, faRing, faShirt, faTemperature1, faVideo } from "@fortawesome/free-solid-svg-icons";
import CategoryTiles from "../../../shared/components/CategoryTiles";

export default function Category() {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center pb-16 pt-3">
      <p className="text-3xl font-semibold py-10 tracking-wide text-gray-800 dark:text-white">Categories</p>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 px-4">
        <CategoryTiles icon={faBookSkull} text="Comics" onClick={() => {}}/>
        <CategoryTiles icon={faDemocrat} text="Illustrations" onClick={() => {}}/>
        <CategoryTiles icon={faBookJournalWhills} text="Novels & Books" onClick={() => {}}/>
        <CategoryTiles icon={faCartFlatbed} text="Goods" onClick={() => {}}/>
        <CategoryTiles icon={faShirt} text="Fashion" onClick={() => {}}/>
        <CategoryTiles icon={faRing} text="Accessories" onClick={() => {}}/>
        <CategoryTiles icon={faDollyBox} text="Figures, Plushies & Dolls" onClick={() => {}}/>
        <CategoryTiles icon={faBox} text="3D Models" onClick={() => {}}/>
        <CategoryTiles icon={faMusic} text="Music" onClick={() => {}}/>
        <CategoryTiles icon={faAudioDescription} text="Audio Goods" onClick={() => {}}/>
        <CategoryTiles icon={faGamepad} text="Games" onClick={() => {}}/>
        <CategoryTiles icon={faFloppyDisk} text="Software & Hardware" onClick={() => {}}/>
        <CategoryTiles icon={faTemperature1} text="Source Materials" onClick={() => {}}/>
        <CategoryTiles icon={faVideo} text="Video" onClick={() => {}}/>
        <CategoryTiles icon={faPhotoFilm} text="Photographs" onClick={() => {}}/>
        <CategoryTiles icon={faPersonBooth} text="Cosplay" onClick={() => {}}/>
        <CategoryTiles icon={faPaintBrush} text="Arts" onClick={() => {}}/>
      </div>
    </div>
  );
}
