import React from "react";
import Lottie from "lottie-react";
import Animation from "../../../assets/happy.json";

export default function CompanyDetails() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex flex-row">
        <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 class="text-gray-900 dark:text-white text-5xl font-semibold mb-5">
            About Us
          </h1>
          <p class="text-lg font-normal text-gray-800 dark:text-gray-400 mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            similique exercitationem iure in deleniti cumque vel velit, fugit
            laborum non amet. Totam rerum aliquam saepe quis sit fugiat, sunt
            incidunt voluptates perferendis accusantium vel recusandae minus rem
            cum maxime molestiae illum error est nobis unde necessitatibus
            deserunt ratione? Totam, consectetur.
          </p>
          <p class="text-lg font-normal text-gray-800 dark:text-gray-400 mb-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
            voluptatibus accusantium nihil reiciendis modi itaque soluta unde
            nobis consequuntur aperiam corrupti necessitatibus asperiores fuga
            nulla?
          </p>
          <a
            href="#"
            class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Read more
          </a>
        </div>
        <div className="bg-white dark:bg-gray-900 ps-10">
          <div style={{ width: 500, height: 500 }}>
            <Lottie animationData={Animation} />
          </div>
        </div>
      </div>
    </section>
  );
}
