import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, User } from "lucide-react";

interface Call {
  id: string;
  name: string;
  number: string;
  waitTime: string;
  status: "waiting" | "active" | "completed";
}

const calls: Call[] = [
  {
    id: "1",
    name: "John Smith",
    number: "+1 (555) 123-4567",
    waitTime: "2m 30s",
    status: "waiting",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    number: "+1 (555) 987-6543",
    waitTime: "5m 15s",
    status: "waiting",
  },
  {
    id: "3",
    name: "Michael Brown",
    number: "+1 (555) 456-7890",
    waitTime: "1m 45s",
    status: "active",
  },
];

const statusColors = {
  waiting: "bg-yellow-100 text-yellow-800",
  active: "bg-green-100 text-green-800",
  completed: "bg-gray-100 text-gray-800",
};

export function CallQueue() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-crm-foreground">Call Queue</h1>
        <Badge variant="secondary" className="text-lg px-4 py-1">
          {calls.length} Active Calls
        </Badge>
      </div>
      
      <div className="grid gap-4">
        {calls.map((call) => (
          <Card key={call.id} className="p-4 animate-slideIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-crm-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-crm-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-crm-foreground">{call.name}</h3>
                  <p className="text-crm-muted text-sm">{call.number}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-crm-muted" />
                  <span className="text-sm text-crm-muted">{call.waitTime}</span>
                </div>
                <Badge className={statusColors[call.status]}>
                  {call.status.charAt(0).toUpperCase() + call.status.slice(1)}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}