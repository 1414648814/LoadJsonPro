var TableTable_Bang_allencourage = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_allencourage_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_allencourage: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_allencourage: id not found");
		return val;
	},

	getVipLevel: function(id) {
		var info = this.info(id);
		return info ? info["vipLevel"] : null;
	},

	getAddAttr: function(id) {
		var info = this.info(id);
		return info ? info["addAttr"] : null;
	},

	getYuanBao: function(id) {
		var info = this.info(id);
		return info ? info["yuanBao"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}