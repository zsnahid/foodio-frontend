"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Edit, X } from "lucide-react";

interface MenuItem {
  name: string;
  category: string;
  price: string;
  status: string;
  description?: string;
}

interface EditItemFormProps {
  item: MenuItem;
}

export function EditItemForm({ item }: EditItemFormProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-sidebar font-body">
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue={item.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" defaultValue={item.price.replace("$", "")} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select defaultValue={item.category}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Starters">Starters</SelectItem>
                <SelectItem value="Main Courses">Main Courses</SelectItem>
                <SelectItem value="Desserts">Desserts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" defaultValue={item.description} />
          </div>
          <div className="space-y-2">
            <Label>Image</Label>
            <div className="p-2 border rounded-lg flex justify-between items-center">
              <span className="text-sm">1. Dish_image.png</span>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="availability"
              defaultChecked={item.status === "Available"}
            />
            <Label htmlFor="availability">Available for Order</Label>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
