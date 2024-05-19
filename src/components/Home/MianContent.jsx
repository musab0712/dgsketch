const MainContent = ({ content }) => {
  return (
    <>
      <div className="md:px-8 flex h-full flex-col md:flex-row ">
        <div className="w-full pt-10  md:pt-20 md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className=" text-red-700 text-4xl font-bold py-4">
            {content.name}
          </h1>
          <p>{content.description}</p>
        </div>
        <div className=" w-full md:w-1/2 p-5 flex justify-center">
          <img src={content.path} alt="industries" />
        </div>
      </div>
    </>
  );
};

export default MainContent;
