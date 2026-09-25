import { Navigate, Outlet } from 'react-router';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useAuthStore } from '@/pages/Auth/Store/UseAuthStore';

function AppLayout() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to = "/sign-in" replace />
  }

  if (user.role !== "admin") {
    return <Navigate to = "/user" replace />
  }
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar />

        <SidebarInset>
          <Navbar />

          <main className='flex-1 p-6'>
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default AppLayout;

//* SidebarInset adalah komponen dari Shadcn yang membantu mengatur area utama di sebelah Sidebar.
//* Outlet adalah Tempat untuk menampilkan child route (anak dari AppLayout)
