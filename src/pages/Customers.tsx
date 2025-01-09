import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, UserPlus, Filter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export default function Customers() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Müşteri Yönetimi</h1>
          <p className="text-gray-500">Müşteri listesi ve detayları</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => toast.success("Yeni müşteri ekleme formu açıldı")}>
              <UserPlus className="w-4 h-4" />
              Yeni Müşteri
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Yeni Müşteri Ekle</DialogTitle>
              <DialogDescription>
                Yeni müşteri bilgilerini aşağıdaki forma giriniz.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Input id="name" placeholder="Müşteri Adı" />
              </div>
              <div className="space-y-2">
                <Input id="phone" placeholder="Telefon" />
              </div>
              <div className="space-y-2">
                <Input id="email" placeholder="E-posta" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={() => toast.success("Müşteri başarıyla eklendi")}>
                Kaydet
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Müşteri Ara..." className="pl-10" />
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
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Müşteri Adı</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Telefon</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">E-posta</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Son Arama</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3">Ahmet Yılmaz</td>
                <td className="px-4 py-3">+90 532 123 4567</td>
                <td className="px-4 py-3">ahmet@example.com</td>
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