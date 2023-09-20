import ListOptions from "./ListOptions";
import Content from "./Content";
import { useState, useEffect } from 'react';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [options, setOptions] = useState([
    {
      id: 1,
      name: "users",
      selected: true
    },
    {
      id: 2,
      name: "posts",
      selected: false
    },
    {
      id: 3,
      name: "comments",
      selected: false
    }
  ]);

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   localStorage.setItem('shoppingList', JSON.stringify(items));
  // }, [items]);


  const fetchItems = async (id) => {
    try {
      const selectedOption = options.filter((option) => option.id === id);
      const response = await fetch(API_URL + selectedOption[0].name);
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

  useEffect(() => {
    (async () => await fetchItems(1))();
  }, []);

  const handleOptionClick = (id) => {
    const newOptions = options.map((option) => (
      option.id === id ? { ...option, selected: true } : { ...option, selected: false }
    ));
    setOptions(newOptions);
    (async () => await fetchItems(id))();
  }

  return (
    <div className="App">
      <ListOptions items={options} handleItemClick={handleOptionClick} />
      {fetchError && <p>{fetchError}</p>}
      {isLoading && <p>Loadind Data...</p>}
      {!fetchError && !isLoading && <Content items={items} />}
    </div>
  );
}

export default App;
