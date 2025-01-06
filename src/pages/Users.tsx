import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, UserPlus } from "lucide-react";

export default function Users() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Kullanıcı Yönetimi</h1>
          <p className="text-gray-500">Sistem kullanıcıları listesi ve yönetimi</p>
        </div>
        <Button className="gap-2">
          <UserPlus className="w-4 h-4" />
          Yeni Kullanıcı
        </Button>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Kullanıcı Ara..." className="pl-10" />
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
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Ad Soyad</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">E-posta</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Rol</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Son Giriş</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">Ali Yıldız</td>
                <td className="px-4 py-3">ali@example.com</td>
                <td className="px-4 py-3">Yönetici</td>
                <td className="px-4 py-3">2024-02-20 14:30</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    Aktif
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