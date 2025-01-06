import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Pazartesi", calls: 120 },
  { name: "Salı", calls: 150 },
  { name: "Çarşamba", calls: 180 },
  { name: "Perşembe", calls: 140 },
  { name: "Cuma", calls: 160 },
];

export default function Reports() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Raporlar</h1>
        <p className="text-gray-500">Çağrı ve performans raporları</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Toplam Çağrı</h3>
          <p className="text-3xl font-semibold">1,234</p>
          <p className="text-sm text-gray-500">Son 30 gün</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Ortalama Süre</h3>
          <p className="text-3xl font-semibold">4m 12s</p>
          <p className="text-sm text-gray-500">Çağrı başına</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-2">Cevaplama Oranı</h3>
          <p className="text-3xl font-semibold">92%</p>
          <p className="text-sm text-gray-500">Son 30 gün</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Günlük Çağrı Dağılımı</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="calls" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}