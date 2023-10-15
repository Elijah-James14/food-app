import { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  // console.log(data);

  const [foods, setFoods] = useState(data);

  // Filter by type
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category));
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-orange-600 text-orange-600 bg-white hover:bg-orange-600 hover:text-white m-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{food.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
