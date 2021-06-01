import React, { useState, useEffect } from 'react';
// // import './App.css';
import './App.css';
import { Cards, Chart, CountryPicker } from './Components';
import { fetchData } from './API';
// import covidIcon from '../public/covid19.png'

function App() {
  const [data, setData] = useState([{}]);
  const [countries, setCountries] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      const response = await fetchData();
      setData(response);
    }
    fetchedData();
  }, []);

  console.log(data);
  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountries(country);
    console.log(data)
    console.log(data)

  }

  console.log('APP.js Data')
  console.log(countries)
  return (
    <div className='container'>
      <img className='img' src={'./covid19.png'} alt="Covid-19" />

      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} countries={countries} />
    </div>
  );
}

export default App;


// import React from 'react';  
// import styles from './App.css'  
// import {Cards, Charts, CountryPicker } from './Components'  
// import {fetchData} from './API';//we dont have to specify index file name if your file name is index  
// import coronaImage from './Images/Covid19Tracker.png';  
// class App extends React.Component {  
//     state = {         
//     data: {},  
//     country: '',  
//     }  
//     async componentDidMount(){  
//         const data = await fetchData();  
//         //console.log(fetchedData);  
//         this.setState({data});  
//     }  

//      handleCountryChange = async (country) => {          
//         const data = await fetchData(country);  
//         this.setState({data: data, country: country});  
//      }  

//     render(){  
//         const {data, country } = this.state;  
//         return(  
//         <div  className={styles.container} >  
//             {/* <img className={styles.image} src={coronaImage} alt="Covid-19"/>   */}
//             <Cards data={data}/>  
//             <CountryPicker handleCountryChange={this.handleCountryChange}/>  
//             <Charts data={data} country={country}/>  
//         </div>  
//     )  
// }  
// }  

// export default App; 
