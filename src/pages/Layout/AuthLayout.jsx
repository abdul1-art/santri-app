import { Outlet } from 'react-router';
import { TooltipProvider } from '@/components/ui/tooltip';

function AuthLayout() {
  return (
    <TooltipProvider>
      <div className='flex min-h-svh w-full'>
        {/* Kiri - Gambar */}
        <div className='relative hidden w-1/2 lg:flex'>
          <img
            src='/images/auth-banner.jpg'
            alt='Auth banner'
            className='absolute inset-0 h-full w-full object-cover'
          />
          {/* Overlay gradasi agar teks terbaca */}
          <div className='absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent' />

          {/* Teks di atas gambar (opsional) */}
          <div className='relative z-10 flex flex-col justify-end p-10 text-primary-foreground'>
            <h1 className='text-3xl font-bold tracking-tight'>
              Welcome to App
            </h1>
            <p className='mt-2 text-sm text-primary-foreground/80'>
              Tagline singkat tentang aplikasimu di sini.
            </p>
          </div>
        </div>

        {/* Kanan - Outlet */}
        <main className='flex flex-1 items-center justify-center p-6 md:p-10'>
          <div className='w-full max-w-md'>
            <Outlet />
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}

export default AuthLayout;