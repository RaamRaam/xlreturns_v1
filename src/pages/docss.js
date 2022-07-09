import React,{useRef,useEffect} from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import * as d3 from 'd3'

const parseTime = d3.timeParse('%Y-%m-%d');
const data = [ {time:'2021-01-1',obs_data:32457,climate_data:32457}                  ,
{time:'2021-01-2',obs_data:32466,climate_data:32454.8},
{time:'2021-01-3',obs_data:32444.55,climate_data:32452.6},
{time:'2021-01-4',obs_data:32444.55,climate_data:32450.4},
{time:'2021-01-5',obs_data:32446.4,climate_data:32448.2},
{time:'2021-01-6',obs_data:32452,climate_data:32446},
{time:'2021-01-7',obs_data:32445,climate_data:32443.8},
{time:'2021-01-8',obs_data:32445,climate_data:32441.6},
{time:'2021-01-9',obs_data:32445,climate_data:32439.4},
{time:'2021-01-10',obs_data:32463.65,climate_data:32437.2},
{time:'2021-01-11',obs_data:32435,climate_data:32435},
{time:'2021-01-12',obs_data:32463.65,climate_data:32436.1911764706},
{time:'2021-01-13',obs_data:32460.75,climate_data:32437.3823529412},
{time:'2021-01-14',obs_data:32474,climate_data:32438.5735294118},
{time:'2021-01-15',obs_data:32456.9,climate_data:32439.7647058823},
{time:'2021-01-16',obs_data:32465,climate_data:32440.9558823529},
{time:'2021-01-17',obs_data:32464.9,climate_data:32442.1470588235},
{time:'2021-01-18',obs_data:32468.3,climate_data:32443.3382352941},
{time:'2021-01-19',obs_data:32455.1,climate_data:32444.5294117647},
{time:'2021-01-20',obs_data:32465,climate_data:32445.7205882353},
{time:'2021-01-21',obs_data:32460.05,climate_data:32446.9117647059},
{time:'2021-01-22',obs_data:32464.8,climate_data:32448.1029411765},
{time:'2021-01-23',obs_data:32445,climate_data:32449.294117647},
{time:'2021-01-24',obs_data:32450,climate_data:32450.4852941176},
{time:'2021-01-25',obs_data:32450,climate_data:32451.6764705882},
{time:'2021-01-26',obs_data:32464.55,climate_data:32452.8676470588},
{time:'2021-01-27',obs_data:32448.15,climate_data:32454.0588235294},
{time:'2021-01-28',obs_data:32460.25,climate_data:32455.25},
{time:'2021-01-29',obs_data:32464.75,climate_data:32456.4411764706},
{time:'2021-01-30',obs_data:32473,climate_data:32457.6323529412},
{time:'2021-01-31',obs_data:32460.35,climate_data:32458.8235294117},
{time:'2021-01-32',obs_data:32473,climate_data:32460.0147058823},
{time:'2021-01-33',obs_data:32469.5,climate_data:32461.2058823529},
{time:'2021-01-34',obs_data:32478.95,climate_data:32462.3970588235},
{time:'2021-01-35',obs_data:32466.05,climate_data:32463.5882352941},
{time:'2021-01-36',obs_data:32468,climate_data:32464.7794117647},
{time:'2021-01-37',obs_data:32465,climate_data:32465.9705882353},
{time:'2021-01-38',obs_data:32475,climate_data:32467.1617647059},
{time:'2021-01-39',obs_data:32465,climate_data:32468.3529411764},
{time:'2021-01-40',obs_data:32472.15,climate_data:32469.544117647},
{time:'2021-01-41',obs_data:32472.15,climate_data:32470.7352941176},
{time:'2021-01-42',obs_data:32490,climate_data:32471.9264705882},
{time:'2021-01-43',obs_data:32472.1,climate_data:32473.1176470588},
{time:'2021-01-44',obs_data:32480.1,climate_data:32474.3088235294},
{time:'2021-01-45',obs_data:32480.1,climate_data:32475.5},
{time:'2021-01-46',obs_data:32481,climate_data:32476.6911764706},
{time:'2021-01-47',obs_data:32475.1,climate_data:32477.8823529411},
{time:'2021-01-48',obs_data:32475.1,climate_data:32479.0735294117},
{time:'2021-01-49',obs_data:32475.1,climate_data:32480.2647058823},
{time:'2021-01-50',obs_data:32481.95,climate_data:32481.4558823529},
{time:'2021-01-51',obs_data:32475,climate_data:32482.6470588235},
{time:'2021-01-52',obs_data:32475.1,climate_data:32483.8382352941},
{time:'2021-01-53',obs_data:32475.75,climate_data:32485.0294117647},
{time:'2021-01-54',obs_data:32485,climate_data:32486.2205882353},
{time:'2021-01-55',obs_data:32475.75,climate_data:32487.4117647058},
{time:'2021-01-56',obs_data:32485,climate_data:32488.6029411764},
{time:'2021-01-57',obs_data:32485,climate_data:32489.794117647},
{time:'2021-01-58',obs_data:32493,climate_data:32490.9852941176},
{time:'2021-01-59',obs_data:32482,climate_data:32492.1764705882},
{time:'2021-01-60',obs_data:32492,climate_data:32493.3676470588},
{time:'2021-01-61',obs_data:32495,climate_data:32494.5588235294},
{time:'2021-01-62',obs_data:32495.75,climate_data:32495.7499999999},
{time:'2021-01-63',obs_data:32485.05,climate_data:32493.65},
{time:'2021-01-64',obs_data:32488.55,climate_data:32491.55},
{time:'2021-01-65',obs_data:32486,climate_data:32489.4499999999},
{time:'2021-01-66',obs_data:32487.55,climate_data:32487.35},
{time:'2021-01-67',obs_data:32481.05,climate_data:32485.25},
{time:'2021-01-68',obs_data:32481.05,climate_data:32483.15},
{time:'2021-01-69',obs_data:32480.05,climate_data:32481.05},
{time:'2021-01-70',obs_data:32481,climate_data:32478.95},
{time:'2021-01-71',obs_data:32470,climate_data:32476.85},
{time:'2021-01-72',obs_data:32470.85,climate_data:32474.75},
{time:'2021-01-73',obs_data:32470,climate_data:32472.65},
{time:'2021-01-74',obs_data:32474.9,climate_data:32470.55},
{time:'2021-01-75',obs_data:32463.25,climate_data:32468.45},
{time:'2021-01-76',obs_data:32468.45,climate_data:32466.35},
{time:'2021-01-77',obs_data:32468,climate_data:32464.25},
{time:'2021-01-78',obs_data:32469.7,climate_data:32462.15},
{time:'2021-01-79',obs_data:32456,climate_data:32460.05},
{time:'2021-01-80',obs_data:32457.95,climate_data:32457.95}
      ].map(({time, obs_data, climate_data}) => ({ time: parseTime(time), obs_data, climate_data }));

