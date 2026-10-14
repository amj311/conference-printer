const FontInput = defineComponent({
  name: "FontInput",

  props: {
    modelValue: {
      type: String,
      default: "Roboto",
    },
    config: {
      type: Object,
      default: () => ({
        fonts: [
          "Roboto",
          "Open Sans",
          "Lato",
          "Montserrat",
          "Poppins",
          "Inter",
          "Playfair Display",
          "Merriweather",
          "Oswald",
          "Source Sans 3",
          "Nunito",
          "Raleway",
          "Ubuntu",
          "DM Sans",
          "Space Grotesk",
        ],
        preview: false,
      }),
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const selected = computed({
      get: () => props.modelValue,
      set: (font) => emit("update:modelValue", font),
    });

    function loadFont(font) {
      const id = `google-font-${font.replace(/\W/g, "-")}`;
      if (document.getElementById(id)) return;

      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font).replace(/%20/g, "+")}` +
        `&text=${encodeURIComponent(font)}&display=swap`;

      document.head.appendChild(link);
    }

    onMounted(() => {
      props.config.fonts.forEach(loadFont);
    });

    return () =>
      Vue.h("span", { class: "font-picker" }, [
        Vue.h(
          "select",
          {
            value: selected.value,
            onChange: (event) => {
              selected.value = event.target.value;
              loadFont(selected.value);
            },
          },
          props.config.fonts.map((font) =>
            Vue.h(
              "option",
              {
                key: font,
                value: font,
                style: { fontFamily: `"${font}", sans-serif` },
              },
              font
            )
          )
        ),
        props.config.preview === false
          ? null
          : Vue.h(
              "span",
              {
                class: "preview",
                style: { fontFamily: `"${selected.value}", sans-serif` },
              },
              selected.value
            ),
      ]);
  },
});
