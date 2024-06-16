import LoadingDots from '../components/loading-dots'
import ConfiguredSectionPlaceholder from './configured-section-placeholder'
// import "../app/globals.css"
import useSWR from 'swr';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import axios from 'axios'



async function handler(req, res) {
  // const { domain } = req.query

  const [configResponse] = await Promise.all([
    fetch(
      `https://puppeteer-render-9bsg.onrender.com/leads/?search=eatery+uyo`,
      {
        method: 'GET',
        headers: {
          // Authorization: `Bearer ${process.env.AUTH_BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    ),
    
  ])

  const configJson = await configResponse.json()
  console.log(configJson, 'configJson')
  
  if (configResponse.status !== 200) {
      console.log('failed')
  //   return res.status(domainResponse.status).send(domainJson)
  }

}

// handler()
// let data = 0;

const DomainCardPlaceholder = ({ pendingData }) => {

  // console.log(pendingData)
  let getPendingFetch = localStorage.getItem("dataPending");
  const [pendingFetch, setPendingFetch] = useState(
    JSON.parse(getPendingFetch) ?? ""
  );
  const [runningJob, setRunningJob] = useState(false);
  const [adding, setAdding] = useState(false)
  const [state, setState] = useState({ value: 10 });
  const { data } = useSWR(`/api/data/?search=${pendingData?.title}&cronId=${pendingData?.jobId}`)



  useEffect(() => {
    if (adding) setRunningJob(true)
  }, [adding])

  async function timeFunc() {
    console.log('initttt')


    if (data  && pendingData.jobId == data.cronId) {
      // pendingData.result = data.result
      pendingFetch.forEach((product) => {
        if (product.jobId == data.cronId) {
          product.result = data.result
        }
      })
    }
    localStorage.setItem("dataPending", JSON.stringify(pendingFetch));

    // setState((prev) => {
    //   return { ...prev };
    // });



    // data  && pendingData.jobId == data.cronId ?
    // //  console.log(data)
    // pendingData.result = data.result
    //   : null
  }

  async function extraCheck() {
    if (runningJob == true) {
      // data += 1
      let whenDone = await timeFunc()
      console.log('running', whenDone)

    } else {
      console.log('not running')
    }
  }

  useEffect(() => {
    if (pendingData.result.length == 0) {
      setRunningJob(true)
      // setRunningJob(false)
    } else {
      setRunningJob(false)
    }
  }, [pendingData])

  extraCheck()
  // { data } = useSWR(`/api/data/?search=${pendingData?.title}&cronId=${pendingData?.jobId}`)
  return (

    <div className="w-full max-w-1xl sm:max-w-2xl">
      <div className="w-full max-w-1xl sm:max-w-2xl">
        <div id="pendingFetch">
          {
            pendingData.result.length == 0 ? (
              <div key={pendingData?.jobId}>
                <div className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
                  <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
                    <div className="text-left font-semibold flex items-center">
                      {pendingData?.title}
                    </div>
                    <p className="text-black text-gray-500 font-normal text-sm">
                      {pendingData?.vibe}
                    </p>
                    <div className="text-black text-gray-500 font-normal text-sm">
                      <div className="h-7 w-36 bg-gray-300 rounded-md animate-pulse" />

                    </div>
                  </div>
                  <div className="flex justify-between space-x-4 pt-10 px-2 sm:px-10">
                    <a
                      className=" text-left font-semibold flex items-center"
                    >
                      <span className="inline-block ml-2"></span>
                    </a>
                    <div className="flex space-x-3">
                      <button
                        // disabled={true}
                        onClick={() => {
                          setAdding(true)
                          // console.log(adding)
                          // console.log(runningJob)
                        }}
                        className="cursor-not-allowed bg-gray-100 text-gray-500 border-gray-200 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
                      >
                        {/* <LoadingDots /> */}
                      </button>
                      <button
                        onClick={() => {
                          setRunningJob(false)
                          // console.log(adding)
                          // console.log(runningJob)
                        }}
                        // disabled={true}
                        className="cursor-not-allowed bg-red-500 text-gray-500 border-red-500 py-1.5 w-24 text-sm border-solid border rounded-md focus:outline-none transition-all ease-in-out duration-150"
                      >
                        {/* <LoadingDots /> */}

                      </button>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
            ) : (
              <div key={pendingData?.jobId} className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4">
                <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
                  <div className='text-left font-semibold flex items-center'>{pendingData?.title}</div>
                  <p className="text-black text-gray-500 font-normal text-sm">
                    {pendingData?.vibe}
                  </p>
                  <p className="text-black text-gray-500 font-normal text-sm">
                    {pendingData?.result?.length} results
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
                      onClick={() => {
                        setAdding(true)
                        console.log(adding)
                        console.log(runningJob)
                      }}
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
            )
          }
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default DomainCardPlaceholder



