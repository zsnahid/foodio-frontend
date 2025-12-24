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
import { Plus } from "lucide-react";

export function AddCategoryForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-sidebar font-body1">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-green-800 text-white">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
