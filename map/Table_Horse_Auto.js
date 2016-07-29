var TableTable_Horse = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Horse_Auto.js")
		if (!this._map)
			PILogE("Table_Horse: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Horse: id not found");
		return val;
	},

	getLowerAtkBase: function(id) {
		var info = this.info(id);
		return info ? info["LowerAtkBase"] : null;
	},

	getSourceBook: function(id) {
		var info = this.info(id);
		return info ? info["SourceBook"] : null;
	},

	getAtkDef: function(id) {
		var info = this.info(id);
		return info ? info["atkDef"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["Name"]) : info["Name"];
	},

	getUpperDefBase: function(id) {
		var info = this.info(id);
		return info ? info["UpperDefBase"] : null;
	},

	getIconId: function(id) {
		var info = this.info(id);
		return info ? info["IconId"] : null;
	},

	getEquipmentType: function(id) {
		var info = this.info(id);
		return info ? info["EquipmentType"] : null;
	},

	getImageId: function(id) {
		var info = this.info(id);
		return info ? info["ImageId"] : null;
	},

	getXingJi: function(id) {
		var info = this.info(id);
		return info ? info["XingJi"] : null;
	},

	getIntro: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["Intro"]) : info["Intro"];
	},

	getName2: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["Name2"]) : info["Name2"];
	},

	getIntro2: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["Intro2"]) : info["Intro2"];
	},

	getSpecialType: function(id) {
		var info = this.info(id);
		return info ? info["specialType"] : null;
	},

	getLowerDefBase: function(id) {
		var info = this.info(id);
		return info ? info["LowerDefBase"] : null;
	},

	getRefId: function(id) {
		var info = this.info(id);
		return info ? info["RefId"] : null;
	},

	getUpperAtkBase: function(id) {
		var info = this.info(id);
		return info ? info["UpperAtkBase"] : null;
	},

	_map : null,
	_cache_sign : null,
	_cache_mark : null,
	_cache_name : null
}