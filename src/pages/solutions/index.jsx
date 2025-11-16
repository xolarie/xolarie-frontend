import { useParams } from "react-router-dom";
import { AiAutomation, CustomSoftware, EcommercePlatforms, Enterprise } from "./Solutions";

const solutionsList = {
  software: CustomSoftware,
  ecommerce: EcommercePlatforms,
  "ai-automation": AiAutomation,
  enterprise: Enterprise,
};

const Solutions = () => {
  const { solutionName } = useParams();
  const SolutionComponent = solutionsList[solutionName];

  if (!SolutionComponent) {
    return <div className="text-center text-red-500 h-[100vh]">Solution Not Found</div>;
  }

  return (
    <div>
      <SolutionComponent />
    </div>
  );
};

export default Solutions;
