import React from "react";

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  image?: string;
  bedrooms?: number;
  bathrooms?: number;
  guests?: number;
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const defaultImage =
    "https://images.unsplash.com/photo-1560185127-6d2b0f020e1b?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <img
        src={property.image || defaultImage}
        alt={property.title}
        className="w-full h-80 object-cover rounded-md"
      />

      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600 mt-2">{property.location}</p>
      <p className="mt-4">{property.description}</p>

      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-semibold">${property.price} / night</p>
        <div className="flex space-x-4 text-gray-700">
          {property.bedrooms && <span>{property.bedrooms} Beds</span>}
          {property.bathrooms && <span>{property.bathrooms} Baths</span>}
          {property.guests && <span>{property.guests} Guests</span>}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
