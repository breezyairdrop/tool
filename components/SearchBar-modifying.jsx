import React, { useState, useEffect } from "react";
import DropDown, { VibeType } from "@/components/DropDown";
import LoadingDots from "@/components/LoadingDots";
import Toggle from "@/components/Toggle";
import ResultCard from "@/components/ResultCard";
import DomainCardPlaceholder from "@/components/domain-card-placeholder";

const SearchBar = () => {
  let getPendingFetch = localStorage.getItem("dataPending");
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [vibe, setVibe] = useState("Google");
  const [isPro, setIsPro] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [pendingFetch, setPendingFetch] = useState(
    JSON.parse(getPendingFetch) ?? ""
  );
  const [runningJob, setRunningJob] = useState(false);

  const { data } = useSWR(`/api/data/?search=${searchString}&cronId=${cronId}`)

  let cronId;

  useEffect(() => {
    // storedFetch || pendingFetch != "" ? setIsSubmitted(true) : null;
  }, [pendingFetch]);

  function removeAnimation() {
    setTextArea("");
  }

  function getResult() {
    cronId = Math.random().toString().slice(2);

    // console.log('cronId', cronId)
    if (searchString != "") {
      setTextArea("animated zoomOutDown");
      onFormSubmit();

      setTimeout(removeAnimation, 900);
    } else {
      alert("enter search field");
    }
  }

  const onFormSubmit = () => {

    function putResult() {
      // let jobId = uuidv4()
      if (pendingFetch == null || pendingFetch == "") {
        setPendingFetch([
          {
            jobId: cronId,
            title: searchString,
            vibe: vibe,
            result: [],
          },
        ]);

        localStorage.setItem(
          "dataPending",
          JSON.stringify([
            {
              jobId: cronId,
              title: searchString,
              vibe: vibe,
              result: [],
            },
          ])
        );
      } else if (pendingFetch != null || pendingFetch != "") {
        pendingFetch.unshift({
          jobId: cronId,
          title: searchString,
          vibe: vibe,
          result: [],
        });
        localStorage.setItem("dataPending", JSON.stringify(pendingFetch));
      }
      extraCheck()
    }

    setTimeout(putResult, 0);
  };


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


  return (
    <>
      <div className="mt-7 " style={{ scale: 1.15 }}>
        <Toggle isPro={isPro} setIsPro={setIsPro} />
        {/* <Toggle colorTheme={checkTheme} isPro={isPro} setIsPro={setIsPro} /> */}
      </div>

      <div className="max-w-xl w-full">
        <div className="flex mt-10 items-center space-x-3">
          <p className="text-sm text-left font-medium">
            Your limitation is a function of your imagination{" "}
            <span className="text-sm text-gray-400">(trust me, I'm lying)</span>
            .
          </p>
        </div>
        <textarea
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          rows={4}
          id="textField"
          // data-animation="animated zoomOutDown"
          className={`${textArea} w-full max-w-1xl sm:max-w-2xl rounded-md mb-10 items-center border-gray-300 shadow-sm focus:border-black focus:ring-black`}
          placeholder={"e.g. Oil company in USA"}
        />
        <div className="flex items-center space-x-3">
          <p className="text-left font-medium">Select your vibe.</p>
        </div>
        <div className="block">
          <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
        </div>

        {!loading && (
          <div className="flex items-center mt-10 justify-items-center">
            <button
              onClick={(e) => {
                e.preventDefault();

                // setIsSubmitted(true)
                getResult();
              }}
              style={{ height: "100px" }}
              // className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20 bg-red-500 text-white border-red-500 hover:text-red-500 hover:bg-white text-sm border-solid border rounded-md focus:outline-none rotating-text-wrapper"
              className="flex w-full flex-col items-center justify-center text-center bg-white text-black border-black hover:text-white hover:bg-gray-500 py-1.5 text-sm border-solid border rounded-md focus:outline-none rotating-text-wrapper"
            >
              <span>
                <b>Apply</b> <b> Pressure</b>
              </span>
              <span>
                <b>Powers</b>
                <b> on your Fingertips</b>
              </span>
              <span>
                <b>Lets</b>
                <b> fucking go</b>
              </span>
            </button>
          </div>
        )}
        {loading && (
          <button
            className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            disabled
          >
            <LoadingDots color="white" style="large" />
          </button>
        )}
      </div>
      <div className="w-full max-w-1xl sm:max-w-2xl">
        <div className="w-full max-w-1xl sm:max-w-2xl">
          <div id="pendingFetch">
            {pendingFetch
              ? pendingFetch.map((pendingData, index) => {
                  if (pendingData.result.length == 0) {
                    return (
                      <DomainCardPlaceholder
                        key={index}
                        pendingData={pendingData}
                      />
                    );
                  } else {
                    return (
                      <div
                        key={pendingData?.jobId}
                        className="w-full mt-10 shadow-md border border-gray-150 rounded-lg py-4"
                      >
                        <div className="justify-between flex items-center space-x-3 mt-3 px-2 sm:px-10">
                          <div className="text-left font-semibold flex items-center">
                            {pendingData?.title}
                          </div>
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
                            <span className="inline-block ml-2"></span>
                          </a>
                          <div className="flex space-x-3">
                            <button
                              // onClick={() => {
                              //   setAdding(true)
                              //   console.log(adding)
                              //   console.log(runningJob)
                              // }}
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
            {/* {pendingFetch ? (
              <DomainCardPlaceholder
                // key={index}
                pendingFetch={pendingFetch}
              />
            ) : (
              // pendingFetch.map((pendingData, index) => {
              //     if (pendingData) {
              //       return (
              //         <DomainCardPlaceholder
              //           key={index}
              //           pendingData={pendingData}
              //         />
              //       );
              //     }
              //   })
              ""
            )} */}
          </div>
        </div>
        <div></div>
        {/* {showModal && <Modal />} */}
      </div>
      {/* <div>Result: {favNumber}</div> */}
    </>
  );
};

export default SearchBar;
