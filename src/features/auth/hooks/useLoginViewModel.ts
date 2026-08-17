import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginSchema,
  type LoginFormValues,
} from "../validators/loginSchema";

export function useLoginViewModel() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      OfficerID: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = form.handleSubmit(async (data: LoginFormValues) => {
    console.log("Login attempt:", data);
  });

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
  };
}