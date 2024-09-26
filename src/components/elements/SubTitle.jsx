
const SubTitle = (props) => {
  const { children } = props;
  return (
    <h3 className="relative mb-10 text-xl font-semibold text-secondary group">
      {children}
      <span className="absolute -bottom-2 left-0 transition-global group-hover:w-20 block w-10 h-[2px] bg-primary"></span>
    </h3>
  );
};

export default SubTitle;
