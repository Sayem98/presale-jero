import React, { useEffect } from "react";
import { DuplicateIcon } from "@heroicons/react/outline";
import "../App.css";
import Web3 from "web3";
export default function Referral(props) {

  const ref = React.useRef();
  const [level, setLevel] = React.useState([]);
  
  useEffect(() => {
    if(props.ref_data && props.ref_data1){
      
   setLevel([
    {
      id: "1",
      num: "8%",
      count: props.ref_data1[0],
      earn:  Web3.utils.fromWei(props.ref_data[0].toString(), 'nano') * 10
    },
    {
      id: "2",
      num: "6%",
      count: props.ref_data1[1],
      earn: Web3.utils.fromWei(props.ref_data[1].toString(), 'nano') * 10
    },
    {
      id: "3",
      num: "4%",
      count: props.ref_data1[2],
      earn: Web3.utils.fromWei(props.ref_data[2].toString(), 'nano') * 10
    },
    {
      id: "4",
      num: "2%",
      count: props.ref_data1[3],
      earn: Web3.utils.fromWei(props.ref_data[3].toString(), 'nano') * 10
    }
    
  ]);
    }
  }, [props.ref_data, props.ref_data1]);

  // setRef(`https://tidy-owl-69.loca.lt/?ref=+{props.referral}`)

  return (
    // ref.map((refs)=>(

    <div className="grid grid-cols-1 ">
      <div className="max-w-full mb-4 grid grid-cols-4 bg-yellow-50 p-4 rounded-xl overflow-hidden">
        <p className="text-yellow-700 pb-3 font-bold border-b col-span-4 border-yellow-700 tracking-wider select-none mb-2 text-xs">
          All Referral Program Data
        </p>
        <div>
          <p className="text-yellow-700 text-center py-3 font-bold border-b border-yellow-700 tracking-wider select-none mb-2 text-xs">
            Count
          </p>
          {level.map((levels) => (
            <p
              key={levels.id}
              className="text-yellow-700 py-1 text-center font-medium border-b border-yellow-700 tracking-wider select-none mb-2 text-xs"
            >
              {levels.count ? levels?.count : "0"}
            </p>
          ))}
        </div>
        <div className="col-span-2">
          <p className="text-yellow-700 text-center py-3 font-bold border-b border-yellow-700 tracking-wider select-none mb-2 text-xs">
            Rate
          </p>
          {level.map((levels) => (
            <p
              key={levels.id}
              className="text-yellow-700 py-1 text-center font-medium border-b border-yellow-700 tracking-wider select-none mb-2 text-xs"
            >
              {levels.id} Level: {levels.num}
            </p>
          ))}
        </div>
        <div>
          <p className="text-yellow-700 text-center py-3 truncate font-bold border-b border-yellow-700 tracking-wider select-none mb-2 text-xs">
            Total earnings
          </p>
          {level.map((levels) => (
            <p
              key={levels.id}
              className="text-yellow-700 py-1 text-center font-medium border-b border-yellow-700 tracking-wider select-none mb-2 text-xs"
            >
              {levels.earn ? levels.earn : "0"} JERO
            </p>
          ))}
        </div>
      </div>
      <div className="max-w-full mb-4 bg-yellow-50 p-4 rounded-xl  overflow-hidden">
        <p className="text-yellow-700 pb-3 font-bold border-b col-span-4 border-yellow-700 tracking-wider select-none mb-2 text-xs">
          About Program
        </p>
        <p className="text-yellow-700  pt-3 font-medium select-none mt-2 text-sm">
          Referral Link
        </p>
        <div className="flex rounded-lg my-2 flex-col md:flex-row">
          <span
            type="text"
            name="company-website"
            className="focus:ring-0 focus:border-yellow-700 mr-2 flex-1 block w-full rounded-md text-xs border-yellow-700"
            readOnly
            ref={ref}
          >
           https://localhost/8000?ref={props.referral}
          </span>
          <button
            type="button"
            className="inline-flex h-6 w-6 md:h-auto md:w-auto m-auto focus:ring-yellow-700 focus:border-yellow-700 items-center md:px-3 rounded-md border border-yellow-700 bg-gray-50 text-yellow-700 text-xs "
          >
            <DuplicateIcon
              className="flex-shrink-0 h-6 w-6 text-yellow-700"
              aria-hidden="true"
              onClick={() => {
                navigator.clipboard.writeText(ref.current?.innerText);
              }}
            />
          </button>
        </div>
        
      </div>
    </div>

    // ))
  );
}
