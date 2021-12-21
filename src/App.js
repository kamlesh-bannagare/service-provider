import './App.css';
import { Routes, Route } from "react-router-dom";
import AddService from './components/service/AddService';
import ServiceList from './components/service/ServiceList';
import { useState } from 'react';
import AppBar from './components/AppBar'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
const dataList = [
  {
    title: "my hall",
    ammount: 4567,
    description: "this is the hall you should visit and see all the things."
  },
  {
    title: "sunshine education",
    ammount: 45663,
    description: "this is the education you should visit and see all the things."
  },
  {
    title: "my mechanical",
    ammount: 78496,
    description: "this is the my mechanical you should visit and see all the things."
  },
]

function App() {

  const [newData, setNewData] = useState(dataList)

  const getDataHandler = (data) => {

    // dataList.push(data)

    setNewData(previous => { return [data, ...previous] })
    console.log("newData", newData)
  }
  return (
    <div className="App">
      <AppBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="addservice" element={<AddService getData={getDataHandler} />} />
    </Routes>
      {/* <AddService getData={getDataHandler} /> */}
      <ServiceList data={newData} />
    </div>
  );
}

export default App;
