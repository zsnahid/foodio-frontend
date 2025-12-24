import { OrderDetailsDialog } from "@/components/dashboard/orders/order-details-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    orderId: "#5b331ea1-49af-422e-ba46-4e94ca95294c",
    date: "Dec 12, 4:33 PM",
    customer: "John Doe",
    total: "$24.00",
    status: "Pending",
    address: "House:23, Road:23, Jamaica, USA",
    items: [
      {
        quantity: 1,
        name: "Pan-Seared Scallops",
        price: "$24.00",
      },
    ],
  },
  {
    orderId: "#5b331ea1-49af-422e-ba46-4e94ca95294d",
    date: "Dec 12, 4:33 PM",
    customer: "Jane Smith",
    total: "$56.00",
    status: "Preparing",
    address: "House:45, Road:67, New York, USA",
    items: [
      {
        quantity: 2,
        name: "Steak Frites",
        price: "$28.00",
      },
    ],
  },
  {
    orderId: "#5b331ea1-49af-422e-ba46-4e94ca95294e",
    date: "Dec 12, 4:33 PM",
    customer: "John Doe",
    total: "$56.00",
    status: "Ready",
    address: "House:23, Road:23, Jamaica, USA",
    items: [
      {
        quantity: 1,
        name: "Pan-Seared Scallops",
        price: "$24.00",
      },
      {
        quantity: 1,
        name: "Beer",
        price: "$8.00",
      },
    ],
  },
  {
    orderId: "#5b331ea1-49af-422e-ba46-4e94ca95294f",
    date: "Dec 12, 4:33 PM",
    customer: "John Doe",
    total: "$56.00",
    status: "Ready",
    address: "House:23, Road:23, Jamaica, USA",
    items: [
      {
        quantity: 1,
        name: "Pan-Seared Scallops",
        price: "$24.00",
      },
    ],
  },
  {
    orderId: "#5b331ea1-49af-422e-ba46-4e94ca95294g",
    date: "Dec 12, 4:33 PM",
    customer: "John Doe",
    total: "$56.00",
    status: "Ready",
    address: "House:23, Road:23, Jamaica, USA",
    items: [
      {
        quantity: 1,
        name: "Pan-Seared Scallops",
        price: "$24.00",
      },
    ],
  },
  {
    orderId: "#5b331ea1-49af-422e-ba46-4e94ca95294h",
    date: "Dec 12, 4:33 PM",
    customer: "John Doe",
    total: "$56.00",
    status: "Completed",
    address: "House:23, Road:23, Jamaica, USA",
    items: [
      {
        quantity: 1,
        name: "Pan-Seared Scallops",
        price: "$24.00",
      },
    ],
  },
  {
    orderId: "#5b331ea1-49af-422e-ba46-4e94ca95294i",
    date: "Dec 12, 4:33 PM",
    customer: "John Doe",
    total: "$56.00",
    status: "Ready",
    address: "House:23, Road:23, Jamaica, USA",
    items: [
      {
        quantity: 1,
        name: "Pan-Seared Scallops",
        price: "$24.00",
      },
    ],
  },
  {
    orderId: "#5b331ea1-49af-422e-ba46-4e94ca95294j",
    date: "Dec 12, 4:33 PM",
    customer: "John Doe",
    total: "$56.00",
    status: "Pending",
    address: "House:23, Road:23, Jamaica, USA",
    items: [
      {
        quantity: 1,
        name: "Pan-Seared Scallops",
        price: "$24.00",
      },
    ],
  },
];

export default function Orders() {
  return (
    <div className="font-body">
      <h1 className="text-2xl font-bold">Order Management</h1>
      <div className="mt-6 rounded-lg border">
        <Table>
          <TableHeader className="bg-sidebar">
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>{order.orderId.substring(0, 10)}...</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Select defaultValue={order.status.toLowerCase()}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="preparing">Preparing</SelectItem>
                      <SelectItem value="ready">Ready</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <OrderDetailsDialog order={order} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
