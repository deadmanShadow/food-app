import React from "react";
const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    description: "(86 dishes)",
    image: "/public/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    description: "(12 break fast)",
    image: "/public/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    description: "(48 dessert)",
    image: "/public/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    description: "(255 Items)",
    image: "/public/images/home/category/img4.png",
  },
];

const Categories = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 my-20 relative">
    <div className='text-left p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white'>
   <p className='text-lg font-bold mb-2'>Explore Specialties</p>
   <h2 className='text-3xl font-extrabold'>Exquisite Selection</h2>
</div>


      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 ">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10"
          >
            <div className="w-full mx-auto flex items-center justify-center">
              <img
                src={item.image}
                alt=""
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5 className="text-[#1E1E1E] font-semibold">{item.title}</h5>
              <p className="text-secondary text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Categories;
