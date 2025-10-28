export default function Footer() {
  return (
    <footer className="relative w-full h-auto min-h-[700px] bg-[#FEBC11] overflow-hidden">
      {/* Striped background pattern */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className="flex-1 bg-gradient-to-r from-[rgba(255,209,90,0.6)] to-[rgba(255,200,57,0.6)]"
          />
        ))}
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1369 0V700" stroke="white" strokeOpacity="0.564706"/>
          <path d="M70 0V700" stroke="white" strokeOpacity="0.564706"/>
          <path d="M1440 540H0" stroke="white" strokeOpacity="0.564706"/>
          <path d="M1440 161H0" stroke="white" strokeOpacity="0.564706"/>
          <rect width="16" height="16" transform="matrix(-1 0 0 1 1377 532)" fill="white"/>
          <rect x="-0.5" y="0.5" width="15" height="15" transform="matrix(-1 0 0 1 1376 532)" stroke="white" strokeOpacity="0.564706"/>
          <rect width="16" height="16" transform="matrix(-1 0 0 1 78 153)" fill="white"/>
          <rect x="-0.5" y="0.5" width="15" height="15" transform="matrix(-1 0 0 1 77 153)" stroke="white" strokeOpacity="0.564706"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20 py-12 md:py-20 lg:py-24">
        {/* Contact info */}
        <div className="space-y-3 mb-12 md:mb-20">
          <p className="text-portfolio-brown font-bricolage text-xl md:text-[32px] font-normal leading-normal">
            {"Drop me an email or a text and I'll get right back to you..."}
          </p>
          <a 
            href="mailto:qtuyetlinh@gmail.com"
            className="block text-portfolio-brown font-bricolage text-xl md:text-[32px] font-normal leading-normal hover:underline"
          >
            qtuyetlinh@gmail.com
          </a>
          <p className="text-portfolio-brown font-bricolage text-xl md:text-[32px] font-normal leading-normal">
            Zalo
          </p>
        </div>

        {/* Main CTA */}
        <h2 className="text-portfolio-brown font-bricolage text-4xl sm:text-5xl md:text-6xl lg:text-[96px] xl:text-[128px] font-semibold leading-tight mb-12 md:mb-20">
          {"Soooo, Let's connect!"}
        </h2>

        {/* Copyright */}
        <p className="text-[#D69D07] font-bricolage text-sm md:text-base font-normal text-right max-w-[200px] ml-auto">
          Designed and built by Linh ©All rights reserved
        </p>
      </div>
    </footer>
  );
}
