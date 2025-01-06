import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Play, Download } from "lucide-react";

export default function Recordings() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Ses Kayıtları</h1>
        <p className="text-gray-500">Tüm çağrıların ses kayıtları</p>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Kayıt Ara..." className="pl-10" />
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
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Süre</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Boyut</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">2024-02-20 15:45</td>
                <td className="px-4 py-3">Mehmet Demir</td>
                <td className="px-4 py-3">00:03:45</td>
                <td className="px-4 py-3">2.4 MB</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}