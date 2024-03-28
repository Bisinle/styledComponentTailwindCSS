import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className=" flex flex-col justify-center items-center bg-orange-900">
        <AuthInputs />
      </main>
    </>
  );
}
