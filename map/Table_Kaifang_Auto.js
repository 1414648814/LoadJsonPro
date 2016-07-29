var TableTable_Kaifang = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Kaifang_Auto.js")
		if (!this._map)
			PILogE("Table_Kaifang: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Kaifang: id not found");
		return val;
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

	getIsShow: function(id) {
		var info = this.info(id);
		return info ? info["isShow"] : null;
	},

	getImageId: function(id) {
		var info = this.info(id);
		return info ? info["imageId"] : null;
	},

	getConId: function(id) {
		var info = this.info(id);
		return info ? info["conId"] : null;
	},

	getDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["dec"]) : info["dec"];
	},

	getShortDec: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["shortDec"]) : info["shortDec"];
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}