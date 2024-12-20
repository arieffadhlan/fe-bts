import { z } from 'zod';
import { toast } from 'react-toastify';
import { Loader2 } from "lucide-react";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/features/auth/components/AuthLayout";
import { loginUser } from '@/features/auth/api';

const SignInSchema = z.object({
  username: z.string().min(1, 'Username is required.'),
  password: z.string().min(8, 'Password must be at least 8 characters long.')
});

type SignInSchemaType = z.infer<typeof SignInSchema>;

const SignInPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInSchemaType>({ 
    resolver: zodResolver(SignInSchema), 
    defaultValues: {
      username: '',
      password: ''
    }
  });

    const onSubmit = async (data: SignInSchemaType) => {
      try {
        const response = await loginUser(data);
        localStorage.setItem("token", response.data.token);

        toast.success(`${response.message}`, {
          onClose   : () => navigate("/", { replace: true }),
          autoClose : 1000
        });
      } catch (error: any) {
        toast.error(`${error.message}`, { autoClose : 1000 });
      }
    }
  
  return (
    <AuthLayout
      title="Sign In"
      outline="Enter your credentials below to sign in your account."
    >
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input 
            id="username"
            type="text" 
            className={cn(errors.username && 'border-red-500')}
            placeholder="johndoe@gmail.com" 
            {...register('username', { required: true })}
          />
          {errors.username && <p role="alert" className="text-sm text-red-500">{errors.username.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password"
            type="password" 
            className={cn(errors.password && 'border-red-500')}
            placeholder="Enter your password..." 
            {...register('password', { required: true })}
          />
          {errors.password && <p role="alert" className="text-sm text-red-500">{errors.password.message}</p>}
        </div>
        <Button className="w-full h-10 font-semibold text-sm" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="animate-spin" />}
          Submit
        </Button>
      </form>
    </AuthLayout>
  );
}

export default SignInPage;