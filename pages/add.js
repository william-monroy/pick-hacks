import { Widget } from "@uploadcare/react-widget";
import { useForm } from "react-hook-form";
import { Button, Input, Text, Textarea } from "@nextui-org/react";
import styles from "../styles/Quiz.module.css";
import { addContent } from "../utils/content";
import { useState } from "react";
import { AddPoints } from "../utils/points";
import { useRouter } from "next/router";

const Add = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const [image, setImage] = useState(null);

  const onSubmit = async ({ title, url, description, tag }) => {
    addContent(title, url, image, description, "diabetes");
    AddPoints(200);
    router.push("/home");
  };

  return (
    <section className={styles.container}>
      <Text h1>Add new content</Text>
      <Text h4>Win 200 points by adding content to the platform.</Text>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Widget
          publicKey="624de14caf2cf3c7f75c"
          onChange={(e) => setImage(e.cdnUrl)}
        />

        <Input
          label="Title"
          type="text"
          size="xl"
          width="300px"
          {...register("title", { required: true })}
          placeholder="Exercises for beginners"
        />
        <Input
          label="Youtube URL"
          type="url"
          size="xl"
          width="300px"
          {...register("url", { required: true })}
          placeholder="https://www.youtube.c..."
        />
        <Textarea
          size="xl"
          width="300px"
          label="Description"
          placeholder="Start like a pro"
          {...register("description", { required: true })}
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
