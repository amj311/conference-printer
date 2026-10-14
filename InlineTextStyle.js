const InlineTextStyle = {
		components: { FontInput },
  props: {
    label: { type: String, default: "Text style" },
    config: {
      type: Object,
      default: () => ({
        fontFamily: "Arial",
        fontSize: 12,
        fontWeight: 400,
        color: "#222222",
        lineHeight: 1.5,
        textAlign: "left",
      }),
    },
  },

  emits: ["update:config"],

  data() {
    return {
      fontOptions: ["Arial", "Georgia", "Times New Roman", "Verdana"],
    };
  },

  methods: {
    update(key, value) {
      this.$emit("update:config", {
        ...this.config,
        [key]: value,
      });
    },
  },

  template: `
    <fieldset class="text-style-control">
      <legend>{{ label }}</legend>

      <label>
        Font
        <font-input></font-input>
      </label>

      <label>
        Size (pt)
        <input
          type="number"
          min="1"
          max="96"
          :value="config.fontSize"
          @input="update('fontSize', Number($event.target.value))"
        >
      </label>

      <label>
        Weight
        <select
          :value="config.fontWeight"
          @change="update('fontWeight', Number($event.target.value))"
        >
          <option :value="400">Regular</option>
          <option :value="500">Medium</option>
          <option :value="600">Semi-bold</option>
          <option :value="700">Bold</option>
        </select>
      </label>

      <label>
        Color
        <input
          type="color"
          :value="config.color"
          @input="update('color', $event.target.value)"
        >
      </label>

      <label>
        Line height
        <input
          type="number"
          min="0.5"
          max="4"
          step="0.1"
          :value="config.lineHeight"
          @input="update('lineHeight', Number($event.target.value))"
        >
      </label>

      <label>
        Align
        <select
          :value="config.textAlign"
          @change="update('textAlign', $event.target.value)"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
          <option value="justify">Justify</option>
        </select>
      </label>
    </fieldset>
  `,
};
