import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Phone, PhoneOff, Mic, MicOff, Headset } from "lucide-react";
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

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and common phone number characters
    const value = e.target.value.replace(/[^\d\s+()-]/g, '');
    setNumber(value);
  };

  return (
    <Card className="p-4 w-full">
      <div className="flex items-center gap-2 mb-4">
        <Headset className="h-6 w-6 text-blue-500" />
        <h3 className="text-lg font-medium">SIP Telefon</h3>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <Input
            type="tel"
            placeholder="Aramak istediğiniz numarayı girin..."
            value={number}
            onChange={handleNumberChange}
            className="text-lg py-3"
            maxLength={15}
            pattern="[0-9\s+()-]*"
            title="Lütfen geçerli bir telefon numarası girin"
          />
          <div className="flex gap-2">
            <Button
              onClick={handleCall}
              variant={isCallActive ? "destructive" : "default"}
              className="flex-1 h-12 text-base"
            >
              {isCallActive ? (
                <>
                  <PhoneOff className="h-5 w-5 mr-2" />
                  Aramayı Sonlandır
                </>
              ) : (
                <>
                  <Phone className="h-5 w-5 mr-2" />
                  Ara
                </>
              )}
            </Button>
            <Button
              onClick={handleMute}
              variant="outline"
              className={`w-24 h-12 ${isMuted ? "bg-red-50" : ""}`}
            >
              {isMuted ? (
                <>
                  <MicOff className="h-5 w-5 mr-2 text-red-500" />
                  Sessiz
                </>
              ) : (
                <>
                  <Mic className="h-5 w-5 mr-2" />
                  Ses
                </>
              )}
            </Button>
          </div>
        </div>
        {isCallActive && (
          <div className="text-center py-2 bg-blue-50 rounded-lg animate-pulse">
            <p className="text-blue-600 font-medium">
              {number} numarası ile görüşme devam ediyor...
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}