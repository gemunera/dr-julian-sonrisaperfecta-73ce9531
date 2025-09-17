const DoctorTitle = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-white tracking-widest leading-tight uppercase">
          <span className="font-normal">DR.</span>{" "}
          <span className="font-light">JULIÁN PALACIOS</span>
        </h1>
        
        {/* Elegant underline - matches exact text width */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/60 to-transparent transform translate-y-4"></div>
      </div>
    </div>
  );
};

export default DoctorTitle;