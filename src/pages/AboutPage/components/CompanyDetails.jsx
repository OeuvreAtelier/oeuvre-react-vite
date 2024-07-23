import React from "react";
import Lottie from "lottie-react";
import Animation from "../../../assets/happy.json";

export default function CompanyDetails() {
  return (
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex flex-row">
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 mb-8">
          <h1 class="text-gray-900 text-5xl font-semibold mb-5">
            About Us
          </h1>
          <p class="lg-black mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            similique exercitationem iure in deleniti cumque vel velit, fugit
            laborum non amet. Totam rerum aliquam saepe quis sit fugiat, sunt
            incidunt voluptates perferendis accusantium vel recusandae minus rem
            cum maxime molestiae illum error est nobis unde necessitatibus
            deserunt ratione? Totam, consectetur.
          </p>
          <p class="lg-black mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
            voluptatibus accusantium nihil reiciendis modi itaque soluta unde
            nobis consequuntur aperiam corrupti necessitatibus asperiores fuga
            nulla?
          </p>
          <a
            href="#"
            class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300"
          >
            Read more
          </a>
        </div>
        <div className="bg-white ps-10">
          <div style={{ width: 500, height: 500 }}>
            <Lottie animationData={Animation} />
          </div>
        </div>
      </div>
    </section>
  );
}
