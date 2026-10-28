const InlineTextStyle = {
	components: { FontInput },
	props: {
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
		defaults: { type: Object, required: false },
	},

	emits: ["update:config"],

	data() {
		return {
			inputId: Math.floor(Math.random() * 1000),
		};
	},

	methods: {
		update(key, value) {
			this.$emit("update:config", {
				...this.config,
				[key]: value,
			});
		},
		triggerColorPicker() {
             // 1. Get the direct DOM element reference using the ref
             const inputElement = this.$refs.actualColorInput;

             if (inputElement) {
                 // 2. Programmatically trigger a click on that hidden input
                 inputElement.click();
             } else {
                console.error("Color input element not found!");
            }
        }
	},

	template: /*html*/`
	<div class="text-style-control">
		<div class="join w-full">
			<font-input
				v-model="config.fontFamily"
				:default="defaults?.fontFamily"
			></font-input>

			<select
				class="select join-item"
				v-model="config.fontSize"
				style="width: 6rem"
			>
				<!-- Default Option (Value: '') -->
				<option :value="''">Default</option> 

				<!-- Options from 10 to 30 (inclusive) -->
				<option v-for="size of Array.from({length: 66}).map((_,i) => i+5)" :key="size" :value="size">{{ size }}pt</option>
			</select>



			<button
				class="btn join-item px-2"
				@click="triggerColorPicker"
			>
				<div
					style="width: 1.5em; height: 1.5em; overflow: hidden; border: 1px solid #fff; border-radius: 50%"
					:style="{ backgroundColor: config.color || defaults.color }"
				>
					<input
						ref="actualColorInput"
						:id="'color'+inputId"
						type="color"
						:value="config.color || defaults.color"
						@input="update('color', $event.target.value)"
						style="
							opacity: 0;
							width: 1px; /* Keep a tiny width for rendering stability */
							height: 1px;
							padding: 0;
							margin-right: -1px; /* To prevent floating effects */
							overflow: hidden;
							clip: rect(1, 1, 1, 1);
							white-space: nowrap;
						"
					>
				</div>
			</button>
		</div>

		<div class="join w-full flex">
			<button
				class="btn join-item"
				:class="{ 'btn-active': config.fontWeight && config.fontWeight !== 400 }"
				:popovertarget="'fontWeight' + inputId"
				:style="{ 'anchor-name': \`--anchor-fontWeight\$\{inputId\}\`}"
			>
				<i class="material-symbols-outlined" :style="{ 'font-variation-settings': \`\'wght\' \$\{ (config.fontWeight || defaults.fontWeight) * 0.75 \}\`}">format_bold</i>
			
			</button>


			<button
				class="btn join-item"
				:class="{ 'btn-active': config.fontStyle === 'italic' }"
				@click="update('fontStyle', config.fontStyle === 'italic' ? '' : 'italic')"
			>
				<i class="material-symbols-outlined">format_italic</i>
			</button>


			<button
				class="btn join-item"
				:class="{ 'btn-active': config.textAlign }"
				:popovertarget="'textAlign' + inputId"
				:style="{ 'anchor-name': \`--anchor-textAlign\$\{inputId\}\`}"
			>
				<i v-if="(config.textAlign || defaults.textAlign) === 'justify'" class="material-symbols-outlined">format_align_justify</i>
				<i v-if="(config.textAlign || defaults.textAlign) === 'center'" class="material-symbols-outlined">format_align_center</i>
				<i v-if="(config.textAlign || defaults.textAlign) === 'left'" class="material-symbols-outlined">format_align_left</i>
				<i v-if="(config.textAlign || defaults.textAlign) === 'right'" class="material-symbols-outlined">format_align_right</i>
			</button>



			<button
				class="btn join-item"
				:class="{ 'btn-active': config.lineHeight }"
				:popovertarget="'lineHeight' + inputId"
				:style="{ 'anchor-name': \`--anchor-lineHeight\$\{inputId\}\`}"
			>
				<i class="material-symbols-outlined">format_line_spacing</i>

			</button>

			<button
				class="btn join-item"
				:class="{ 'btn-active': config.letterSpacing }"
				:popovertarget="'letterSpacing' + inputId"
				:style="{ 'anchor-name': \`--anchor-letterSpacing\$\{inputId\}\`}"
			>
				<i class="material-symbols-outlined">format_letter_spacing_wider</i>
				
				
			</button>


		</div>

		<!-- Have to put the overlays outside of the joins to not mess up styles -->
		
			
		<ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-lg"
		popover :id="'fontWeight' + inputId" :style="{ 'position-anchor': \`--anchor-fontWeight\$\{inputId\}\`, fontFamily: config.fontFamily || defaults?.fontFamily }">
			<li @click="update('fontWeight', '')" style="font-weight: 400"><a :style="{ backgroundColor: !config.fontWeight ? '#0001' : '' }">Default</a></li>
			<li @click="update('fontWeight', 200)" style="font-weight: 200"><a :style="{ backgroundColor: config.fontWeight === 200 ? '#0001' : '' }">Extra-thin</a></li>
			<li @click="update('fontWeight', 300)" style="font-weight: 300"><a :style="{ backgroundColor: config.fontWeight === 300 ? '#0001' : '' }">Thin</a></li>
			<li @click="update('fontWeight', 400)" style="font-weight: 400"><a :style="{ backgroundColor: config.fontWeight === 400 ? '#0001' : '' }">Regular</a></li>
			<li @click="update('fontWeight', 500)" style="font-weight: 500"><a :style="{ backgroundColor: config.fontWeight === 500 ? '#0001' : '' }">Medium</a></li>
			<li @click="update('fontWeight', 600)" style="font-weight: 600"><a :style="{ backgroundColor: config.fontWeight === 600 ? '#0001' : '' }">Semi-bold</a></li>
			<li @click="update('fontWeight', 700)" style="font-weight: 700"><a :style="{ backgroundColor: config.fontWeight === 700 ? '#0001' : '' }">Bold</a></li>
		</ul>
		
		
		<ul class="dropdown menu w-52 rounded-box bg-base-100 shadow-lg"
		popover :id="'textAlign' + inputId" :style="{ 'position-anchor': \`--anchor-textAlign\$\{inputId\}\`}">
			<!-- Default Option (Value: '') -->
			<li :value="''" @click="update('textAlign', '')"><a :style="{ backgroundColor: !config.textAlign ? '#0001' : '' }">Default</a></li>
			<li value="left" @click="update('textAlign', 'left')"><a :style="{ backgroundColor: config.textAlign === 'left' ? '#0001' : '' }">Left</a></li>
			<li value="center" @click="update('textAlign', 'center')"><a :style="{ backgroundColor: config.textAlign === 'center' ? '#0001' : '' }">Center</a></li>
			<li value="right" @click="update('textAlign', 'right')"><a :style="{ backgroundColor: config.textAlign === 'right' ? '#0001' : '' }">Right</a></li>
			<li value="justify" @click="update('textAlign', 'justify')"><a :style="{ backgroundColor: config.textAlign === 'justify' ? '#0001' : '' }">Justify</a></li>
		</ul>	


		<div class="dropdown menu w-52 rounded-box bg-base-100 shadow-lg gap-3"
		popover :id="'lineHeight' + inputId" :style="{ 'position-anchor': \`--anchor-lineHeight\$\{inputId\}\`}">
			<div class="text-sm">Line spacing</div>
			<div class="flex gap-2">
				<input
					type="range"
					class="range range-sm [--range-fill:0]"
					min="0.5"
					max="2"
					step="0.1"
					:value="config.lineHeight || defaults?.lineHeight || 0"
					@input="(e) => update('lineHeight', e.target.value)"
				/>
				{{ config.lineHeight || defaults?.lineHeight || 0 }}pt
			</div>
			<div>
				<button class="btn btn-sm" @click="update('letterSpacing', '')">Use default</button>
			</div>
		</div>

		<div class="dropdown menu w-52 rounded-box bg-base-100 shadow-lg gap-3"
		popover :id="'letterSpacing' + inputId" :style="{ 'position-anchor': \`--anchor-letterSpacing\$\{inputId\}\`}">
			<div class="text-sm">Letter spacing</div>
				<div class="flex gap-2">
				<input
					type="range"
					class="range range-sm [--range-fill:0]"
					min="-20"
					max="50"
					:value="config.letterSpacing || defaults?.letterSpacing || 0"
					@input="(e) => update('letterSpacing', e.target.value)"
				/>
				{{ config.letterSpacing || defaults?.letterSpacing || 0 }}%
			</div>
			<div>
				<button class="btn btn-sm" @click="update('letterSpacing', 0)">Set to 0</button>
				<button class="btn btn-sm" @click="update('letterSpacing', '')">Use default</button>
			</div>
		</div>
    </div>
  `,
};
