import {
  Monitor,
  Phone,
  History,
  Settings,
  Search,
  Users,
  FileText,
  Headphones,
  Receipt,
  TicketCheck,
  UserCog,
  BarChart3,
  UserPlus,
  MessageSquarePlus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuAction,
} from "@/components/ui/sidebar";
import { SipPhone } from "@/components/SipPhone";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const menuItems = [
  { title: "Temsilci", icon: Monitor, url: "/" },
  { 
    title: "Müşteri Yönetimi", 
    icon: Users, 
    url: "/customers",
    action: {
      icon: UserPlus,
      tooltip: "Yeni Müşteri Ekle",
      onClick: () => {
        toast.success("Yeni müşteri ekleme formu açıldı");
      }
    }
  },
  { title: "Raporlar", icon: BarChart3, url: "/reports" },
  { title: "Çağrı Kayıtları", icon: Phone, url: "/calls" },
  { title: "Ses Kayıtları", icon: Headphones, url: "/recordings" },
  { title: "Son Çağrılarım", icon: History, url: "/history" },
  { title: "Faturalar", icon: Receipt, url: "/invoices" },
  { 
    title: "Destek Talepleri", 
    icon: TicketCheck, 
    url: "/tickets",
    action: {
      icon: MessageSquarePlus,
      tooltip: "Yeni Destek Talebi",
      onClick: () => {
        toast.success("Yeni destek talebi formu açıldı");
      }
    }
  },
  { 
    title: "Kullanıcı Yönetimi", 
    icon: UserCog, 
    url: "/users",
    action: {
      icon: UserPlus,
      tooltip: "Yeni Kullanıcı Ekle",
      onClick: () => {
        toast.success("Yeni kullanıcı ekleme formu açıldı");
      }
    }
  },
  { title: "Ayarlar", icon: Settings, url: "/settings" },
];

export function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                A
              </div>
              <div>
                <h3 className="font-medium">Armağan Önerr</h3>
                <p className="text-sm text-gray-500">Cosmos Co</p>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Bir şey mi arıyorsunuz?"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.action?.tooltip}
                  >
                    <a 
                      href={item.url} 
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(item.url);
                      }}
                      className="flex items-center gap-3"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.action && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <SidebarMenuAction
                          onClick={(e) => {
                            e.stopPropagation();
                            item.action?.onClick();
                          }}
                          tooltip={item.action.tooltip}
                        >
                          <item.action.icon className="h-4 w-4" />
                        </SidebarMenuAction>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{item.action.tooltip}</DialogTitle>
                          <DialogDescription>
                            Bu özellik yakında aktif olacaktır.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end">
                          <Button variant="outline" onClick={() => toast.success("Form kaydedildi")}>
                            Kaydet
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SipPhone />
      </SidebarFooter>
    </Sidebar>
  );
}