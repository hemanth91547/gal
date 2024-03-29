import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Gal from './Gal';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState("");
  useEffect(()=>{
    },[])
  const changeHandler = e =>{
    setSearch(e.target.value);
  }
  const submitHandler = e =>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => {
      setData(response.data.photos.photo)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
  })
  }
  return (
    <div>
      <center>
        <h2>Gallery</h2><br></br>
        <form onSubmit={submitHandler}>
          <input size="30" type="text" onChange={changeHandler} value={search} className='hello' placeholder='Search for images'/><br /><br />
          <input type="submit" value="Search" className='sub'/>
        </form>
        <br />
        {data.length>=1?<Gal data={data}/>:<h3>No data loaded</h3>}
      </center>
    </div>
  )
}

export default App