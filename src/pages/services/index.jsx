import { useParams } from "react-router-dom";
import { Animations, AppDev, BackendDev, GamingDev, ProjectsMgt, RoboticsAndAi, UiuxDesign, WebDev } from "./Services";

const servicesList = {
  "web-development": WebDev,
  "app-development": AppDev,
  "backend-development": BackendDev,
  "ui-ux": UiuxDesign,
  "gaming": GamingDev,
  "robotics-ai": RoboticsAndAi,
  "project-management": ProjectsMgt,
  "animations": Animations,
};

const Services = () => {
  const { serviceName } = useParams();
  const ServiceComponent = servicesList[serviceName];


  if (!ServiceComponent) {
    return <div className="text-center text-red-500 h-[100vh]">Service Not Found</div>;
  }

  return (
    <div>
      <ServiceComponent />
    </div>
  );
};

export default Services;
