import { createContext, useState, useEffect, useContext } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "İstanbul"
  );

  useEffect(() => {
    localStorage.setItem("location", location);
  }, [location]);

  const local = {
    location,
    setLocation,
  };
  return (
    <LocationContext.Provider value={local}>
      {children}
    </LocationContext.Provider>
  );
};
export const useLocation = () => useContext(LocationContext);
