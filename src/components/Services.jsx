/* eslint-disable react/prop-types */
import { SectionWrapper } from "../hoc";

const Services = ({ contents = {} }) => {
  return (
    <div className="mt-28">
      {contents.h1}
    </div>
  );
};

const ServicesWrapper = SectionWrapper(Services, "services");

export { ServicesWrapper };