import LoadingDots from '../components/loading-dots'
import ConfiguredSectionPlaceholder from './configured-section-placeholder'
// import "../app/globals.css"
import useSWR from 'swr';
import Link from 'next/link'
import { useState } from 'react';



const DomainCardPlaceholder = ({ pendingData }) => {

  console.log(pendingData)
  let getPendingFetch = localStorage.getItem("dataPending");
  const [pendingFetch, setPendingFetch] = useState(
    JSON.parse(getPendingFetch) ?? ""
  );
  const [state, setState] = useState({ value: 10 });

  // console.log(pendingFetch({pendingData}))

  let data;
  // console.log(pendingData)
  pendingData?.result?.length == 0 ? { data } = useSWR(`/api/data/?search=${pendingData?.title}&cronId=${pendingData?.jobId}`) : undefined;

  function appendResult() {

    pendingFetch.forEach((product) => {
      if (product.jobId == data.cronId) {
        product.result = data.result
      }
    })
    localStorage.setItem("dataPending", JSON.stringify(pendingFetch));

  }
  

  data
    ?
    appendResult()
    : undefined

    console.log(pendingFetch)
  return (

    <div className="w-full max-w-1xl sm:max-w-2xl">
      <div className="w-full max-w-1xl sm:max-w-2xl">
        <div id="pendingFetch">
          {pendingFetch
            ? 
            pendingFetch.map((pendingDataInit) => {
              if (pendingDataInit.result.length == 0) {
                // console.log(pendingData.result.length)
                return (
                  <div key={pendingDataInit?.jobId}>
                    <div className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
                      <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
                        <div className="text-left font-semibold flex items-center">
                          {pendingDataInit?.title}
                        </div>
                        <p className="text-black text-gray-500 font-normal text-sm">
                          {pendingDataInit?.vibe}
                        </p>
                        <p className="text-black text-gray-500 font-normal text-sm">
                          <div className="h-7 w-36 bg-gray-300 rounded-md animate-pulse" />

                        </p>
                      </div>
                      <div className="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
                        <a
                          href={`http://kufre.me`}
                          target="_blank"
                          rel="noreferrer"
                          className=" text-left font-semibold flex items-center"
                        >
                          <span className="inline-block ml-2"></span>
                        </a>
                        <div className="flex space-x-3">
                          <button
                            disabled={true}
                            className="cursor-not-allowed bg-gray-100 text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
                          >
                            <LoadingDots />
                          </button>
                          <button
                            disabled={true}
                            className="cursor-not-allowed bg-red-500 text-gray-500 border-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
                          >
                            <LoadingDots />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={pendingDataInit?.jobId} className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
                    <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
                      <div className='text-left font-semibold flex items-center'>{pendingData?.title}</div>
                      <p className="text-black text-gray-500 font-normal text-sm">
                        {pendingDataInit?.vibe}
                      </p>
                      <p className="text-black text-gray-500 font-normal text-sm">
                        {pendingDataInit?.result?.length} results
                      </p>
                    </div>
                    <div className="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
                      <a
                        href={`http://kufre.me`}
                        target="_blank"
                        rel="noreferrer"
                        className=" text-left font-semibold flex items-center"
                      >
                        <span className="inline-block ml-2">

                        </span>
                      </a>
                      <div className="flex space-x-3">
                        <button
                          className={`bg-white hover:text-black hover:border-black text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
                        >
                          Open
                        </button>
                        <button
                          className={`g-red-500 text-red-500 border-red-500 hover:text-red-500 hover:bg-white py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150`}
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
            })
            : ""}
        </div>
      </div>
      <div>
      </div>
    </div>
    // <>
    //   <div className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
    //     <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
    //       <div className="text-left font-semibold flex items-center">
    //         {pendingData?.title}
    //       </div>
    //       <p className="text-black text-gray-500 font-normal text-sm">
    //         {pendingData?.vibe}
    //       </p>
    //       <p className="text-black text-gray-500 font-normal text-sm">
    //         {/* {storedData?.result?.length} results */}
    //         <div className="h-7 w-36 bg-gray-300 rounded-md animate-pulse" />

    //       </p>
    //     </div>
    //     <div className="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
    //       <a
    //         href={`http://kufre.me`}
    //         target="_blank"
    //         rel="noreferrer"
    //         className=" text-left font-semibold flex items-center"
    //       >
    //         <span className="inline-block ml-2"></span>
    //       </a>
    //       <div className="flex space-x-3">
    //         <button
    //           disabled={true}
    //           className="cursor-not-allowed bg-gray-100 text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
    //         >
    //           <LoadingDots />
    //         </button>
    //         <button
    //           disabled={true}
    //           className="cursor-not-allowed bg-red-500 text-gray-500 border-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
    //         >
    //           <LoadingDots />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //   </div>
    // </>
  )
}

export default DomainCardPlaceholder