export default function docss() {
    let apilink = useRef("")
    const copyToClipboard = () => {
       
       console.log(apilink.current.value)
       alert(`You have copied "${apilink.current.value}"`);
    }
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




  const areachart = useRef();
  console.log(areachart.current)
  

  useEffect(()=>{
    const margin = { top: 10, right: 10, bottom: 50, left: 50 };

    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;
    const svg = d3.select(areachart.current).attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)

    const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.time))
    .range([0, width]);

const y = d3.scaleLinear()
    .domain(d3.extent(data.flatMap(d => [d.obs_data, d.climate_data]))).nice()
    .range([height, 0]);

// area generators

// from the top of the chart to the line for climate
const topToClimate = d3.area()
    .x(d => x(d.time))
    .y0(0)
    .y1(d => y(d.climate_data))
    //.curve(d3.curveMonotoneX);

// from the bottom of the chart to the line for climate
const bottomToClimate = d3.area()
    .x(d => x(d.time))
    .y0(height)
    .y1(d => y(d.climate_data))
    //.curve(d3.curveMonotoneX);

// from the top of the chart to the line for obs
const topToObs = d3.area()
    .x(d => x(d.time))
    .y0(0)
    .y1(d => y(d.obs_data))
   // .curve(d3.curveMonotoneX);

// from the bottom of the chart to the line for obs
const bottomToObs = d3.area()
    .x(d => x(d.time))
    .y0(height)
    .y1(d => y(d.obs_data))
   // .curve(d3.curveMonotoneX);

// clip paths
svg.append('clipPath')
    .attr('id', 'topToObs')
  .append('path')
    .attr('d', topToObs(data));

