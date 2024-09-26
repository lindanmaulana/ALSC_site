
const LayoutsSection = (props) => {
  const { styleContainer, styleSection, children } = props;
  return (
    <div className={`${styleSection}`}>
      <div className={`container max-w-5xl ${styleContainer}`}>{children}</div>
    </div>
  );
};

export default LayoutsSection;
