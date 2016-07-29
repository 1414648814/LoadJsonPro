var TableTable_Bang_jiacheng = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_jiacheng_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_jiacheng: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_jiacheng: id not found");
		return val;
	},

	getBanghuiLevel: function(id) {
		var info = this.info(id);
		return info ? info["banghuiLevel"] : null;
	},

	getLevel: function(id) {
		var info = this.info(id);
		return info ? info["level"] : null;
	},

	getTiliPlus: function(id) {
		var info = this.info(id);
		return info ? info["tiliPlus"] : null;
	},

	getNeiliPlus: function(id) {
		var info = this.info(id);
		return info ? info["neiliPlus"] : null;
	},

	getExpPlus: function(id) {
		var info = this.info(id);
		return info ? info["expPlus"] : null;
	},

	getYinliangPlus: function(id) {
		var info = this.info(id);
		return info ? info["yinliangPlus"] : null;
	},

	getType: function(id) {
		var info = this.info(id);
		return info ? info["type"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}