var TableTable_Jiezhi = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Jiezhi_Auto.js")
		if (!this._map)
			PILogE("Table_Jiezhi: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Jiezhi: id not found");
		return val;
	},

	getJieshu: function(id) {
		var info = this.info(id);
		return info ? info["jieshu"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getLevel: function(id) {
		var info = this.info(id);
		return info ? info["level"] : null;
	},

	getPinzhi: function(id) {
		var info = this.info(id);
		return info ? info["pinzhi"] : null;
	},

	getCostXinshi: function(id) {
		var info = this.info(id);
		return info ? info["costXinshi"] : null;
	},

	getFangyu: function(id) {
		var info = this.info(id);
		return info ? info["fangyu"] : null;
	},

	getGongji: function(id) {
		var info = this.info(id);
		return info ? info["gongji"] : null;
	},

	getTime: function(id) {
		var info = this.info(id);
		return info ? info["time"] : null;
	},

	getCostYinliang: function(id) {
		var info = this.info(id);
		return info ? info["costYinliang"] : null;
	},

	getDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["dec"]) : info["dec"];
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}