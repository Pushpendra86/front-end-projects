import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo + Text */}
       
        <div className="flex items-center gap-2">
          <img
            src="https://imgs.search.brave.com/Ay1lvizlZ6VM9VaiJfDWfYmrur5ZhLxeY9fLpNF60DQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vYmZhZmRh/ZGMtNTBkOS00MTFm/LWI0MTItNDQ2NzE0/YzY1ZGQ0L2xvZ28t/c2VhcmNoLWdyaWQt/Mng_bG9nb1RlbXBs/YXRlVmVyc2lvbj0z/JnY9NjM5MTI2MTUz/NTc3NjcwMDAwJmxh/eW91dD1hdXRvLTEt/MQ"
            alt="logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold text-gray-900 tracking-tight">Shades</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          <a href="#Free Landing Page" className="hover:text-gray-900">Free Landing Pages</a>
          <a href="#Features" className="hover:text-gray-900">Features</a>
          <a href="#Services" className="hover:text-gray-900">Services</a>
          <a href="#Pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#Contact" className="hover:text-gray-900">Contact</a>
        </nav>

        {/* Right Buttons */}
        <div className="flex gap-6 items-center">
          <a href="#signin" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Sign In
          </a>
          <button className="bg-[#2a8b98] hover:bg-[#22727d] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            Live chat support <br /> for your customers.
          </h1>
          <p className="text-gray-500 text-base mt-6 mb-8 leading-relaxed max-w-md">
            Create custom landing pages with Shades that convert more
            visitors than any website—no coding required.
          </p>

          <div className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2a8b98]"
            />
            <button className="bg-[#2a8b98] hover:bg-[#22727d] text-white font-medium px-6 py-3 rounded-md text-sm whitespace-nowrap transition">
              Get Started
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Already using Shade?{" "}
            <a
              className="text-[#2a8b98] font-semibold hover:underline"
              href="#signin"
            >
              Sign In
            </a>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://imgs.search.brave.com/aoNQLp5XkgYS5-wg55DSWbv4sYs1ieLFzWCqzn_WdcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDEv/ODI4LzA4Mi9zbWFs/bC93b21hbi1hbmQt/bWFuLXdpdGgtc21h/cnRwaG9uZS1jaGF0/dGluZy1kZXNpZ24t/ZnJlZS12ZWN0b3Iu/anBn"
            alt="Chatting"
            className="w-full max-w-lg object-contain"
          />
        </div>
      </main>
    </div>
  );
}

export default App;