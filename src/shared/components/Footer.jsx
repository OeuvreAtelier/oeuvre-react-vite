import React from "react";
import LinkText from "./LinkText";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Start selling on BOOTH
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <LinkText href="#" text="BOOTH First Step Guide" />
              <LinkText href="#" text="Listing an Item" />
              <LinkText href="#" text="BOOTH Apps (expanded features)" />
              <LinkText href="#" text="Anshin BOOTH Pack" />
              <LinkText href="#" text="Proxy Shipping & Warehouse Service" />
              <LinkText href="#" text="Packaging Guidelines" />
              <LinkText href="#" text="Consignment Sales" />
              <LinkText href="#" text="Copyright Policies Regarding Derivative Works" />
              <LinkText href="#" text="BOOTH Camp" />
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Shop on BOOTH
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <LinkText href="#" text="About BOOTH" />
              <LinkText href="#" text="Shopping Guide" />
              <LinkText href="#" text="Payment Methods" />
              <LinkText href="#" text="Transaction Flow" />
              <LinkText href="#" text="Warehouse Combined Shipping" />
              <LinkText href="#" text="Web Exhibitions by BOOTH" />
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Support
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <LinkText href="#" text="Announcements" />
              <LinkText href="#" text="FAQ" />
              <LinkText href="#" text="Contact BOOTH Support" />
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Our Socials
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <LinkText href="#" text="X (Twitter)" />
              <LinkText href="#" text="Pixiv" />
              <LinkText href="#" text="Instagram" />
              <LinkText href="https://youtu.be/dQw4w9WgXcQ" text="YouTube" />
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 mb-5 bg-gray-100 dark:bg-gray-700 rounded-lg md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a href="https://booth.pm/">BOOTH</a>. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
