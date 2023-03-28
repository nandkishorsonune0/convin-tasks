import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Bucket from "./components/Bucket";
import CardList from "./components/CardList";
import CardModal from "./components/CardModal";
import HistoryList from "./components/HistoryList";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Bucket />} />
            <Route path="/:bucketId" element={<CardList />} />
          </Routes>
          <CardModal />
          <HistoryList />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
