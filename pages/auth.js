import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Magic } from "magic-sdk";
import { useForm } from "react-hook-form";
import { Button, Input, Text } from "@nextui-org/react";
import styles from "../styles/Auth.module.css";

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
    <section className={styles.container}>
      <Text h1>Log In</Text>
      <Text h4>We will send you an email with a link to log in.</Text>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Your email"
          size="xl"
          width="300px"
          {...register("email", { required: true })}
          placeholder="nick@example.com"
        />

        <Button
          type="submit"
          size="lg"
          css={{
            marginTop: "10px",
          }}
        >
          Log in
        </Button>
      </form>
    </section>
  );
};

export default Auth;
