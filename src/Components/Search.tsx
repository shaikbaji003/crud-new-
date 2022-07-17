import * as React from 'react';
import './PostData.css';




const Searchbar: React.FunctionComponent<{setSearchValue:any}> = ({setSearchValue}) => {
    // const [value,setValue]=React.useState('')
    // const searchFunction=(value:any)=>{
  
    //     setSearchValue(value)
    // }
    return (
        <div>
            {/* <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='search' className='search'/> */}
            {/* <button onClick={()=>searchFunction(value)} className='btn'>search</button> */}
        </div>
    )
}
export default Searchbar