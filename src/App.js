import { useState } from "react";
import { getCities } from "./services/citiesService"
import CitiesForm from "./components/CitiesForm/CitiesForm";
import City from "./components/City/City";

function App() {
  const [cities, setCitites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  async function handleSearch(searchValue) {
    setSearchValue(searchValue);

    if (!searchValue) {
      setCitites([]);
      return;
    }

    let cities = await getCities();
    cities = cities.filter((place) => {
      const regex = new RegExp(searchValue, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
    setCitites(cities);
  }

  return (
    <div className="app">
      <CitiesForm searchValue={searchValue} handleSearch={handleSearch} />
      <div className="cities">
        {cities.length == 0 &&
          <>
            <City city="Filter For A City" isDefault={true} />
            <City city="Or A State" isDefault={true} />
          </>
        }
        {cities.map((city) =>
        (<City city={city.city}
          population={city.population} state={city.state}
          searchValue={searchValue} />
        ))}
      </div>
    </div>
  );
}

export default App;
