import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  Row,
  Text,
  Textarea,
} from "@nextui-org/react";
import Post from "../components/Post";
import styles from "../styles/Blog.module.css";

const Blog = ({ category = "all" }) => {
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div className={styles.Blog}>
      <Text h1 css={{ marginLeft: "10px" }}>
        {" "}
        Blog
      </Text>
      <div className={styles.Blog__filter}>
        <select className={styles.select}>
          <option className={styles.option}>Popular</option>
          <option className={styles.option}>Newest</option>
          <option className={styles.option}>Oldest</option>
          <option className={styles.option}>Favorits</option>
        </select>
        <div className={styles.Blog__categories}>
          <ul>
            <li
              className={category == "all" ? styles.selected : styles.category}
            >
              <a href="#">All</a>
            </li>
            <li
              className={category == "food" ? styles.selected : styles.category}
            >
              <a href="#">Food</a>
            </li>
            <li
              className={
                category == "routine" ? styles.selected : styles.category
              }
            >
              <a href="#">Routine</a>
            </li>
            <li
              className={
                category == "diabetes" ? styles.selected : styles.category
              }
            >
              <a href="#">Dibetes</a>
            </li>
            <li
              className={
                category == "vegan" ? styles.selected : styles.category
              }
            >
              <a href="#">Vegan</a>
            </li>
            <li
              className={
                category == "ethnicity" ? styles.selected : styles.category
              }
            >
              <a href="#">Pregnant</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.Blog__posts}>
        <Post
          avatar="https://avatars.githubusercontent.com/u/58092741?v=4"
          username="William Monroy"
          years={21}
          height={180}
          weight={70}
          country="Perú"
          title="My 7-day healthful eating meal plans"
          image="https://amasable.com/wp-content/uploads/2020/01/Hamburguesa-Casera-con-chedar-1.jpg"
          content="Day 1 Breakfast Smoked salmon and egg on a whole grain bagel with a
          portion of watercress, a medium low fat mocha drink. Morning Snack: A
          portion of hummus and raw vegetables for dipping, two oatcakes. Lunch
          A bowl of bean and vegetable soup drizzled with extra virgin olive
          oil, ..."
          likes={45}
          like={false}
          favorite={false}
        />
        <Post
          avatar="https://avatars.githubusercontent.com/u/67038775?v=4"
          username="Juan"
          years={19}
          height={180}
          weight={72}
          country="Colombia"
          title="My 7-day healthful eating meal plans"
          image="https://amasable.com/wp-content/uploads/2020/01/Hamburguesa-Casera-con-chedar-1.jpg"
          content="Day 1 Breakfast Smoked salmon and egg on a whole grain bagel with a
          portion of watercress, a medium low fat mocha drink. Morning Snack: A
          portion of hummus and raw vegetables for dipping, two oatcakes. Lunch
          A bowl of bean and vegetable soup drizzled with extra virgin olive
          oil, ..."
          likes={31}
          like={false}
          favorite={false}
        />
        <Post
          avatar="https://avatars.githubusercontent.com/u/89484736?v=4"
          username="Suyeon Cho"
          years={21}
          height={160}
          weight={50}
          country="Colombia"
          title="My 7-day healthful eating meal plans"
          image="https://amasable.com/wp-content/uploads/2020/01/Hamburguesa-Casera-con-chedar-1.jpg"
          content="Day 1 Breakfast Smoked salmon and egg on a whole grain bagel with a
          portion of watercress, a medium low fat mocha drink. Morning Snack: A
          portion of hummus and raw vegetables for dipping, two oatcakes. Lunch
          A bowl of bean and vegetable soup drizzled with extra virgin olive
          oil, ..."
          likes={14}
          like={false}
          favorite={false}
        />
      </div>
      <div className={styles.Blog__createPost} onClick={() => setVisible(true)}>
        <p>+</p>
      </div>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        closeButton
        blur
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Create a&nbsp;
            <Text b size={18}>
              Post
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="secondary"
            size="lg"
            placeholder="Title"
            // contentLeft={<Mail fill="currentColor" />}
          />
          
          <select className={styles.select__form} placeholder="Category">
            <option disabled selected className={styles.option__disabled}>
              Select a Category
            </option>
            <option className={styles.option}>Popular</option>
            <option className={styles.option}>Newest</option>
            <option className={styles.option}>Oldest</option>
            <option className={styles.option}>Favorits</option>
          </select>
          <Row>
            <Button color="secondary" size="xs">Media</Button>
            <p className={styles.file__name}>My file.png</p>
            </Row>
          <Textarea bordered color="secondary" placeholder="Description" />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Public</Text>
            </Checkbox>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto color="secondary" onClick={closeHandler}>
            Publish
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Blog;
