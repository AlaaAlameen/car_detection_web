import type { BaseSyntheticEvent } from "react";
import type { UseFormReturn } from "react-hook-form";
import { Input, Button, Checkbox } from "../ui";
import { PasswordInput } from "../shared";
import type { LoginFormValues } from "../../validators/loginSchema";

interface LoginFormProps {
  form: UseFormReturn<LoginFormValues>;
  onSubmit: (e?: BaseSyntheticEvent) => Promise<void>;
  isSubmitting: boolean;
}

export function LoginForm({ form, onSubmit, isSubmitting }: LoginFormProps) {
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">System Access</h2>
        <p className="mt-1.5 text-sm text-slate-500">
          Authorized personnel only
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
        <Input
          label="Officer ID"
          type="text"
          placeholder="Enter your Officer ID"
          autoComplete="username"
          error={errors.OfficerID?.message}
          {...register("OfficerID")}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex items-center justify-between">
          <Checkbox label="Remember Me" {...register("rememberMe")} />
          <button
            type="button"
            className="text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
          >
            Forgot Password?
          </button>
        </div>

        <Button type="submit" isLoading={isSubmitting} className="mt-1">
          Login
        </Button>
      </form>
    </div>
  );
}