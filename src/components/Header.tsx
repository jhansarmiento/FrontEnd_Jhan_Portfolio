import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <>
      <header className="flex justify-around items-center w-ful h-[17vh]">
        <h1 className="text-lg min-[350px]:text-xl min-[600px]:text-2xl min-[1200px]:text-3xl">Jhan Sarmiento</h1>
        <nav className="min-[1200px]:hidden">
          <HamburgerMenu />
        </nav>

        <nav className="hidden min-[1200px]:flex">
          <ul className="flex space-x-10 text-2xl items-center">
            <li>About Me</li>
            <li>Projects</li>
            <li>Stack</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
