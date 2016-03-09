if (Meteor.isClient) {
	Meteor.startup(function () {
		const missions = [
			{
				name: "Void",
				type: ["Capture", "Exterminate", "Survival", "Defense", "Mobile Defense", "Sabotage"],
				tier: ["I", "II", "III", "IV"]
			},
				{
				name: "Trials",
				type: ["The Law of Retribution", "NIGHTMARE The Law of Retribution", "The Jordas Verdict"]
			},
				{
				name: "Sorties",
				type: ["Sorties 1-3", "Sorties #1", "Sorties #2", "Sorties #3"]
			},
				{
				name: "Orokin Derelict",
				type: ["Vault Runs", "Defense", "Survival", "Assassination"]
			},
				{
				name: "Farming",
				type: ["Affinity","Resources","Warframe Parts","Archwing Parts", "Void Keys"],
				tier: ["I", "II", "III", "IV"]
			},
				{
				name: "Alerts/Invasions",
				type: ["Capture", "Exterminate", "Survival", "Defense", "Mobile Defense", "Sabotage"],
				tier: ["I", "II", "III", "IV"]
			},
				{
				name: "Syndicate",
				type: ["Capture", "Exterminate", "Survival", "Defense", "Mobile Defense", "Sabotage"],
				tier: ["I", "II", "III", "IV"]
			},
				{
				name: "Starchart Progression",
				type: ["Capture", "Exterminate", "Survival", "Defense", "Mobile Defense", "Sabotage"],
				tier: ["I", "II", "III", "IV"]
			},
		];

		Missions.remove({});
		_.each(missions, (mission) => {
			Missions.insert(mission);
		});
	});
}