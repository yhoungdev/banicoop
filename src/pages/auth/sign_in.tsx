/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { Box, Text } from "@chakra-ui/react";
import AuthLayout from "../../layout/authLayout";
import InputArea from "../../components/essentials/textInput";
import ButtonInterface from "../../components/essentials/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postData } from "../../utils/request";
import { useState } from "react";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        setLoading(true);
        const { decrypted } = await postData({
          url: "admin/user/login",
          body: values,
          message: false,
        });

        setLoading(false);
        const authToken = decrypted?._token;
        localStorage.setItem("_authToken", authToken);
        toast.success("Logged in successfully");
        window.location.reload();
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <AuthLayout title={""}>
      <Box my={"5em"}>
        <Text fontWeight={"bold"} fontSize={["18px", "20px"]}>
          Welcome Back 👋🏾
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <InputArea
            type="email"
            placeholder="example@gmail.com"
            label="Email Address"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && formik.errors.email}
            isError={formik.touched.email && formik.errors.email}
          />

          <InputArea
            type="password"
            placeholder="Password"
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.password && formik.errors.password}
            isError={formik.touched.password && formik.errors.password}
          />

          <ButtonInterface width="100%" type="submit" loading={loading}>
            Sign In
          </ButtonInterface>
        </form>
      </Box>
    </AuthLayout>
  );
};

export default SignIn;
