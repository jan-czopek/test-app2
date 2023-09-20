import ReqButtons from "./ReqButtons";
import Content from "./Content";
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const reqTypes = ["users", "posts", "comments"]
  const [reqType, setReqType] = useState(reqTypes[0]);

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL + reqType);
        if (!response.ok) throw Error('Nie pobrano danych!');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    (async () => await fetchItems())();
  }, [reqType]);

  return (
    <div className="App">
      <ReqButtons reqTypes={reqTypes} selectedReqType={reqType} setReqType={setReqType} />
      {fetchError && <p>{fetchError}</p>}
      {isLoading && <p>Loadind Data...</p>}
      {!fetchError && !isLoading && <Content items={items} />}
    </div>
  );
}

export default App;
