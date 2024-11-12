import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <>
      <header className="flex justify-around p-8">
        <h1 className="text-[32px]">Jhan Sarmiento</h1>
        <nav className="lg:hidden">
          <HamburgerMenu />
        </nav>

        <nav className="hidden lg:flex space-x-4">
          <ul className="flex space-x-7 text-xl items-center">
            <li>About Me</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
