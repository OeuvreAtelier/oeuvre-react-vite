import React from "react"
import Lottie from "lottie-react"
import Animation from "../../../assets/happy.json"

export default function CompanyDetails() {
  return (
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex flex-row">
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-4">
          <h1 class="xxxl-semibold-black mb-5">Who are we?</h1>
          <p class="md-black mb-2">
            OEUVRE is a dynamic and innovative company specializing in the
            trading and selling of anime goods and products, catering to the
            ever-growing global community of anime enthusiasts. Established with
            a passion for anime culture, OEUVRE offers an extensive range of
            merchandise, including physical items such as figurines, posters,
            clothing, and accessories, as well as digital products like e-books,
            exclusive digital art, and virtual experiences. The company's online
            platform provides a seamless shopping experience, with a
            user-friendly interface and secure payment options, ensuring that
            fans can easily access their favorite anime-related items from
            anywhere in the world.
          </p>
          <p class="md-black mb-6">
            In addition to its diverse product offerings, OEUVRE actively
            engages with the anime community through various initiatives and
            events. The company hosts online and in-person conventions, art
            competitions, and fan meet-ups, creating opportunities for fans to
            connect and share their love for anime. OEUVRE also collaborates
            with popular anime studios and artists to release exclusive,
            limited-edition merchandise, further enhancing its appeal and
            reputation among collectors and enthusiasts. With its commitment to
            quality, customer satisfaction, and community building, OEUVRE has
            established itself as a leading name in the anime goods market,
            continuously striving to bring the best of anime culture to fans
            worldwide.
          </p>
        </div>
        <div className="bg-white ps-10">
          <div style={{ width: 500, height: 500 }}>
            <Lottie animationData={Animation} />
          </div>
        </div>
      </div>
    </section>
  )
}
