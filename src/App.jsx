import { useState } from "react";
import Search from "./components/Search/";
import { DummyData } from "./api/data";

function App() {
  return <Search data={DummyData} />;
}

export default App;
