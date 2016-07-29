var TableTable_Kaichang = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Kaichang_Auto.js")
		if (!this._map)
			PILogE("Table_Kaichang: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Kaichang: id not found");
		return val;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getSection: function(id) {
		var info = this.info(id);
		return info ? info["section"] : null;
	},

	getIsFlipX: function(id) {
		var info = this.info(id);
		return info ? info["isFlipX"] : null;
	},

	getImageId: function(id) {
		var info = this.info(id);
		return info ? info["imageId"] : null;
	},

	getIsLeft: function(id) {
		var info = this.info(id);
		return info ? info["isLeft"] : null;
	},

	getDesc: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["desc"]) : info["desc"];
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}