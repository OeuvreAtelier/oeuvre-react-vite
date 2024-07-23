import React from "react";
import CardPictureTile from "../../../shared/components/CardPictureTile";

export default function BestSeller() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center pt-3">
      <p className="xxxl-semibold-black py-10 tracking-wide">Best Seller</p>
      
      <div className="grid grid-cols-4 grid-rows-1 gap-4 px-40">
        <CardPictureTile
          image={"https://genshin.global/wp-content/uploads/2022/06/raiden-shogun-birthday-art-genshinimpact.jpg"}
          imageOnClick=""
          name="The Goddess's Hell"
          category="Illustration"
          categoryOnClick=""
          seller="Kayano Hikatu"
          sellerOnClick=""
          price="125000"
        />
        <CardPictureTile
          image={"https://static.zerochan.net/Arlecchino.full.3705545.jpg"}
          imageOnClick=""
          name="Spirited Away"
          category="Video"
          categoryOnClick=""
          seller="Ghibli Studio"
          sellerOnClick=""
          price="89000"
        />
        <CardPictureTile
          image={"https://c4.wallpaperflare.com/wallpaper/35/918/352/genshin-impact-artwork-clorinde-genshin-impact-anime-anime-girls-hd-wallpaper-preview.jpg"}
          imageOnClick=""
          name="Baldur's Gate 3"
          category="Games"
          categoryOnClick=""
          seller="FromSoftware"
          sellerOnClick=""
          price="538000"
        />
        <CardPictureTile
          image={"https://i.pinimg.com/736x/25/84/ec/2584ec3b93837b5f1c874fb7811e3d6c.jpg"}
          imageOnClick=""
          name="Promise of The World"
          category="Music"
          categoryOnClick=""
          seller="Ghibli Studio"
          sellerOnClick=""
          price="56000"
        />
      </div>
    </div>
  );
}
