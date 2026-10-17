const baseFonts = new Set([
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
])

const FontInput = defineComponent({
	name: "FontInput",

	props: {
		modelValue: {
			type: String,
		},
		default: {
			type: String,
			required: false,
		},
	},

	emits: ["update:modelValue"],

	setup(props, { emit }) {
		const selected = computed({
			get: () => props.modelValue,
			set: (font) => emit("update:modelValue", font),
		});

		const modalId = 'new_font_modal'+Math.random();

		const allFonts = computed(() => {
			let customFonts = JSON.parse(localStorage.getItem('customFonts') || '[]');
			customFonts.forEach(f => void loadFont(f));
			return [...customFonts, ...Array.from(baseFonts)];
		});
		const options = computed(() => Array.from(new Set([
			{
				label: "+ New font...",
				value: '__new__',
				key: '__new__',
			},
			{
				label: 'Default',
				value: '',
				css: props.default || 'sans-serif',
				key: 'default',
			},
			...allFonts.value.map(f => ({
				label: f,
				value: f,
				key: f,
			})),
			...(allFonts.value.some(f => f === selected.value) ? [] : [{
				label: selected.value,
				value: selected.value,
				key: selected.value,
				invalid: true,
			}])
		])))

		function buildFontUrl(font, full = false) {
			return `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font).replace(/%20/g, "+")}`
				+ (full ? '' : `&text=${encodeURIComponent(font)}&display=swap`);
		}

		async function verifyFont(font) {
			try {
				const url = buildFontUrl(font);
				await new Promise((res, rej) => fetch(url).then(res).catch(rej));
				return true;
			}
			catch (e) {
				console.error(e);
				// alert("Failed to load font!")
				return false;
			}
		}

		async function loadFont(font, full = false) {
			if (!font || font === 'inherit') return;

			const id = `google-font-${font.replace(/\W/g, "-")}-${String(full)}`;
			if (document.getElementById(id)) return;

			// test url 
			let url;
			try {
				url = buildFontUrl(font, full);
				await new Promise((res, rej) => fetch(url).then(res).catch(rej));
			}
			catch (e) {
				console.error(e);
				// alert("Failed to load font!")
			}

			const link = document.createElement("link");
			link.id = id;
			link.rel = "stylesheet";
			link.href = url;

			document.head.appendChild(link);
		}

		onMounted(async () => {
			// wait a random amount of time to reduce double-loads from other FontInput components
			await new Promise(res => setTimeout(res, 100 * Math.random()));
			allFonts.value.forEach(loadFont);
			loadFont(selected.value);
		});

		function setFont(font) {
			selected.value = font;
			loadFont(font, true);
		}

		async function handleFontSelect(event) {
			const font = event.target.value;
			if (font === '__new__') {
				// do add new font!
				window[modalId]?.showModal();
				// reset the value displayed in the select
				const previous = selected.value;
				setFont('');
				await nextTick();
				setFont(previous);
				return;
			}
			setFont(font);
		}

		const newFontNameOrUrl = ref('');

		async function tryAddFont() {
			const input = newFontNameOrUrl.value;
			if (!input) return;

			let fontToUse = input; // Default to the current value

			// Regex to match Google Fonts specimen URL structure: https://fonts.google.com/specimen/FontName+OtherChars?preview.script=Latn
			const urlRegex = /(https:\/\/fonts\.google\.com\/specimen\/)([^\/?]+)\?preview\.script=[a-zA-Z]+/i;
			const match = input.match(urlRegex);

			if (match) {
				// Extract the font identifier part from the URL path (e.g., 'Bitcount+Ink')
				let rawFontName = match[2].replace(/\+/g, ' '); // Replace + with space first
				
				// Clean up common patterns and format to Title Case/Readable Name
				// This is a heuristic: if we found it via URL, we assume the cleaned string is the target name.
				fontToUse = rawFontName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

				// Basic validation check on the extracted name before proceeding
				if (!fontToUse) {
					alert("Could not parse a valid font name from the provided URL.");
					return;
				}
			} else if (input.toLowerCase().includes('http')) {
				// Reject inputs that look like URLs but don't match the required pattern
				alert("Invalid format: This input appears to be a URL, but it does not match the required format.");
				return;
			}
			// If none of the above conditions are met, fontToUse remains the original input (e.g., "Roboto")

			const valid = await verifyFont(fontToUse);
			if (!valid) {
				alert("Not a Valid font!");
				return;
			}

			// don't save if it already exists
			if (allFonts.value.some(f => f === fontToUse)) {
				console.log("Font already exists", fontToUse)
			}
			else {
				// Save custom font to localstorage
				let storedFonts = JSON.parse(localStorage.getItem('customFonts') || '[]');
				storedFonts.push(fontToUse);
				localStorage.setItem('customFonts', JSON.stringify(storedFonts));
			}

			setFont(fontToUse);
		}

		return () => [
				Vue.h(
					"select",
					{
						value: selected.value,
						onChange: handleFontSelect,
						class: 'select',
						style: { fontFamily: `"${selected.value}", sans-serif` },
					},
					options.value.map(({ key, value, label, invalid, css }) =>
						Vue.h(
							"option",
							{
								key,
								value,
								style: { fontFamily: css || value },
							},
							[
								label,
							]
						)
					)
				),
// 				<dialog id="my_modal_1" class="modal">
//   <div class="modal-box">
//     <h3 class="text-lg font-bold">Hello!</h3>
//     <p class="py-4">Press ESC key or click the button below to close</p>
//     <div class="modal-action">
//       <form method="dialog">
//         <!-- if there is a button in form, it will close the modal -->
//         <button class="my-btn">Close</button>
//       </form>
//     </div>
//   </div>
// </dialog>
				Vue.h('dialog',
					{
						class: 'modal',
						id: modalId,
					},
					Vue.h('div',
						{
							class: 'modal-box',
						},
						[
							Vue.h('h3', { class: 'font-bold text-lg mb-2' }, "Load font"),
							Vue.h('p', null, "Type the name or url of a font you would like to add from fonts.google.com."),
							Vue.h('form',
								{
									method: 'dialog',
									class: 'flex align-items-center gap-2 my-2'
								},
								[
									Vue.h('input',
										{
											type: 'text',
											placeholder: 'Font name or URL',
											class: 'input flex-grow-1 w-full',
											value: newFontNameOrUrl.value,
											onInput: (event) => newFontNameOrUrl.value = event.target.value,
										}
									),
									Vue.h('button',
										{
											class: 'btn btn-primary',
											onClick: tryAddFont,
										},
										'Add'
									),
									Vue.h('button',
										{
											class: 'btn',
										},
										'Cancel'
									),
								]
							)
						]
					)
				)
		]
			
	},
});
