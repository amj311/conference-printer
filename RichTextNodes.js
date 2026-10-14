const RichTextNodes = defineComponent({
  name: "RichTextNodes",

  props: {
    nodes: {
      type: Array,
    },
  },

  template: /*html*/`
 	<span v-for="node in nodes" class="p-text-node">
		<template v-if="node.type === 'text'">
			{{node.text}}
		</template>
		<sup v-else-if="node.type === 'note'">
			<small>{{node.noteNumber}}</small>
		</sup>
		<span v-else :class="node.nodeName">{{node.innerText}}</span>
	</span>
  `
});
