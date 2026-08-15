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
        <h2 className="text-2xl font-bold text-white">الدخول إلى النظام</h2>
        <p className="mt-1.5 text-sm text-white/50">
          للموظفين المخوّلين فقط
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
        <Input
          label="رقم الضابط"
          type="text"
          placeholder="أدخل رقم الضابط"
          autoComplete="username"
          error={errors.OfficerID?.message}
          {...register("OfficerID")}
        />

        <PasswordInput
          label="كلمة المرور"
          placeholder="أدخل كلمة المرور"
          autoComplete="current-password"
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="flex items-center justify-between">
          <Checkbox label="تذكرني" {...register("rememberMe")} />
          <button
            type="button"
            className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            نسيت كلمة المرور؟
          </button>
        </div>

        <Button type="submit" isLoading={isSubmitting} className="mt-1">
          تسجيل الدخول
        </Button>
      </form>
    </div>
  );
}