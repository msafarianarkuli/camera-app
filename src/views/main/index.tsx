import React from "react";
import Input from "@/core/inputs/Input";
import { Form, Formik } from "formik";
import CustomButton from "@/core/buttons/Button";

const Home = () => {
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{ goal: "" }}
        onSubmit={(values) => console.log(values)}>
        <Form>
          <Input name='goal' label='hi' type='text' />
          <CustomButton type='submit' label='submit' />
        </Form>
      </Formik>
    </div>
  );
};

export default Home;
