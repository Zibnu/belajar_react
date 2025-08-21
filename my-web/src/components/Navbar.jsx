function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>{props.storeName || "ZibnuStore"}</span>
      </div>
      <ul className="link">
      {props.menuItems.map((item,index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
      {props.showUserName && (
        <div className="userInfo">
          <span>Hello {props.userName}</span>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
