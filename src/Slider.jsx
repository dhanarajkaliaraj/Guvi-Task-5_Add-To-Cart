export default function Slider({ children, slide, handleSlider }) {

  return (
    <> <div className="absolute overflow-hidden">
    <div className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition ease-in-out duration-500 sm:duration-700  ${slide ? 'translate-x-0' : 'translate-x-full'}`}>
     
      <div className={`pointer-events-auto relative w-screen max-w-md ease-in-out duration-500 ${slide ? "opacity-100" : "opacity-0"}`}>
       
        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
          <button type="button" onClick={handleSlider} className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
            <span className="absolute -inset-2.5"></span>
            <span className="sr-only">Close panel</span>
            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
          <div className="px-4 sm:px-6">
            <h2 className="text-base font-semibold text-gray-900" id="slide-over-title">Shopping Cart</h2>
          </div>
          <div className="relative mt-6 flex-1 px-4 sm:px-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div> 
    </>
  )
}
