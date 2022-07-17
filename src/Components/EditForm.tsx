import * as React from 'react';



const EditForm: React.FC<{setedit:any, curElem:any}> = ({setedit, curElem}) => {
    console.log(curElem);
  return (
    <>
    <form>
    <input value={curElem.login} type='text' />
    <input  type='number' />
    <input type='number' />
    <input type='number' />
<button type='button' onClick={()=>{setedit(false)}}>Save</button>
    </form>

    </>
  )
};

export default EditForm;
