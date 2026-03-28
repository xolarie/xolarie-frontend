import chat from "/images/chat.png";
import call from "/images/call.png";

const ReadyToBuild = () => {
  return (
    <div>
              <div className="bg-gradient-to-br from-[#2758FB] via-[#8B21FA] to-[#FF048F] p-6">
        <h1 className="text-4xl my-6 text-white text-center">Ready to Build a Web Product That Performs?</h1>
        <p className="text-white text-center text-lg">
          If your project requires advanced integrations, complex systems, or
          specialized features, we design custom-built web solutions tailored
          exactly to your needs.
        </p>
        <div className="flex flex-col items-center justify-center my-8 gap-y-4">
          <button className="bg-white flex p-4 rounded-2xl gap-x-4 w-64 items-center justify-center">
            <span className="text-[#9E1BF1]">Start a conversation</span>
            <img src={chat} alt="" className="h-6 w-6"/>
          </button>
          <button className="flex p-4 rounded-2xl gap-x-4 w-64 items-center justify-center border-2">
            <span className="text-white">Book a Discovery Call</span>
            <img src={call} alt="" className="h-6 w-6"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReadyToBuild