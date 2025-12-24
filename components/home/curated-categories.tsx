"use client";
import { ChefHat, Utensils, Cake } from "lucide-react";

const categories = [
  {
    name: "Starters",
    icon: Utensils,
  },
  {
    name: "Main Courses",
    icon: ChefHat,
  },
  {
    name: "Desserts",
    icon: Cake,
  },
];

export function CuratedCategories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-serif">Curated Categories</h2>
          <p className="text-muted-foreground">
            Explore our diverse menu of culinary delights.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-yellow-50 rounded-lg p-6 flex flex-col items-center justify-center"
            >
              <div className="bg-green-800 text-white rounded-full p-3 mb-4">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
