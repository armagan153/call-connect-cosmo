import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Dashboard } from "@/components/Dashboard";
import Customers from "@/pages/Customers";
import Reports from "@/pages/Reports";
import Calls from "@/pages/Calls";
import Recordings from "@/pages/Recordings";
import Invoices from "@/pages/Invoices";
import Tickets from "@/pages/Tickets";
import Users from "@/pages/Users";

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-gray-50">
          <AppSidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/calls" element={<Calls />} />
              <Route path="/recordings" element={<Recordings />} />
              <Route path="/history" element={<Calls />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </Router>
  );
}

export default App;