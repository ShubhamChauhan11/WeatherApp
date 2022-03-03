import Axios from "axios";
import "./styles.css";
import { useState } from "react";
import Start from "./components/Start";
import Weather from "./components/Weather";
function App() {
  const [input, setInput] = useState();

  const [Data, setData] = useState();
  const fetchData = async (e) => {
    e.preventDefault();

    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=6b9ff54c2663790fbf313746d010e920`
    );

    setData(response.data);
  };
  console.log(Data);

  return (
    <div className="app">
      <div>
        {Data && input ? (
          <Weather input={input} Data={Data} setData={setData} />
        ) : (
          <Start input={input} setInput={setInput} fetchData={fetchData} />
        )}
      </div>
    </div>
  );
}

export default App;
