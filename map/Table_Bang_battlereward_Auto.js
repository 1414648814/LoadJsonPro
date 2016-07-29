var TableTable_Bang_battlereward = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_battlereward_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_battlereward: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_battlereward: id not found");
		return val;
	},

	getSecondAtkorDef: function(id) {
		var info = this.info(id);
		return info ? info["secondAtkorDef"] : null;
	},

	getFirstAtkorDef: function(id) {
		var info = this.info(id);
		return info ? info["firstAtkorDef"] : null;
	},

	getAwardInfo: function(id) {
		var info = this.info(id);
		return info ? info["awardInfo"] : null;
	},

	getDropLevel3: function(id) {
		var info = this.info(id);
		return info ? info["dropLevel3"] : null;
	},

	getSociatyWin: function(id) {
		var info = this.info(id);
		return info ? info["sociatyWin"] : null;
	},

	getFiveAtkorDef: function(id) {
		var info = this.info(id);
		return info ? info["fiveAtkorDef"] : null;
	},

	getFailFactor: function(id) {
		var info = this.info(id);
		return info ? info["failFactor"] : null;
	},

	getElevenAtkorDef: function(id) {
		var info = this.info(id);
		return info ? info["elevenAtkorDef"] : null;
	},

	getDropLevel2: function(id) {
		var info = this.info(id);
		return info ? info["dropLevel2"] : null;
	},

	getNpcLevel2: function(id) {
		var info = this.info(id);
		return info ? info["npcLevel2"] : null;
	},

	getNpcLevel3: function(id) {
		var info = this.info(id);
		return info ? info["npcLevel3"] : null;
	},

	getDropLevel1: function(id) {
		var info = this.info(id);
		return info ? info["dropLevel1"] : null;
	},

	getNpcLevel1: function(id) {
		var info = this.info(id);
		return info ? info["npcLevel1"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}