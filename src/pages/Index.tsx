import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CallQueue } from "@/components/CallQueue";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-crm-background">
        <AppSidebar />
        <main className="flex-1">
          <div className="container mx-auto">
            <SidebarTrigger className="my-4" />
            <CallQueue />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;