import { Monitor, Phone, History, Settings, Search, Star } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Temsilci", icon: Monitor, url: "/" },
  { title: "Arama Listem", icon: Phone, url: "/calls" },
  { title: "Son Çağrılarım", icon: History, url: "/history" },
  { title: "Ayarlar", icon: Settings, url: "/settings" },
];

export function AppSidebar() {
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
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}