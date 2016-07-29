var TableTable_Chongchou = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Chongchou_Auto.js")
		if (!this._map)
			PILogE("Table_Chongchou: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Chongchou: id not found");
		return val;
	},

	getReDrawCount: function(id) {
		var info = this.info(id);
		return info ? info["reDrawCount"] : null;
	},

	getNum: function(id) {
		var info = this.info(id);
		return info ? info["num"] : null;
	},

	getConsumeType: function(id) {
		var info = this.info(id);
		return info ? info["consumeType"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}