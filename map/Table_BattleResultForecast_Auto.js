var TableTable_BattleResultForecast = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_BattleResultForecast_Auto.js")
		if (!this._map)
			PILogE("Table_BattleResultForecast: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_BattleResultForecast: id not found");
		return val;
	},

	getStart: function(id) {
		var info = this.info(id);
		return info ? info["start"] : null;
	},

	getDescription: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["description"]) : info["description"];
	},

	getEnd: function(id) {
		var info = this.info(id);
		return info ? info["end"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}