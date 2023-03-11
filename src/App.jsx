import { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import ichirodata from "./assets/data/ichiro.json";
import kmatsuidata from "./assets/data/kmatsui.json";
import shinjodata from "./assets/data/shinjo.json";
import taguchidata from "./assets/data/taguchi.json";
import hmatsuidata from "./assets/data/hmatsui.json"
import iguchidata from "./assets/data/iguchi.json";
import ohtanidata from "./assets/data/ohtani.json";
import fukudomedata from "./assets/data/fukudome.json";
import johjimadata from "./assets/data/johjima.json";
import iwamuradata from "./assets/data/iwamura.json";
import akiyamadata from "./assets/data/akiyama.json";
import tsutsugodata from "./assets/data/tsutsugo.json";
import suzukidata from "./assets/data/suzuki.json";
import kawasakidata from "./assets/data/kawasaki.json";
import aokidata from "./assets/data/aoki.json";
import nishiokadata from "./assets/data/nishioka.json";

import yoshidadata from "./assets/data/yoshida.json";

// import reactLogo from './assets/react.svg'
import './App.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




function App() {
  const [datasource, setDatasource] = useState('ichiro')

  let data = [];
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'OPS compared NPB/MLB',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ['Age 18', 'Age 19', 'Age 20', 'Age 21', 'Age 22', 'Age 23', 'Age 24', 'Age 25', 'Age 26', 'Age 27', 'Age 28', 'Age 29', 'Age 30', 'Age 31', 'Age 32', 'Age 33', 'Age 34', 'Age 35', 'Age 36', 'Age 37', 'Age 38', 'Age 39', 'Age 40', 'Age 41', 'Age 42', 'Age 43', 'Age 44', 'Age 45'];

 // colors NPB: light blue #deebf7 dark blue #9ecae1
 // MLB light red #fee6ce dark red #fdae6b

  switch(datasource) {
    case 'ohtani':
      data = ohtanidata;
      break;
    case 'shinjo':
      data = shinjodata;
      break;
    case 'hmatsui':
      data = hmatsuidata;
      break;
    case 'kmatsui':
      data = kmatsuidata;
      break;
    case 'iguchi':
      data = iguchidata;
      break;      
    case 'taguchi':
      data = taguchidata;
      break;
    case 'fukudome':
      data = fukudomedata;
      break;
    case 'johjima':
      data = johjimadata;
      break;
    case 'iwamura':
      data = iwamuradata;
      break;
    case 'tsutsugo':
      data = tsutsugodata;
      break;
    case 'aoki':
      data = aokidata;
      break;
    case 'suzuki':
      data = suzukidata;
      break;
    case 'akiyama':
      data = akiyamadata;
      break;
    case 'kawasaki':
      data = kawasakidata;
      break;
    case 'nishioka':
      data = nishiokadata;
      break;
    case 'yoshida':
      data = yoshidadata;
      break;
    default:
      data = ichirodata;
  };

  console.log(datasource, data);

  const chartdata = {
    labels,
    datasets: [
      {
        label: 'NPB OBP',
        data: data['NOBP'],
        backgroundColor: '#deebf7',
      },
      {
        label: 'NPB SLG',
        data: data['NSLUG'],
        backgroundColor: '#9ecae1',
      },
      {
        label: 'MLB OBP',
        data: data['MOBP'],
        backgroundColor: '#fee6ce',
      },
      {
        label: 'MLB SLG',
        data: data['MSLG'],
        backgroundColor: '#fdae6b',
      },
    ],
  };

  return (
    <div className="App">
      <h1>Comparing Japanese MLB hitters' OPS from Japanese league OPS</h1>
      <p></p>
      <select onChange={(e) => setDatasource(e.target.value)}>
        <option value='ichiro'>Ichiro (2001)</option>
        <option value='shinjo'>Tsuyoshi Shinjo (2001)</option>
        <option value='taguchi'>So Taguchi (2002)</option>
        <option value='hmatsui'>Hideki Matsui (2003)</option>
        <option value='kmatsui'>Kazuo Matsui (2004)</option>
        <option value='iguchi'>Tadahito Iguchi (2005)</option>
        <option value='johjima'>Kenji Johjima (2006)</option>
        <option value='iwamura'>Akinori Iwamura (2007)</option>
        <option value='fukudome'>Kosuke Fukudome (2008)</option>
        <option value='nishioka'>Tsuyoshi Nishioka (2011)</option>
        <option value='aoki'>Norichika Aoki (2012)</option>
        <option value='kawasaki'>Munenori Kawasaki (2012)</option>
        <option value='ohtani'>Shohei Ohtani (2018)</option>
        <option value='akiyama'>Shogo Akiyama (2020)</option>
        <option value='tsutsugo'>Yoshitomo Tsutsugo (2020)</option>
        <option value='suzuki'>Seiya Suzuki (2022)</option>
        <option value='yoshida'>Masataka Yoshida (2023)</option>
      </select>

      <Bar options={options} data={chartdata} />
    </div>
  )
}

export default App
