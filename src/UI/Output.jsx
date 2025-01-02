import shortLogo from "../assets/images/logo-mark.svg";
import avater from "../assets/images/image-avatar.jpg";
import github from "../assets/images/icon-github.svg";
export default function Output() {
  return (
    <section className="p-6 bg-pattern-ticket bg-no-repeat">
      <div className="flex flex-col gap-20">
        <article className="flex items-center gap-4">
          <img src={shortLogo} alt="logo" />
          <header>
            <h3 className="text-3xl font-bold">Coding Conf</h3>
            <span>Jan 31, 2025 / Austin, TX</span>
          </header>
        </article>
        <article className="flex items-center gap-3">
          <img className="w-14 h-14 rounded-md" src={avater} alt="logo" />
          <header>
            <h4 className="text-xl font-semibold">
              Jonathan Kristof{/* Dynamically update name */}
            </h4>
            <p className="flex items-center gap-3">
              <img src={github} alt="github" />
              <span>
                @jonathankristof0101{/* Dynamically update username */}
              </span>
            </p>
          </header>
        </article>
      </div>
    </section>
  );
}
