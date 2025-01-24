import logo from "../assets/images/logo-full.svg";
export default function Header() {
  return (
    <header className="text-center md:w-3/5 px-8 md:px-0 m-auto">
      <div>
        <img className="mx-auto my-8" src={logo} alt="logo" />
      </div>
      <h1 className="text-4xl md:text-5xl font-semibold">
        Your Jounrney to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-xl my-6">
        Secure your spot at this year&apos;s biggest coding conference.
      </p>
    </header>
  );
}
