import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import create from "typograms/src/typograms.js";

interface TextgramsSettings {
	zoom: number;
}

const DEFAULT_SETTINGS: TextgramsSettings = {
	zoom: 1
}

export default class Textgrams extends Plugin {
	settings: TextgramsSettings;

	async onload() {
		await this.loadSettings();

		this.registerMarkdownCodeBlockProcessor("textgram", (source, el, ctx) => {
			const svg = create("\n" + source + "\n", this.settings.zoom, false);
			el.addClass("textgram");
			el.appendChild(svg);
		});

		this.addSettingTab(new TextgramsSettingTab(this.app, this));
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class TextgramsSettingTab extends PluginSettingTab {
	plugin: Textgrams;

	constructor(app: App, plugin: Textgrams) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Zoom level')
			.setDesc('Zoom level for textgrams. Default is 1 and it works best for most cases.')
			.addText(text => text
				.setPlaceholder('Default: 1')
				.setValue(this.plugin.settings.zoom)
				.onChange(async (value) => {
					this.plugin.settings.zoom = value;
					await this.plugin.saveSettings();
				}));
	}
}
