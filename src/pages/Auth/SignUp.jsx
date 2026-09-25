import { useState } from 'react';
import { Link } from 'react-router';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { Checkbox } from '@/components/ui/checkbox';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validasi sederhana (tanpa library)
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setLoading(true);

        // Simulasi proses register (ganti dengan logika asli nanti)
        setTimeout(() => {
            console.log('Register:', { name, email, password });
            setLoading(false);
        }, 1500);
    };

    return (
        <div className='w-full max-w-sm'>
            {/* Header */}
            <div className='mb-8 text-center'>
                <h1 className='text-2xl font-semibold tracking-tight'>
                    Create an account
                </h1>
                <p className='mt-1.5 text-sm text-muted-foreground'>
                    Fill in the form below to get started
                </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-4'>
                {/* Name */}
                <div className='space-y-2'>
                    <Label htmlFor='name'>Full Name</Label>
                    <Input
                        id='name'
                        type='text'
                        placeholder='John Doe'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

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
                    <Label htmlFor='password'>Password</Label>
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

                {/* Confirm Password */}
                <div className='space-y-2'>
                    <Label htmlFor='confirmPassword'>Confirm Password</Label>
                    <div className='relative'>
                        <Input
                            id='confirmPassword'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='••••••••'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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

                {/* Error message */}
                {error && (
                    <p className='text-sm font-medium text-destructive'>{error}</p>
                )}

                {/* Terms */}
                <div className='flex items-start gap-2'>
                    {/* <Checkbox id='terms' required className='mt-0.5' /> */}
                    <Label htmlFor='terms' className='text-sm font-normal leading-snug'>
                        I agree to the{' '}
                        <Link
                            to='/terms'
                            className='font-medium text-foreground underline-offset-4 hover:underline'
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            to='/privacy'
                            className='font-medium text-foreground underline-offset-4 hover:underline'
                        >
                            Privacy Policy
                        </Link>
                    </Label>
                </div>

                {/* Submit */}
                <Button type='submit' className='w-full' disabled={loading}>
                    {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                    {loading ? 'Creating account...' : 'Sign Up'}
                </Button>
            </form>

            {/* Footer */}
            <p className='mt-6 text-center text-sm text-muted-foreground'>
                Already have an account?{' '}
                <Link
                    to='/sign-in'
                    className='font-medium text-foreground underline-offset-4 hover:underline'
                >
                    Sign In
                </Link>
            </p>
        </div>
    );
}

export default Signup;