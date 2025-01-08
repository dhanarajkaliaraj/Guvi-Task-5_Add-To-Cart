export default function Modal ({modal, handleModal}){
return (
<div className={`relative z-10 ${modal ? 'ease-in duration-200 opacity-100' : 'ease-out duration-300 opacity-0'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className={`fixed  bg-gray-500/75 transition-opacity ${modal ? 'inset-0':''}`} aria-hidden="true"></div>

  <div className={`fixed z-10 w-screen overflow-y-auto ${modal ? 'inset-0':''}`}>
    <div className={`flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ${modal ? 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100':'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`}>
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
              <svg className="size-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold text-gray-900" id="modal-title">Re-Order warning</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">The item you are trying to add is already been added in the cart.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={handleModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Okay</button>
        </div>
      </div>
    </div>
  </div>
</div>
)}