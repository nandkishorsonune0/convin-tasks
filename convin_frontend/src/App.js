import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
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
          <Route exact path="/" component={Bucket} />
          <Route path="/:bucketId" component={CardList} />
          <CardModal />
          <HistoryList />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
