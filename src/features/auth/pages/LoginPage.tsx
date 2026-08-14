import { AuthSplitLayout } from "../components/shared";
import { LoginForm } from "../components/feature";
import { useLoginViewModel } from "../hooks/useLoginViewModel";

export function LoginPage() {
  const { form, onSubmit, isSubmitting } = useLoginViewModel();

  return (
    <AuthSplitLayout activeDot={0}>
      <LoginForm
        form={form}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    </AuthSplitLayout>
  );
}
