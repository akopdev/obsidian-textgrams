import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import create from "typograms/src/typograms.js";

interface TextgramsSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: TextgramsSettings = {
	mySetting: 'default'
}

export default class Textgrams extends Plugin {
	settings: TextgramsSettings;

	async onload() {
		await this.loadSettings();

		this.registerMarkdownCodeBlockProcessor("textgram", (source, el, ctx) => {
			const svg = create("\n" + source + "\n", 1, false);
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
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
