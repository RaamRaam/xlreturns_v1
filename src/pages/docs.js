import React,{useState,useMemo,useRef} from 'react'
import { useTable } from 'react-table';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { JSONTree } from 'react-json-tree';


export default function docs() {

    const theme = {
        scheme: 'monokai',
        author: 'wimer hazenberg (http://www.monokai.nl)',
        base00: '#272822',
        base01: '#383830',
        base02: '#49483e',
        base03: '#75715e',
        base04: '#a59f85',
        base05: '#f8f8f2',
        base06: '#f5f4f1',
        base07: '#f9f8f5',
        base08: '#f92672',
        base09: '#fd971f',
        base0A: '#f4bf75',
        base0B: '#a6e22e',
        base0C: '#a1efe4',
        base0D: '#66d9ef',
        base0E: '#ae81ff',
        base0F: '#cc6633',
      };




    const [showsidebar,setShowSidebar] = useState(false)
    let apilink = useRef("")
    const copyToClipboard = () => {
       
       console.log(apilink.current.value)
       alert(`You have copied "${apilink.current.value}"`);
    }
    const SidebarData = [
        {
          title: 'Normal Candle',
          path: '/',
          icon: 'iconss',
        },
        {
          title: 'Eigen Candle',
          path: '/',
          icon: "iconss",
        },
        {
          title: 'Normal Support/Resistance',
          path: '/',
          icon: "iconss",
        },
        {
          title: 'Eigen Support/Resistance',
          path: '/',
          icon: 'iconss',
        },
        {
          title: 'Normal Price Distribution',
          path: '/',
          icon: "iconss",
        },
        {
          title: 'Eigen Price Distribution',
          path: '/',
          icon: "iconss",
        },
        {
            title: 'Normal Volume Distribution',
            path: '/',
            icon: "iconss",
        },
        {
          title: 'Eigen Volume Distribution',
          path: '/',
          icon: "iconss",
        }
      ];
      const data = useMemo(
        () => [
          {
            col1: 'symbol',
            col2: 'string',
            col3: "Required parameter , Symbol ticker of instrument. For preffered stocks use dot(.) delimiter .E.g. BRK.A or BRK.B will be correct"
          },
          {
            col1: 'symbol',
            col2: 'string',
            col3: "Required parameter , Symbol ticker of instrument. For preffered stocks use dot(.) delimiter .E.g. BRK.A or BRK.B will be correct"
          },
          {
            col1: 'symbol',
            col2: 'string',
            col3: "Required parameter , Symbol ticker of instrument. For preffered stocks use dot(.) delimiter .E.g. BRK.A or BRK.B will be correct"
          },
          {
            col1: 'symbol',
            col2: 'string',
            col3: "Required parameter , Symbol ticker of instrument. For preffered stocks use dot(.) delimiter .E.g. BRK.A or BRK.B will be correct"
          },
          {
            col1: 'symbol',
            col2: 'string',
            col3: "Required parameter , Symbol ticker of instrument. For preffered stocks use dot(.) delimiter .E.g. BRK.A or BRK.B will be correct"
          },
         
        
        ],
        []
    )
    const columns = useMemo(
        () => [
          {
            Header: 'Key',
            accessor: 'col1', // accessor is the "key" in the data
            Cell: ({ value }) => <p className='font-bold'>{value}</p>
          },
          {
            Header: 'Type',
            accessor: 'col2',
          },
          {
            Header: 'Description',
            accessor: 'col3', // accessor is the "key" in the data
          },
        ],
        []
    )
   
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
    const output = {"meta":{ 
        "symbol": "AAPL",
        "interval": "1min",
        "currency": "USD",
        "exchange_timezone": "America/New_York",
        "exchange": "NYSE",
        "mic_code": "XNYS",
        "type": "Common Stock",
        "indicator": {
           "name": "AD - Chaikin A/D Line"
        }
     },
     "values":[
        {
           "datetime":"2019-08-09 15:59:00",
           "ad":"2262629.83773"
        },
        {
           "datetime":"2019-08-09 15:58:00",
           "ad":"2271951.53983"
        },
        {
           "datetime":"2019-08-09 15:57:00",
           "ad":"2344317.27255"
        },
        {
           "datetime":"2019-08-09 15:56:00",
           "ad":"2288433.82567"
        },
        {
           "datetime":"2019-08-09 15:55:00",
           "ad":"2467325.82567"
        }

     ],
     "status":"ok"
  }
  return (
    <div >
        {/* navbar  */}
        <div className=' sticky top-0 bg-white'>
                         <button
								onClick={() => setShowSidebar(!showsidebar)}
								type="button"
								className=" inline-flex items-center justify-center p-2 rounded-md text-black  focus:outline-none "
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!showsidebar ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
                                    <svg
				                		className="block h-6 w-6"
				                		xmlns="http://www.w3.org/2000/svg"
				                		fill="none"
				                		viewBox="0 0 24 24"
				                		stroke="currentColor"
				                		aria-hidden="true"
				                	>
				                		<path
				                			strokeLinecap="round"
				                			strokeLinejoin="round"
				                			strokeWidth="2"
				                			d="M6 18L18 6M6 6l12 12"
				                		/>
				                	</svg>
                                )}
							</button>
        </div>
        
        <div className={`w-max bg-blue-600  fixed  text-white min-height-3/4 h-full  ease-in-out duration-300   ${
        showsidebar ? "translate-x-0 " : "-translate-x-full"
      }`}>
        {showsidebar ? (
                <div className='p-5' >
                {SidebarData.map((s)=>(
                    <p>{s.title}</p>
                ))}
                </div>
        ):""}
        </div>
        {/*  div for explaination and chart */}
        <div className='h-full md:flex space-y-10 md:space-y-0 justify-center '>
            {/* explaination */}
            <div className='bg-green-200 h-max flex-col text-sm md:text-md '>
                
                    
                    <div className=' h-screen overflow-y-scroll  scrollbar-hide'>
                    <div>
                        <h1 className='md:text-lg font-bold px-5 py-2'>Selected name</h1>
                    </div>
                    <div className='space-y-5'>
                        <div className='flex space-x-5 px-5'>
                            <p className='font-bold'>Key:</p>
                            <p>Explaination about the key that may take 2 lines</p>
                        </div>
                        <div className='flex space-x-5 px-5'>
                            <p className='font-bold'>Key:</p>
                            <p>Explaination about the key that may take 2 lines</p>
                        </div>
                        <div className='flex space-x-5 px-5'>
                            <p className='font-bold'>Key:</p>
                            <p>Explaination about the key that may take 2 lines</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='md:text-lg font-bold px-5 py-2'>Api Parameters</h1> 
                    </div>
                    <table className='text-center' {...getTableProps()}>
                         <thead className='border-b border-solid border-blue-300 '>
                         {headerGroups.map(headerGroup => (
                             <tr className=' p-5 ' {...headerGroup.getHeaderGroupProps()}>
                               {headerGroup.headers.map(column => (
                                   <th
                                       {...column.getHeaderProps()}
                                   >
                                     {column.render('Header')}
                                   </th>
                               ))}
                             </tr>
                         ))}
                         </thead>
                         <tbody {...getTableBodyProps()}>
                         {rows.map(row => {
                           prepareRow(row)
                           return (
                               <tr className='' {...row.getRowProps()}>
                                 {row.cells.map(cell => {
                                   return (
                                       <td className='px-5 md:px-10' 
                                           {...cell.getCellProps()}
                                           >
                                         {cell.render('Cell')}
                                       </td>
                                   )
                                 })}
                               </tr>
                           )
                         })}
                         </tbody>
                         </table>       
                    </div>
            </div>
        
            <div className=' bg-slate-500 w-full h-screen flex-col justify-around'>
                 {/* api box */}
                 <div className=" flex justify-center text-sm items-center md:text-sm lg:text-lg">
                    
                     <div className='self-center  text-xs px-1 md:text-md lg:text-lg border-solid border-2 border-slate-500  rounded-lg flex-1'> 
                      <input ref={apilink}  value="https://api.xlreturns.com/api?dafsfsjfhsjhsjhfsjhsfsfsfh" className="cursor-pointer outline-none focus:outline-none w-full bg-white" disabled/>
                     </div> 
                    <div className='cursor-pointer px-3 '>
                     <ContentCopyIcon className='text-lg mb-2' onClick={copyToClipboard}/>
                   </div>
                  </div>
                  
                {/* chart */}
                <div>
                    adfjsd
                </div>

                {/* json output */}
                <pre className='bg-slate-100 overflow-auto h-60'  >
                    <code >{JSON.stringify(output,null,2)}
                   
                    
                    </code>
                </pre>


            </div>
        </div>
    </div>
  )
}
