import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import About from './components/About';

const App = () => {
  const [data, setData] = useState({});

  const consultAPI = async () => {
    const api = await fetch('https://staysafe-60f8.restdb.io/rest/molesters?apikey=48a7653c557f3c3cefc481412c38cb682f4b3');
    const data = await api.json()

    setData(data);

  }

  //Load Table
  useEffect(() => {
    consultAPI();
  }, [])

  return (
    <div>
      <Main
        data={data}
      />
      <About />
    </div>
  );
}

export default App;
