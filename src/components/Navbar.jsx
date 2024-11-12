

function Navbar() {
  return (
    <div className="flex items-center justify-around w-full text-sm">
    <a href="/" className="font-bold text-lg text-[#ff7e9f]  hover:text-[#3c9adc] active">About</a>
    <span className="font-bold">/</span>
    <a href="/projects" className="font-bold text-lg text-[#ff7e9f]  hover:text-[#3c9adc]">Projects</a>
    <span className="font-bold">/</span>
    <a href="/experiences" className="font-bold text-lg text-[#ff7e9f]  hover:text-[#3c9adc]">Experiences</a>
  </div>
  );
}

export default Navbar;
