import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Phone } from "lucide-react";

export default function Calls() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Çağrı Kayıtları</h1>
        <p className="text-gray-500">Tüm çağrıların listesi ve detayları</p>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Çağrı Ara..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtrele
          </Button>
        </div>

        <div className="rounded-lg border">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Tarih</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Müşteri</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Numara</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Süre</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">2024-02-20 15:45</td>
                <td className="px-4 py-3">Mehmet Demir</td>
                <td className="px-4 py-3">+90 533 234 5678</td>
                <td className="px-4 py-3">00:03:45</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    Tamamlandı
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}