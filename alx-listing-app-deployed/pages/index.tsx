import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
  const properties = [
    {
      id: 1,
      name: "Beautiful Apartment",
      location: "Paris, France",
      price: 120,
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: "Cozy Cottage",
      location: "London, UK",
      price: 90,
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
