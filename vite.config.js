// import{ defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react'
// import dotenv from 'dotenv'

// dotenv.config()

// process.env.REACT_APP_BACK_END_URL
// // // https://vitejs.dev/config/
// // export default defineConfig(({ command, mode }) => {
// //   // Load env file based on `mode` in the current working directory.
// //   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
// //   const env = loadEnv(mode, process.cwd(), '')
// //   return {
// //     // vite config
// //     define: {
// //       __APP_ENV__: JSON.stringify(env.APP_ENV),
// //     },
// //   }}
// // ,{
// //   plugins: [react()],
// // })


// export default ({ mode }) => {
//   process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), 'all'));

//   return defineConfig({
//       plugins: [react()],
//   });
// }
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => {
  const env = loadEnv("mock", process.cwd(), "");
  const processEnvValues = {
    "process.env": Object.entries(env).reduce((prev, [key, val]) => {
      // console.log(key, val);
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [react()],
    define: processEnvValues,
  };
});

