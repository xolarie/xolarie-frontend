import { SectionWrapper } from "../hoc";
import bolt from "/images/bolt.png";
import { process } from "../constants";

const Process = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 px-8 rounded-3xl border border-[#155DFC] bg-gradient-to-r from-[#F0F6FF] to-[#F9F5FF] flex flex-row gap-4">
        <img src={bolt} />
        <p>Our Process</p>
      </div>
      <p className="text-center text-3xl my-10">
        How we bring your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#155DFC] via-[#8529F3] to-[#E2017C]">
          Vision to life
        </span>{" "}
      </p>
      <ul className="flex flex-row gap-6 overflow-x-scroll">
        {process.map((item, i) => (
          <li key={i} className="relative w-[244px] h-[293px] p-4">
            <h1 className="absolute top-0 right-0 border p-2 px-4 rounded-full shadow-2xl shadow-[#48484826] bg-white">
              {i + 1}
            </h1>
            <div className="w-full h-full border rounded-2xl shadow-2xl shadow-[#48484826] p-4">
              <item.icon
                className="text-5xl text-white p-2 rounded-xl"
                style={{ backgroundColor: item.color }}
              />
              <h4 className="text-xl font-bold mt-8">{item.step}</h4>
              <p className="text-[12px] mt-4">{item.description}</p>
              <p
                    style={{ "--c": item.color }}
  className="
    text-right font-bold text-2xl
    bg-[linear-gradient(to_right,var(--c)_0%,var(--c)_80%,transparent_100%)]
    bg-clip-text text-transparent
  "
              >
                ...
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProcessWrapper = SectionWrapper(Process, "process");
export { ProcessWrapper };
