import test from "../assets/bg.jpg"

function Offers() {
  return (
    <main className="offers min-h-[100vh] bg-gray-800">
      <section className="offers__container py-[100px] w-full mx-auto max-w-6xl">
        <div className="offers__header text-center text-white p-8 bg-slate-400">
          <h1>Our Offers</h1>
          <p>
            Enjoy special discounts and exclusive deals to enhance your
            Vietnamese cusine experience.
          </p>
        </div>

        <div className="offers__contents flex flex-col justify-center items-center text-white py-8 gap-9">
          <div className="offers__contents-header grid grid-cols-2 text-lg gap-1">
            <button className="border rounded-md px-4 py-2">Current Offers</button> 
            <button className="border rounded-md px-4 py-2">Loyalty Program</button> 
          </div>

          <div className="Offers__contents-items grid grid-cols-2 gap-4">
            <div className="offers__contents-item border border-gray-600">
              <div className="relative">
                <img src={test} alt="" className="h-[200px] w-full absolute"/>

                <div className="flex flex-col items-center justify-between h-[200px] relative z-10 p-3">
                    <span className="flex justify-between w-full">
                        <p className="bg-red-600 px-1 rounded-lg text-sm font-semibold">popular</p>
                        <p className="bg-orange-400 px-3 rounded-md text-black">15% OFF</p>
                    </span>
                    <span className="w-full ">
                        <h1>Student Special</h1>
                    </span>
                </div>
              </div>

              <div className="p-4 grid grid-cols-1 gap-2">
                <p>Show your valid student ID to receive 15% off your entire order. Perfect for lunch breaks or study session!</p>
                <span className="flex justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        Promo Code: <span className="text-orange-500">STUDENT15</span>
                    </p>
                    <p>
                        Valid until: No expiration
                    </p>
                </span>
                <hr className="border-gray-600"/>

                <div>
                    <p>Conditions:</p>
                    <ul className="">
                        <li>Valid student ID required</li>
                        <li>Dine-in only</li>
                        <li>Cannot be combined with other offers</li>
                        <li>Not valid on Weekends</li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="offers__contents-item">
              <div>
                <p>picture</p>
                <p>student special</p>
              </div>

              <div>
                <p>Show your valid student ID to receive 15% off your entire order. Perfect for lunch breaks or study session!</p>
                <span>
                    <p>
                        Promo Code: <span className="text-orange-500">STUDENT15</span>
                    </p>
                    <p>
                        Valid until: No expiration
                    </p>
                </span>
                <hr />

                <div>
                    <p>Conditions:</p>
                    <ul>
                        <li>Valid student ID required</li>
                        <li>Dine-in only</li>
                        <li>Cannot be combined with other offers</li>
                        <li>Not valid on Weekends</li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="offers__contents-item">
              <div>
                <p>picture</p>
                <p>student special</p>
              </div>

              <div>
                <p>Show your valid student ID to receive 15% off your entire order. Perfect for lunch breaks or study session!</p>
                <span>
                    <p>
                        Promo Code: <span className="text-orange-500">STUDENT15</span>
                    </p>
                    <p>
                        Valid until: No expiration
                    </p>
                </span>
                <hr />

                <div>
                    <p>Conditions:</p>
                    <ul>
                        <li>Valid student ID required</li>
                        <li>Dine-in only</li>
                        <li>Cannot be combined with other offers</li>
                        <li>Not valid on Weekends</li>
                    </ul>
                </div>
              </div>
            </div>

            <div className="offers__contents-item">
              <div>
                <p>picture</p>
                <p>student special</p>
              </div>

              <div>
                <p>Show your valid student ID to receive 15% off your entire order. Perfect for lunch breaks or study session!</p>
                <span>
                    <p>
                        Promo Code: <span className="text-orange-500">STUDENT15</span>
                    </p>
                    <p>
                        Valid until: No expiration
                    </p>
                </span>
                <hr />

                <div>
                    <p>Conditions:</p>
                    <ul>
                        <li>Valid student ID required</li>
                        <li>Dine-in only</li>
                        <li>Cannot be combined with other offers</li>
                        <li>Not valid on Weekends</li>
                    </ul>
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
