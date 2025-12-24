"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type Order = {
  orderId: string;
  address: string;
  items: {
    quantity: number;
    name: string;
    price: string;
  }[];
  total: string;
};

interface OrderDetailsDialogProps {
  order: Order;
}

export function OrderDetailsDialog({ order }: OrderDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-md bg-sidebar border-none font-body"
        >
          Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-sidebar font-body">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm font-medium text-green-800">{order.orderId}</p>
          <Separator />
          <div>
            <h3 className="text-sm font-medium">Address</h3>
            <p className="text-sm text-muted-foreground">{order.address}</p>
          </div>
          <Separator />
          <div>
            <h3 className="text-sm font-medium">Items</h3>
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-sm text-muted-foreground"
              >
                <span>
                  {item.quantity}x {item.name}
                </span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{order.total}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
