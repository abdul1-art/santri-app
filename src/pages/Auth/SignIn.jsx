import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { Checkbox } from '@/components/ui/checkbox';
import { useAuthStore } from './Store/UseAuthStore';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    //! Ambil state dan action dari Zustand
    const login = useAuthStore((state) => state.login);
    const error = useAuthStore((state) => state.error);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        //* 1. Panggil fungsi login dari Zustand
        const isSuccess = login(email, password);

        if (isSuccess) {
            //* 2. Ambil data user yang baru saja login (untuk menentukan role/arah navigate)
            const currentUser = useAuthStore.getState().user;

            //* 3. Arahkan berdasarkan Role
            if (currentUser.role === 'admin') {
                navigate('/admin');
            } else if (currentUser.role === 'user') {
                navigate('/user');
            }
        }
    };

    return (
        <div className='w-full max-w-sm'>
            {/* Header */}
            <div className='mb-8 text-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>
                    Welcome back
                </h1>
                <p className='mt-1.5 text-sm text-muted-foreground'>
                    Enter your email and password to continue
                </p>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Email */}
                <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        type='email'
                        placeholder='name@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div className='space-y-2'>
                    <div className='flex items-center justify-between'>
                        <Label htmlFor='password'>Password</Label>
                        <Link
                            to='/forgot-password'
                            className='text-xs font-medium text-muted-foreground transition-colors hover:text-foreground'
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <div className='relative'>
                        <Input
                            id='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='••••••••'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='pr-10'
                            required
                        />
                        <button
                            type='button'
                            onClick={() => setShowPassword((prev) => !prev)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground'
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? (
                                <EyeOff className='h-4 w-4' />
                            ) : (
                                <Eye className='h-4 w-4' />
                            )}
                        </button>
                    </div>
                </div>

                {/* Remember me */}
                <div className='flex items-center gap-2'>
                    {/* <Checkbox id='remember' /> */}
                    <Label htmlFor='remember' className='text-sm font-normal'>
                        Remember me
                    </Label>
                </div>

                {/* Submit */}
                <Button type='submit' className='w-full' >
                    Sign In
                </Button>
            </form>

            {/* Footer */}
            <p className='mt-6 text-center text-sm text-muted-foreground'>
                Don&apos;t have an account?{' '}
                <Link
                    to='/sign-up'
                    className='font-medium text-foreground underline-offset-4 hover:underline'
                >
                    Sign Up
                </Link>
            </p>
        </div>
    );
}

export default Signin;