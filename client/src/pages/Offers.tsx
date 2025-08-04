import { useState } from "react";
import test from "../assets/bg.jpg";

/* need work */
function Offers() {
  const [offers, setOffers] = useState<boolean>(false);

  return (
    <main className="offers min-h-[100vh] bg-gray-800">
      <section className="offers__container py-[100px] w-full mx-auto max-w-6xl">
        <div className="offers__header text-center text-white p-8">
          <h1>Our Offers</h1>
          <p>
            Enjoy special discounts and exclusive deals to enhance your
            Vietnamese cusine experience.
          </p>
        </div>

        <div className="offers__contents flex flex-col justify-center items-center text-white py-8 px-5 gap-9">
          <div className="offers__contents-header grid grid-cols-2 text-lg gap-1">
            <button
              className={`border rounded-md px-4 py-2 border-gray-600 ${
                offers ? "" : "bg-gradient-to-r from-orange-400  to-red-500"
              }`}
              onClick={() => setOffers(false)}
            >
              Current Offers
            </button>
            <button
              className={`border rounded-md px-4 py-2 border-gray-600 ${
                offers ? "bg-gradient-to-r from-orange-400  to-red-500" : ""
              }`}
              onClick={() => setOffers(true)}
            >
              Loyalty Program
            </button>
          </div>

          {/* <div className="Offers__contents-items grid grid-cols-2 gap-4">
            <div className="offers__contents-item border border-gray-600">
              <div className="relative">
                <img
                  loading="lazy"
                  src="https://makeyourasia.com/templates/yootheme/cache/aa/1-aa96c596.jpeg"
                  alt=""
                  className="h-[200px] w-full absolute object-cover"
                />

                <div className="flex flex-col items-center justify-between h-[200px] relative z-10 p-3 bg-black bg-opacity-50">
                  <span className="flex justify-between w-full">
                    <p className="bg-red-600 px-1 rounded-lg text-sm font-semibold">
                      popular
                    </p>
                    <p className="bg-orange-400 px-3 rounded-md text-black">
                      15% OFF
                    </p>
                  </span>
                  <span className="w-full font-bold">
                    <h1>Student Special</h1>
                  </span>
                </div>
              </div>

              <div className="p-4 grid grid-cols-1 gap-2">
                <p className="text-gray-300">
                  Show your valid student ID to receive 15% off your entire
                  order. Perfect for lunch breaks or study session!
                </p>
                <span className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">
                    Promo Code:{" "}
                    <span className="text-orange-500">STUDENT15</span>
                  </p>
                  <p className="text-gray-500">
                    Valid until:{" "}
                    <span className="text-gray-300">No expiration</span>
                  </p>
                </span>
                <hr className="border-gray-600" />

                <div>
                  <p className="text-gray-500">Conditions:</p>
                  <ul className="text-gray-300 px-5 list-disc">
                    <li>Valid student ID required</li>
                    <li>Dine-in only</li>
                    <li>Cannot be combined with other offers</li>
                    <li>Not valid on Weekends</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="offers__contents-item border border-gray-600">
              <div className="relative">
                <img
                  loading="lazy"
                  src="https://farm8.staticflickr.com/7457/9132698028_f54d5bcf96_b.jpg"
                  alt=""
                  className="h-[200px] w-full absolute object-cover"
                />

                <div className="flex flex-col items-center justify-between h-[200px] relative z-10 p-3 bg-black bg-opacity-50">
                  <span className="flex justify-between w-full">
                    <p className="bg-red-600 px-1 rounded-lg text-sm font-semibold">
                      Best Value
                    </p>
                    <p className="bg-orange-400 px-3 rounded-md text-black">
                      $9.99
                    </p>
                  </span>
                  <span className="w-full font-bold">
                    <h1>Lunch Set Menu</h1>
                  </span>
                </div>
              </div>

              <div className="p-4 grid grid-cols-1 gap-2">
                <p className="text-gray-300">
                  Enjoy a hearty pho bowl, set dish, and a soft drink for a
                  special price. Available weekdays between 11AM and 2PM
                </p>
                <span className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">
                    Promo Code:{" "}
                    <span className="text-orange-500">No code needed</span>
                  </p>
                  <p className="text-gray-500">
                    Valid until: <span className="text-gray-300">Ongoing</span>
                  </p>
                </span>
                <hr className="border-gray-600" />

                <div>
                  <p className="text-gray-500">Conditions:</p>
                  <ul className="text-gray-300 px-5 list-disc">
                    <li>Monday to Friday, 11AM-2PM</li>
                    <li>Dine-in only</li>
                    <li>Selected pho varieties only</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="offers__contents-item border border-gray-600">
              <div className="relative">
                <img
                  loading="lazy"
                  src={test}
                  alt=""
                  className="h-[200px] w-full absolute object-cover"
                />

                <div className="flex flex-col items-center justify-between h-[200px] relative z-10 p-3 bg-black bg-opacity-50">
                  <span className="flex justify-between w-full">
                    <p className="bg-orange-400 px-3 rounded-md text-black">
                      Save 20%
                    </p>
                  </span>
                  <span className="w-full font-bold">
                    <h1>Family Bundle</h1>
                  </span>
                </div>
              </div>

              <div className="p-4 grid grid-cols-1 gap-2">
                <p className="text-gray-300">
                  Feed the whole family with our special bundle: 4 pho bowls, 2
                  side dishes, and 4 drinks at a discounted price.
                </p>
                <span className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">
                    Promo Code:{" "}
                    <span className="text-orange-500">FAMILY20</span>
                  </p>
                  <p className="text-gray-500">
                    Valid until: <span className="text-gray-300">Ongoing</span>
                  </p>
                </span>
                <hr className="border-gray-600" />

                <div>
                  <p className="text-gray-500">Conditions:</p>
                  <ul className="text-gray-300 px-5 list-disc">
                    <li>Valid for groups of 4 or more</li>
                    <li>Dine-in only</li>
                    <li>Available all week</li>
                    <li>Advance reservation recommended</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="offers__contents-item border border-gray-600">
              <div className="relative">
                <img
                  loading="lazy"
                  src="https://st2.depositphotos.com/1044234/5212/i/450/depositphotos_52128155-stock-photo-table-setting-for-celebration.jpg"
                  alt=""
                  className="h-[200px] w-full absolute object-cover"
                />

                <div className="flex flex-col items-center justify-between h-[200px] relative z-10 p-3 bg-black bg-opacity-50">
                  <span className="flex justify-between w-full">
                    <p className="bg-red-600 px-1 rounded-lg text-sm font-semibold">
                      Limited Time
                    </p>
                    <p className="bg-orange-400 px-3 rounded-md text-black">
                      Buy 1 Get 1 Free
                    </p>
                  </span>
                  <span className="w-full font-bold">
                    <h1>Happy Hour</h1>
                  </span>
                </div>
              </div>

              <div className="p-4 grid grid-cols-1 gap-2">
                <p className="text-gray-300">
                  Buy one appetizer, get one free during our happy hour. Plus,
                  enjoy discounted drinks and exclusive small plates!
                </p>
                <span className="flex justify-between items-center">
                  <p className="text-gray-500 text-sm">
                    Promo Code:{" "}
                    <span className="text-orange-500">No code needed</span>
                  </p>
                  <p className="text-gray-500">
                    Valid until: <span className="text-gray-300">Ongoing</span>
                  </p>
                </span>
                <hr className="border-gray-600" />

                <div>
                  <p className="text-gray-500">Conditions:</p>
                  <ul className="text-gray-300 px-5 list-disc">
                    <li>Monday to Thursday, 4PM-6PM</li>
                    <li>Equal or lesser value item free</li>
                    <li>Dine-in only</li>
                    <li>Selected appetizers only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="offers__loyalty w-full max-w-6xl">
            <div className="flex justify-center items-center gap-3 p-4">
              <img src="" alt="" />

              <div>
                <h1 className="text-lg">Pho Viet Loyalty Program</h1>
                <p>
                  Join our loyalty program and earn rewards with every vist! The
                  more you dine with us, the more benefits you unlock. Points
                  are earned for every dollar spent and can be redeemed for
                  special offers, free items, and exclusive experience.
                </p>
                <button>Join Now</button>
              </div>
            </div>

            {/* needed work */}
            <div>
              <h1 className="text-lg">Membership Tiers & Benefits</h1>
              
              <div>
                <div>
                  <h1>Bronze Tier</h1>
                  <p>Requirements: Join the program</p>

                  <div>
                    <h1>Benefits:</h1>
                    <ul>

                    </ul>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Offers;
