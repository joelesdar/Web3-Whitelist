import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-highlight">
      <div className="w-full max-w-screen-xl mx-auto pt-12 md:pt-20 justify-center">
        <div className="flex items-start justify-center mb-8">
          <Image
            src="/kiichain.svg"
            alt="KiiChain logo"
            width={131}
            height={23}
            priority
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center text-lg md:text-base tracking-normal leading-5 font-normal mb-4">
          <h4 className="text-highlight px-4 my-6 md:my-0 font-semibold tracking-widest text-center md:text-left">
            Ecosystem
          </h4>
          <a href="https://kiichain.io/" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            KiiChain
          </a>
          <a href="https://kiiex.io/" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            KIIEX
          </a>
          <a href="https://app.kiichain.io/" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            KiiChain Explorer
          </a>
          <a href="https://apps.apple.com/us/app/kii-mobile/id6474740411" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            Kii Mobile App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.kiimobile" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            Kii Mobile Play Store
          </a>
          <a href="https://wallet.kiichain.io/" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            Kii Web Wallet
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-center text-lg md:text-base tracking-normal leading-5 mt-4 mb-4">
          <h4 className="text-highlight px-4 my-6 md:my-0 font-semibold tracking-widest text-center md:text-left">
            Explore
          </h4>
          <a href="https://blog.kiiglobal.io/" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            Blog
          </a>
          <a href="mailto:support@kiiglobal.io" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            Support
          </a>
          <a href="https://docs.kiiglobal.io/docs/overview/the-kii-blockchain" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            Docs
          </a>
          <a href="https://social.kiichain.io/" target="_blank" className="border-l-0 md:border-l-2 my-4 md:my-0 md:border-l-highlight font-medium px-4 text-center">
            Social
          </a>
          <a href="https://kiiglobal.io/certificate" target="_blank" className="border-l-0 md:border-l-2 md:border-l-highlight font-medium px-4 text-center">
            Certificates
          </a>
        </div>

        <div className="flex items-center justify-center pt-12 pb-4">
            <a href="https://x.com/KiiChainio" target="_blank" className="px-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
            </a>
            <a href="https://discord.com/invite/kiichain" target="_blank" className="px-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
            </a>
            <a href="https://t.me/KiiChainGlobal" target="_blank" className="px-3">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
            </a>
            <a href="https://github.com/KiiChain" target="_blank" className="px-3">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            <a href="https://medium.com/@kiichain" target="_blank" className="px-3">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/kiiglobal/" target="_blank" className="px-3">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </a>
            <a href="https://www.youtube.com/@kiichain_" target="_blank" className="px-3">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </a>
            <a href="https://www.instagram.com/kiichainofficial/" target="_blank" className="px-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href="https://www.facebook.com/Kiichainglobal/" target="_blank" className="px-3">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
            </a>
        </div>
        <div className="flex items-center justify-center pb-4">
          <span className="block text-[10px] px-2 text-gray-500 sm:text-center dark:text-gray-400"><a href="#" target="_blank" className="hover:underline">© 2025 KiiGlobal</a></span>
          <span className="block text-[10px] px-2 text-gray-500 sm:text-center dark:text-gray-400"><a href="#" target="_blank" className="hover:underline">Terms and Conditions</a></span>
          <span className="block text-[10px] px-2 text-gray-500 sm:text-center dark:text-gray-400"><a href="#" target="_blank" className="hover:underline">Privacy Policiy</a></span>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;