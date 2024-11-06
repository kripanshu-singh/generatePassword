import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser"; // Default export

export default {
    input: "src/index.js", // Entry file
    output: [
        {
            file: "dist/index.cjs.js", // CommonJS output
            format: "cjs", // CommonJS module format
            sourcemap: false, // Add source maps for debugging
            exports: "auto", // Ensure export compatibility for both named and default exports
            plugins: [terser()], // Minify CommonJS output
        },
        {
            file: "dist/index.esm.js", // ES Module output
            format: "esm", // ES module format
            sourcemap: false, // Add source maps for debugging
            plugins: [terser()], // Minify ES Module output
        },
    ],
    plugins: [
        resolve(), // Helps Rollup find node modules
        commonjs(), // Converts CommonJS modules to ES6, if needed
    ],
};
