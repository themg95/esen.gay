import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    fontFamily: {
      serif: ["serif"]
    }
  },

  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "mocha"
    })
  ]
} satisfies Config;
