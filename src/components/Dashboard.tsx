import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Phone, Clock } from "lucide-react";
import { AsteriskStatus } from "./AsteriskStatus";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "00:00", value: 400 },
  { name: "03:00", value: 300 },
  { name: "06:00", value: 200 },
  { name: "09:00", value: 100 },
  { name: "12:00", value: 50 },
];

interface StatusCardProps {
  title: string;
  time: string;
  type: "gelen" | "giden";
}

const StatusCard = ({ title, time, type }: StatusCardProps) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
    <div className="p-2 bg-green-50 rounded-full">
      <Phone className="w-5 h-5 text-green-500" />
    </div>
    <div className="flex-1">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-medium">{time}</p>
    </div>
  </div>
);

export function Dashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Hoş Geldin Armağan</h1>
          <p className="text-gray-500">Genel Durum</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-1 text-sm bg-blue-500 text-white rounded-full">
            Gelen
          </button>
          <button className="px-4 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
            Giden
          </button>
          <button className="px-4 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
            Bugün
          </button>
          <button className="px-4 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
            1 Ay
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Bakiye Bilgisi</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Kullanılabilir Bakiye</p>
              <p className="text-2xl font-semibold">0.00</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Toplam Bakiye</p>
              <p>0.00</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Çağrı Değerlendirme</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">429</span>
                </div>
                <p className="text-sm text-gray-500">Önceki Dönem %80 (2155)</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">02:27:46</span>
                </div>
                <p className="text-sm text-gray-500">Önceki Dönem %83 (14:49:43)</p>
              </div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    fill="#3b82f6"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        <AsteriskStatus />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Disk Kullanım Durumu</h3>
          <div className="flex justify-center mb-4">
            <div className="relative w-32 h-32">
              <Progress value={137} className="h-32 w-32" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-semibold">137%</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-500">KULLANILABİLİR</p>
              <p className="font-medium">1.00 TB</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">KULLANILAN</p>
              <p className="font-medium">1.37 TB</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Günlük Performansınız</h3>
          <div className="space-y-4">
            <h4 className="text-gray-500">DURUM SÜRELERİ:</h4>
            <div className="space-y-2">
              <StatusCard
                title="Gelen Arama"
                time="00:00:02"
                type="gelen"
              />
              <StatusCard
                title="Giden Arama"
                time="00:10:24"
                type="giden"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}