/* eslint-disable react/prop-types */
import { SectionWrapper } from "../hoc";

const Services = ({ contents = {} }) => {
  return (
    <div className="mt-28">
      <section>
        <div>
          <div>
            <h1>
              <span>{contents.h_span1}</span> <span>{contents.h_span2}</span>{" "}
              <span>{contents.h_span3}</span>
            </h1>
          </div>
          <p>{contents.h_desc}</p>
          <ul>
            {contents.h_list.map((item, index) => (
              <li key={index} className="flex">
                <img src="" alt="check image" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div>
            <button>Start Your Web Project</button>{" "}
            <button>Request a custom qoute</button>
          </div>
        </div>
        <img src="" alt="Hero image" className="hidden" />
      </section>
      <section>
        <h1>
          <span>{contents.sec_2_span1} </span>{" "}
          <span>{contents.sec_2_span2} </span>
        </h1>
        <p>{contents.sec_2_desc}</p>
        <ul>
          {contents.sec_2_list.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt="icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h1>
          <span>{contents.sec_3_span1}</span>{" "}
          <span>{contents.sec_3_span2}</span>{" "}
          <span>{contents.sec_3_span3}</span>
        </h1>
        <p>{contents.sec_3_desc}</p>
        <ul>
          {
            contents.sec_3_list.map((item, index) => (
              <li key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
};

const ServicesWrapper = SectionWrapper(Services, "services");

export { ServicesWrapper };
