// pages/index.tsx
"use client";
import { useState, useEffect } from "react";
import CarCard from "@/components/CarCard/CarCard";
import AddCarForm from "@/components/AddCardForm/AddCardForm";

type Car = {
  _id: string;
  model_name: string;
  plate_number: string;
  color: string;
};

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch("/api/cars");
      if (!response.ok) throw new Error("Failed to fetch cars");
      const data: Car[] = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const addCar = async (newCar: { model_name: string; plate_number: string; color: string }) => {
    try {
      const response = await fetch("/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCar),
      });
      if (!response.ok) throw new Error("Failed to add car");
      fetchCars(); // Refresh car list
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  const deleteCar = async (id: string) => {
    try {
      const response = await fetch(`/api/cars/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete car");
      setCars((prevCars) => prevCars.filter((car) => car._id !== id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const updateCar = async (updatedCar: Car) => {
    const carData = {
        model_name: updatedCar.model_name,
        plate_number: updatedCar.plate_number,
        color: updatedCar.color,
    };
    console.log("Updating car with data:", carData); // Log the data being sent
    try {
        const response = await fetch(`/api/cars/${updatedCar._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(carData),
        });
        if (!response.ok) throw new Error("Failed to update car");
        fetchCars(); // Refresh car list
    } catch (error) {
        console.error("Error updating car:", error);
    }
};

return (
  <div className="main-container">
    {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="add-button"
        >
          Add Car
        </button>
      )}

    {showForm && <AddCarForm onAdd={addCar} onClose={() => setShowForm(false)} />}

    <div className="car-list">
      {cars.length > 0 ? (
        cars.map((car) => (
          <CarCard key={car._id} car={car} onDelete={deleteCar} onUpdate={updateCar} />
        ))
      ) : (
        <p>No cars available</p>
      )}
    </div>
  </div>
);
}
