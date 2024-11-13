import React, { useState } from 'react';

function Slug() {
  const [pin, setPin] = useState(''); // Initialize pin with an empty string
  const [serviceable, setServiceable] = useState(null); // To track if the pin is serviceable
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  const checkServiceability = async () => {
    if (!pin.trim()) {
      setError('Please enter a pin code');
      return;
    }
    setError('');
    setLoading(true);
    try {
      let response = await fetch('http://localhost:3000/api/page');
      let pinjson = await response.json(); // Assuming this is an array of pins
  
      // Check if the entered pin is in the array of serviceable pins
      if (pinjson.includes(pin)) {
        setServiceable(true); // Pin is serviceable
      } else {
        setServiceable(false); // Pin is not serviceable
      }
  
    } catch (error) {
      console.error('Error fetching pin data:', error);
      setError('An error occurred while checking pin serviceability');
    } finally {
      setLoading(false);
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce product"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              src="https://m.media-amazon.com/images/I/71k-uB4eJOL._SY741_.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia
                microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button className="flex ml-14 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>

              {/* Pin code and check button */}
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input
                  className="px-2 border-2 border-gray-400 rounded-md"
                  type="text"
                  placeholder="Enter your pin"
                  value={pin}
                  onChange={onChangePin} // Use the onChangePin function
                />
                <button
                  onClick={checkServiceability}
                  className="ml-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                >
                  {loading ? 'Checking...' : 'Check'}
                </button>
              </div>

              {/* Display serviceability result */}
              {error && <p className="text-red-500 mt-4">{error}</p>}
              {serviceable === true && <p className="text-green-500 mt-4">This pin is serviceable!</p>}
              {serviceable === false && <p className="text-red-500 mt-4">Sorry, we don't deliver to this pin.</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slug;
