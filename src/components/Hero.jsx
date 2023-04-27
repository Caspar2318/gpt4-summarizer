import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-14 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Caspar2318/gpt4-summarizer")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        To Summarize Articles in seconds with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Need to read and understand articles in an efficient manner? Here we go,
        let AI help you do the work and summarize the long articles into clear
        and concise paragraphy in minutes!
      </h2>
    </header>
  );
};

export default Hero;
