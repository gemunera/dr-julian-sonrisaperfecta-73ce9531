const DoctorTitle = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wider leading-tight">
        <span className="font-normal">Dr.</span>{" "}
        <span className="font-extralight">Julián Palacios</span>
      </h1>
      
      {/* Elegant underline */}
      <div className="w-48 md:w-56 lg:w-64 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
    </div>
  );
};

export default DoctorTitle;