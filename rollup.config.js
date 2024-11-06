import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
    input: "src/index.js", // Your source file
    output: [
        {
            file: "dist/index.cjs.js",
            format: "cjs", // CommonJS format
        },
        {
            file: "dist/index.esm.js",
            format: "esm", // ES Module format
        },
    ],
    plugins: [resolve(), commonjs(), terser()],
};
