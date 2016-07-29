var TableTable_Bang_domain = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_domain_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_domain: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_domain: id not found");
		return val;
	},

	getNpcs: function(id) {
		var info = this.info(id);
		return info ? info["npcs"] : null;
	},

	getNpcName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["npcName"]) : info["npcName"];
	},

	getLevel: function(id) {
		var info = this.info(id);
		return info ? info["level"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}