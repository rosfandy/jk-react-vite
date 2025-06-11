import { PromptModal } from "@/components/modal/PromptModal";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { LogoutRequest } from "@/lib/axios";
import { LogOut } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
// 
// interface LayoutInterface {
//   children: React.ReactNode;
// }

export default function DashboardLayout() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const isSuccess = LogoutRequest();
    if (isSuccess) navigate("/login");
  };

  return (
    <div className="bg-white min-h-screen">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Squad Management</h1>
              <PromptModal
                title="Ingin Logout ?"
                description="Apakah anda yakin ingin logout ?"
                footer={
                  <Button
                    onClick={handleLogout}
                    className="bg-black text-white px-4 py-2"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                }
              />
            </div>
            {/* Content */}
           <Outlet/>
          </div>
        </main>
      </SidebarProvider>
    </div>
  );

}