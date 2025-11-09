interface PropertyCardProps {
  property: {
    id: number;
    name: string;
    location: string;
    price: number;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded shadow p-4">
      <img src={property.image} alt={property.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-bold">{property.name}</h2>
      <p>{property.location}</p>
      <p>${property.price}/night</p>
    </div>
  );
}
