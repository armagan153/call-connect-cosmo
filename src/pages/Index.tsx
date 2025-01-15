import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className={`flex-1 ${isMobile ? "pb-16" : ""}`}>
          <div className="container mx-auto">
            {!isMobile && <SidebarTrigger className="my-4" />}
            <Dashboard />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;