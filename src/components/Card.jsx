import React from "react";

const Card = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-72 object-cover"
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        alt={place.name}
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">{place.name}</h5>
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < place.rating ? "text-yellow-500" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.045 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Price</p>
          <p className="text-sm font-medium">{place.price_level}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">Ranking</p>
          <p className="text-sm font-medium">{place.ranking}</p>
        </div>
        {place?.awards?.map((award) => (
          <div
            className="flex justify-between items-center my-1"
            key={award.display_name}
          >
            <img
              src={award.images.small}
              alt={award.display_name}
              className="w-6 h-6"
            />
            <p className="text-sm text-gray-600">{award.display_name}</p>
          </div>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <span
            key={name}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {name}
          </span>
        ))}
        {place.address && (
          <p className="text-sm text-gray-600 flex items-center mt-2">
            <span className="mr-1">📍</span>
            {place.address}
          </p>
        )}
        {place.phone && (
          <p className="text-sm text-gray-600 flex items-center mt-2">
            <span className="mr-1">📞</span>
            {place.phone}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
