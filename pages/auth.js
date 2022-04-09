import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Magic } from "magic-sdk";
import { useForm } from "react-hook-form";

const magic =
  typeof window !== "undefined" &&
  new Magic(process.env.NEXT_PUBLIC_MAGIC_PK || "a");

const Auth = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ email }) => {
    if (!magic) throw new Error(`magic not defined`);

    const didToken = await magic.auth.loginWithMagicLink({ email });

    await signIn("credentials", {
      didToken,
      callbackUrl: router.query["callbackUrl"],
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
        placeholder="nick@example.com"
      />

      <button type="submit">Sign in</button>
    </form>
  );
};

export default Auth;
