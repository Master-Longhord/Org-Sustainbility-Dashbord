import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import AuthLayout from '../../components/layout/AuthLayout';
import Card from '../../components/shared/Card';
import { Input, PasswordInput } from '../../components/shared/Input';
import Select from '../../components/shared/Select';
import VerifiedBadge from '../../components/shared/VerifiedBadge';
import Button from '../../components/shared/Button';

const createAccountSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phoneNumber: z.string().optional(),
  howDidYouHear: z.string().min(1, 'This field is required'),
  monthlyTravelers: z.string().min(1, 'This field is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  retypePassword: z.string(),
}).refine(data => data.password === data.retypePassword, {
  message: "Passwords do not match",
  path: ["retypePassword"],
});

type CreateAccountFormInputs = z.infer<typeof createAccountSchema>;

export default function CreateAccountPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateAccountFormInputs>({
    resolver: zodResolver(createAccountSchema),
    mode: 'onBlur',
  });

  const verifiedEmail = "samle@content-mobbin.com";

  const onSubmit: SubmitHandler<CreateAccountFormInputs> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Account creation successful:', data);
    alert('Account created! Check the console for the data.');
  };

  return (
    <AuthLayout>
        {/* START OF THE CHANGE: Added the className prop to make the card wider */}
        <Card className="max-w-3xl">
        {/* END OF THE CHANGE */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Create your company account</h1>
            <VerifiedBadge email={verifiedEmail} />

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="First name" {...register("firstName")} error={errors.firstName} />
                    <Input label="Last name" {...register("lastName")} error={errors.lastName} />
                </div>

                <Input label="Phone number (optional)" {...register("phoneNumber")} error={errors.phoneNumber} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select label="How did you hear about us?" {...register("howDidYouHear")} error={errors.howDidYouHear}>
                        <option value="">Select...</option>
                        <option value="friend">A friend, family, or colleague</option>
                        <option value="social">Social Media</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                    </Select>

                    <Select label="Monthly travelers" {...register("monthlyTravelers")} error={errors.monthlyTravelers}>
                        <option value="">How many employees travel on a given month?</option>
                        <option value="1-5">1-5</option>
                        <option value="6-10">6-10</option>
                        <option value="11-20">11-20</option>
                        <option value="21+">21+</option>
                    </Select>
                </div>

                <PasswordInput label="Create a password" {...register("password")} error={errors.password} />
                <PasswordInput label="Re-type password" {...register("retypePassword")} error={errors.retypePassword} />

                <div className="pt-2">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Creating Account...' : 'Create account'}
                    </Button>
                </div>
                
                <p className="text-xs text-gray-500 text-center pt-2">
                    By clicking "Create account", The company identified agrees to Navan's Terms of Service, Privacy Policy, and Data Processing Addendum, including the incorporated EU SCCs and UK IDTA, and I certify that I have the legal authority to enter into this agreement on behalf of the company.
                </p>
            </form>
        </Card>
    </AuthLayout>
  );
}