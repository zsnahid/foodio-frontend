"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Plus, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const menuItems = [
  {
    name: "Pan-Seared Scallops",
    category: "Starters",
    price: "$24.00",
    status: "Available",
  },
  {
    name: "Mediterranean Olive Medley",
    category: "Starters",
    price: "$18.00",
    status: "Available",
  },
  {
    name: "Citrus Swirl Delights",
    category: "Main Courses",
    price: "$32.00",
    status: "Available",
  },
  {
    name: "Creamy Garlic Shrimp Pasta",
    category: "Main Courses",
    price: "$45.00",
    status: "Available",
  },
  {
    name: "Herb-Roasted Chicken Bowl",
    category: "Desserts",
    price: "$16.00",
    status: "Available",
  },
];

const categories = [
  {
    name: "Starters",
  },
  {
    name: "Main Courses",
  },
  {
    name: "Desserts",
  },
];

export default function MenuItems() {
  const [activeTab, setActiveTab] = useState("menu-items");
  return (
    <div className="font-body">
      <Tabs
        defaultValue="menu-items"
        onValueChange={(value) => setActiveTab(value)}
      >
        <div className="flex items-center justify-between">
          <TabsList className="rounded-full *:rounded-full">
            <TabsTrigger value="menu-items">Menu Items</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          {activeTab === "menu-items" ? (
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Item
            </Button>
          ) : (
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Category
            </Button>
          )}
        </div>
        <TabsContent value="menu-items">
          <div className="mt-6 rounded-lg border">
            <Table>
              <TableHeader className="bg-sidebar">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {menuItems.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>
                      <Badge className="bg-green-200 text-green-800 font-semibold">
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="categories">
          <div className="mt-6 rounded-lg border">
            <Table>
              <TableHeader className="bg-sidebar">
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <TableRow key={category.name}>
                    <TableCell>{category.name}</TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-600"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
