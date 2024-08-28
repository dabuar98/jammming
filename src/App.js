// import Track from './Track'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults';

function App() {
  return (
    <>
      <SearchBar />    
      {/* <Track  albumCover="../public/logo192.png" 
              trackName="Sample Track" 
              trackAuthor="Sample Author" 
              trackYear="Sample Year" /> */}

      <SearchResults />
    </>
  );
}

export default App;
