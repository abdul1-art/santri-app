import { SidebarTrigger } from './ui/sidebar';

function NavbarUser() {
  return (
    <nav className='flex h-14 shrink-0 items-center gap-3 border-b border-border px-4 bg-background/95 backdrop-blur sticky top-0 z-40'>
      <SidebarTrigger className='-ml-1' />

      <div className='h-5 w-px bg-border' />

      <span className='text-sm font-medium text-muted-foreground'>
        SantriApp
      </span>
    </nav>
  );
}

export default NavbarUser;

//* kita tidak membuat tombol Sidebar sendiri, melainkan menggunakan component yang sudah disediakan Shadcn. (<SidebarTrigger />)