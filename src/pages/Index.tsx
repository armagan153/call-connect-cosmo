import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1">
          <div className="container mx-auto">
            <SidebarTrigger className="my-4" />
            <Dashboard />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;