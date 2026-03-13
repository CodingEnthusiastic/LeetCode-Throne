module.exports = {
	enabled: true, // global kill-switch
	volume: 0.35, // master volume (0.0 – 1.0)
	theme: "aero", // active sound pack: soft, aero, arcade, organic, glass, industrial, minimal, retro, crisp

	categories: {
		interaction: true,    // tap, subtle, toggle, confirm
		navigation: true,     // forward, backward, tab
		notification: true,   // info, success, warning, error
		overlay: true,        // open, close, expand, collapse
		hero: false,          // complete, milestone (disabled by default — must opt in)
	},

	overrides: {
		// Map any role to a custom audio file or base64 URI
		// "interaction.tap": "/sounds/my-click.mp3",
	},

	reducedMotion: "inherit", // "inherit" | "force-off" | "force-on"
};
