import * as React from 'react';
import { useEffect } from 'react';
import EditForm from './EditForm';




const Card: React.FunctionComponent<{curElem:any}> = ({curElem}) => {
    const [edit, setEdit]=React.useState(false);
    const [Articles, setArticles]=React.useState(0);
    const[Following, setFollowin]=React.useState(0);
    const[Followers, setFollowers]=React.useState(0);

    useEffect(()=>{
        fetch(curElem.followers_url)
        .then(data=>data.json())
        .then(data=>setFollowers(data.length))
       
        // fetch(curElem.following_url)
        // .then(data=>data.json())
        
        // .then(data=>setFollowin(data.length))

        // // fetch(curElem.starred_url)
        // // .then(data=>data.json())
        // // .then(data=>setArticles(data.length))

        

    },[])

  return (
    <div className="card_item" key={curElem.id}>
    <div className="card_inner">
        <img src={curElem.avatar_url} alt="" />
        <div className="userName">{curElem.login}</div>
        <div className="userUrl">{curElem.url}</div>
        <div className="detail-box">

            <div className="gitDetail"><span>Articles</span>45</div>
            <div className="gitDetail"><span>Following</span>{Followers}</div>
            <div className="gitDetail"><span>Followers</span>65</div>
        </div>
        <button className="seeMore" onClick={()=>{setEdit(true)}} >Edit</button>
    </div>
    {edit && <EditForm setedit={setEdit} curElem={curElem} />}
</div>
  )
};

export default Card;
