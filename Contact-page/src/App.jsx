export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="h-[72px] px-8 flex items-center border-b border-gray-100">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjRXi5BKeUF1ikiyu4sA9ck4PgAY7-ZA_J4Uirxgnfw&s=10"
          alt="Logo"
          className="h-10 object-contain"
        />
      </header>

      {/* Main Content Container */}
      <main className="max-w-[1000px] mx-auto px-6 pt-12 pb-16">
        {/* Header Section */}
        <div className="max-w-[800px] mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
            CONTACT US
          </h1>
          <p className="text-xs md:text-sm font-semibold text-gray-600 leading-relaxed uppercase">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Contact Form Column */}
          <div className="flex flex-col gap-4 max-w-[440px]">
            {/* Top Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white text-xs font-bold py-2.5 px-3 rounded hover:bg-neutral-800 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                </svg>
                VIA SUPPORT CHAT
              </button>

              <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white text-xs font-bold py-2.5 px-3 rounded hover:bg-neutral-800 transition">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                VIA CALL
              </button>
            </div>

            {/* Email Form Outline Button */}
            <button className="w-full flex items-center justify-center gap-2 border border-black text-black text-xs font-bold py-2.5 rounded hover:bg-gray-50 transition">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              VIA EMAIL FORM
            </button>

            {/* Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5 mt-2"
            >
              {/* Floating Name Input */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-black"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border border-black rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Floating Email Input */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-black"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-black rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Floating Message Input */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-bold text-black"
                >
                  TEXT
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-black rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-black resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white text-xs font-bold px-12 py-2.5 rounded hover:bg-neutral-800 transition"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          {/* Right: Illustration */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Service 24_7-pana 1.svg"
              alt="24/7 Service Support"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
