import {
  faAudioDescription,
  faPersonBooth,
  faShirt,
  faDollyBox,
  faGamepad,
  faCartFlatbed,
  faDemocrat,
  faMusic,
  faBookJournalWhills,
  faPhotoFilm,
  faFloppyDisk,
  faVideo,
} from "@fortawesome/free-solid-svg-icons"

const categories = [
  { icon: faAudioDescription, text: "Audio", category: "AUDIO" },
  { icon: faPersonBooth, text: "Cosplay", category: "COSPLAY" },
  { icon: faShirt, text: "Fashion", category: "FASHION" },
  { icon: faDollyBox, text: "Figures, Plushies & Dolls", category: "FIGURES" },
  { icon: faGamepad, text: "Games", category: "GAMES" },
  { icon: faCartFlatbed, text: "Goods", category: "GOODS" },
  { icon: faDemocrat, text: "Illustration", category: "ILLUSTRATION" },
  { icon: faMusic, text: "Music", category: "MUSIC" },
  {
    icon: faBookJournalWhills,
    text: "Novels & Books",
    category: "NOVEL_BOOKS",
  },
  { icon: faPhotoFilm, text: "Photograph", category: "PHOTOGRAPH" },
  {
    icon: faFloppyDisk,
    text: "Software & Hardware",
    category: "SOFTWARE_HARDWARE",
  },
  { icon: faVideo, text: "Video", category: "VIDEO" },
]

export default categories
