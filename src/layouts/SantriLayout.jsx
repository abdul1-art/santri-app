import { NavLink, Outlet } from 'react-router';

function SantriLayout() {
    const navLinkClass = ({ isActive }) =>
        `inline-flex items-center justify-center whitespace-nowrap rounded-md px-2.5 py-0.5 text-xs font-medium transition-all ${isActive
            ? 'bg-background text-foreground shadow-sm'
            : 'hover:text-foreground'
        }`;

    return (
        <section className='flex flex-col'>
            <header className='flex flex-col gap-1'>
                <h1 className='text-2xl font-semibold'>Santri</h1>
                <p className='text-xs text-muted-foreground'>
                    Kelola data santri, nilai, dan absensi.
                </p>
            </header>

            <nav className='inline-flex h-8 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mt-4 w-fit'>
                <NavLink
                    to='/admin/santri/list'
                    className={navLinkClass}>
                    Daftar
                </NavLink>

                <NavLink
                    to='/admin/santri/nilai'
                    className={navLinkClass}>
                    Nilai
                </NavLink>

                <NavLink
                    to='/admin/santri/absensi'
                    className={navLinkClass}>
                    Absensi
                </NavLink>
            </nav>

            <main className='border p-4 rounded-lg mt-5'>
                <Outlet />
            </main>
        </section>
    );
}

export default SantriLayout;