svg.append('clipPath')
    .attr('id', 'bottomToObs')
  .append('path')
    .attr('d', bottomToObs(data));

// areas

// draw a blue area from the bottom of the chart to the blue line for climate.
// the clip path makes any part of this area outside of the clip path invisible.
// the clip path goes from the top of the chart to the red line for obs.
// the result is that you can only see the blue area when it is above the obs
// line and beneath the climate line.
svg.append('path')
    .attr('fill', 'red')
    .attr('opacity', 0.4)
    .attr('clip-path', 'url(#topToObs)')
    .attr('d', bottomToClimate(data));

// draw a red area from the top of the chart to the blue line for climate.
// the clip path makes any part of this area outside of the clip path invisible.
// the clip path goes from the bottom of the chart to the red line for obs.
// the result is that you can only see the read area when it is above the climate
// line and beneath the obs line.
svg.append('path')
    .attr('fill', 'green')
    .attr('opacity', 0.4)
    .attr('clip-path', 'url(#bottomToObs)')
    .attr('d', topToClimate(data));

// lines

// draw a blue line for climate
svg.append('path')
    .attr('stroke', 'red')
    .attr('fill', 'none')
    .attr('d', bottomToClimate.lineY1()(data));

// draw a red line for obs
svg.append('path')
    .attr('stroke', 'green')
    .attr('fill', 'none')
    .attr('d', bottomToObs.lineY1()(data));

// axes

svg.append('g')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(5, '%b %d'));

svg.append('g')
    .call(d3.axisLeft(y));

  })
  return (

    <div>
        {/* div for navbar */}
        <div>

        </div >
        {/* div for chart and explaination */}
        <div className='h-full md:flex space-y-5 md:space-y-0 justify-center'>
            {/* left explaination */}
            <div className='md:w-1/2 w-full p-5'>
                <div>
                    <p className='font-bold'>inputs:</p>
                    <div className='flex'>
                        <p>Instrument Code : </p>
                        <div>
                            List
                        </div>
                    </div>
                    <p>Date</p>
                    <p>API_KEY</p>
                </div>
                <div>
                    <div className='flex-col'>
                        <p className='font-bold'>inflection_prices:</p>
                        <p>[p1|p2|p3|p4]</p>
                        <p>p1 = open price,p4 = close price</p>
                        <p>p2|p3 = high , low in order of event</p>
                    </div>
                    <div>
                        <p className='font-bold'>inflection_times:</p>
                        <p>[t1|t2|t3|t4]</p>
                    </div>
                    <div>
                        <p className='font-bold'>inflection_distance</p>
                        <p>[t2-t1 : p2-p1 : sqrt((t2-t1)^2+(p2-p1)^2))]</p>
                    </div>
                    <div>
                        <p className='font-bold'>inflection_angles:</p>
                        <p>a=tan-1((p2-p1)/(t2-t1))</p>
                        <p>[a,90,90-a]</p>
                    </div>
                    <div>
                        <p className='font-bold'>returns: </p>
                        <p>log(p2/p1), log(p3/p1), log(p4/p1), log(p3/p2), log(p4/p2), log(p4/p3) </p>
                    </div>
                    <div>
                        <p className='font-bold'>ohlc_relativity:</p>
                        <p>base=max(p2,p3)-min(p2,p3)</p>
                        <p>[(p2-min(p2,p3))/base | (p3-min(p2,p3))/base]</p>
                    </div>
                </div>
                
            </div>
            {/* chart */}
            <div className=' bg-slate-500 md:w-1/2 w-full h-screen flex-col justify-around p-5'>
                 {/* api box */}
                 <div className=" flex justify-center text-sm items-center md:text-sm lg:text-lg">
                    
                     <div className='self-center  text-xs  md:text-md lg:text-lg  rounded-lg flex-1'> 
                      <input ref={apilink}  value="https://api.xlreturns.com/api?dafsfsjfhsjhsjhfsjhsfsfsfh" className="cursor-pointer outline-none focus:outline-none w-full bg-white px-1" disabled/>
                     </div> 
                    <div className='cursor-pointer px-3 '>
                     <ContentCopyIcon className='text-lg mb-2' onClick={copyToClipboard}/>
                   </div>
                  </div>
                  
                {/* chart */}
                <div className='w-full h-[300px] mb-5 bg-white overflow-auto my-auto' >
                    <svg ref={areachart} className='' ></svg>
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
