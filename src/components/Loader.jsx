const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <img src="/loading-circle.svg" alt="loading" width={50} height={50} />
      <p>Getting your page ready</p>
    </div>
  );
};

export default Loader;
