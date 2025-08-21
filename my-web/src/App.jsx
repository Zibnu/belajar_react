// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0);
  const menuItems = ['Beranda', 'Keranjang', 'Favorit', 'Trending'];
  const user = 'Maski'

  return (
    <>
      <Navbar 
      storeName="Mamank Kuliner"
      menuItems={menuItems}
      userName={user}
      showUserName={true}
      />
      <div className="container">
        <h1>Welcome  to ZibnuStore </h1>
        <p>Tempat Jual Beli Diamond murah terpercaya</p>
        <h5>Product</h5>
        <ol>
          <li>Diamond MLBB</li>
          <li>UC PUBG GLOBAL</li>
          <li>Diamond Free fire</li>
        </ol>
      </div>
    </>
  );
}

export default App;
