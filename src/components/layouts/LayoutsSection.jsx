import { forwardRef } from "react";

const LayoutsSection = forwardRef((props, ref) => {
  const { styleContainer, styleSection, children } = props;
  return (
    <div className={`${styleSection} py-[40px] overflow-hidden`} ref={ref}>
      <div className={`container max-w-5xl px-4 lg:px-0 ${styleContainer}`}>{children}</div>
    </div>
  );
});

LayoutsSection.displayName = "layouts section";

export default LayoutsSection;
