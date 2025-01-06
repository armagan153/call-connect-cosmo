import { Phone, Server, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AsteriskStatus() {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Sistem Durumu</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-green-500" />
              <span>Asterisk Sunucu</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          
          <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Server className="w-5 h-5 text-green-500" />
              <span>Digital Ocean Droplet</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>

          <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-500" />
              <span>SIP Telefon</span>
            </div>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
        </div>
      </div>
    </Card>
  );
}