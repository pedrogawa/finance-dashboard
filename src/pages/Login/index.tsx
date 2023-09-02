import { Formik, FormikErrors } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import FormInput from "../../components/FormInput";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex bg-primary items-center justify-center w-screen h-screen p-8">
      <div className="flex  items-center justify-center bg-white p-8 rounded-md min-h-[758px] lg:w-[980px] max-lg:w-3/4 max-md:w-full max-md:p-6">
        <div className="flex flex-col items-start justify-center gap-8 md:w-[440px] max-md:w-full">
          <div className="flex flex-col items-start justify-start m-0">
            <p className="text-blue font-bold text-4xl">SIGN IN</p>
            <span className="inline-block text-grey">
              Enter your password and email to log in
            </span>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values: FormValues) => {
              const errors: FormikErrors<FormValues> = {};

              if (!values.email) {
                console.log("an error appeared");
                errors.email = "Email is required";
              }

              if (!values.password) {
                errors.password = "Password is required";
              }

              return errors;
            }}
            onSubmit={(values) => {
              signInWithEmailAndPassword(auth, values.email, values.password)
                .then((user) => console.log(user))
                .catch((error) => console.log(error));
            }}
          >
            {({ handleSubmit, handleChange, errors, isSubmitting }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start w-full gap-8"
              >
                <FormInput
                  name="email"
                  label="Email"
                  change={handleChange}
                  error={errors.email}
                />
                <FormInput
                  name="password"
                  label="Password"
                  change={handleChange}
                  error={errors.password}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white bg-gradient-to-r  from-pink-500 via-purple-500 to-indigo-500 cursor-pointer w-full rounded-md py-1"
                >
                  SIGN IN
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
