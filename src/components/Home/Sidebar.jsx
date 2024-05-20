export const Sidebar = ({ items, onSelect }) => {
  return (
    <div className=" w-full md:w-72 h-full">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="px-5 py-6 hover:bg-red-700 hover:text-white cursor-pointer border-x rounded-s-full active"
            onClick={() => onSelect(item)}
          >
            <div className="flex">
              <div className="pr-8 pl-3">
                <img
                  src={item.icon}
                  alt="icon"
                  width={50}
                  height={45}
                  className=" hover:text-white"
                />
              </div>
              <div>
                <p className="text-xl font-bold pt-3">{item.name}</p>
                {/*  <p className=" text-base font-semibold">{item.title}</p>  */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
