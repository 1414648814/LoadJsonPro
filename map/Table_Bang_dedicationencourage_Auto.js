var TableTable_Bang_dedicationencourage = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_dedicationencourage_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_dedicationencourage: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_dedicationencourage: id not found");
		return val;
	},

	getSociatyDedication: function(id) {
		var info = this.info(id);
		return info ? info["sociatyDedication"] : null;
	},

	getAddAttr: function(id) {
		var info = this.info(id);
		return info ? info["addAttr"] : null;
	},

	getSucPro: function(id) {
		var info = this.info(id);
		return info ? info["sucPro"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}