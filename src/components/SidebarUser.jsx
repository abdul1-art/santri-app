import { NavLink } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './ui/sidebar';
import { GraduationCap, Home, Info, Users } from 'lucide-react';

const navItems = [
  { to: '/user', label: 'Dashboard', icon: Home, end: true },
  { to: '/user/my-profile', label: 'My Profile', icon: Users },
];

function SidebarUser() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className='flex items-center gap-2.5 px-2 py-1'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary'>
            <GraduationCap
              size={16}
              className='text-sidebar-primary-foreground'
            />
          </div>
          <div className='flex flex-col'>
            <span className='text-sm font-semibold text-sidebar-foreground leading-tight'>
              SantriApp
            </span>
            <span className='text-xs text-sidebar-foreground/60 leading-tight'>
              Manajemen Santri
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className='w-full'>
                {({ isActive }) => (
                  <SidebarMenuButton
                    isActive={isActive}
                    tooltip={item.label}>
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <div className='px-2 py-2 text-xs text-sidebar-foreground/50 text-center'>
          © {new Date().getFullYear()} SantriApp
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SidebarUser;
