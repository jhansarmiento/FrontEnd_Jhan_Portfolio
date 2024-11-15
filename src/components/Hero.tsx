import profilePic from "../assets/profile-pic.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

export default function Hero() {
  return (
    <section 
      className="size-full flex flex-col gap-5 justify-center items-center min-[1200px]:flex-row min-[1200px]:gap-20 min-[1200px]:pt-20"
      
    >
        <figure className="w-auto mb-4 mt-4">
          <img
            src={profilePic}
            alt="Jhan Sarmiento Picture"
            className="w-1/2 h-1/5 m-auto min-[600px]:w-72 min-[600px]:h-72 min-[1200px]:w-96 min-[1200px]:h-96"
          />
        </figure>

      <div className="flex flex-col items-center gap-4">
          <div className="block text-center mb-4">
              <p className="text-sm min-[300px]:text-lg min-[600px]:text-xl text-gray-600 font-semibold">Hello I'm</p>
              <h2 className="text-2xl min-[300px]:text-3xl min-[600px]:text-4xl font-semibold pb-2 pt-1">Jhan Sarmiento</h2>
              <p className="text-base min-[300px]:text-xl min-[600px]:text-2xl text-gray-600 font-semibold">Frontend Developer</p>
          </div>

          <div className="flex flex-col gap-3 min-[300px]:flex-row">
              <button 
                  className="border-[1.5px] border-black rounded-3xl w-32 h-auto pt-3 pb-3 text-xs font-semibold cursor-pointer"
              >Download CV</button>
              <button 
                  className="border-[1.5px] border-[#353535] bg-[#353535] text-white rounded-3xl w-32 h-auto pt-3 pb-3 text-xs font-semibold cursor-pointer"
              >Contact Info</button>
          </div>

          <figure className="flex gap-4 m-auto">
              <img src={linkedin} alt="github icon" className="h-8 w-8" />
              <img src={github} alt="linkedin icon" className="h-8 w-8" />
        </figure>
      </div>

    </section>
  );

}