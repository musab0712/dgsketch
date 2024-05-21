import loading from "../assets/img/loading.gif";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" inline-block w-20 h-20" role="status">
        <img src={loading} alt="loading..." width={100} height={100} />
      </div>
    </div>
  );
};

export default Loading;
