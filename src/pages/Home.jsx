
import { useState } from "react";
import apartmentsData from "../data/items.json";
import List from "../components/List.jsx";

function Home() {
  const [apartments, setApartments] = useState(apartmentsData);

  function handleDelete(apartmentId) {
    const filteredApartments = apartments.filter((apt) => apt.id !== apartmentId);
    setApartments(filteredApartments);
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome! Here is the list of available apartments:</p>
      <List items={apartments} onDelete={handleDelete} />
    </div>
  );
}

export default Home;
