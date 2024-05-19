export const Sidebar = ({ items, onSelect }) => {
  return (
    <div className=" w-full md:w-72 h-full bg-gray-800 text-white">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="p-4 hover:bg-gray-700 cursor-pointer"
            onClick={() => onSelect(item)}
          >
            <div className="flex">
              <div className="pr-8 pl-3">
                <img src={item.icon} alt="icon" width={50} height={45} />
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
