const Contain = ({ children }) => {
  return (
    <div
      // className="w-full px-5 md:px-[50] lg:px-[80px] xl:px-[120px] 2xl:px-[150px]"
      className="mx-auto px-5 container"
    >
      {children}
    </div>
  );
};

export default Contain;
