import { Navigate, Outlet, replace } from 'react-router';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import SidebarUser from '@/components/SidebarUser';
import NavbarUser from '@/components/NavbarUser';
import { useAuthStore } from '@/pages/Auth/Store/UseAuthStore';


function UserLayout() {
  const user = useAuthStore((state) => state.user)

  if (!user) {
    return  <Navigate to ="/sign-in" replace />
  }

  if (user.role !== 'user'){
    return <Navigate to = "/admin" replace />
  }
  return (
    <TooltipProvider>
      <SidebarProvider>
      <SidebarUser />

        <SidebarInset>
          <NavbarUser />
          <main className='flex-1 p-6'>
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default UserLayout;

//* SidebarInset adalah komponen dari Shadcn yang membantu mengatur area utama di sebelah Sidebar.
//* Outlet adalah Tempat untuk menampilkan child route (anak dari AppLayout)
