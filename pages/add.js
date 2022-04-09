import { useForm } from "react-hook-form";
import { Button, Input, Text, Textarea } from "@nextui-org/react";
import styles from "../styles/Quiz.module.css";
import { addContent } from "../utils/content";

const Add = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ title }) => {
    addContent()
  };

  return (
    <section className={styles.container}>
      <Text h1>Add </Text>
      <Text h4>We need basic information about you.</Text>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title"
          type="text"
          size="xl"
          width="300px"
          {...register("name", { required: true })}
          placeholder="John Doe"
        />

        <Input
          label="Your age"
          type="number"
          size="xl"
          width="300px"
          {...register("email", { required: true })}
          placeholder="18"
        />

        <Textarea
          size="xl"
          width="300px"
          label="Tell us about your goals"
          placeholder="I have diabetes and I want to lose weight"
          {...register("goals", { required: true })}
        />

        <Button
          type="submit"
          size="lg"
          css={{
            marginTop: "10px",
          }}
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Add;
