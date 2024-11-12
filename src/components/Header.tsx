import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <>
      <header className="flex justify-around p-10">
        <h1 className="text-4xl">Jhan Sarmiento</h1>
        <HamburgerMenu />
      </header>
    </>
  );
}
