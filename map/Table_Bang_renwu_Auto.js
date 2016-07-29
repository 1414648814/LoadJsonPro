var TableTable_Bang_renwu = {
	map: function() {
		if (!this._map)
			this._map = pi.JsonLoader.getInstance().load_dict("map/Table_Bang_renwu_Auto.js")
		if (!this._map)
			PILogE("Table_Bang_renwu: load map fail");
		return this._map;
	},

	info: function(id) {
		var map = this.map();
		if (!map)
			return null;
		var val = map[id];
		if (!val)
			PILogE("Table_Bang_renwu: id not found");
		return val;
	},

	getBackgroundPic: function(id) {
		var info = this.info(id);
		return info ? info["backgroundPic"] : null;
	},

	getYinLiangReward: function(id) {
		var info = this.info(id);
		return info ? info["yinLiangReward"] : null;
	},

	getName: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name"]) : info["name"];
	},

	getNpcBossId: function(id) {
		var info = this.info(id);
		return info ? info["npcBossId"] : null;
	},

	getTiliXiaoHao: function(id) {
		var info = this.info(id);
		return info ? info["tiliXiaoHao"] : null;
	},

	getHeroPic: function(id) {
		var info = this.info(id);
		return info ? info["heroPic"] : null;
	},

	getName2: function(id, translate) {
		var info = this.info(id);
		if (!info)
			return;
		return translate ? _V(info["name2"]) : info["name2"];
	},

	getExecCount: function(id) {
		var info = this.info(id);
		return info ? info["execCount"] : null;
	},

	getZijinReward: function(id) {
		var info = this.info(id);
		return info ? info["zijinReward"] : null;
	},

	getProgress: function(id) {
		var info = this.info(id);
		return info ? info["progress"] : null;
	},

	getSIMId: function(id) {
		var info = this.info(id);
		return info ? info["SIMId"] : null;
	},

	getType: function(id) {
		var info = this.info(id);
		return info ? info["type"] : null;
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