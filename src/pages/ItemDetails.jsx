
import apartmentsData from "../data/items.json";

const ItemDetails = () => {
  const { id } = useParams();
  const item = apartmentsData.find((apt) => String(apt.id) === String(id));

  if (!item) {
    return (
      <div>
        <h2>Apartment not found</h2>
        <p>No apartment exists with id: {id}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Apartment Details</h2>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Name:</strong> {item.name}</p>
      <p><strong>Price:</strong> ${item.price}</p>
    </div>
  );
};

export default ItemDetails;
