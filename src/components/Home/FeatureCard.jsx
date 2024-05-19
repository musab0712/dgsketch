export function FeatureCard({ title, detail, imgSrc }) {
  return (
    <div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2  w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4 py-8">
      <div className=" flex justify-center">
        <img src={imgSrc} className="w-12 h-12 rounded-lg" />
      </div>
      <div className="px-4 my-6 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-base text-gray-400 font-medium">{detail}</p>
      </div>
    </div>
  );
}
