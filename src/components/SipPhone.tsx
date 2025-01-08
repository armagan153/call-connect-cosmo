import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Phone, PhoneOff, Mic, MicOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export function SipPhone() {
  const [number, setNumber] = useState("");
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { toast } = useToast();

  const handleCall = () => {
    if (!number.trim()) {
      toast({
        title: "Hata",
        description: "Lütfen bir numara girin",
        variant: "destructive",
      });
      return;
    }

    setIsCallActive(!isCallActive);
    if (!isCallActive) {
      toast({
        title: "Arama Başlatıldı",
        description: `${number} numarası aranıyor...`,
      });
    } else {
      toast({
        title: "Arama Sonlandırıldı",
        description: "Çağrı kapatıldı",
      });
    }
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    toast({
      title: isMuted ? "Mikrofon Açıldı" : "Mikrofon Kapatıldı",
      description: isMuted ? "Sesiniz karşı tarafa iletiliyor" : "Sesiniz karşı tarafa iletilmiyor",
    });
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">SIP Telefon</h3>
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            type="tel"
            placeholder="Numara girin..."
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={handleCall}
            variant={isCallActive ? "destructive" : "default"}
            className="w-20"
          >
            {isCallActive ? (
              <PhoneOff className="h-4 w-4" />
            ) : (
              <Phone className="h-4 w-4" />
            )}
          </Button>
          <Button
            onClick={handleMute}
            variant="outline"
            className={`w-20 ${isMuted ? "bg-red-50" : ""}`}
          >
            {isMuted ? (
              <MicOff className="h-4 w-4 text-red-500" />
            ) : (
              <Mic className="h-4 w-4" />
            )}
          </Button>
        </div>
        {isCallActive && (
          <div className="text-center animate-pulse">
            <p className="text-sm text-gray-500">
              Arama sürüyor: {number}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}