import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className=" bg-yellow-200 flex flex-col items-center ">
      <img src={logo} alt="A canvas" className=" w-24 " />
      <div className=" mt-10 mb-10">
        <h1 className=" text-5xl font-bold text-orange-900 m-0 tracking-[0.5em] uppercase font-serif">
          ReactArt
        </h1>
        <p className=" mx-auto w-[100%] text-gray-500  text-center tracking-[0.1em]">
          A community of artists and art-lovers.
        </p>
      </div>
    </header>
  );
}
