import React, {useState, useEffect }from 'react'
import "./Display.css"
import _ from "lodash"
import Shower from "./Shower"
import Pagination from "./Pagination"


function Display({patients}) {
const [current, setcurrent] = useState(1)

useEffect(()=>{
  setcurrent(1)
},[patients])

const pagesize = 20
const handlePageChange = page => {
    
    setcurrent(page);

  }

  const getPageData = () => {

    const paginationData = paginate(patients, current, pagesize);
    return { totalCount: patients.length, data: paginationData }
  }

  const { totalCount, data } = getPageData();

function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber - 1) * pageSize;
    const check= _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
//console.log(pageSize)
   // console.log(check)
 
    return _(items)
             .slice(startIndex)
             .take(pageSize)
             .value();
 }


//console.log(patients);




    
    return (
        
        <div className="stage">
        <div className="results">
          <div className="resultstop">
          <div><h3>All Patients Matching Your Search Criteria</h3></div>
      <div className="topholder">
      
    <div className="pagelabel">{totalCount===0?"No Results":`Page ${current} of ${ Math.ceil(totalCount / pagesize) }`}</div>
          <div className="pagination">
          <Pagination
        itemsCount={totalCount}
        pageSize={pagesize}
        currentPage={current}
        onPageChange={handlePageChange} />
          </div>
              
      </div>
          </div>
       
      <div className="tshow"><Shower  group={data} /></div>
      
      
        
        
      
      
        
    </div>   
        </div>
    )
}

export default Display
