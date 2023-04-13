import { useLocation } from "../context/LocationContext";

function Header() {
  const { location } = useLocation();

  return (
    <div className="header">
      <h1>7 Günlük Hava Durumu </h1>
      <p className="location"> - {location}</p>
    </div>
  );
}

export default Header;
