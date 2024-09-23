'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import { fetchProperty } from './actions/fetchProperty';
import PropertyList from './components/PropertyList';

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProperty();
      setProperties(response.data || []);
      setFilteredProperties(response.data || []); 
    };
    fetchData();
  }, []);

  const handleCategorySelect = (categories: { category: string, type?: string }[]) => {
    setSelectedCategories(categories);
    filterProperties(categories, selectedLocation, userEmail);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    filterProperties(selectedCategories, location, userEmail);
  };

  const handleShowUserProperties = (email: string) => {
    setUserEmail(email);
    filterProperties(selectedCategories, selectedLocation, email);
  };

  const filterProperties = (categories: { category: string, type?: string }[], location: string | null, email: string | null) => {
    let filtered = properties;

    // Filter based on selected categories
    if (categories.length > 0) {
      filtered = filtered.filter((property: any) => {
        return categories.some(
          (category) =>
            property.category === category.category &&
            (category.type ? property.homeProperty?.type === category.type : true)
        );
      });
    }

    if (location) {
      const locationWords = location
        .split(',')
        .map((word) => word.trim()) 
        .filter((word) => isNaN(Number(word))); 

      filtered = filtered.filter((property: any) => {
        const propertyLocation = property.location || '';
        return locationWords.every((word) => propertyLocation.includes(word));
      });
    }

    if (email) {
      filtered = filtered.filter((property: any) => property.email === email);
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="parent-container">
      <Header onCategorySelect={handleCategorySelect} onLocationSelect={handleLocationSelect} />
      <div className="content-section grid grid-cols-1 gap-4 pl-20 pr-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        <PropertyList ProductData={{ data: filteredProperties }} />
      </div>
    </div>
  );
}
