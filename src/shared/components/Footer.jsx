import React from "react";
import LinkText from "./LinkText";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Start selling on OEUVRE
            </h2>
            <ul className="sm-lightgray">
              <LinkText href="#" text="OEUVRE First Step Guide" />
              <LinkText href="#" text="Listing an Item" />
              <LinkText href="#" text="OEUVRE Apps (expanded features)" />
              <LinkText href="#" text="Anshin OEUVRE Pack" />
              <LinkText href="#" text="Proxy Shipping & Warehouse Service" />
              <LinkText href="#" text="Packaging Guidelines" />
              <LinkText href="#" text="Consignment Sales" />
              <LinkText href="#" text="Copyright Policies Regarding Derivative Works" />
              <LinkText href="#" text="OEUVRE Camp" />
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Shop on OEUVRE
            </h2>
            <ul className="sm-lightgray">
              <LinkText href="#" text="About OEUVRE" />
              <LinkText href="#" text="Shopping Guide" />
              <LinkText href="#" text="Payment Methods" />
              <LinkText href="#" text="Transaction Flow" />
              <LinkText href="#" text="Warehouse Combined Shipping" />
              <LinkText href="#" text="Web Exhibitions by OEUVRE" />
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Support
            </h2>
            <ul className="sm-lightgray">
              <LinkText href="#" text="Announcements" />
              <LinkText href="#" text="FAQ" />
              <LinkText href="#" text="Contact OEUVRE Support" />
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Our Socials
            </h2>
            <ul className="sm-lightgray">
              <LinkText href="#" text="X (Twitter)" />
              <LinkText href="#" text="Pixiv" />
              <LinkText href="#" text="Instagram" />
              <LinkText href="https://youtu.be/dQw4w9WgXcQ" text="YouTube" />
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 mb-5 bg-gray-100 rounded-lg md:items-center md:justify-between">
          <span className="sm-lightgray">
            © 2024 <a href="https://booth.pm/">OEUVRE</a>. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
