import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

export default function Contact() {
  return (
    <section className="mx-5% my-14">
      <p className="text-center text-gray-600 text-lg min-[600px]:text-2xl">
        Get In Touch
      </p>
      <h2 className="text-center font-bold pb-3 pt-1 text-3xl min-[600px]:text-5xl">
        Contact Me
      </h2>

      <article className="border-[1px] rounded-3xl border-light-gray-100 my-8 flex flex-wrap justify-evenly p-2 max-w-75vh m-auto">
        <div className="flex items-center justify-center gap-2 m-4">
          <img
            src={email}
            alt="email icon"
            aria-hidden="true"
            className="h-10 w-10"
          />
          <p>jhancsn1@gmail.com</p>
        </div>
        <div className="flex items-center justify-center gap-2 m-4">
          <img
            src={linkedin}
            alt="linkedin icon"
            aria-hidden="true"
            className="h-8 w-8"
          />
          <p>LinkedIn</p>
        </div>
      </article>
    </section>
  );
}
