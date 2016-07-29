var TableTable_Bang_hall = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_hall_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_hall: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_hall: id not found");
		return val;
	},

	getHallName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["hallName"]) : info["hallName"];
	},

	getSociatyLevel: function(id) {
		var info = this.info(id);
		return info ? info["sociatyLevel"] : null;
	},

	getMaxNum: function(id) {
		var info = this.info(id);
		return info ? info["maxNum"] : null;
	},

	getHall: function(id) {
		var info = this.info(id);
		return info ? info["hall"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}