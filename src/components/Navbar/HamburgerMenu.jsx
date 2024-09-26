const HamburgerMenu = (props) => {
  const { handleOpen, isOpen } = props;
  return (
    <button onClick={handleOpen} className="flex flex-col gap-2 md:hidden">
      <span
        className={`block bg-white w-10 h-[2px] transition-global ${
          isOpen ? "-rotate-45 origin-top-right" : ""
        } `}
      ></span>
      <span
        className={`block bg-white w-10 h-[2px] transition-global ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block bg-white w-10 h-[2px] transition-global ${
          isOpen ? "rotate-45  origin-bottom-right" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
