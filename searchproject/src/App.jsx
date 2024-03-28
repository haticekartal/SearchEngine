import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from'./api'
import { useState } from "react";
import ImageList from "./components/imageList";

function App() {
  const [images, setimages] = useState([])
 

  const handleSubmit =async (term) => {
    //debugger;
    //console.log(term);
    const result= await searchImages(term);
    setimages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagesPlaceHolder={images} />
    </div>
  );
}

export default App;
