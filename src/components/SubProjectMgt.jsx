import { subProjectMgt } from "../constants"

const SubProjectMgt = () => {
    const alignTextRight = (index) => {
        return index % 2 === 0;
    }
    return (
        <div>
            <ul>
                {subProjectMgt.map((sub, index) => (
                    <li key={index}>
                        <div className={`h-[300px] flex flex-col ${alignTextRight(index) ? "items-end" : "items-start"}`}>
                            <img src={sub.gif} alt="gif image" className="h-[250]"/>
                            <p className={` mt-auto text-xl font-bold font-orbitron text-[#3D1B60] ${alignTextRight(index) ? " text-right" : "text-left"}`}>{sub.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
      )
}

export default SubProjectMgt