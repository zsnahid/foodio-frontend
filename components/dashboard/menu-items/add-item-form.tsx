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
import { Upload, X } from "lucide-react";

export function AddItemForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-sidebar font-body">
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="Starters" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="starters">Starters</SelectItem>
                <SelectItem value="main-courses">Main Courses</SelectItem>
                <SelectItem value="desserts">Desserts</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" />
          </div>
          <div className="space-y-2">
            <Label>Image</Label>
            <div className="flex items-center justify-center w-full">
              <Label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-background"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    Drag or click{" "}
                    <span className="font-semibold text-primary">here</span> to
                    upload
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Size must be maximum 2mb. Supported formats: PNG & JPEG
                  </p>
                </div>
                <Input id="dropzone-file" type="file" className="hidden" />
              </Label>
            </div>
          </div>
          <div className="p-2 border rounded-lg flex justify-between items-center">
            <span className="text-sm">1. Dish_image.png</span>
            <Button variant="ghost" size="icon" className="h-5 w-5">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="availability" defaultChecked />
            <Label htmlFor="availability">Available for Order</Label>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-green-800 text-white">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
