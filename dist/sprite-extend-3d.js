(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("spritejs"));
	else if(typeof define === 'function' && define.amd)
		define(["spritejs"], factory);
	else if(typeof exports === 'object')
		exports["ext3d"] = factory(require("spritejs"));
	else
		root["spritejs"] = root["spritejs"] || {}, root["spritejs"]["ext3d"] = factory(root["spritejs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__65__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "c05ccd1ac9372cde38be";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Texture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Vec2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Vec3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Vec4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Mat3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Mat4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Quat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return ogl__WEBPACK_IMPORTED_MODULE_0__["Euler"]; });

/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_layer3d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer3D", function() { return _node_layer3d__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _node_mesh3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh3d", function() { return _node_mesh3d__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _node_sphere__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sphere", function() { return _node_sphere__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _node_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _node_camera__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _node_cube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cube", function() { return _node_cube__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _node_plane__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return _node_plane__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _node_cylinder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cylinder", function() { return _node_cylinder__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _node_group3d__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group3d", function() { return _node_group3d__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "shaders", function() { return _shader__WEBPACK_IMPORTED_MODULE_10__; });












spritejs__WEBPACK_IMPORTED_MODULE_1__["Scene"].prototype.layer3d = function () {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default3d';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var displayRatio = this.options.displayRatio;
  options = Object.assign({
    dpr: displayRatio
  }, this.options, options);
  options.id = id;
  var layers = this.orderedChildren;

  for (var i = 0; i < layers.length; i++) {
    if (layers[i].id === id) return layers[i];
  }

  var layer = new _node_layer3d__WEBPACK_IMPORTED_MODULE_2__["default"](options);
  this.appendChild(layer);
  return layer;
};



/***/ }),
/* 1 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _core_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Geometry"]; });

/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return _core_Program_js__WEBPACK_IMPORTED_MODULE_1__["Program"]; });

/* harmony import */ var _core_Renderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _core_Renderer_js__WEBPACK_IMPORTED_MODULE_2__["Renderer"]; });

/* harmony import */ var _core_Camera_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _core_Camera_js__WEBPACK_IMPORTED_MODULE_3__["Camera"]; });

/* harmony import */ var _core_Transform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return _core_Transform_js__WEBPACK_IMPORTED_MODULE_4__["Transform"]; });

/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _core_Mesh_js__WEBPACK_IMPORTED_MODULE_5__["Mesh"]; });

/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return _core_Texture_js__WEBPACK_IMPORTED_MODULE_6__["Texture"]; });

/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_7__["RenderTarget"]; });

/* harmony import */ var _math_Color_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _math_Color_js__WEBPACK_IMPORTED_MODULE_8__["Color"]; });

/* harmony import */ var _math_Euler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return _math_Euler_js__WEBPACK_IMPORTED_MODULE_9__["Euler"]; });

/* harmony import */ var _math_Mat3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return _math_Mat3_js__WEBPACK_IMPORTED_MODULE_10__["Mat3"]; });

/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return _math_Mat4_js__WEBPACK_IMPORTED_MODULE_11__["Mat4"]; });

/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return _math_Quat_js__WEBPACK_IMPORTED_MODULE_12__["Quat"]; });

/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return _math_Vec2_js__WEBPACK_IMPORTED_MODULE_13__["Vec2"]; });

/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return _math_Vec3_js__WEBPACK_IMPORTED_MODULE_14__["Vec3"]; });

/* harmony import */ var _math_Vec4_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return _math_Vec4_js__WEBPACK_IMPORTED_MODULE_15__["Vec4"]; });

/* harmony import */ var _extras_Plane_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return _extras_Plane_js__WEBPACK_IMPORTED_MODULE_16__["Plane"]; });

/* harmony import */ var _extras_Box_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _extras_Box_js__WEBPACK_IMPORTED_MODULE_17__["Box"]; });

/* harmony import */ var _extras_Sphere_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sphere", function() { return _extras_Sphere_js__WEBPACK_IMPORTED_MODULE_18__["Sphere"]; });

/* harmony import */ var _extras_Cylinder_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cylinder", function() { return _extras_Cylinder_js__WEBPACK_IMPORTED_MODULE_19__["Cylinder"]; });

/* harmony import */ var _extras_Triangle_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return _extras_Triangle_js__WEBPACK_IMPORTED_MODULE_20__["Triangle"]; });

/* harmony import */ var _extras_Orbit_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return _extras_Orbit_js__WEBPACK_IMPORTED_MODULE_21__["Orbit"]; });

/* harmony import */ var _extras_Raycast_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Raycast", function() { return _extras_Raycast_js__WEBPACK_IMPORTED_MODULE_22__["Raycast"]; });

/* harmony import */ var _extras_Post_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _extras_Post_js__WEBPACK_IMPORTED_MODULE_23__["Post"]; });

/* harmony import */ var _extras_Skin_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skin", function() { return _extras_Skin_js__WEBPACK_IMPORTED_MODULE_24__["Skin"]; });

/* harmony import */ var _extras_Animation_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return _extras_Animation_js__WEBPACK_IMPORTED_MODULE_25__["Animation"]; });

/* harmony import */ var _extras_Text_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _extras_Text_js__WEBPACK_IMPORTED_MODULE_26__["Text"]; });

/* harmony import */ var _extras_NormalProgram_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalProgram", function() { return _extras_NormalProgram_js__WEBPACK_IMPORTED_MODULE_27__["NormalProgram"]; });

/* harmony import */ var _extras_Flowmap_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flowmap", function() { return _extras_Flowmap_js__WEBPACK_IMPORTED_MODULE_28__["Flowmap"]; });

/* harmony import */ var _extras_GPGPU_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GPGPU", function() { return _extras_GPGPU_js__WEBPACK_IMPORTED_MODULE_29__["GPGPU"]; });

/* harmony import */ var _extras_Polyline_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _extras_Polyline_js__WEBPACK_IMPORTED_MODULE_30__["Polyline"]; });

/* harmony import */ var _extras_Shadow_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return _extras_Shadow_js__WEBPACK_IMPORTED_MODULE_31__["Shadow"]; });

/* harmony import */ var _extras_KTXTexture_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KTXTexture", function() { return _extras_KTXTexture_js__WEBPACK_IMPORTED_MODULE_32__["KTXTexture"]; });

/* harmony import */ var _extras_TextureLoader_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return _extras_TextureLoader_js__WEBPACK_IMPORTED_MODULE_33__["TextureLoader"]; });

// Core









// Maths









// Extras







// export {Curve} from './extras/Curve.js';













/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);


// attribute params
// {
//     data - typed array eg UInt16Array for indices, Float32Array
//     size - int default 1
//     instanced - default null. Pass divisor amount
//     type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
//     normalize - boolean default false
// }
// TODO: fit in transform feedback
// TODO: when would I disableVertexAttribArray ?
// TODO: add fallback for non vao support (ie)

var tempVec3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var ID = 1;
var ATTR_ID = 1;
var Geometry =
/*#__PURE__*/
function () {
  function Geometry(gl) {
    var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Geometry);

    this.gl = gl;
    this.attributes = attributes;
    this.id = ID++; // Store one VAO per program attribute locations order

    this.VAOs = {};
    this.drawRange = {
      start: 0,
      count: 0
    };
    this.instancedCount = 0; // Unbind current VAO so that new buffers don't get added to active mesh

    this.gl.renderer.bindVertexArray(null);
    this.gl.renderer.currentGeometry = null; // Alias for state store to avoid redundant calls for global state

    this.glState = this.gl.renderer.state; // create the buffers

    for (var key in attributes) {
      this.addAttribute(key, attributes[key]);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Geometry, [{
    key: "addAttribute",
    value: function addAttribute(key, attr) {
      this.attributes[key] = attr; // Set options

      attr.id = ATTR_ID++;
      attr.size = attr.size || 1;
      attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT); // Uint32Array

      attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
      attr.normalize = attr.normalize || false;
      attr.buffer = this.gl.createBuffer();
      attr.count = attr.data.length / attr.size;
      attr.divisor = attr.instanced || 0;
      attr.needsUpdate = false; // Push data to buffer

      this.updateAttribute(attr); // Update geometry counts. If indexed, ignore regular attributes

      if (attr.divisor) {
        this.isInstanced = true;

        if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
          console.warn('geometry has multiple instanced buffers of different length');
          return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
        }

        this.instancedCount = attr.count * attr.divisor;
      } else if (key === 'index') {
        this.drawRange.count = attr.count;
      } else if (!this.attributes.index) {
        this.drawRange.count = Math.max(this.drawRange.count, attr.count);
      }
    }
  }, {
    key: "updateAttribute",
    value: function updateAttribute(attr) {
      // Already bound, prevent gl command
      if (this.glState.boundBuffer !== attr.id) {
        this.gl.bindBuffer(attr.target, attr.buffer);
        this.glState.boundBuffer = attr.id;
      }

      this.gl.bufferData(attr.target, attr.data, this.gl.STATIC_DRAW);
      attr.needsUpdate = false;
    }
  }, {
    key: "setIndex",
    value: function setIndex(value) {
      this.addAttribute('index', value);
    }
  }, {
    key: "setDrawRange",
    value: function setDrawRange(start, count) {
      this.drawRange.start = start;
      this.drawRange.count = count;
    }
  }, {
    key: "setInstancedCount",
    value: function setInstancedCount(value) {
      this.instancedCount = value;
    }
  }, {
    key: "createVAO",
    value: function createVAO(program) {
      this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
      this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
      this.bindAttributes(program);
    }
  }, {
    key: "bindAttributes",
    value: function bindAttributes(program) {
      var _this = this;

      // Link all attributes to program using gl.vertexAttribPointer
      program.attributeLocations.forEach(function (location, name) {
        // If geometry missing a required shader attribute
        if (!_this.attributes[name]) {
          console.warn("active attribute ".concat(name, " not being supplied"));
          return;
        }

        var attr = _this.attributes[name];

        _this.gl.bindBuffer(attr.target, attr.buffer);

        _this.glState.boundBuffer = attr.id;

        _this.gl.vertexAttribPointer(location, attr.size, attr.type, attr.normalize, 0, // stride
        0 // offset
        );

        _this.gl.enableVertexAttribArray(location); // For instanced attributes, divisor needs to be set.
        // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render


        _this.gl.renderer.vertexAttribDivisor(location, attr.divisor);
      }); // Bind indices if geometry indexed

      if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
    }
  }, {
    key: "draw",
    value: function draw(_ref) {
      var _this2 = this;

      var program = _ref.program,
          _ref$mode = _ref.mode,
          mode = _ref$mode === void 0 ? this.gl.TRIANGLES : _ref$mode;

      if (this.gl.renderer.currentGeometry !== "".concat(this.id, "_").concat(program.attributeOrder)) {
        if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
        this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
        this.gl.renderer.currentGeometry = "".concat(this.id, "_").concat(program.attributeOrder);
      } // Check if any attributes need updating


      program.attributeLocations.forEach(function (location, name) {
        var attr = _this2.attributes[name];
        if (attr.needsUpdate) _this2.updateAttribute(attr);
      });

      if (this.isInstanced) {
        if (this.attributes.index) {
          this.gl.renderer.drawElementsInstanced(mode, this.drawRange.count, this.attributes.index.type, this.drawRange.start, this.instancedCount);
        } else {
          this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
        }
      } else {
        if (this.attributes.index) {
          this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.drawRange.start);
        } else {
          this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
        }
      }
    }
  }, {
    key: "computeBoundingBox",
    value: function computeBoundingBox(array) {
      // Use position buffer if available
      if (!array && this.attributes.position) array = this.attributes.position.data;
      if (!array) console.warn('No position buffer found to compute bounds');

      if (!this.bounds) {
        this.bounds = {
          min: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](),
          max: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](),
          center: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](),
          scale: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](),
          radius: Infinity
        };
      }

      var min = this.bounds.min;
      var max = this.bounds.max;
      var center = this.bounds.center;
      var scale = this.bounds.scale;
      min.set(+Infinity);
      max.set(-Infinity);

      for (var i = 0, l = array.length; i < l; i += 3) {
        var x = array[i];
        var y = array[i + 1];
        var z = array[i + 2];
        min.x = Math.min(x, min.x);
        min.y = Math.min(y, min.y);
        min.z = Math.min(z, min.z);
        max.x = Math.max(x, max.x);
        max.y = Math.max(y, max.y);
        max.z = Math.max(z, max.z);
      }

      scale.sub(max, min);
      center.add(min, max).divide(2);
    }
  }, {
    key: "computeBoundingSphere",
    value: function computeBoundingSphere(array) {
      // Use position buffer if available
      if (!array && this.attributes.position) array = this.attributes.position.data;
      if (!array) console.warn('No position buffer found to compute bounds');
      if (!this.bounds) this.computeBoundingBox(array);
      var maxRadiusSq = 0;

      for (var i = 0, l = array.length; i < l; i += 3) {
        tempVec3.fromArray(array, i);
        maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
      }

      this.bounds.radius = Math.sqrt(maxRadiusSq);
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.vao) this.gl.renderer.deleteVertexArray(this.vao);

      for (var key in this.attributes) {
        this.gl.deleteBuffer(this.attributes[key].buffer);
        delete this.attributes[key];
      }
    }
  }]);

  return Geometry;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec3", function() { return Vec3; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);








var Vec3 =
/*#__PURE__*/
function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Vec3, _Array);

  function Vec3() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Vec3);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Vec3).call(this, x, y, z));
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Vec3, [{
    key: "set",
    value: function set(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
      if (x.length) return this.copy(x);
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["set"](this, x, y, z);
      return this;
    }
  }, {
    key: "copy",
    value: function copy(v) {
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["copy"](this, v);
      return this;
    }
  }, {
    key: "add",
    value: function add(va, vb) {
      if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["add"](this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["add"](this, this, va);
      return this;
    }
  }, {
    key: "sub",
    value: function sub(va, vb) {
      if (vb) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["subtract"](this, va, vb);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["subtract"](this, this, va);
      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(v) {
      if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, this, v);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["scale"](this, this, v);
      return this;
    }
  }, {
    key: "divide",
    value: function divide(v) {
      if (v.length) _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["divide"](this, this, v);else _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["scale"](this, this, 1 / v);
      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["inverse"](this, v);
      return this;
    } // Can't use 'length' as Array.prototype uses it

  }, {
    key: "len",
    value: function len() {
      return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["length"](this);
    }
  }, {
    key: "distance",
    value: function distance(v) {
      if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["distance"](this, v);else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["length"](this);
    }
  }, {
    key: "squaredLen",
    value: function squaredLen() {
      return this.squaredDistance();
    }
  }, {
    key: "squaredDistance",
    value: function squaredDistance(v) {
      if (v) return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["squaredDistance"](this, v);else return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["squaredLength"](this);
    }
  }, {
    key: "negate",
    value: function negate() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["negate"](this, v);
      return this;
    }
  }, {
    key: "cross",
    value: function cross(va, vb) {
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["cross"](this, va, vb);
      return this;
    }
  }, {
    key: "scale",
    value: function scale(v) {
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["scale"](this, this, v);
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["normalize"](this, this);
      return this;
    }
  }, {
    key: "dot",
    value: function dot(v) {
      return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["dot"](this, v);
    }
  }, {
    key: "equals",
    value: function equals(v) {
      return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["exactEquals"](this, v);
    }
  }, {
    key: "applyMatrix4",
    value: function applyMatrix4(mat4) {
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["transformMat4"](this, this, mat4);
      return this;
    }
  }, {
    key: "applyQuaternion",
    value: function applyQuaternion(q) {
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["transformQuat"](this, this, q);
      return this;
    }
  }, {
    key: "angle",
    value: function angle(v) {
      return _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["angle"](this, v);
    }
  }, {
    key: "lerp",
    value: function lerp(v, t) {
      _functions_Vec3Func_js__WEBPACK_IMPORTED_MODULE_7__["lerp"](this, this, v, t);
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vec3(this[0], this[1], this[2]);
    }
  }, {
    key: "fromArray",
    value: function fromArray(a) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this[0] = a[o];
      this[1] = a[o + 1];
      this[2] = a[o + 2];
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      a[o] = this[0];
      a[o + 1] = this[1];
      a[o + 2] = this[2];
      return a;
    }
  }, {
    key: "transformDirection",
    value: function transformDirection(mat4) {
      var x = this[0];
      var y = this[1];
      var z = this[2];
      this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
      this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
      this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
      return this.normalize();
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(v) {
      this[0] = v;
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(v) {
      this[1] = v;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(v) {
      this[2] = v;
    }
  }]);

  return Vec3;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Array));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7);

var assertThisInitialized = __webpack_require__(8);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(11);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(9);

var setPrototypeOf = __webpack_require__(11);

var isNativeFunction = __webpack_require__(13);

var construct = __webpack_require__(14);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(11);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
var EPSILON = 0.000001;
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = Math.random() * 2.0 * Math.PI;
  var z = Math.random() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var uvx = qy * z - qz * y;
  var uvy = qz * x - qx * z;
  var uvz = qx * y - qy * x;
  var uuvx = qy * uvz - qz * uvy;
  var uuvy = qz * uvx - qx * uvz;
  var uuvz = qx * uvy - qy * uvx;
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateX(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateY(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */

function rotateZ(out, a, b, c) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */

var angle = function () {
  var tempA = [0, 0, 0];
  var tempB = [0, 0, 0];
  return function (a, b) {
    copy(tempA, a);
    copy(tempB, b);
    normalize(tempA, tempA);
    normalize(tempB, tempB);
    var cosine = dot(tempA, tempB);

    if (cosine > 1.0) {
      return 0;
    } else if (cosine < -1.0) {
      return Math.PI;
    } else {
      return Math.acos(cosine);
    }
  };
}();
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube
var ID = 1; // cache of typed arrays used to flatten uniform arrays

var arrayCacheF32 = {};
var Program =
/*#__PURE__*/
function () {
  function Program(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        vertex = _ref.vertex,
        fragment = _ref.fragment,
        _ref$uniforms = _ref.uniforms,
        uniforms = _ref$uniforms === void 0 ? {} : _ref$uniforms,
        _ref$transparent = _ref.transparent,
        transparent = _ref$transparent === void 0 ? false : _ref$transparent,
        _ref$cullFace = _ref.cullFace,
        cullFace = _ref$cullFace === void 0 ? gl.BACK : _ref$cullFace,
        _ref$frontFace = _ref.frontFace,
        frontFace = _ref$frontFace === void 0 ? gl.CCW : _ref$frontFace,
        _ref$depthTest = _ref.depthTest,
        depthTest = _ref$depthTest === void 0 ? true : _ref$depthTest,
        _ref$depthWrite = _ref.depthWrite,
        depthWrite = _ref$depthWrite === void 0 ? true : _ref$depthWrite,
        _ref$depthFunc = _ref.depthFunc,
        depthFunc = _ref$depthFunc === void 0 ? gl.LESS : _ref$depthFunc;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Program);

    this.gl = gl;
    this.uniforms = uniforms;
    this.id = ID++;
    if (!vertex) console.warn('vertex shader not supplied');
    if (!fragment) console.warn('fragment shader not supplied'); // Store program state

    this.transparent = transparent;
    this.cullFace = cullFace;
    this.frontFace = frontFace;
    this.depthTest = depthTest;
    this.depthWrite = depthWrite;
    this.depthFunc = depthFunc;
    this.blendFunc = {};
    this.blendEquation = {}; // set default blendFunc if transparent flagged

    if (this.transparent && !this.blendFunc.src) {
      if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    } // compile vertex shader and log errors


    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertex);
    gl.compileShader(vertexShader);

    if (gl.getShaderInfoLog(vertexShader) !== '') {
      console.warn("".concat(gl.getShaderInfoLog(vertexShader), "\nVertex Shader\n").concat(addLineNumbers(vertex)));
    } // compile fragment shader and log errors


    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragment);
    gl.compileShader(fragmentShader);

    if (gl.getShaderInfoLog(fragmentShader) !== '') {
      console.warn("".concat(gl.getShaderInfoLog(fragmentShader), "\nFragment Shader\n").concat(addLineNumbers(fragment)));
    } // compile program and log errors


    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      return console.warn(gl.getProgramInfoLog(this.program));
    } // Remove shader once linked


    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader); // Get active uniform locations

    this.uniformLocations = new Map();
    var numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);

    for (var uIndex = 0; uIndex < numUniforms; uIndex++) {
      var uniform = gl.getActiveUniform(this.program, uIndex);
      this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name)); // split uniforms' names to separate array and struct declarations

      var split = uniform.name.match(/(\w+)/g);
      uniform.uniformName = split[0];

      if (split.length === 3) {
        uniform.isStructArray = true;
        uniform.structIndex = Number(split[1]);
        uniform.structProperty = split[2];
      } else if (split.length === 2 && isNaN(Number(split[1]))) {
        uniform.isStruct = true;
        uniform.structProperty = split[1];
      }
    } // Get active attribute locations


    this.attributeLocations = new Map();
    var locations = [];
    var numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);

    for (var aIndex = 0; aIndex < numAttribs; aIndex++) {
      var attribute = gl.getActiveAttrib(this.program, aIndex);
      var location = gl.getAttribLocation(this.program, attribute.name);
      locations[location] = attribute.name;
      this.attributeLocations.set(attribute.name, location);
    }

    this.attributeOrder = locations.join('');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Program, [{
    key: "setBlendFunc",
    value: function setBlendFunc(src, dst, srcAlpha, dstAlpha) {
      this.blendFunc.src = src;
      this.blendFunc.dst = dst;
      this.blendFunc.srcAlpha = srcAlpha;
      this.blendFunc.dstAlpha = dstAlpha;
      if (src) this.transparent = true;
    }
  }, {
    key: "setBlendEquation",
    value: function setBlendEquation(modeRGB, modeAlpha) {
      this.blendEquation.modeRGB = modeRGB;
      this.blendEquation.modeAlpha = modeAlpha;
    }
  }, {
    key: "applyState",
    value: function applyState() {
      if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);else this.gl.renderer.disable(this.gl.DEPTH_TEST);
      if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);else this.gl.renderer.disable(this.gl.CULL_FACE);
      if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);else this.gl.renderer.disable(this.gl.BLEND);
      if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
      this.gl.renderer.setFrontFace(this.frontFace);
      this.gl.renderer.setDepthMask(this.depthWrite);
      this.gl.renderer.setDepthFunc(this.depthFunc);
      if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
      if (this.blendEquation.modeRGB) this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
    }
  }, {
    key: "use",
    value: function use() {
      var _this = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$flipFaces = _ref2.flipFaces,
          flipFaces = _ref2$flipFaces === void 0 ? false : _ref2$flipFaces;

      var textureUnit = -1;
      var programActive = this.gl.renderer.currentProgram === this.id; // Avoid gl call if program already in use

      if (!programActive) {
        this.gl.useProgram(this.program);
        this.gl.renderer.currentProgram = this.id;
      } // Set only the active uniforms found in the shader


      this.uniformLocations.forEach(function (location, activeUniform) {
        var name = activeUniform.uniformName; // get supplied uniform

        var uniform = _this.uniforms[name]; // For structs, get the specific property instead of the entire object

        if (activeUniform.isStruct) {
          uniform = uniform[activeUniform.structProperty];
          name += ".".concat(activeUniform.structProperty);
        }

        if (activeUniform.isStructArray) {
          uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
          name += "[".concat(activeUniform.structIndex, "].").concat(activeUniform.structProperty);
        }

        if (!uniform) {
          return warn("Active uniform ".concat(name, " has not been supplied"));
        }

        if (uniform && uniform.value === undefined) {
          return warn("".concat(name, " uniform is missing a value parameter"));
        }

        if (uniform.value.texture) {
          textureUnit = textureUnit + 1; // Check if texture needs to be updated

          uniform.value.update(textureUnit);
          return setUniform(_this.gl, activeUniform.type, location, textureUnit);
        } // For texture arrays, set uniform as an array of texture units instead of just one


        if (uniform.value.length && uniform.value[0].texture) {
          var textureUnits = [];
          uniform.value.forEach(function (value) {
            textureUnit = textureUnit + 1;
            value.update(textureUnit);
            textureUnits.push(textureUnit);
          });
          return setUniform(_this.gl, activeUniform.type, location, textureUnits);
        }

        setUniform(_this.gl, activeUniform.type, location, uniform.value);
      });
      this.applyState();
      if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
    }
  }, {
    key: "remove",
    value: function remove() {
      this.gl.deleteProgram(this.program);
    }
  }]);

  return Program;
}();

function setUniform(gl, type, location, value) {
  value = value.length ? flatten(value) : value;
  var setValue = gl.renderer.state.uniformLocations.get(location); // Avoid redundant uniform commands

  if (value.length) {
    if (setValue === undefined) {
      // clone array to store as cache
      gl.renderer.state.uniformLocations.set(location, value.slice(0));
    } else {
      if (arraysEqual(setValue, value)) return; // Update cached array values

      setValue.set ? setValue.set(value) : setArray(setValue, value);
      gl.renderer.state.uniformLocations.set(location, setValue);
    }
  } else {
    if (setValue === value) return;
    gl.renderer.state.uniformLocations.set(location, value);
  }

  switch (type) {
    case 5126:
      return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
    // FLOAT

    case 35664:
      return gl.uniform2fv(location, value);
    // FLOAT_VEC2

    case 35665:
      return gl.uniform3fv(location, value);
    // FLOAT_VEC3

    case 35666:
      return gl.uniform4fv(location, value);
    // FLOAT_VEC4

    case 35670: // BOOL

    case 5124: // INT

    case 35678: // SAMPLER_2D

    case 35680:
      return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
    // SAMPLER_CUBE

    case 35671: // BOOL_VEC2

    case 35667:
      return gl.uniform2iv(location, value);
    // INT_VEC2

    case 35672: // BOOL_VEC3

    case 35668:
      return gl.uniform3iv(location, value);
    // INT_VEC3

    case 35673: // BOOL_VEC4

    case 35669:
      return gl.uniform4iv(location, value);
    // INT_VEC4

    case 35674:
      return gl.uniformMatrix2fv(location, false, value);
    // FLOAT_MAT2

    case 35675:
      return gl.uniformMatrix3fv(location, false, value);
    // FLOAT_MAT3

    case 35676:
      return gl.uniformMatrix4fv(location, false, value);
    // FLOAT_MAT4
  }
}

function addLineNumbers(string) {
  var lines = string.split('\n');

  for (var i = 0; i < lines.length; i++) {
    lines[i] = i + 1 + ': ' + lines[i];
  }

  return lines.join('\n');
}

function flatten(a) {
  var arrayLen = a.length;
  var valueLen = a[0].length;
  if (valueLen === undefined) return a;
  var length = arrayLen * valueLen;
  var value = arrayCacheF32[length];
  if (!value) arrayCacheF32[length] = value = new Float32Array(length);

  for (var i = 0; i < arrayLen; i++) {
    value.set(a[i], i * valueLen);
  }

  return value;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  for (var i = 0, l = a.length; i < l; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function setArray(a, b) {
  for (var i = 0, l = a.length; i < l; i++) {
    a[i] = b[i];
  }
}

var warnCount = 0;

function warn(message) {
  if (warnCount > 100) return;
  console.warn(message);
  warnCount++;
  if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);


 // TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost
// Not automatic - devs to use these methods manually
// gl.colorMask( colorMask, colorMask, colorMask, colorMask );
// gl.clearColor( r, g, b, a );
// gl.stencilMask( stencilMask );
// gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
// gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
// gl.clearStencil( stencil );

var tempVec3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var Renderer =
/*#__PURE__*/
function () {
  function Renderer() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$canvas = _ref.canvas,
        canvas = _ref$canvas === void 0 ? document.createElement('canvas') : _ref$canvas,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 300 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 150 : _ref$height,
        _ref$dpr = _ref.dpr,
        dpr = _ref$dpr === void 0 ? 1 : _ref$dpr,
        _ref$alpha = _ref.alpha,
        alpha = _ref$alpha === void 0 ? false : _ref$alpha,
        _ref$depth = _ref.depth,
        depth = _ref$depth === void 0 ? true : _ref$depth,
        _ref$stencil = _ref.stencil,
        stencil = _ref$stencil === void 0 ? false : _ref$stencil,
        _ref$antialias = _ref.antialias,
        antialias = _ref$antialias === void 0 ? false : _ref$antialias,
        _ref$premultipliedAlp = _ref.premultipliedAlpha,
        premultipliedAlpha = _ref$premultipliedAlp === void 0 ? false : _ref$premultipliedAlp,
        _ref$preserveDrawingB = _ref.preserveDrawingBuffer,
        preserveDrawingBuffer = _ref$preserveDrawingB === void 0 ? false : _ref$preserveDrawingB,
        _ref$powerPreference = _ref.powerPreference,
        powerPreference = _ref$powerPreference === void 0 ? 'default' : _ref$powerPreference,
        _ref$autoClear = _ref.autoClear,
        autoClear = _ref$autoClear === void 0 ? true : _ref$autoClear,
        _ref$webgl = _ref.webgl,
        webgl = _ref$webgl === void 0 ? 2 : _ref$webgl;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Renderer);

    var attributes = {
      alpha: alpha,
      depth: depth,
      stencil: stencil,
      antialias: antialias,
      premultipliedAlpha: premultipliedAlpha,
      preserveDrawingBuffer: preserveDrawingBuffer,
      powerPreference: powerPreference
    };
    this.dpr = dpr;
    this.alpha = alpha;
    this.color = true;
    this.depth = depth;
    this.stencil = stencil;
    this.premultipliedAlpha = premultipliedAlpha;
    this.autoClear = autoClear; // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1

    if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
    this.isWebgl2 = !!this.gl;

    if (!this.gl) {
      this.gl = canvas.getContext('webgl', attributes) || canvas.getContext('experimental-webgl', attributes);
    } // Attach renderer to gl so that all classes have access to internal state functions


    this.gl.renderer = this; // initialise size values

    this.setSize(width, height); // gl state stores to avoid redundant calls on methods used internally

    this.state = {};
    this.state.blendFunc = {
      src: this.gl.ONE,
      dst: this.gl.ZERO
    };
    this.state.blendEquation = {
      modeRGB: this.gl.FUNC_ADD
    };
    this.state.cullFace = null;
    this.state.frontFace = this.gl.CCW;
    this.state.depthMask = true;
    this.state.depthFunc = this.gl.LESS;
    this.state.premultiplyAlpha = false;
    this.state.flipY = false;
    this.state.unpackAlignment = 4;
    this.state.framebuffer = null;
    this.state.viewport = {
      width: null,
      height: null
    };
    this.state.textureUnits = [];
    this.state.activeTextureUnit = 0;
    this.state.boundBuffer = null;
    this.state.uniformLocations = new Map(); // store requested extensions

    this.extensions = {}; // Initialise extra format types

    if (this.isWebgl2) {
      this.getExtension('EXT_color_buffer_float');
      this.getExtension('OES_texture_float_linear');
    } else {
      this.getExtension('OES_texture_float');
      this.getExtension('OES_texture_float_linear');
      this.getExtension('OES_texture_half_float');
      this.getExtension('OES_texture_half_float_linear');
      this.getExtension('OES_element_index_uint');
      this.getExtension('OES_standard_derivatives');
      this.getExtension('EXT_sRGB');
      this.getExtension('WEBGL_depth_texture');
      this.getExtension('WEBGL_draw_buffers');
    } // Create method aliases using extension (WebGL1) or native if available (WebGL2)


    this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
    this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
    this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
    this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
    this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
    this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
    this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL'); // Store device parameters

    this.parameters = {};
    this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic') ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Renderer, [{
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      this.gl.canvas.width = width * this.dpr;
      this.gl.canvas.height = height * this.dpr;
      Object.assign(this.gl.canvas.style, {
        width: width + 'px',
        height: height + 'px'
      });
    }
  }, {
    key: "setViewport",
    value: function setViewport(width, height) {
      if (this.state.viewport.width === width && this.state.viewport.height === height) return;
      this.state.viewport.width = width;
      this.state.viewport.height = height;
      this.gl.viewport(0, 0, width, height);
    }
  }, {
    key: "enable",
    value: function enable(id) {
      if (this.state[id] === true) return;
      this.gl.enable(id);
      this.state[id] = true;
    }
  }, {
    key: "disable",
    value: function disable(id) {
      if (this.state[id] === false) return;
      this.gl.disable(id);
      this.state[id] = false;
    }
  }, {
    key: "setBlendFunc",
    value: function setBlendFunc(src, dst, srcAlpha, dstAlpha) {
      if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha) return;
      this.state.blendFunc.src = src;
      this.state.blendFunc.dst = dst;
      this.state.blendFunc.srcAlpha = srcAlpha;
      this.state.blendFunc.dstAlpha = dstAlpha;
      if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);else this.gl.blendFunc(src, dst);
    }
  }, {
    key: "setBlendEquation",
    value: function setBlendEquation(modeRGB, modeAlpha) {
      if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
      this.state.blendEquation.modeRGB = modeRGB;
      this.state.blendEquation.modeAlpha = modeAlpha;
      if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);else this.gl.blendEquation(modeRGB);
    }
  }, {
    key: "setCullFace",
    value: function setCullFace(value) {
      if (this.state.cullFace === value) return;
      this.state.cullFace = value;
      this.gl.cullFace(value);
    }
  }, {
    key: "setFrontFace",
    value: function setFrontFace(value) {
      if (this.state.frontFace === value) return;
      this.state.frontFace = value;
      this.gl.frontFace(value);
    }
  }, {
    key: "setDepthMask",
    value: function setDepthMask(value) {
      if (this.state.depthMask === value) return;
      this.state.depthMask = value;
      this.gl.depthMask(value);
    }
  }, {
    key: "setDepthFunc",
    value: function setDepthFunc(value) {
      if (this.state.depthFunc === value) return;
      this.state.depthFunc = value;
      this.gl.depthFunc(value);
    }
  }, {
    key: "activeTexture",
    value: function activeTexture(value) {
      if (this.state.activeTextureUnit === value) return;
      this.state.activeTextureUnit = value;
      this.gl.activeTexture(this.gl.TEXTURE0 + value);
    }
  }, {
    key: "bindFramebuffer",
    value: function bindFramebuffer() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$target = _ref2.target,
          target = _ref2$target === void 0 ? this.gl.FRAMEBUFFER : _ref2$target,
          _ref2$buffer = _ref2.buffer,
          buffer = _ref2$buffer === void 0 ? null : _ref2$buffer;

      if (this.state.framebuffer === buffer) return;
      this.state.framebuffer = buffer;
      this.gl.bindFramebuffer(target, buffer);
    }
  }, {
    key: "getExtension",
    value: function getExtension(extension, webgl2Func, extFunc) {
      // if webgl2 function supported, return func bound to gl context
      if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl); // fetch extension once only

      if (!this.extensions[extension]) {
        this.extensions[extension] = this.gl.getExtension(extension);
      } // return extension if no function requested


      if (!webgl2Func) return this.extensions[extension]; // Return null if extension not supported

      if (!this.extensions[extension]) return null; // return extension function, bound to extension

      return this.extensions[extension][extFunc].bind(this.extensions[extension]);
    }
  }, {
    key: "sortOpaque",
    value: function sortOpaque(a, b) {
      if (a.renderOrder !== b.renderOrder) {
        return a.renderOrder - b.renderOrder;
      } else if (a.program.id !== b.program.id) {
        return a.program.id - b.program.id;
      } else if (a.zDepth !== b.zDepth) {
        return a.zDepth - b.zDepth;
      } else {
        return b.id - a.id;
      }
    }
  }, {
    key: "sortTransparent",
    value: function sortTransparent(a, b) {
      if (a.renderOrder !== b.renderOrder) {
        return a.renderOrder - b.renderOrder;
      }

      if (a.zDepth !== b.zDepth) {
        return b.zDepth - a.zDepth;
      } else {
        return b.id - a.id;
      }
    }
  }, {
    key: "sortUI",
    value: function sortUI(a, b) {
      if (a.renderOrder !== b.renderOrder) {
        return a.renderOrder - b.renderOrder;
      } else if (a.program.id !== b.program.id) {
        return a.program.id - b.program.id;
      } else {
        return b.id - a.id;
      }
    }
  }, {
    key: "getRenderList",
    value: function getRenderList(_ref3) {
      var scene = _ref3.scene,
          camera = _ref3.camera,
          frustumCull = _ref3.frustumCull,
          sort = _ref3.sort;
      var renderList = [];
      if (camera && frustumCull) camera.updateFrustum(); // Get visible

      scene.traverse(function (node) {
        if (!node.visible) return true;
        if (!node.draw) return;

        if (frustumCull && node.frustumCulled && camera) {
          if (!camera.frustumIntersectsMesh(node)) return;
        }

        renderList.push(node);
      });

      if (sort) {
        var opaque = [];
        var transparent = []; // depthTest true

        var ui = []; // depthTest false

        renderList.forEach(function (node) {
          // Split into the 3 render groups
          if (!node.program.transparent) {
            opaque.push(node);
          } else if (node.program.depthTest) {
            transparent.push(node);
          } else {
            ui.push(node);
          }

          node.zDepth = 0; // Only calculate z-depth if renderOrder unset and depthTest is true

          if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return; // update z-depth

          node.worldMatrix.getTranslation(tempVec3);
          tempVec3.applyMatrix4(camera.projectionViewMatrix);
          node.zDepth = tempVec3.z;
        });
        opaque.sort(this.sortOpaque);
        transparent.sort(this.sortTransparent);
        ui.sort(this.sortUI);
        renderList = opaque.concat(transparent, ui);
      }

      return renderList;
    }
  }, {
    key: "render",
    value: function render(_ref4) {
      var scene = _ref4.scene,
          camera = _ref4.camera,
          _ref4$target = _ref4.target,
          target = _ref4$target === void 0 ? null : _ref4$target,
          _ref4$update = _ref4.update,
          update = _ref4$update === void 0 ? true : _ref4$update,
          _ref4$sort = _ref4.sort,
          sort = _ref4$sort === void 0 ? true : _ref4$sort,
          _ref4$frustumCull = _ref4.frustumCull,
          frustumCull = _ref4$frustumCull === void 0 ? true : _ref4$frustumCull,
          clear = _ref4.clear;

      if (target === null) {
        // make sure no render target bound so draws to canvas
        this.bindFramebuffer();
        this.setViewport(this.width * this.dpr, this.height * this.dpr);
      } else {
        // bind supplied render target and update viewport
        this.bindFramebuffer(target);
        this.setViewport(target.width, target.height);
      }

      if (clear || this.autoClear && clear !== false) {
        // Ensure depth buffer writing is enabled so it can be cleared
        if (this.depth && (!target || target.depth)) {
          this.enable(this.gl.DEPTH_TEST);
          this.setDepthMask(true);
        }

        this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
      } // updates all scene graph matrices


      if (update) scene.updateMatrixWorld(); // Update camera separately, in case not in scene graph

      if (camera) camera.updateMatrixWorld(); // Get render list - entails culling and sorting

      var renderList = this.getRenderList({
        scene: scene,
        camera: camera,
        frustumCull: frustumCull,
        sort: sort
      });
      renderList.forEach(function (node) {
        node.draw({
          camera: camera
        });
      });
    }
  }]);

  return Renderer;
}();

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);









var tempMat4 = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_7__["Mat4"]();
var tempVec3a = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"]();
var tempVec3b = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"]();
var Camera =
/*#__PURE__*/
function (_Transform) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Camera, _Transform);

  function Camera(gl) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$near = _ref.near,
        near = _ref$near === void 0 ? 0.1 : _ref$near,
        _ref$far = _ref.far,
        far = _ref$far === void 0 ? 100 : _ref$far,
        _ref$fov = _ref.fov,
        fov = _ref$fov === void 0 ? 45 : _ref$fov,
        _ref$aspect = _ref.aspect,
        aspect = _ref$aspect === void 0 ? 1 : _ref$aspect,
        left = _ref.left,
        right = _ref.right,
        bottom = _ref.bottom,
        top = _ref.top;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Camera);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Camera).call(this));
    _this.near = near;
    _this.far = far;
    _this.fov = fov;
    _this.aspect = aspect;
    _this.projectionMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_7__["Mat4"]();
    _this.viewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_7__["Mat4"]();
    _this.projectionViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_7__["Mat4"]();
    _this.worldPosition = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"](); // Use orthographic if values set, else default to perspective camera

    if (left || right) _this.orthographic({
      left: left,
      right: right,
      bottom: bottom,
      top: top
    });else _this.perspective();
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Camera, [{
    key: "perspective",
    value: function perspective() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$near = _ref2.near,
          near = _ref2$near === void 0 ? this.near : _ref2$near,
          _ref2$far = _ref2.far,
          far = _ref2$far === void 0 ? this.far : _ref2$far,
          _ref2$fov = _ref2.fov,
          fov = _ref2$fov === void 0 ? this.fov : _ref2$fov,
          _ref2$aspect = _ref2.aspect,
          aspect = _ref2$aspect === void 0 ? this.aspect : _ref2$aspect;

      this.projectionMatrix.fromPerspective({
        fov: fov * (Math.PI / 180),
        aspect: aspect,
        near: near,
        far: far
      });
      this.type = 'perspective';
      return this;
    }
  }, {
    key: "orthographic",
    value: function orthographic() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$near = _ref3.near,
          near = _ref3$near === void 0 ? this.near : _ref3$near,
          _ref3$far = _ref3.far,
          far = _ref3$far === void 0 ? this.far : _ref3$far,
          _ref3$left = _ref3.left,
          left = _ref3$left === void 0 ? -1 : _ref3$left,
          _ref3$right = _ref3.right,
          right = _ref3$right === void 0 ? 1 : _ref3$right,
          _ref3$bottom = _ref3.bottom,
          bottom = _ref3$bottom === void 0 ? -1 : _ref3$bottom,
          _ref3$top = _ref3.top,
          top = _ref3$top === void 0 ? 1 : _ref3$top;

      this.projectionMatrix.fromOrthogonal({
        left: left,
        right: right,
        bottom: bottom,
        top: top,
        near: near,
        far: far
      });
      this.type = 'orthographic';
      return this;
    }
  }, {
    key: "updateMatrixWorld",
    value: function updateMatrixWorld() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Camera.prototype), "updateMatrixWorld", this).call(this);

      this.viewMatrix.inverse(this.worldMatrix);
      this.worldMatrix.getTranslation(this.worldPosition); // used for sorting

      this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
      return this;
    }
  }, {
    key: "lookAt",
    value: function lookAt(target) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Camera.prototype), "lookAt", this).call(this, target, true);

      return this;
    } // Project 3D coordinate to 2D point

  }, {
    key: "project",
    value: function project(v) {
      v.applyMatrix4(this.viewMatrix);
      v.applyMatrix4(this.projectionMatrix);
      return this;
    } // Unproject 2D point to 3D coordinate

  }, {
    key: "unproject",
    value: function unproject(v) {
      v.applyMatrix4(tempMat4.inverse(this.projectionMatrix));
      v.applyMatrix4(this.worldMatrix);
      return this;
    }
  }, {
    key: "updateFrustum",
    value: function updateFrustum() {
      if (!this.frustum) {
        this.frustum = [new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"](), new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_8__["Vec3"]()];
      }

      var m = this.projectionViewMatrix;
      this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x

      this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x

      this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y

      this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y

      this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)

      this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

      for (var i = 0; i < 6; i++) {
        var invLen = 1.0 / this.frustum[i].distance();
        this.frustum[i].multiply(invLen);
        this.frustum[i].constant *= invLen;
      }
    }
  }, {
    key: "frustumIntersectsMesh",
    value: function frustumIntersectsMesh(node) {
      // If no position attribute, treat as frustumCulled false
      if (!node.geometry.attributes.position) return true;
      if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
      var center = tempVec3a;
      center.copy(node.geometry.bounds.center);
      center.applyMatrix4(node.worldMatrix);
      var radius = node.geometry.bounds.radius * node.worldMatrix.getMaxScaleOnAxis();
      return this.frustumIntersectsSphere(center, radius);
    }
  }, {
    key: "frustumIntersectsSphere",
    value: function frustumIntersectsSphere(center, radius) {
      var normal = tempVec3b;

      for (var i = 0; i < 6; i++) {
        var plane = this.frustum[i];
        var distance = normal.copy(plane).dot(center) + plane.constant;
        if (distance < -radius) return false;
      }

      return true;
    }
  }]);

  return Camera;
}(_Transform_js__WEBPACK_IMPORTED_MODULE_6__["Transform"]);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(20);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(9);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _math_Euler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);






var Transform =
/*#__PURE__*/
function () {
  function Transform() {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Transform);

    this.parent = null;
    this.children = [];
    this.visible = true;
    this.matrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_4__["Mat4"]();
    this.worldMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_4__["Mat4"]();
    this.matrixAutoUpdate = true;
    this.position = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
    this.quaternion = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_3__["Quat"]();
    this.scale = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](1);
    this.rotation = new _math_Euler_js__WEBPACK_IMPORTED_MODULE_5__["Euler"]();
    this.up = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"](0, 1, 0);

    this.rotation.onChange = function () {
      return _this.quaternion.fromEuler(_this.rotation);
    };

    this.quaternion.onChange = function () {
      return _this.rotation.fromQuaternion(_this.quaternion);
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Transform, [{
    key: "setParent",
    value: function setParent(parent) {
      var notifyParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (notifyParent && this.parent && parent !== this.parent) this.parent.removeChild(this, false);
      this.parent = parent;
      if (notifyParent && parent) parent.addChild(this, false);
    }
  }, {
    key: "addChild",
    value: function addChild(child) {
      var notifyChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!~this.children.indexOf(child)) this.children.push(child);
      if (notifyChild) child.setParent(this, false);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var notifyChild = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
      if (notifyChild) child.setParent(null, false);
    }
  }, {
    key: "updateMatrixWorld",
    value: function updateMatrixWorld(force) {
      if (this.matrixAutoUpdate) this.updateMatrix();

      if (this.worldMatrixNeedsUpdate || force) {
        if (this.parent === null) this.worldMatrix.copy(this.matrix);else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
        this.worldMatrixNeedsUpdate = false;
        force = true;
      }

      for (var i = 0, l = this.children.length; i < l; i++) {
        this.children[i].updateMatrixWorld(force);
      }
    }
  }, {
    key: "updateMatrix",
    value: function updateMatrix() {
      this.matrix.compose(this.quaternion, this.position, this.scale);
      this.worldMatrixNeedsUpdate = true;
    }
  }, {
    key: "traverse",
    value: function traverse(callback) {
      // Return true in callback to stop traversing children
      if (callback(this)) return;

      for (var i = 0, l = this.children.length; i < l; i++) {
        this.children[i].traverse(callback);
      }
    }
  }, {
    key: "decompose",
    value: function decompose() {
      this.matrix.getTranslation(this.position);
      this.matrix.getRotation(this.quaternion);
      this.matrix.getScaling(this.scale);
      this.rotation.fromQuaternion(this.quaternion);
    }
  }, {
    key: "lookAt",
    value: function lookAt(target) {
      var invert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (invert) this.matrix.lookAt(this.position, target, this.up);else this.matrix.lookAt(target, this.position, this.up);
      this.matrix.getRotation(this.quaternion);
      this.rotation.fromQuaternion(this.quaternion);
    }
  }]);

  return Transform;
}();

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quat", function() { return Quat; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);








var Quat =
/*#__PURE__*/
function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Quat, _Array);

  function Quat() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Quat);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Quat).call(this, x, y, z, w));

    _this.onChange = function () {};

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Quat, [{
    key: "identity",
    value: function identity() {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["identity"](this);
      this.onChange();
      return this;
    }
  }, {
    key: "set",
    value: function set(x, y, z, w) {
      if (x.length) return this.copy(x);
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["set"](this, x, y, z, w);
      this.onChange();
      return this;
    }
  }, {
    key: "rotateX",
    value: function rotateX(a) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["rotateX"](this, this, a);
      this.onChange();
      return this;
    }
  }, {
    key: "rotateY",
    value: function rotateY(a) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["rotateY"](this, this, a);
      this.onChange();
      return this;
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(a) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["rotateZ"](this, this, a);
      this.onChange();
      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["invert"](this, q);
      this.onChange();
      return this;
    }
  }, {
    key: "conjugate",
    value: function conjugate() {
      var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["conjugate"](this, q);
      this.onChange();
      return this;
    }
  }, {
    key: "copy",
    value: function copy(q) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["copy"](this, q);
      this.onChange();
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["normalize"](this, q);
      this.onChange();
      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(qA, qB) {
      if (qB) {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, qA, qB);
      } else {
        _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, this, qA);
      }

      this.onChange();
      return this;
    }
  }, {
    key: "dot",
    value: function dot(v) {
      return _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["dot"](this, v);
    }
  }, {
    key: "fromMatrix3",
    value: function fromMatrix3(matrix3) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["fromMat3"](this, matrix3);
      this.onChange();
      return this;
    }
  }, {
    key: "fromEuler",
    value: function fromEuler(euler) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["fromEuler"](this, euler, euler.order);
      return this;
    }
  }, {
    key: "fromAxisAngle",
    value: function fromAxisAngle(axis, a) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["setAxisAngle"](this, axis, a);
      return this;
    }
  }, {
    key: "slerp",
    value: function slerp(q, t) {
      _functions_QuatFunc_js__WEBPACK_IMPORTED_MODULE_7__["slerp"](this, this, q, t);
      return this;
    }
  }, {
    key: "fromArray",
    value: function fromArray(a) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this[0] = a[o];
      this[1] = a[o + 1];
      this[2] = a[o + 2];
      this[3] = a[o + 3];
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      a[o] = this[0];
      a[o + 1] = this[1];
      a[o + 2] = this[2];
      a[o + 3] = this[3];
      return a;
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(v) {
      this[0] = v;
      this.onChange();
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(v) {
      this[1] = v;
      this.onChange();
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(v) {
      this[2] = v;
      this.onChange();
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(v) {
      this[3] = v;
      this.onChange();
    }
  }]);

  return Quat;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Array));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Multiplies two quats
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, euler) {
  var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YXZ';
  var sx = Math.sin(euler[0] * 0.5);
  var cx = Math.cos(euler[0] * 0.5);
  var sy = Math.sin(euler[1] * 0.5);
  var cy = Math.cos(euler[1] * 0.5);
  var sz = Math.sin(euler[2] * 0.5);
  var cz = Math.cos(euler[2] * 0.5);

  if (order === 'XYZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'YXZ') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'ZXY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'ZYX') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  } else if (order === 'YZX') {
    out[0] = sx * cy * cz + cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz - sx * sy * sz;
  } else if (order === 'XZY') {
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz - sx * cy * sz;
    out[2] = cx * cy * sz + sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
  }

  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["add"];
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["length"];
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _Vec4Func_js__WEBPACK_IMPORTED_MODULE_1__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = [0, 0, 0];
  var xUnitVec3 = [1, 0, 0];
  var yUnitVec3 = [0, 1, 0];
  return function (out, a, b) {
    var dot = _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["dot"](a, b);

    if (dot < -0.999999) {
      _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["cross"](tmpvec3, xUnitVec3, a);
      if (_Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["length"](tmpvec3) < 0.000001) _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["cross"](tmpvec3, yUnitVec3, a);
      _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["normalize"](tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _Vec3Func_js__WEBPACK_IMPORTED_MODULE_0__["cross"](tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = [0, 0, 0, 1];
  var temp2 = [0, 0, 0, 1];
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  return function (out, view, right, up) {
    m[0] = right[0];
    m[3] = right[1];
    m[6] = right[2];
    m[1] = up[0];
    m[4] = up[1];
    m[7] = up[2];
    m[2] = -view[0];
    m[5] = -view[1];
    m[8] = -view[2];
    return normalize(out, fromMat3(out, m));
  };
}();

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
var EPSILON = 0.000001;
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat4", function() { return Mat4; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);








var Mat4 =
/*#__PURE__*/
function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Mat4, _Array);

  function Mat4() {
    var _this;

    var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var m03 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var m10 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var m11 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var m12 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var m13 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var m20 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;
    var m21 = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
    var m22 = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
    var m23 = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 0;
    var m30 = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 0;
    var m31 = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : 0;
    var m32 = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
    var m33 = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 1;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mat4);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Mat4).call(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33));
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mat4, [{
    key: "set",
    value: function set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      if (m00.length) return this.copy(m00);
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["set"](this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      return this;
    }
  }, {
    key: "translate",
    value: function translate(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["translate"](this, m, v);
      return this;
    }
  }, {
    key: "rotateX",
    value: function rotateX(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["rotateX"](this, m, v);
      return this;
    }
  }, {
    key: "rotateY",
    value: function rotateY(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["rotateY"](this, m, v);
      return this;
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["rotateZ"](this, m, v);
      return this;
    }
  }, {
    key: "scale",
    value: function scale(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["scale"](this, m, typeof v === "number" ? [v, v, v] : v);
      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(ma, mb) {
      if (mb) {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, ma, mb);
      } else {
        _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, this, ma);
      }

      return this;
    }
  }, {
    key: "identity",
    value: function identity() {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["identity"](this);
      return this;
    }
  }, {
    key: "copy",
    value: function copy(m) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["copy"](this, m);
      return this;
    }
  }, {
    key: "fromPerspective",
    value: function fromPerspective() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          fov = _ref.fov,
          aspect = _ref.aspect,
          near = _ref.near,
          far = _ref.far;

      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["perspective"](this, fov, aspect, near, far);
      return this;
    }
  }, {
    key: "fromOrthogonal",
    value: function fromOrthogonal(_ref2) {
      var left = _ref2.left,
          right = _ref2.right,
          bottom = _ref2.bottom,
          top = _ref2.top,
          near = _ref2.near,
          far = _ref2.far;
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["ortho"](this, left, right, bottom, top, near, far);
      return this;
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["fromQuat"](this, q);
      return this;
    }
  }, {
    key: "setPosition",
    value: function setPosition(v) {
      this.x = v[0];
      this.y = v[1];
      this.z = v[2];
      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["invert"](this, m);
      return this;
    }
  }, {
    key: "compose",
    value: function compose(q, pos, scale) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["fromRotationTranslationScale"](this, q, pos, scale);
      return this;
    }
  }, {
    key: "getRotation",
    value: function getRotation(q) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["getRotation"](q, this);
      return this;
    }
  }, {
    key: "getTranslation",
    value: function getTranslation(pos) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["getTranslation"](pos, this);
      return this;
    }
  }, {
    key: "getScaling",
    value: function getScaling(scale) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["getScaling"](scale, this);
      return this;
    }
  }, {
    key: "getMaxScaleOnAxis",
    value: function getMaxScaleOnAxis() {
      return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["getMaxScaleOnAxis"](this);
    }
  }, {
    key: "lookAt",
    value: function lookAt(eye, target, up) {
      _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["targetTo"](this, eye, target, up);
      return this;
    }
  }, {
    key: "determinant",
    value: function determinant() {
      return _functions_Mat4Func_js__WEBPACK_IMPORTED_MODULE_7__["determinant"](this);
    }
  }, {
    key: "x",
    set: function set(v) {
      this[12] = v;
    },
    get: function get() {
      return this[12];
    }
  }, {
    key: "y",
    set: function set(v) {
      this[13] = v;
    },
    get: function get() {
      return this[13];
    }
  }, {
    key: "z",
    set: function set(v) {
      this[14] = v;
    },
    get: function get() {
      return this[14];
    }
  }, {
    key: "w",
    set: function set(v) {
      this[15] = v;
    },
    get: function get() {
      return this[15];
    }
  }]);

  return Mat4;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Array));

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMaxScaleOnAxis", function() { return getMaxScaleOnAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
var EPSILON = 0.000001;
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (Math.abs(len) < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s, c, t;

  if (Math.abs(len) < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
  return out;
}
function getMaxScaleOnAxis(mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  var x = m11 * m11 + m12 * m12 + m13 * m13;
  var y = m21 * m21 + m22 * m22 + m23 * m23;
  var z = m31 * m31 + m32 * m32 + m33 * m33;
  return Math.sqrt(Math.max(x, y, z));
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2);
  var nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = 2 * far * near * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Euler", function() { return Euler; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _Mat4_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25);









var tmpMat4 = new _Mat4_js__WEBPACK_IMPORTED_MODULE_8__["Mat4"]();
var Euler =
/*#__PURE__*/
function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Euler, _Array);

  function Euler() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
    var order = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'YXZ';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Euler);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Euler).call(this, x, y, z));
    _this.order = order;

    _this.onChange = function () {};

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Euler, [{
    key: "set",
    value: function set(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
      if (x.length) return this.copy(x);
      this[0] = x;
      this[1] = y;
      this[2] = z;
      this.onChange();
      return this;
    }
  }, {
    key: "copy",
    value: function copy(v) {
      this[0] = v[0];
      this[1] = v[1];
      this[2] = v[2];
      this.onChange();
      return this;
    }
  }, {
    key: "reorder",
    value: function reorder(order) {
      this.order = order;
      this.onChange();
      return this;
    }
  }, {
    key: "fromRotationMatrix",
    value: function fromRotationMatrix(m) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.order;
      _functions_EulerFunc_js__WEBPACK_IMPORTED_MODULE_7__["fromRotationMatrix"](this, m, order);
      return this;
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.order;
      tmpMat4.fromQuaternion(q);
      return this.fromRotationMatrix(tmpMat4, order);
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(v) {
      this[0] = v;
      this.onChange();
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(v) {
      this[1] = v;
      this.onChange();
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(v) {
      this[2] = v;
      this.onChange();
    }
  }]);

  return Euler;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Array));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationMatrix", function() { return fromRotationMatrix; });
// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
function fromRotationMatrix(out, m) {
  var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YXZ';

  if (order === 'XYZ') {
    out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));

    if (Math.abs(m[8]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[10]);
      out[2] = Math.atan2(-m[4], m[0]);
    } else {
      out[0] = Math.atan2(m[6], m[5]);
      out[2] = 0;
    }
  } else if (order === 'YXZ') {
    out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));

    if (Math.abs(m[9]) < 0.99999) {
      out[1] = Math.atan2(m[8], m[10]);
      out[2] = Math.atan2(m[1], m[5]);
    } else {
      out[1] = Math.atan2(-m[2], m[0]);
      out[2] = 0;
    }
  } else if (order === 'ZXY') {
    out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));

    if (Math.abs(m[6]) < 0.99999) {
      out[1] = Math.atan2(-m[2], m[10]);
      out[2] = Math.atan2(-m[4], m[5]);
    } else {
      out[1] = 0;
      out[2] = Math.atan2(m[1], m[0]);
    }
  } else if (order === 'ZYX') {
    out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));

    if (Math.abs(m[2]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[10]);
      out[2] = Math.atan2(m[1], m[0]);
    } else {
      out[0] = 0;
      out[2] = Math.atan2(-m[4], m[5]);
    }
  } else if (order === 'YZX') {
    out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));

    if (Math.abs(m[1]) < 0.99999) {
      out[0] = Math.atan2(-m[9], m[5]);
      out[1] = Math.atan2(-m[2], m[0]);
    } else {
      out[0] = 0;
      out[1] = Math.atan2(m[8], m[10]);
    }
  } else if (order === 'XZY') {
    out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));

    if (Math.abs(m[4]) < 0.99999) {
      out[0] = Math.atan2(m[6], m[5]);
      out[1] = Math.atan2(m[8], m[0]);
    } else {
      out[0] = Math.atan2(-m[9], m[10]);
      out[1] = 0;
    }
  }

  return out;
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
/* harmony import */ var _math_Mat3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);








var ID = 0;
var Mesh =
/*#__PURE__*/
function (_Transform) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Mesh, _Transform);

  function Mesh(gl) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        geometry = _ref.geometry,
        program = _ref.program,
        _ref$mode = _ref.mode,
        mode = _ref$mode === void 0 ? gl.TRIANGLES : _ref$mode,
        _ref$frustumCulled = _ref.frustumCulled,
        frustumCulled = _ref$frustumCulled === void 0 ? true : _ref$frustumCulled,
        _ref$renderOrder = _ref.renderOrder,
        renderOrder = _ref$renderOrder === void 0 ? 0 : _ref$renderOrder;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mesh);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Mesh).call(this));
    _this.gl = gl;
    _this.id = ID++;
    _this.geometry = geometry;
    _this.program = program;
    _this.mode = mode; // Used to skip frustum culling

    _this.frustumCulled = frustumCulled; // Override sorting to force an order

    _this.renderOrder = renderOrder;
    _this.modelViewMatrix = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_7__["Mat4"]();
    _this.normalMatrix = new _math_Mat3_js__WEBPACK_IMPORTED_MODULE_6__["Mat3"]();
    _this.beforeRenderCallbacks = [];
    _this.afterRenderCallbacks = [];
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mesh, [{
    key: "onBeforeRender",
    value: function onBeforeRender(f) {
      this.beforeRenderCallbacks.push(f);
      return this;
    }
  }, {
    key: "onAfterRender",
    value: function onAfterRender(f) {
      this.afterRenderCallbacks.push(f);
      return this;
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          camera = _ref2.camera;

      this.beforeRenderCallbacks.forEach(function (f) {
        return f && f({
          mesh: _this2,
          camera: camera
        });
      }); // Set the matrix uniforms

      if (camera) {
        // Add empty matrix uniforms to program if unset
        if (!this.program.uniforms.modelMatrix) {
          Object.assign(this.program.uniforms, {
            modelMatrix: {
              value: null
            },
            viewMatrix: {
              value: null
            },
            modelViewMatrix: {
              value: null
            },
            normalMatrix: {
              value: null
            },
            projectionMatrix: {
              value: null
            },
            cameraPosition: {
              value: null
            }
          });
        }

        this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
        this.program.uniforms.cameraPosition.value = camera.worldPosition;
        this.program.uniforms.viewMatrix.value = camera.viewMatrix;
        this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
        this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
        this.program.uniforms.modelMatrix.value = this.worldMatrix;
        this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
        this.program.uniforms.normalMatrix.value = this.normalMatrix;
      } // determine if faces need to be flipped - when mesh scaled negatively


      var flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
      this.program.use({
        flipFaces: flipFaces
      });
      this.geometry.draw({
        mode: this.mode,
        program: this.program
      });
      this.afterRenderCallbacks.forEach(function (f) {
        return f && f({
          mesh: _this2,
          camera: camera
        });
      });
    }
  }]);

  return Mesh;
}(_Transform_js__WEBPACK_IMPORTED_MODULE_5__["Transform"]);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mat3", function() { return Mat3; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31);








var Mat3 =
/*#__PURE__*/
function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Mat3, _Array);

  function Mat3() {
    var _this;

    var m00 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var m01 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var m02 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var m10 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var m11 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var m12 = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var m20 = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var m21 = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
    var m22 = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 1;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mat3);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Mat3).call(this, m00, m01, m02, m10, m11, m12, m20, m21, m22));
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mat3, [{
    key: "set",
    value: function set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      if (m00.length) return this.copy(m00);
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["set"](this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
      return this;
    }
  }, {
    key: "translate",
    value: function translate(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["translate"](this, m, v);
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["rotate"](this, m, v);
      return this;
    }
  }, {
    key: "scale",
    value: function scale(v) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["scale"](this, m, v);
      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(ma, mb) {
      if (mb) {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, ma, mb);
      } else {
        _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, this, ma);
      }

      return this;
    }
  }, {
    key: "identity",
    value: function identity() {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["identity"](this);
      return this;
    }
  }, {
    key: "copy",
    value: function copy(m) {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["copy"](this, m);
      return this;
    }
  }, {
    key: "fromMatrix4",
    value: function fromMatrix4(m) {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["fromMat4"](this, m);
      return this;
    }
  }, {
    key: "fromQuaternion",
    value: function fromQuaternion(q) {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["fromQuat"](this, q);
      return this;
    }
  }, {
    key: "fromBasis",
    value: function fromBasis(vec3a, vec3b, vec3c) {
      this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["invert"](this, m);
      return this;
    }
  }, {
    key: "getNormalMatrix",
    value: function getNormalMatrix(m) {
      _functions_Mat3Func_js__WEBPACK_IMPORTED_MODULE_7__["normalFromMat4"](this, m);
      return this;
    }
  }]);

  return Mat3;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Array));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
var EPSILON = 0.000001;
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {mat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


// TODO: delete texture
// TODO: use texSubImage2D for updates (video or when loaded)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads
var emptyPixel = new Uint8Array(4);

function isPowerOf2(value) {
  return (value & value - 1) === 0;
}

var ID = 1;
var Texture =
/*#__PURE__*/
function () {
  function Texture(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        image = _ref.image,
        _ref$target = _ref.target,
        target = _ref$target === void 0 ? gl.TEXTURE_2D : _ref$target,
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? gl.UNSIGNED_BYTE : _ref$type,
        _ref$format = _ref.format,
        format = _ref$format === void 0 ? gl.RGBA : _ref$format,
        _ref$internalFormat = _ref.internalFormat,
        internalFormat = _ref$internalFormat === void 0 ? format : _ref$internalFormat,
        _ref$wrapS = _ref.wrapS,
        wrapS = _ref$wrapS === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapS,
        _ref$wrapT = _ref.wrapT,
        wrapT = _ref$wrapT === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapT,
        _ref$generateMipmaps = _ref.generateMipmaps,
        generateMipmaps = _ref$generateMipmaps === void 0 ? true : _ref$generateMipmaps,
        _ref$minFilter = _ref.minFilter,
        minFilter = _ref$minFilter === void 0 ? generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR : _ref$minFilter,
        _ref$magFilter = _ref.magFilter,
        magFilter = _ref$magFilter === void 0 ? gl.LINEAR : _ref$magFilter,
        _ref$premultiplyAlpha = _ref.premultiplyAlpha,
        premultiplyAlpha = _ref$premultiplyAlpha === void 0 ? false : _ref$premultiplyAlpha,
        _ref$unpackAlignment = _ref.unpackAlignment,
        unpackAlignment = _ref$unpackAlignment === void 0 ? 4 : _ref$unpackAlignment,
        _ref$flipY = _ref.flipY,
        flipY = _ref$flipY === void 0 ? target == gl.TEXTURE_2D ? true : false : _ref$flipY,
        _ref$anisotropy = _ref.anisotropy,
        anisotropy = _ref$anisotropy === void 0 ? 0 : _ref$anisotropy,
        _ref$level = _ref.level,
        level = _ref$level === void 0 ? 0 : _ref$level,
        width = _ref.width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? width : _ref$height;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Texture);

    this.gl = gl;
    this.id = ID++;
    this.image = image;
    this.target = target;
    this.type = type;
    this.format = format;
    this.internalFormat = internalFormat;
    this.minFilter = minFilter;
    this.magFilter = magFilter;
    this.wrapS = wrapS;
    this.wrapT = wrapT;
    this.generateMipmaps = generateMipmaps;
    this.premultiplyAlpha = premultiplyAlpha;
    this.unpackAlignment = unpackAlignment;
    this.flipY = flipY;
    this.anisotropy = Math.min(anisotropy, this.gl.renderer.parameters.maxAnisotropy);
    this.level = level;
    this.width = width;
    this.height = height;
    this.texture = this.gl.createTexture();
    this.store = {
      image: null
    }; // Alias for state store to avoid redundant calls for global state

    this.glState = this.gl.renderer.state; // State store to avoid redundant calls for per-texture state

    this.state = {};
    this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR;
    this.state.magFilter = this.gl.LINEAR;
    this.state.wrapS = this.gl.REPEAT;
    this.state.wrapT = this.gl.REPEAT;
    this.state.anisotropy = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Texture, [{
    key: "bind",
    value: function bind() {
      // Already bound to active texture unit
      if (this.glState.textureUnits[this.glState.activeTextureUnit] === this.id) return;
      this.gl.bindTexture(this.target, this.texture);
      this.glState.textureUnits[this.glState.activeTextureUnit] = this.id;
    }
  }, {
    key: "update",
    value: function update() {
      var textureUnit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var needsUpdate = !(this.image === this.store.image && !this.needsUpdate); // Make sure that texture is bound to its texture unit

      if (needsUpdate || this.glState.textureUnits[textureUnit] !== this.id) {
        // set active texture unit to perform texture functions
        this.gl.renderer.activeTexture(textureUnit);
        this.bind();
      }

      if (!needsUpdate) return;
      this.needsUpdate = false;

      if (this.flipY !== this.glState.flipY) {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
        this.glState.flipY = this.flipY;
      }

      if (this.premultiplyAlpha !== this.glState.premultiplyAlpha) {
        this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        this.glState.premultiplyAlpha = this.premultiplyAlpha;
      }

      if (this.unpackAlignment !== this.glState.unpackAlignment) {
        this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
        this.glState.unpackAlignment = this.unpackAlignment;
      }

      if (this.minFilter !== this.state.minFilter) {
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter);
        this.state.minFilter = this.minFilter;
      }

      if (this.magFilter !== this.state.magFilter) {
        this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter);
        this.state.magFilter = this.magFilter;
      }

      if (this.wrapS !== this.state.wrapS) {
        this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS);
        this.state.wrapS = this.wrapS;
      }

      if (this.wrapT !== this.state.wrapT) {
        this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT);
        this.state.wrapT = this.wrapT;
      }

      if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
        this.gl.texParameterf(this.target, this.gl.renderer.getExtension('EXT_texture_filter_anisotropic').TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy);
        this.state.anisotropy = this.anisotropy;
      }

      if (this.image) {
        if (this.image.width) {
          this.width = this.image.width;
          this.height = this.image.height;
        }

        if (this.target === this.gl.TEXTURE_CUBE_MAP) {
          // For cube maps
          for (var i = 0; i < 6; i++) {
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, this.image[i]);
          }
        } else if (ArrayBuffer.isView(this.image)) {
          // Data texture
          this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
        } else if (this.image.isCompressedTexture) {
          // Compressed texture
          for (var level = 0; level < this.image.length; level++) {
            this.gl.compressedTexImage2D(this.target, level, this.internalFormat, this.image[level].width, this.image[level].height, 0, this.image[level].data);
          }
        } else {
          // Regular texture
          this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
        }

        if (this.generateMipmaps) {
          // For WebGL1, if not a power of 2, turn off mips, set wrapping to clamp to edge and minFilter to linear
          if (!this.gl.renderer.isWebgl2 && (!isPowerOf2(this.image.width) || !isPowerOf2(this.image.height))) {
            this.generateMipmaps = false;
            this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE;
            this.minFilter = this.gl.LINEAR;
          } else {
            this.gl.generateMipmap(this.target);
          }
        }
      } else {
        if (this.target === this.gl.TEXTURE_CUBE_MAP) {
          // Upload empty pixel for each side while no image to avoid errors while image or video loading
          for (var _i = 0; _i < 6; _i++) {
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + _i, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
          }
        } else if (this.width) {
          // image intentionally left null for RenderTarget
          this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
        } else {
          // Upload empty pixel if no image to avoid errors while image or video loading
          this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, emptyPixel);
        }
      }

      this.store.image = this.image;
      this.onUpdate && this.onUpdate();
    }
  }]);

  return Texture;
}();

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderTarget", function() { return RenderTarget; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Texture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);

// TODO: multi target rendering
// TODO: test stencil and depth
// TODO: destroy
// TODO: blit on resize?

var RenderTarget = function RenderTarget(gl) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? gl.canvas.width : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? gl.canvas.height : _ref$height,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? gl.FRAMEBUFFER : _ref$target,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 1 : _ref$color,
      _ref$depth = _ref.depth,
      depth = _ref$depth === void 0 ? true : _ref$depth,
      _ref$stencil = _ref.stencil,
      stencil = _ref$stencil === void 0 ? false : _ref$stencil,
      _ref$depthTexture = _ref.depthTexture,
      depthTexture = _ref$depthTexture === void 0 ? false : _ref$depthTexture,
      _ref$wrapS = _ref.wrapS,
      wrapS = _ref$wrapS === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapS,
      _ref$wrapT = _ref.wrapT,
      wrapT = _ref$wrapT === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapT,
      _ref$minFilter = _ref.minFilter,
      minFilter = _ref$minFilter === void 0 ? gl.LINEAR : _ref$minFilter,
      _ref$magFilter = _ref.magFilter,
      magFilter = _ref$magFilter === void 0 ? minFilter : _ref$magFilter,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? gl.UNSIGNED_BYTE : _ref$type,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? gl.RGBA : _ref$format,
      _ref$internalFormat = _ref.internalFormat,
      internalFormat = _ref$internalFormat === void 0 ? format : _ref$internalFormat,
      unpackAlignment = _ref.unpackAlignment,
      premultiplyAlpha = _ref.premultiplyAlpha;

  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RenderTarget);

  this.gl = gl;
  this.width = width;
  this.height = height;
  this.depth = depth;
  this.buffer = this.gl.createFramebuffer();
  this.target = target;
  this.gl.bindFramebuffer(this.target, this.buffer);
  this.textures = [];
  var drawBuffers = []; // create and attach required num of color textures

  for (var i = 0; i < color; i++) {
    this.textures.push(new _Texture_js__WEBPACK_IMPORTED_MODULE_1__["Texture"](gl, {
      width: width,
      height: height,
      wrapS: wrapS,
      wrapT: wrapT,
      minFilter: minFilter,
      magFilter: magFilter,
      type: type,
      format: format,
      internalFormat: internalFormat,
      unpackAlignment: unpackAlignment,
      premultiplyAlpha: premultiplyAlpha,
      flipY: false,
      generateMipmaps: false
    }));
    this.textures[i].update();
    this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + i, this.gl.TEXTURE_2D, this.textures[i].texture, 0
    /* level */
    );
    drawBuffers.push(this.gl.COLOR_ATTACHMENT0 + i);
  } // For multi-render targets shader access


  if (drawBuffers.length > 1) this.gl.renderer.drawBuffers(drawBuffers); // alias for majority of use cases

  this.texture = this.textures[0]; // note depth textures break stencil - so can't use together

  if (depthTexture && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension('WEBGL_depth_texture'))) {
    this.depthTexture = new _Texture_js__WEBPACK_IMPORTED_MODULE_1__["Texture"](gl, {
      width: width,
      height: height,
      minFilter: this.gl.NEAREST,
      magFilter: this.gl.NEAREST,
      format: this.gl.DEPTH_COMPONENT,
      internalFormat: gl.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
      type: this.gl.UNSIGNED_INT
    });
    this.depthTexture.update();
    this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0
    /* level */
    );
  } else {
    // Render buffers
    if (depth && !stencil) {
      this.depthBuffer = this.gl.createRenderbuffer();
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
      this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, width, height);
      this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
    }

    if (stencil && !depth) {
      this.stencilBuffer = this.gl.createRenderbuffer();
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer);
      this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, width, height);
      this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer);
    }

    if (depth && stencil) {
      this.depthStencilBuffer = this.gl.createRenderbuffer();
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer);
      this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, width, height);
      this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer);
    }
  }

  this.gl.bindFramebuffer(this.target, null);
};

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);








// TODO : support more color formats - e.g 0xffffff

var Color =
/*#__PURE__*/
function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Color, _Array);

  function Color() {
    var _this;

    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Color);

    if (typeof r === 'string') {
      var _ColorFunc$hexToRGB = _functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_8__["hexToRGB"](r);

      var _ColorFunc$hexToRGB2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ColorFunc$hexToRGB, 3);

      r = _ColorFunc$hexToRGB2[0];
      g = _ColorFunc$hexToRGB2[1];
      b = _ColorFunc$hexToRGB2[2];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Color).call(this, r, g, b));
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Color, [{
    key: "set",
    value: function set(r, g, b) {
      if (typeof r === 'string') {
        var _ColorFunc$hexToRGB3 = _functions_ColorFunc_js__WEBPACK_IMPORTED_MODULE_8__["hexToRGB"](r);

        var _ColorFunc$hexToRGB4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ColorFunc$hexToRGB3, 3);

        r = _ColorFunc$hexToRGB4[0];
        g = _ColorFunc$hexToRGB4[1];
        b = _ColorFunc$hexToRGB4[2];
      }

      if (r.length) return this.copy(r);
      this[0] = r;
      this[1] = g;
      this[2] = b;
      return this;
    }
  }, {
    key: "copy",
    value: function copy(v) {
      this[0] = v[0];
      this[1] = v[1];
      this[2] = v[2];
      return this;
    }
  }, {
    key: "r",
    get: function get() {
      return this[0];
    },
    set: function set(v) {
      this[0] = v;
    }
  }, {
    key: "g",
    get: function get() {
      return this[1];
    },
    set: function set(v) {
      this[1] = v;
    }
  }, {
    key: "b",
    get: function get() {
      return this[2];
    },
    set: function set(v) {
      this[2] = v;
    }
  }]);

  return Color;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_7___default()(Array));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(36);

var iterableToArrayLimit = __webpack_require__(37);

var nonIterableRest = __webpack_require__(38);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
function hexToRGB(hex) {
  if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!r) console.warn("Unable to convert hex string ".concat(hex, " to rgb values"));
  return [parseInt(r[1], 16) / 255, parseInt(r[2], 16) / 255, parseInt(r[3], 16) / 255];
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec2", function() { return Vec2; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);








var Vec2 =
/*#__PURE__*/
function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Vec2, _Array);

  function Vec2() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Vec2);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Vec2).call(this, x, y));
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Vec2, [{
    key: "set",
    value: function set(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      if (x.length) return this.copy(x);
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["set"](this, x, y);
      return this;
    }
  }, {
    key: "copy",
    value: function copy(v) {
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["copy"](this, v);
      return this;
    }
  }, {
    key: "add",
    value: function add(va, vb) {
      if (vb) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["add"](this, va, vb);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["add"](this, this, va);
      return this;
    }
  }, {
    key: "sub",
    value: function sub(va, vb) {
      if (vb) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["subtract"](this, va, vb);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["subtract"](this, this, va);
      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(v) {
      if (v.length) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["multiply"](this, this, v);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["scale"](this, this, v);
      return this;
    }
  }, {
    key: "divide",
    value: function divide(v) {
      if (v.length) _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["divide"](this, this, v);else _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["scale"](this, this, 1 / v);
      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["inverse"](this, v);
      return this;
    } // Can't use 'length' as Array.prototype uses it

  }, {
    key: "len",
    value: function len() {
      return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["length"](this);
    }
  }, {
    key: "distance",
    value: function distance(v) {
      if (v) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["distance"](this, v);else return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["length"](this);
    }
  }, {
    key: "squaredLen",
    value: function squaredLen() {
      return this.squaredDistance();
    }
  }, {
    key: "squaredDistance",
    value: function squaredDistance(v) {
      if (v) return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["squaredDistance"](this, v);else return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["squaredLength"](this);
    }
  }, {
    key: "negate",
    value: function negate() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["negate"](this, v);
      return this;
    }
  }, {
    key: "cross",
    value: function cross(va, vb) {
      return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["cross"](va, vb);
    }
  }, {
    key: "scale",
    value: function scale(v) {
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["scale"](this, this, v);
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["normalize"](this, this);
      return this;
    }
  }, {
    key: "dot",
    value: function dot(v) {
      return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["dot"](this, v);
    }
  }, {
    key: "equals",
    value: function equals(v) {
      return _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["exactEquals"](this, v);
    }
  }, {
    key: "applyMatrix3",
    value: function applyMatrix3(mat3) {
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["transformMat3"](this, this, mat3);
      return this;
    }
  }, {
    key: "applyMatrix4",
    value: function applyMatrix4(mat4) {
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["transformMat4"](this, this, mat4);
      return this;
    }
  }, {
    key: "lerp",
    value: function lerp(v, a) {
      _functions_Vec2Func_js__WEBPACK_IMPORTED_MODULE_7__["lerp"](this, this, v, a);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vec2(this[0], this[1]);
    }
  }, {
    key: "fromArray",
    value: function fromArray(a) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this[0] = a[o];
      this[1] = a[o + 1];
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      a[o] = this[0];
      a[o + 1] = this[1];
      return a;
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(v) {
      this[0] = v;
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(v) {
      this[1] = v;
    }
  }]);

  return Vec2;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Array));

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
var EPSILON = 0.000001;
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
;
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
;
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
;
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
;
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
;
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
;
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
;
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
;
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
;
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
}
;
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
;
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
}
;
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
;
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
;
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
;
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
;
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
;
/**
 * Computes the cross product of two vec2's
 * Note that the cross product returns a scalar
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} cross product of a and b
 */

function cross(a, b) {
  return a[0] * b[1] - a[1] * b[0];
}
;
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
;
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = Math.random() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
;
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
;
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
;
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
;
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vec4", function() { return Vec4; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_Vec4Func_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24);








var Vec4 =
/*#__PURE__*/
function (_Array) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Vec4, _Array);

  function Vec4() {
    var _this;

    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x;
    var w = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : x;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Vec4);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Vec4).call(this, x, y, z, w));
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Vec4, [{
    key: "set",
    value: function set(x, y, z, w) {
      if (x.length) return this.copy(x);
      _functions_Vec4Func_js__WEBPACK_IMPORTED_MODULE_7__["set"](this, x, y, z, w);
      return this;
    }
  }, {
    key: "copy",
    value: function copy(v) {
      _functions_Vec4Func_js__WEBPACK_IMPORTED_MODULE_7__["copy"](this, v);
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      _functions_Vec4Func_js__WEBPACK_IMPORTED_MODULE_7__["normalize"](this, this);
      return this;
    }
  }, {
    key: "fromArray",
    value: function fromArray(a) {
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this[0] = a[o];
      this[1] = a[o + 1];
      this[2] = a[o + 2];
      this[3] = a[o + 3];
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      a[o] = this[0];
      a[o + 1] = this[1];
      a[o + 2] = this[2];
      a[o + 3] = this[3];
      return a;
    }
  }, {
    key: "x",
    get: function get() {
      return this[0];
    },
    set: function set(v) {
      this[0] = v;
    }
  }, {
    key: "y",
    get: function get() {
      return this[1];
    },
    set: function set(v) {
      this[1] = v;
    }
  }, {
    key: "z",
    get: function get() {
      return this[2];
    },
    set: function set(v) {
      this[2] = v;
    }
  }, {
    key: "w",
    get: function get() {
      return this[3];
    },
    set: function set(v) {
      this[3] = v;
    }
  }]);

  return Vec4;
}(_babel_runtime_helpers_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_6___default()(Array));

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plane", function() { return Plane; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);






var Plane =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Plane, _Geometry);

  function Plane(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 1 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 1 : _ref$height,
        _ref$widthSegments = _ref.widthSegments,
        widthSegments = _ref$widthSegments === void 0 ? 1 : _ref$widthSegments,
        _ref$heightSegments = _ref.heightSegments,
        heightSegments = _ref$heightSegments === void 0 ? 1 : _ref$heightSegments,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Plane);

    var wSegs = widthSegments;
    var hSegs = heightSegments; // Determine length of arrays

    var num = (wSegs + 1) * (hSegs + 1);
    var numIndices = wSegs * hSegs * 6; // Generate empty arrays once

    var position = new Float32Array(num * 3);
    var normal = new Float32Array(num * 3);
    var uv = new Float32Array(num * 2);
    var index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);
    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Plane).call(this, gl, attributes));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Plane, null, [{
    key: "buildPlane",
    value: function buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs) {
      var u = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0;
      var v = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 1;
      var w = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : 2;
      var uDir = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : 1;
      var vDir = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : -1;
      var i = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : 0;
      var ii = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : 0;
      var io = i;
      var segW = width / wSegs;
      var segH = height / hSegs;

      for (var iy = 0; iy <= hSegs; iy++) {
        var y = iy * segH - height / 2;

        for (var ix = 0; ix <= wSegs; ix++, i++) {
          var x = ix * segW - width / 2;
          position[i * 3 + u] = x * uDir;
          position[i * 3 + v] = y * vDir;
          position[i * 3 + w] = depth / 2;
          normal[i * 3 + u] = 0;
          normal[i * 3 + v] = 0;
          normal[i * 3 + w] = depth >= 0 ? 1 : -1;
          uv[i * 2] = ix / wSegs;
          uv[i * 2 + 1] = 1 - iy / hSegs;
          if (iy === hSegs || ix === wSegs) continue;
          var a = io + ix + iy * (wSegs + 1);
          var b = io + ix + (iy + 1) * (wSegs + 1);
          var c = io + ix + (iy + 1) * (wSegs + 1) + 1;
          var d = io + ix + iy * (wSegs + 1) + 1;
          index[ii * 6] = a;
          index[ii * 6 + 1] = b;
          index[ii * 6 + 2] = d;
          index[ii * 6 + 3] = b;
          index[ii * 6 + 4] = c;
          index[ii * 6 + 5] = d;
          ii++;
        }
      }
    }
  }]);

  return Plane;
}(_core_Geometry_js__WEBPACK_IMPORTED_MODULE_5__["Geometry"]);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _Plane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);






var Box =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Box, _Geometry);

  function Box(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 1 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 1 : _ref$height,
        _ref$depth = _ref.depth,
        depth = _ref$depth === void 0 ? 1 : _ref$depth,
        _ref$widthSegments = _ref.widthSegments,
        widthSegments = _ref$widthSegments === void 0 ? 1 : _ref$widthSegments,
        _ref$heightSegments = _ref.heightSegments,
        heightSegments = _ref$heightSegments === void 0 ? 1 : _ref$heightSegments,
        _ref$depthSegments = _ref.depthSegments,
        depthSegments = _ref$depthSegments === void 0 ? 1 : _ref$depthSegments,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Box);

    var wSegs = widthSegments;
    var hSegs = heightSegments;
    var dSegs = depthSegments;
    var num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
    var numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;
    var position = new Float32Array(num * 3);
    var normal = new Float32Array(num * 3);
    var uv = new Float32Array(num * 2);
    var index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    var i = 0;
    var ii = 0; // left, right

    _Plane_js__WEBPACK_IMPORTED_MODULE_5__["Plane"].buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
    _Plane_js__WEBPACK_IMPORTED_MODULE_5__["Plane"].buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i += (dSegs + 1) * (hSegs + 1), ii += dSegs * hSegs); // top, bottom

    _Plane_js__WEBPACK_IMPORTED_MODULE_5__["Plane"].buildPlane(position, normal, uv, index, width, depth, height, dSegs, hSegs, 0, 2, 1, 1, 1, i += (dSegs + 1) * (hSegs + 1), ii += dSegs * hSegs);
    _Plane_js__WEBPACK_IMPORTED_MODULE_5__["Plane"].buildPlane(position, normal, uv, index, width, depth, -height, dSegs, hSegs, 0, 2, 1, 1, -1, i += (wSegs + 1) * (dSegs + 1), ii += wSegs * dSegs); // front, back

    _Plane_js__WEBPACK_IMPORTED_MODULE_5__["Plane"].buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i += (wSegs + 1) * (dSegs + 1), ii += wSegs * dSegs);
    _Plane_js__WEBPACK_IMPORTED_MODULE_5__["Plane"].buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i += (wSegs + 1) * (hSegs + 1), ii += wSegs * hSegs);
    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Box).call(this, gl, attributes));
  }

  return Box;
}(_core_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Geometry"]);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sphere", function() { return Sphere; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);






var Sphere =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Sphere, _Geometry);

  function Sphere(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$radius = _ref.radius,
        radius = _ref$radius === void 0 ? 0.5 : _ref$radius,
        _ref$widthSegments = _ref.widthSegments,
        widthSegments = _ref$widthSegments === void 0 ? 16 : _ref$widthSegments,
        _ref$heightSegments = _ref.heightSegments,
        heightSegments = _ref$heightSegments === void 0 ? Math.ceil(widthSegments * 0.5) : _ref$heightSegments,
        _ref$phiStart = _ref.phiStart,
        phiStart = _ref$phiStart === void 0 ? 0 : _ref$phiStart,
        _ref$phiLength = _ref.phiLength,
        phiLength = _ref$phiLength === void 0 ? Math.PI * 2 : _ref$phiLength,
        _ref$thetaStart = _ref.thetaStart,
        thetaStart = _ref$thetaStart === void 0 ? 0 : _ref$thetaStart,
        _ref$thetaLength = _ref.thetaLength,
        thetaLength = _ref$thetaLength === void 0 ? Math.PI : _ref$thetaLength,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Sphere);

    var wSegs = widthSegments;
    var hSegs = heightSegments;
    var pStart = phiStart;
    var pLength = phiLength;
    var tStart = thetaStart;
    var tLength = thetaLength;
    var num = (wSegs + 1) * (hSegs + 1);
    var numIndices = wSegs * hSegs * 6;
    var position = new Float32Array(num * 3);
    var normal = new Float32Array(num * 3);
    var uv = new Float32Array(num * 2);
    var index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    var i = 0;
    var iv = 0;
    var ii = 0;
    var te = tStart + tLength;
    var grid = [];
    var n = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_5__["Vec3"]();

    for (var iy = 0; iy <= hSegs; iy++) {
      var vRow = [];
      var v = iy / hSegs;

      for (var ix = 0; ix <= wSegs; ix++, i++) {
        var u = ix / wSegs;
        var x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
        var y = radius * Math.cos(tStart + v * tLength);
        var z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);
        position[i * 3] = x;
        position[i * 3 + 1] = y;
        position[i * 3 + 2] = z;
        n.set(x, y, z).normalize();
        normal[i * 3] = n.x;
        normal[i * 3 + 1] = n.y;
        normal[i * 3 + 2] = n.z;
        uv[i * 2] = u;
        uv[i * 2 + 1] = 1 - v;
        vRow.push(iv++);
      }

      grid.push(vRow);
    }

    for (var _iy = 0; _iy < hSegs; _iy++) {
      for (var _ix = 0; _ix < wSegs; _ix++) {
        var a = grid[_iy][_ix + 1];
        var b = grid[_iy][_ix];
        var c = grid[_iy + 1][_ix];
        var d = grid[_iy + 1][_ix + 1];

        if (_iy !== 0 || tStart > 0) {
          index[ii * 3] = a;
          index[ii * 3 + 1] = b;
          index[ii * 3 + 2] = d;
          ii++;
        }

        if (_iy !== hSegs - 1 || te < Math.PI) {
          index[ii * 3] = b;
          index[ii * 3 + 1] = c;
          index[ii * 3 + 2] = d;
          ii++;
        }
      }
    }

    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Sphere).call(this, gl, attributes));
  }

  return Sphere;
}(_core_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Geometry"]);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cylinder", function() { return Cylinder; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);






var Cylinder =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Cylinder, _Geometry);

  function Cylinder(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$radiusTop = _ref.radiusTop,
        radiusTop = _ref$radiusTop === void 0 ? 0.5 : _ref$radiusTop,
        _ref$radiusBottom = _ref.radiusBottom,
        radiusBottom = _ref$radiusBottom === void 0 ? 0.5 : _ref$radiusBottom,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 1 : _ref$height,
        _ref$radialSegments = _ref.radialSegments,
        radialSegments = _ref$radialSegments === void 0 ? 8 : _ref$radialSegments,
        _ref$heightSegments = _ref.heightSegments,
        heightSegments = _ref$heightSegments === void 0 ? 1 : _ref$heightSegments,
        _ref$openEnded = _ref.openEnded,
        openEnded = _ref$openEnded === void 0 ? false : _ref$openEnded,
        _ref$thetaStart = _ref.thetaStart,
        thetaStart = _ref$thetaStart === void 0 ? 0 : _ref$thetaStart,
        _ref$thetaLength = _ref.thetaLength,
        thetaLength = _ref$thetaLength === void 0 ? Math.PI * 2 : _ref$thetaLength,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Cylinder);

    var rSegs = radialSegments;
    var hSegs = heightSegments;
    var tStart = thetaStart;
    var tLength = thetaLength;
    var numCaps = openEnded ? 0 : radiusBottom && radiusTop ? 2 : 1;
    var num = (rSegs + 1) * (hSegs + 1 + numCaps) + numCaps;
    var numIndices = rSegs * hSegs * 6 + numCaps * rSegs * 3;
    var position = new Float32Array(num * 3);
    var normal = new Float32Array(num * 3);
    var uv = new Float32Array(num * 2);
    var index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);
    var i = 0;
    var ii = 0;
    var indexArray = [];
    addHeight();

    if (!openEnded) {
      if (radiusTop) addCap(true);
      if (radiusBottom) addCap(false);
    }

    function addHeight() {
      var x, y;
      var n = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_5__["Vec3"]();
      var slope = (radiusBottom - radiusTop) / height;

      for (y = 0; y <= hSegs; y++) {
        var indexRow = [];
        var v = y / hSegs;
        var r = v * (radiusBottom - radiusTop) + radiusTop;

        for (x = 0; x <= rSegs; x++) {
          var u = x / rSegs;
          var theta = u * tLength + tStart;
          var sinTheta = Math.sin(theta);
          var cosTheta = Math.cos(theta);
          position.set([r * sinTheta, (0.5 - v) * height, r * cosTheta], i * 3);
          n.set(sinTheta, slope, cosTheta).normalize();
          normal.set([n.x, n.y, n.z], i * 3);
          uv.set([u, 1 - v], i * 2);
          indexRow.push(i++);
        }

        indexArray.push(indexRow);
      }

      for (x = 0; x < rSegs; x++) {
        for (y = 0; y < hSegs; y++) {
          var a = indexArray[y][x];
          var b = indexArray[y + 1][x];
          var c = indexArray[y + 1][x + 1];
          var d = indexArray[y][x + 1];
          index.set([a, b, d, b, c, d], ii * 3);
          ii += 2;
        }
      }
    }

    function addCap(isTop) {
      var x;
      var r = isTop === true ? radiusTop : radiusBottom;
      var sign = isTop === true ? 1 : -1;
      var centerIndex = i;
      position.set([0, 0.5 * height * sign, 0], i * 3);
      normal.set([0, sign, 0], i * 3);
      uv.set([0.5, 0.5], i * 2);
      i++;

      for (x = 0; x <= rSegs; x++) {
        var u = x / rSegs;
        var theta = u * tLength + tStart;
        var cosTheta = Math.cos(theta);
        var sinTheta = Math.sin(theta);
        position.set([r * sinTheta, 0.5 * height * sign, r * cosTheta], i * 3);
        normal.set([0, sign, 0], i * 3);
        uv.set([cosTheta * 0.5 + 0.5, sinTheta * 0.5 * sign + 0.5], i * 2);
        i++;
      }

      for (x = 0; x < rSegs; x++) {
        var j = centerIndex + x + 1;

        if (isTop) {
          index.set([j, j + 1, centerIndex], ii * 3);
        } else {
          index.set([j + 1, j, centerIndex], ii * 3);
        }

        ii++;
      }
    }

    Object.assign(attributes, {
      position: {
        size: 3,
        data: position
      },
      normal: {
        size: 3,
        data: normal
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        data: index
      }
    });
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Cylinder).call(this, gl, attributes));
  }

  return Cylinder;
}(_core_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Geometry"]);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return Triangle; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);





var Triangle =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Triangle, _Geometry);

  function Triangle(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Triangle);

    Object.assign(attributes, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 3, -1, -1, 3])
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 0, 2, 0, 0, 2])
      }
    });
    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Triangle).call(this, gl, attributes));
  }

  return Triangle;
}(_core_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Geometry"]);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orbit", function() { return Orbit; });
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
// Based from ThreeJS' OrbitControls class, rewritten using es6 with some additions and subtractions.
// TODO: abstract event handlers so can be fed from other sources
// TODO: make scroll zoom more accurate than just >/< zero


var STATE = {
  NONE: -1,
  ROTATE: 0,
  DOLLY: 1,
  PAN: 2,
  DOLLY_PAN: 3
};
var tempVec3 = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
var tempVec2a = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
var tempVec2b = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
function Orbit(object) {
  var _this = this;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$element = _ref.element,
      element = _ref$element === void 0 ? document : _ref$element,
      _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]() : _ref$target,
      _ref$ease = _ref.ease,
      ease = _ref$ease === void 0 ? 0.25 : _ref$ease,
      _ref$inertia = _ref.inertia,
      inertia = _ref$inertia === void 0 ? 0.85 : _ref$inertia,
      _ref$enableRotate = _ref.enableRotate,
      enableRotate = _ref$enableRotate === void 0 ? true : _ref$enableRotate,
      _ref$rotateSpeed = _ref.rotateSpeed,
      rotateSpeed = _ref$rotateSpeed === void 0 ? 0.1 : _ref$rotateSpeed,
      _ref$enableZoom = _ref.enableZoom,
      enableZoom = _ref$enableZoom === void 0 ? true : _ref$enableZoom,
      _ref$zoomSpeed = _ref.zoomSpeed,
      zoomSpeed = _ref$zoomSpeed === void 0 ? 1 : _ref$zoomSpeed,
      _ref$enablePan = _ref.enablePan,
      enablePan = _ref$enablePan === void 0 ? true : _ref$enablePan,
      _ref$panSpeed = _ref.panSpeed,
      panSpeed = _ref$panSpeed === void 0 ? 0.1 : _ref$panSpeed,
      _ref$minPolarAngle = _ref.minPolarAngle,
      minPolarAngle = _ref$minPolarAngle === void 0 ? 0 : _ref$minPolarAngle,
      _ref$maxPolarAngle = _ref.maxPolarAngle,
      maxPolarAngle = _ref$maxPolarAngle === void 0 ? Math.PI : _ref$maxPolarAngle,
      _ref$minAzimuthAngle = _ref.minAzimuthAngle,
      minAzimuthAngle = _ref$minAzimuthAngle === void 0 ? -Infinity : _ref$minAzimuthAngle,
      _ref$maxAzimuthAngle = _ref.maxAzimuthAngle,
      maxAzimuthAngle = _ref$maxAzimuthAngle === void 0 ? Infinity : _ref$maxAzimuthAngle,
      _ref$minDistance = _ref.minDistance,
      minDistance = _ref$minDistance === void 0 ? 0 : _ref$minDistance,
      _ref$maxDistance = _ref.maxDistance,
      maxDistance = _ref$maxDistance === void 0 ? Infinity : _ref$maxDistance;

  this.enabled = enabled;
  this.target = target; // Catch attempts to disable - set to 1 so has no effect

  ease = ease || 1;
  inertia = inertia || 1;
  this.minDistance = minDistance;
  this.maxDistance = maxDistance; // current position in sphericalTarget coordinates

  var sphericalDelta = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  var sphericalTarget = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  var spherical = {
    radius: 1,
    phi: 0,
    theta: 0
  };
  var panDelta = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"](); // Grab initial position values

  var offset = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_0__["Vec3"]();
  offset.copy(object.position).sub(this.target);
  spherical.radius = sphericalTarget.radius = offset.distance();
  spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
  spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));

  this.update = function () {
    // apply delta
    sphericalTarget.radius *= sphericalDelta.radius;
    sphericalTarget.theta += sphericalDelta.theta;
    sphericalTarget.phi += sphericalDelta.phi; // apply boundaries

    sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
    sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
    sphericalTarget.radius = Math.max(_this.minDistance, Math.min(_this.maxDistance, sphericalTarget.radius)); // ease values

    spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
    spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
    spherical.radius += (sphericalTarget.radius - spherical.radius) * ease; // apply pan to target. As offset is relative to target, it also shifts

    _this.target.add(panDelta); // apply rotation to offset


    var sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));
    offset.x = sinPhiRadius * Math.sin(spherical.theta);
    offset.y = spherical.radius * Math.cos(spherical.phi);
    offset.z = sinPhiRadius * Math.cos(spherical.theta); // Apply updated values to object

    object.position.copy(_this.target).add(offset);
    object.lookAt(_this.target); // Apply inertia to values

    sphericalDelta.theta *= inertia;
    sphericalDelta.phi *= inertia;
    panDelta.multiply(inertia); // Reset scale every frame to avoid applying scale multiple times

    sphericalDelta.radius = 1;
  }; // Everything below here just updates panDelta and sphericalDelta
  // Using those two objects' values, the orbit is calculated


  var rotateStart = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
  var panStart = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
  var dollyStart = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_1__["Vec2"]();
  var state = STATE.NONE;
  this.mouseButtons = {
    ORBIT: 0,
    ZOOM: 1,
    PAN: 2
  };

  function getZoomScale() {
    return Math.pow(0.95, zoomSpeed);
  }

  function panLeft(distance, m) {
    tempVec3.set(m[0], m[1], m[2]);
    tempVec3.multiply(-distance);
    panDelta.add(tempVec3);
  }

  function panUp(distance, m) {
    tempVec3.set(m[4], m[5], m[6]);
    tempVec3.multiply(distance);
    panDelta.add(tempVec3);
  }

  var pan = function pan(deltaX, deltaY) {
    var el = element === document ? document.body : element;
    tempVec3.copy(object.position).sub(_this.target);
    var targetDistance = tempVec3.distance();
    targetDistance *= Math.tan((object.fov || 45) / 2 * Math.PI / 180.0);
    panLeft(2 * deltaX * targetDistance / el.clientHeight, object.matrix);
    panUp(2 * deltaY * targetDistance / el.clientHeight, object.matrix);
  };

  function dolly(dollyScale) {
    sphericalDelta.radius /= dollyScale;
  }

  function handleMoveRotate(x, y) {
    tempVec2a.set(x, y);
    tempVec2b.sub(tempVec2a, rotateStart).multiply(rotateSpeed);
    var el = element === document ? document.body : element;
    sphericalDelta.theta -= 2 * Math.PI * tempVec2b.x / el.clientHeight;
    sphericalDelta.phi -= 2 * Math.PI * tempVec2b.y / el.clientHeight;
    rotateStart.copy(tempVec2a);
  }

  function handleMouseMoveDolly(e) {
    tempVec2a.set(e.clientX, e.clientY);
    tempVec2b.sub(tempVec2a, dollyStart);

    if (tempVec2b.y > 0) {
      dolly(getZoomScale());
    } else if (tempVec2b.y < 0) {
      dolly(1 / getZoomScale());
    }

    dollyStart.copy(tempVec2a);
  }

  function handleMovePan(x, y) {
    tempVec2a.set(x, y);
    tempVec2b.sub(tempVec2a, panStart).multiply(panSpeed);
    pan(tempVec2b.x, tempVec2b.y);
    panStart.copy(tempVec2a);
  }

  function handleTouchStartDollyPan(e) {
    if (enableZoom) {
      var dx = e.touches[0].pageX - e.touches[1].pageX;
      var dy = e.touches[0].pageY - e.touches[1].pageY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }

    if (enablePan) {
      var x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
      var y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      panStart.set(x, y);
    }
  }

  function handleTouchMoveDollyPan(e) {
    if (enableZoom) {
      var dx = e.touches[0].pageX - e.touches[1].pageX;
      var dy = e.touches[0].pageY - e.touches[1].pageY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      tempVec2a.set(0, distance);
      tempVec2b.set(0, Math.pow(tempVec2a.y / dollyStart.y, zoomSpeed));
      dolly(tempVec2b.y);
      dollyStart.copy(tempVec2a);
    }

    if (enablePan) {
      var x = 0.5 * (e.touches[0].pageX + e.touches[1].pageX);
      var y = 0.5 * (e.touches[0].pageY + e.touches[1].pageY);
      handleMovePan(x, y);
    }
  }

  var onMouseDown = function onMouseDown(e) {
    if (!_this.enabled) return;

    switch (e.button) {
      case _this.mouseButtons.ORBIT:
        if (enableRotate === false) return;
        rotateStart.set(e.clientX, e.clientY);
        state = STATE.ROTATE;
        break;

      case _this.mouseButtons.ZOOM:
        if (enableZoom === false) return;
        dollyStart.set(e.clientX, e.clientY);
        state = STATE.DOLLY;
        break;

      case _this.mouseButtons.PAN:
        if (enablePan === false) return;
        panStart.set(e.clientX, e.clientY);
        state = STATE.PAN;
        break;
    }

    if (state !== STATE.NONE) {
      window.addEventListener('mousemove', onMouseMove, false);
      window.addEventListener('mouseup', onMouseUp, false);
    }
  };

  var onMouseMove = function onMouseMove(e) {
    if (!_this.enabled) return;

    switch (state) {
      case STATE.ROTATE:
        if (enableRotate === false) return;
        handleMoveRotate(e.clientX, e.clientY);
        break;

      case STATE.DOLLY:
        if (enableZoom === false) return;
        handleMouseMoveDolly(e);
        break;

      case STATE.PAN:
        if (enablePan === false) return;
        handleMovePan(e.clientX, e.clientY);
        break;
    }
  };

  var onMouseUp = function onMouseUp() {
    if (!_this.enabled) return;
    document.removeEventListener('mousemove', onMouseMove, false);
    document.removeEventListener('mouseup', onMouseUp, false);
    state = STATE.NONE;
  };

  var onMouseWheel = function onMouseWheel(e) {
    if (!_this.enabled || !enableZoom || state !== STATE.NONE && state !== STATE.ROTATE) return;
    e.stopPropagation();
    e.preventDefault();

    if (e.deltaY < 0) {
      dolly(1 / getZoomScale());
    } else if (e.deltaY > 0) {
      dolly(getZoomScale());
    }
  };

  var onTouchStart = function onTouchStart(e) {
    if (!_this.enabled) return;
    e.preventDefault();

    switch (e.touches.length) {
      case 1:
        if (enableRotate === false) return;
        rotateStart.set(e.touches[0].pageX, e.touches[0].pageY);
        state = STATE.ROTATE;
        break;

      case 2:
        if (enableZoom === false && enablePan === false) return;
        handleTouchStartDollyPan(e);
        state = STATE.DOLLY_PAN;
        break;

      default:
        state = STATE.NONE;
    }
  };

  var onTouchMove = function onTouchMove(e) {
    if (!_this.enabled) return;
    e.preventDefault();
    e.stopPropagation();

    switch (e.touches.length) {
      case 1:
        if (enableRotate === false) return;
        handleMoveRotate(e.touches[0].pageX, e.touches[0].pageY);
        break;

      case 2:
        if (enableZoom === false && enablePan === false) return;
        handleTouchMoveDollyPan(e);
        break;

      default:
        state = STATE.NONE;
    }
  };

  var onTouchEnd = function onTouchEnd() {
    if (!_this.enabled) return;
    state = STATE.NONE;
  };

  var onContextMenu = function onContextMenu(e) {
    if (!_this.enabled) return;
    e.preventDefault();
  };

  function addHandlers() {
    element.addEventListener('contextmenu', onContextMenu, false);
    element.addEventListener('mousedown', onMouseDown, false);
    element.addEventListener('wheel', onMouseWheel, {
      passive: false
    });
    element.addEventListener('touchstart', onTouchStart, {
      passive: false
    });
    element.addEventListener('touchend', onTouchEnd, false);
    element.addEventListener('touchmove', onTouchMove, {
      passive: false
    });
  }

  this.remove = function () {
    element.removeEventListener('contextmenu', onContextMenu);
    element.removeEventListener('mousedown', onMouseDown);
    element.removeEventListener('wheel', onMouseWheel);
    element.removeEventListener('touchstart', onTouchStart);
    element.removeEventListener('touchend', onTouchEnd);
    element.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  addHandlers();
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Raycast", function() { return Raycast; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);


// TODO: test orthographic
// TODO: add barycentric ?


var tempVec3a = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var tempVec3b = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var tempVec3c = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var tempMat4 = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_3__["Mat4"]();
var Raycast =
/*#__PURE__*/
function () {
  function Raycast(gl) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Raycast);

    this.gl = gl;
    this.origin = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
    this.direction = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
  } // Set ray from mouse unprojection


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Raycast, [{
    key: "castMouse",
    value: function castMouse(camera) {
      var mouse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0];
      // Set origin
      camera.worldMatrix.getTranslation(this.origin); // Set direction

      this.direction.set(mouse[0], mouse[1], 0.5);
      camera.unproject(this.direction);
      this.direction.sub(this.origin).normalize();
    }
  }, {
    key: "intersectBounds",
    value: function intersectBounds(meshes) {
      var _this = this;

      if (!Array.isArray(meshes)) meshes = [meshes];
      var invWorldMat4 = tempMat4;
      var origin = tempVec3a;
      var direction = tempVec3b;
      var hits = [];
      meshes.forEach(function (mesh) {
        // Create bounds
        if (!mesh.geometry.bounds) mesh.geometry.computeBoundingBox();
        if (mesh.geometry.raycast === 'sphere' && mesh.geometry.bounds.radius === Infinity) mesh.geometry.computeBoundingSphere(); // Take world space ray and make it object space to align with bounding box

        invWorldMat4.inverse(mesh.worldMatrix);
        origin.copy(_this.origin).applyMatrix4(invWorldMat4);
        direction.copy(_this.direction).transformDirection(invWorldMat4);
        var distance = 0;

        if (mesh.geometry.raycast === 'sphere') {
          distance = _this.intersectSphere(mesh.geometry.bounds, origin, direction);
        } else {
          distance = _this.intersectBox(mesh.geometry.bounds, origin, direction);
        }

        if (!distance) return; // Create object on mesh to avoid generating lots of objects

        if (!mesh.hit) mesh.hit = {
          localPoint: new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]()
        };
        mesh.hit.distance = distance;
        mesh.hit.localPoint.copy(direction).multiply(distance).add(origin);
        hits.push(mesh);
      });
      hits.sort(function (a, b) {
        return a.hit.distance - b.hit.distance;
      });
      return hits;
    }
  }, {
    key: "intersectSphere",
    value: function intersectSphere(sphere) {
      var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.origin;
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.direction;
      var ray = tempVec3c;
      ray.sub(sphere.center, origin);
      var tca = ray.dot(direction);
      var d2 = ray.dot(ray) - tca * tca;
      var radius2 = sphere.radius * sphere.radius;
      if (d2 > radius2) return 0;
      var thc = Math.sqrt(radius2 - d2);
      var t0 = tca - thc;
      var t1 = tca + thc;
      if (t0 < 0 && t1 < 0) return 0;
      if (t0 < 0) return t1;
      return t0;
    } // Ray AABB - Ray Axis aligned bounding box testing

  }, {
    key: "intersectBox",
    value: function intersectBox(box) {
      var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.origin;
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.direction;
      var tmin, tmax, tYmin, tYmax, tZmin, tZmax;
      var invdirx = 1 / direction.x;
      var invdiry = 1 / direction.y;
      var invdirz = 1 / direction.z;
      var min = box.min;
      var max = box.max;
      tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
      tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
      tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
      tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
      if (tmin > tYmax || tYmin > tmax) return 0;
      if (tYmin > tmin) tmin = tYmin;
      if (tYmax < tmax) tmax = tYmax;
      tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
      tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
      if (tmin > tZmax || tZmin > tmax) return 0;
      if (tZmin > tmin) tmin = tZmin;
      if (tZmax < tmax) tmax = tZmax;
      if (tmax < 0) return 0;
      return tmin >= 0 ? tmin : tmax;
    }
  }]);

  return Raycast;
}();

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony import */ var _Triangle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);


// TODO: Destroy render targets if size changed and exists




var Post =
/*#__PURE__*/
function () {
  function Post(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        width = _ref.width,
        height = _ref.height,
        dpr = _ref.dpr,
        _ref$wrapS = _ref.wrapS,
        wrapS = _ref$wrapS === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapS,
        _ref$wrapT = _ref.wrapT,
        wrapT = _ref$wrapT === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapT,
        _ref$minFilter = _ref.minFilter,
        minFilter = _ref$minFilter === void 0 ? gl.LINEAR : _ref$minFilter,
        _ref$magFilter = _ref.magFilter,
        magFilter = _ref$magFilter === void 0 ? gl.LINEAR : _ref$magFilter,
        _ref$geometry = _ref.geometry,
        geometry = _ref$geometry === void 0 ? new _Triangle_js__WEBPACK_IMPORTED_MODULE_5__["Triangle"](gl) : _ref$geometry,
        _ref$targetOnly = _ref.targetOnly,
        targetOnly = _ref$targetOnly === void 0 ? null : _ref$targetOnly;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Post);

    this.gl = gl;
    this.options = {
      wrapS: wrapS,
      wrapT: wrapT,
      minFilter: minFilter,
      magFilter: magFilter
    };
    this.passes = [];
    this.geometry = geometry;
    this.uniform = {
      value: null
    };
    this.targetOnly = targetOnly;
    var fbo = this.fbo = {
      read: null,
      write: null,
      swap: function swap() {
        var temp = fbo.read;
        fbo.read = fbo.write;
        fbo.write = temp;
      }
    };
    this.resize({
      width: width,
      height: height,
      dpr: dpr
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Post, [{
    key: "addPass",
    value: function addPass() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$vertex = _ref2.vertex,
          vertex = _ref2$vertex === void 0 ? defaultVertex : _ref2$vertex,
          _ref2$fragment = _ref2.fragment,
          fragment = _ref2$fragment === void 0 ? defaultFragment : _ref2$fragment,
          _ref2$uniforms = _ref2.uniforms,
          uniforms = _ref2$uniforms === void 0 ? {} : _ref2$uniforms,
          _ref2$textureUniform = _ref2.textureUniform,
          textureUniform = _ref2$textureUniform === void 0 ? 'tMap' : _ref2$textureUniform,
          _ref2$enabled = _ref2.enabled,
          enabled = _ref2$enabled === void 0 ? true : _ref2$enabled;

      uniforms[textureUniform] = {
        value: this.fbo.read.texture
      };
      var program = new _core_Program_js__WEBPACK_IMPORTED_MODULE_2__["Program"](this.gl, {
        vertex: vertex,
        fragment: fragment,
        uniforms: uniforms
      });
      var mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_3__["Mesh"](this.gl, {
        geometry: this.geometry,
        program: program
      });
      var pass = {
        mesh: mesh,
        program: program,
        uniforms: uniforms,
        enabled: enabled,
        textureUniform: textureUniform
      };
      this.passes.push(pass);
      return pass;
    }
  }, {
    key: "resize",
    value: function resize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          width = _ref3.width,
          height = _ref3.height,
          dpr = _ref3.dpr;

      if (dpr) this.dpr = dpr;

      if (width) {
        this.width = width;
        this.height = height || width;
      }

      dpr = this.dpr || this.gl.renderer.dpr;
      width = (this.width || this.gl.renderer.width) * dpr;
      height = (this.height || this.gl.renderer.height) * dpr;
      this.options.width = width;
      this.options.height = height;
      this.fbo.read = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_4__["RenderTarget"](this.gl, this.options);
      this.fbo.write = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_4__["RenderTarget"](this.gl, this.options);
    } // Uses same arguments as renderer.render

  }, {
    key: "render",
    value: function render(_ref4) {
      var _this = this;

      var scene = _ref4.scene,
          camera = _ref4.camera,
          _ref4$target = _ref4.target,
          target = _ref4$target === void 0 ? null : _ref4$target,
          _ref4$update = _ref4.update,
          update = _ref4$update === void 0 ? true : _ref4$update,
          _ref4$sort = _ref4.sort,
          sort = _ref4$sort === void 0 ? true : _ref4$sort,
          _ref4$frustumCull = _ref4.frustumCull,
          frustumCull = _ref4$frustumCull === void 0 ? true : _ref4$frustumCull;
      var enabledPasses = this.passes.filter(function (pass) {
        return pass.enabled;
      });
      this.gl.renderer.render({
        scene: scene,
        camera: camera,
        target: enabledPasses.length || !target && this.targetOnly ? this.fbo.write : target,
        update: update,
        sort: sort,
        frustumCull: frustumCull
      });
      this.fbo.swap();
      enabledPasses.forEach(function (pass, i) {
        pass.mesh.program.uniforms[pass.textureUniform].value = _this.fbo.read.texture;

        _this.gl.renderer.render({
          scene: pass.mesh,
          target: i === enabledPasses.length - 1 && (target || !_this.targetOnly) ? target : _this.fbo.write,
          clear: i === enabledPasses.length - 1 ? true : false
        });

        _this.fbo.swap();
      });
      this.uniform.value = this.fbo.read.texture;
    }
  }]);

  return Post;
}();
var defaultVertex =
/* glsl */
"\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n";
var defaultFragment =
/* glsl */
"\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n";

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Skin", function() { return Skin; });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/* harmony import */ var _core_Transform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
/* harmony import */ var _math_Mat4_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25);
/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32);
/* harmony import */ var _Animation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56);













var tempMat4 = new _math_Mat4_js__WEBPACK_IMPORTED_MODULE_10__["Mat4"]();
var Skin =
/*#__PURE__*/
function (_Mesh) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Skin, _Mesh);

  function Skin(gl) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        rig = _ref.rig,
        geometry = _ref.geometry,
        program = _ref.program,
        _ref$mode = _ref.mode,
        mode = _ref$mode === void 0 ? gl.TRIANGLES : _ref$mode;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Skin);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Skin).call(this, gl, {
      geometry: geometry,
      program: program,
      mode: mode
    }));

    _this.createBones(rig);

    _this.createBoneTexture();

    _this.animations = [];
    Object.assign(_this.program.uniforms, {
      boneTexture: {
        value: _this.boneTexture
      },
      boneTextureSize: {
        value: _this.boneTextureSize
      }
    });
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Skin, [{
    key: "createBones",
    value: function createBones(rig) {
      var _this2 = this;

      // Create root so that can simply update world matrix of whole skeleton
      this.root = new _core_Transform_js__WEBPACK_IMPORTED_MODULE_9__["Transform"](); // Create bones

      this.bones = [];
      if (!rig.bones || !rig.bones.length) return;

      for (var i = 0; i < rig.bones.length; i++) {
        var bone = new _core_Transform_js__WEBPACK_IMPORTED_MODULE_9__["Transform"](); // Set initial values (bind pose)

        bone.position.fromArray(rig.bindPose.position, i * 3);
        bone.quaternion.fromArray(rig.bindPose.quaternion, i * 4);
        bone.scale.fromArray(rig.bindPose.scale, i * 3);
        this.bones.push(bone);
      }

      ; // Once created, set the hierarchy

      rig.bones.forEach(function (data, i) {
        _this2.bones[i].name = data.name;
        if (data.parent === -1) return _this2.bones[i].setParent(_this2.root);

        _this2.bones[i].setParent(_this2.bones[data.parent]);
      }); // Then update to calculate world matrices

      this.root.updateMatrixWorld(true); // Store inverse of bind pose to calculate differences

      this.bones.forEach(function (bone) {
        bone.bindInverse = _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(_math_Mat4_js__WEBPACK_IMPORTED_MODULE_10__["Mat4"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(bone.worldMatrix)).inverse();
      });
    }
  }, {
    key: "createBoneTexture",
    value: function createBoneTexture() {
      if (!this.bones.length) return;
      var size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.bones.length * 4)) / Math.LN2)));
      this.boneMatrices = new Float32Array(size * size * 4);
      this.boneTextureSize = size;
      this.boneTexture = new _core_Texture_js__WEBPACK_IMPORTED_MODULE_11__["Texture"](this.gl, {
        image: this.boneMatrices,
        generateMipmaps: false,
        type: this.gl.FLOAT,
        internalFormat: this.gl.renderer.isWebgl2 ? this.gl.RGBA16F : this.gl.RGBA,
        flipY: false,
        width: size
      });
    }
  }, {
    key: "addAnimation",
    value: function addAnimation(data) {
      var animation = new _Animation_js__WEBPACK_IMPORTED_MODULE_12__["Animation"]({
        objects: this.bones,
        data: data
      });
      this.animations.push(animation);
      return animation;
    }
  }, {
    key: "update",
    value: function update() {
      // Calculate combined animation weight
      var total = 0;
      this.animations.forEach(function (animation) {
        return total += animation.weight;
      });
      this.animations.forEach(function (animation, i) {
        // force first animation to set in order to reset frame
        animation.update(total, i === 0);
      });
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this3 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          camera = _ref2.camera;

      // Update world matrices manually, as not part of scene graph
      this.root.updateMatrixWorld(true); // Update bone texture

      this.bones.forEach(function (bone, i) {
        // Find difference between current and bind pose
        tempMat4.multiply(bone.worldMatrix, bone.bindInverse);

        _this3.boneMatrices.set(tempMat4, i * 16);
      });
      if (this.boneTexture) this.boneTexture.needsUpdate = true;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Skin.prototype), "draw", this).call(this, {
        camera: camera
      });
    }
  }]);

  return Skin;
}(_core_Mesh_js__WEBPACK_IMPORTED_MODULE_8__["Mesh"]);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(53);

var iterableToArray = __webpack_require__(54);

var nonIterableSpread = __webpack_require__(55);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _math_Quat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);




var prevPos = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var prevRot = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_3__["Quat"]();
var prevScl = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var nextPos = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var nextRot = new _math_Quat_js__WEBPACK_IMPORTED_MODULE_3__["Quat"]();
var nextScl = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_2__["Vec3"]();
var Animation =
/*#__PURE__*/
function () {
  function Animation(_ref) {
    var objects = _ref.objects,
        data = _ref.data;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Animation);

    this.objects = objects;
    this.data = data;
    this.elapsed = 0;
    this.weight = 1;
    this.duration = data.frames.length - 1;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Animation, [{
    key: "update",
    value: function update() {
      var totalWeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var isSet = arguments.length > 1 ? arguments[1] : undefined;
      var weight = isSet ? 1 : this.weight / totalWeight;
      var elapsed = this.elapsed % this.duration;
      var floorFrame = Math.floor(elapsed);
      var blend = elapsed - floorFrame;
      var prevKey = this.data.frames[floorFrame];
      var nextKey = this.data.frames[(floorFrame + 1) % this.duration];
      this.objects.forEach(function (object, i) {
        prevPos.fromArray(prevKey.position, i * 3);
        prevRot.fromArray(prevKey.quaternion, i * 4);
        prevScl.fromArray(prevKey.scale, i * 3);
        nextPos.fromArray(nextKey.position, i * 3);
        nextRot.fromArray(nextKey.quaternion, i * 4);
        nextScl.fromArray(nextKey.scale, i * 3);
        prevPos.lerp(nextPos, blend);
        prevRot.slerp(nextRot, blend);
        prevScl.lerp(nextScl, blend);
        object.position.lerp(prevPos, weight);
        object.quaternion.slerp(prevRot, weight);
        object.scale.lerp(prevScl, weight);
      });
    }
  }]);

  return Animation;
}();

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
function Text(_ref) {
  var font = _ref.font,
      text = _ref.text,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? Infinity : _ref$width,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1 : _ref$size,
      _ref$letterSpacing = _ref.letterSpacing,
      letterSpacing = _ref$letterSpacing === void 0 ? 0 : _ref$letterSpacing,
      _ref$lineHeight = _ref.lineHeight,
      lineHeight = _ref$lineHeight === void 0 ? 1.4 : _ref$lineHeight,
      _ref$wordSpacing = _ref.wordSpacing,
      wordSpacing = _ref$wordSpacing === void 0 ? 0 : _ref$wordSpacing,
      _ref$wordBreak = _ref.wordBreak,
      wordBreak = _ref$wordBreak === void 0 ? false : _ref$wordBreak;

  var _this = this;

  var glyphs, buffers;
  var fontHeight, baseline, scale;
  var newline = /\n/;
  var whitespace = /\s/;
  {
    parseFont();
    createGeometry();
  }

  function parseFont() {
    glyphs = {};
    font.chars.forEach(function (d) {
      return glyphs[d.char] = d;
    });
  }

  function createGeometry() {
    fontHeight = font.common.lineHeight;
    baseline = font.common.base; // Use baseline so that actual text height is as close to 'size' value as possible

    scale = size / baseline; // Strip spaces and newlines to get actual character length for buffers

    var chars = text.replace(/[ \n]/g, '');
    var numChars = chars.length; // Create output buffers

    buffers = {
      position: new Float32Array(numChars * 4 * 3),
      uv: new Float32Array(numChars * 4 * 2),
      id: new Float32Array(numChars * 4),
      index: new Uint16Array(numChars * 6)
    }; // Set values for buffers that don't require calculation

    for (var i = 0; i < numChars; i++) {
      buffers.id[i] = i;
      buffers.index.set([i * 4, i * 4 + 2, i * 4 + 1, i * 4 + 1, i * 4 + 2, i * 4 + 3], i * 6);
    }

    layout();
  }

  function layout() {
    var lines = [];
    var cursor = 0;
    var wordCursor = 0;
    var wordWidth = 0;
    var line = newLine();

    function newLine() {
      var line = {
        width: 0,
        glyphs: []
      };
      lines.push(line);
      wordCursor = cursor;
      wordWidth = 0;
      return line;
    }

    var maxTimes = 100;
    var count = 0;

    while (cursor < text.length && count < maxTimes) {
      count++;
      var char = text[cursor]; // Skip whitespace at start of line

      if (!line.width && whitespace.test(char)) {
        cursor++;
        wordCursor = cursor;
        wordWidth = 0;
        continue;
      } // If newline char, skip to next line


      if (newline.test(char)) {
        cursor++;
        line = newLine();
        continue;
      }

      var glyph = glyphs[char]; // Find any applicable kern pairs

      if (line.glyphs.length) {
        var prevGlyph = line.glyphs[line.glyphs.length - 1][0];
        var kern = getKernPairOffset(glyph.id, prevGlyph.id) * scale;
        line.width += kern;
        wordWidth += kern;
      } // add char to line


      line.glyphs.push([glyph, line.width]); // calculate advance for next glyph

      var advance = 0; // If whitespace, update location of current word for line breaks

      if (whitespace.test(char)) {
        wordCursor = cursor;
        wordWidth = 0; // Add wordspacing

        advance += wordSpacing * size;
      } else {
        // Add letterspacing
        advance += letterSpacing * size;
      }

      advance += glyph.xadvance * scale;
      line.width += advance;
      wordWidth += advance; // If width defined

      if (line.width > width) {
        // If can break words, undo latest glyph if line not empty and create new line
        if (wordBreak && line.glyphs.length > 1) {
          line.width -= advance;
          line.glyphs.pop();
          line = newLine();
          continue; // If not first word, undo current word and cursor and create new line
        } else if (!wordBreak && wordWidth !== line.width) {
          var numGlyphs = cursor - wordCursor + 1;
          line.glyphs.splice(-numGlyphs, numGlyphs);
          cursor = wordCursor;
          line.width -= wordWidth;
          line = newLine();
          continue;
        }
      }

      cursor++;
    } // Remove last line if empty


    if (!line.width) lines.pop();
    populateBuffers(lines);
  }

  function populateBuffers(lines) {
    var texW = font.common.scaleW;
    var texH = font.common.scaleH; // For all fonts tested, a little offset was needed to be right on the baseline, hence 0.07.

    var y = 0.07 * size;
    var j = 0;

    for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      var line = lines[lineIndex];

      for (var i = 0; i < line.glyphs.length; i++) {
        var glyph = line.glyphs[i][0];
        var x = line.glyphs[i][1];

        if (align === 'center') {
          x -= line.width * 0.5;
        } else if (align === 'right') {
          x -= line.width;
        } // If space, don't add to geometry


        if (whitespace.test(glyph.char)) continue; // Apply char sprite offsets

        x += glyph.xoffset * scale;
        y -= glyph.yoffset * scale; // each letter is a quad. axis bottom left

        var w = glyph.width * scale;
        var h = glyph.height * scale;
        buffers.position.set([x, y - h, 0, x, y, 0, x + w, y - h, 0, x + w, y, 0], j * 4 * 3);
        var u = glyph.x / texW;
        var uw = glyph.width / texW;
        var v = 1.0 - glyph.y / texH;
        var vh = glyph.height / texH;
        buffers.uv.set([u, v - vh, u, v, u + uw, v - vh, u + uw, v], j * 4 * 2); // Reset cursor to baseline

        y += glyph.yoffset * scale;
        j++;
      }

      y -= size * lineHeight;
    }

    _this.buffers = buffers;
    _this.numLines = lines.length;
    _this.height = _this.numLines * size * lineHeight;
  }

  function getKernPairOffset(id1, id2) {
    for (var i = 0; i < font.kernings.length; i++) {
      var k = font.kernings[i];
      if (k.first < id1) continue;
      if (k.second < id2) continue;
      if (k.first > id1) return 0;
      if (k.first === id1 && k.second > id2) return 0;
      return k.amount;
    }

    return 0;
  } // Update buffers to layout with new layout


  this.resize = function (options) {
    width = options.width;
    layout();
  }; // Completely change text (like creating new Text)


  this.update = function (options) {
    text = options.text;
    createGeometry();
  };
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalProgram", function() { return NormalProgram; });
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

var vertex =
/* glsl */
"\n    precision highp float;\n    precision highp int;\n\n    attribute vec3 position;\n    attribute vec3 normal;\n\n    uniform mat3 normalMatrix;\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    varying vec3 vNormal;\n\n    void main() {\n        vNormal = normalize(normalMatrix * normal);\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n";
var fragment =
/* glsl */
"\n    precision highp float;\n    precision highp int;\n\n    varying vec3 vNormal;\n\n    void main() {\n        gl_FragColor.rgb = normalize(vNormal);\n        gl_FragColor.a = 1.0;\n    }\n";
function NormalProgram(gl) {
  return new _core_Program_js__WEBPACK_IMPORTED_MODULE_0__["Program"](gl, {
    vertex: vertex,
    fragment: fragment
  });
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flowmap", function() { return Flowmap; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _Triangle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);







var Flowmap =
/*#__PURE__*/
function () {
  function Flowmap(gl) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? 128 : _ref$size,
        _ref$falloff = _ref.falloff,
        falloff = _ref$falloff === void 0 ? 0.3 : _ref$falloff,
        _ref$alpha = _ref.alpha,
        alpha = _ref$alpha === void 0 ? 1 : _ref$alpha,
        _ref$dissipation = _ref.dissipation,
        dissipation = _ref$dissipation === void 0 ? 0.98 : _ref$dissipation;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Flowmap);

    var _this = this;

    this.gl = gl; // output uniform containing render target textures

    this.uniform = {
      value: null
    };
    this.mask = {
      read: null,
      write: null,
      // Helper function to ping pong the render targets and update the uniform
      swap: function swap() {
        var temp = _this.mask.read;
        _this.mask.read = _this.mask.write;
        _this.mask.write = temp;
        _this.uniform.value = _this.mask.read.texture;
      }
    };
    {
      createFBOs();
      this.aspect = 1;
      this.mouse = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_5__["Vec2"]();
      this.velocity = new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_5__["Vec2"]();
      this.mesh = initProgram();
    }

    function createFBOs() {
      var supportLinearFiltering = gl.renderer.extensions["OES_texture_".concat(gl.renderer.isWebgl2 ? "" : "half_", "float_linear")];
      var options = {
        width: size,
        height: size,
        type: gl.renderer.isWebgl2 ? gl.HALF_FLOAT : gl.renderer.extensions['OES_texture_half_float'] ? gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES : gl.UNSIGNED_BYTE,
        format: gl.RGBA,
        internalFormat: gl.renderer.isWebgl2 ? gl.RGBA16F : gl.RGBA,
        minFilter: supportLinearFiltering ? gl.LINEAR : gl.NEAREST,
        depth: false
      };
      _this.mask.read = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_2__["RenderTarget"](gl, options);
      _this.mask.write = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_2__["RenderTarget"](gl, options);

      _this.mask.swap();
    }

    function initProgram() {
      return new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_4__["Mesh"](gl, {
        // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
        geometry: new _Triangle_js__WEBPACK_IMPORTED_MODULE_6__["Triangle"](gl),
        program: new _core_Program_js__WEBPACK_IMPORTED_MODULE_3__["Program"](gl, {
          vertex: vertex,
          fragment: fragment,
          uniforms: {
            tMap: _this.uniform,
            uFalloff: {
              value: falloff * 0.5
            },
            uAlpha: {
              value: alpha
            },
            uDissipation: {
              value: dissipation
            },
            // User needs to update these
            uAspect: {
              value: 1
            },
            uMouse: {
              value: _this.mouse
            },
            uVelocity: {
              value: _this.velocity
            }
          },
          depthTest: false
        })
      });
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Flowmap, [{
    key: "update",
    value: function update() {
      this.mesh.program.uniforms.uAspect.value = this.aspect;
      this.gl.renderer.render({
        scene: this.mesh,
        target: this.mask.write,
        clear: false
      });
      this.mask.swap();
    }
  }]);

  return Flowmap;
}();
var vertex =
/* glsl */
"\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n";
var fragment =
/* glsl */
"\n    precision highp float;\n\n    uniform sampler2D tMap;\n\n    uniform float uFalloff;\n    uniform float uAlpha;\n    uniform float uDissipation;\n    \n    uniform float uAspect;\n    uniform vec2 uMouse;\n    uniform vec2 uVelocity;\n\n    varying vec2 vUv;\n\n    void main() {\n        vec4 color = texture2D(tMap, vUv) * uDissipation;\n\n        vec2 cursor = vUv - uMouse;\n        cursor.x *= uAspect;\n\n        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));\n        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;\n\n        color.rgb = mix(color.rgb, stamp, vec3(falloff));\n\n        gl_FragColor = color;\n    }\n";

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GPGPU", function() { return GPGPU; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _Triangle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);







var GPGPU =
/*#__PURE__*/
function () {
  function GPGPU(gl, _ref) {
    var _this = this;

    var _ref$data = _ref.data,
        data = _ref$data === void 0 ? new Float32Array(16) : _ref$data,
        _ref$geometry = _ref.geometry,
        geometry = _ref$geometry === void 0 ? new _Triangle_js__WEBPACK_IMPORTED_MODULE_6__["Triangle"](gl) : _ref$geometry;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GPGPU);

    this.gl = gl;
    var initialData = data;
    this.passes = [];
    this.geometry = geometry;
    this.dataLength = initialData.length / 4; // Windows and iOS only like power of 2 textures
    // Find smallest PO2 that fits data

    this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2)); // Create coords for output texture

    this.coords = new Float32Array(this.dataLength * 2);

    for (var i = 0; i < this.dataLength; i++) {
      var x = i % this.size / this.size; // to add 0.5 to be center pixel ?

      var y = Math.floor(i / this.size) / this.size;
      this.coords.set([x, y], i * 2);
    } // Use original data if already correct length of PO2 texture, else copy to new array of correct length


    var floatArray = function () {
      if (initialData.length === _this.size * _this.size * 4) {
        return initialData;
      } else {
        var a = new Float32Array(_this.size * _this.size * 4);
        a.set(initialData);
        return a;
      }
    }(); // Create output texture uniform using input float texture with initial data


    this.uniform = {
      value: new _core_Texture_js__WEBPACK_IMPORTED_MODULE_4__["Texture"](gl, {
        image: floatArray,
        target: gl.TEXTURE_2D,
        type: gl.FLOAT,
        format: gl.RGBA,
        internalFormat: gl.renderer.isWebgl2 ? gl.RGBA32F : gl.RGBA,
        wrapS: gl.CLAMP_TO_EDGE,
        wrapT: gl.CLAMP_TO_EDGE,
        generateMipmaps: false,
        minFilter: gl.NEAREST,
        magFilter: gl.NEAREST,
        width: this.size,
        flipY: false
      })
    }; // Create FBOs

    var options = {
      width: this.size,
      height: this.size,
      type: gl.renderer.isWebgl2 ? gl.HALF_FLOAT : gl.renderer.extensions['OES_texture_half_float'] ? gl.renderer.extensions['OES_texture_half_float'].HALF_FLOAT_OES : gl.UNSIGNED_BYTE,
      format: gl.RGBA,
      internalFormat: gl.renderer.isWebgl2 ? gl.RGBA16F : gl.RGBA,
      minFilter: gl.NEAREST,
      depth: false,
      unpackAlignment: 1
    };
    this.fbo = {
      read: new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_5__["RenderTarget"](gl, options),
      write: new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_5__["RenderTarget"](gl, options),
      swap: function swap() {
        var temp = _this.fbo.read;
        _this.fbo.read = _this.fbo.write;
        _this.fbo.write = temp;
        _this.uniform.value = _this.fbo.read.texture;
      }
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GPGPU, [{
    key: "addPass",
    value: function addPass() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$vertex = _ref2.vertex,
          vertex = _ref2$vertex === void 0 ? defaultVertex : _ref2$vertex,
          _ref2$fragment = _ref2.fragment,
          fragment = _ref2$fragment === void 0 ? defaultFragment : _ref2$fragment,
          _ref2$uniforms = _ref2.uniforms,
          uniforms = _ref2$uniforms === void 0 ? {} : _ref2$uniforms,
          _ref2$textureUniform = _ref2.textureUniform,
          textureUniform = _ref2$textureUniform === void 0 ? 'tMap' : _ref2$textureUniform,
          _ref2$enabled = _ref2.enabled,
          enabled = _ref2$enabled === void 0 ? true : _ref2$enabled;

      uniforms[textureUniform] = this.uniform;
      var program = new _core_Program_js__WEBPACK_IMPORTED_MODULE_2__["Program"](this.gl, {
        vertex: vertex,
        fragment: fragment,
        uniforms: uniforms
      });
      var mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_3__["Mesh"](this.gl, {
        geometry: this.geometry,
        program: program
      });
      var pass = {
        mesh: mesh,
        program: program,
        uniforms: uniforms,
        enabled: enabled,
        textureUniform: textureUniform
      };
      this.passes.push(pass);
      return pass;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var enabledPasses = this.passes.filter(function (pass) {
        return pass.enabled;
      });
      enabledPasses.forEach(function (pass, i) {
        _this2.gl.renderer.render({
          scene: pass.mesh,
          target: _this2.fbo.write,
          clear: false
        });

        _this2.fbo.swap();
      });
    }
  }]);

  return GPGPU;
}();
;
var defaultVertex =
/* glsl */
"\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n";
var defaultFragment =
/* glsl */
"\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n";

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _core_Mesh_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
/* harmony import */ var _math_Vec2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _math_Vec3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _math_Color_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34);








var tmp = new _math_Vec3_js__WEBPACK_IMPORTED_MODULE_6__["Vec3"]();
var Polyline =
/*#__PURE__*/
function () {
  function Polyline(gl, _ref) {
    var points = _ref.points,
        _ref$vertex = _ref.vertex,
        vertex = _ref$vertex === void 0 ? defaultVertex : _ref$vertex,
        _ref$fragment = _ref.fragment,
        fragment = _ref$fragment === void 0 ? defaultFragment : _ref$fragment,
        _ref$uniforms = _ref.uniforms,
        uniforms = _ref$uniforms === void 0 ? {} : _ref$uniforms,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? {} : _ref$attributes;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Polyline);

    this.gl = gl;
    this.points = points;
    this.count = points.length; // Create buffers

    this.position = new Float32Array(this.count * 3 * 2);
    this.prev = new Float32Array(this.count * 3 * 2);
    this.next = new Float32Array(this.count * 3 * 2);
    var side = new Float32Array(this.count * 1 * 2);
    var uv = new Float32Array(this.count * 2 * 2);
    var index = new Uint16Array((this.count - 1) * 3 * 2); // Set static buffers

    for (var i = 0; i < this.count; i++) {
      side.set([-1, 1], i * 2);
      var v = i / (this.count - 1);
      uv.set([0, v, 1, v], i * 4);
      if (i === this.count - 1) continue;
      var ind = i * 2;
      index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
      index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
    }

    var geometry = this.geometry = new _core_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Geometry"](gl, Object.assign(attributes, {
      position: {
        size: 3,
        data: this.position
      },
      prev: {
        size: 3,
        data: this.prev
      },
      next: {
        size: 3,
        data: this.next
      },
      side: {
        size: 1,
        data: side
      },
      uv: {
        size: 2,
        data: uv
      },
      index: {
        size: 1,
        data: index
      }
    })); // Populate dynamic buffers

    this.updateGeometry();
    if (!uniforms.uResolution) this.resolution = uniforms.uResolution = {
      value: new _math_Vec2_js__WEBPACK_IMPORTED_MODULE_5__["Vec2"]()
    };
    if (!uniforms.uDPR) this.dpr = uniforms.uDPR = {
      value: 1
    };
    if (!uniforms.uThickness) this.thickness = uniforms.uThickness = {
      value: 1
    };
    if (!uniforms.uColor) this.color = uniforms.uColor = {
      value: new _math_Color_js__WEBPACK_IMPORTED_MODULE_7__["Color"]('#000')
    };
    if (!uniforms.uMiter) this.miter = uniforms.uMiter = {
      value: 1
    }; // Set size uniforms' values

    this.resize();
    var program = this.program = new _core_Program_js__WEBPACK_IMPORTED_MODULE_3__["Program"](gl, {
      vertex: vertex,
      fragment: fragment,
      uniforms: uniforms
    });
    this.mesh = new _core_Mesh_js__WEBPACK_IMPORTED_MODULE_4__["Mesh"](gl, {
      geometry: geometry,
      program: program
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Polyline, [{
    key: "updateGeometry",
    value: function updateGeometry() {
      var _this = this;

      this.points.forEach(function (p, i) {
        p.toArray(_this.position, i * 3 * 2);
        p.toArray(_this.position, i * 3 * 2 + 3);

        if (!i) {
          // If first point, calculate prev using the distance to 2nd point
          tmp.copy(p).sub(_this.points[i + 1]).add(p);
          tmp.toArray(_this.prev, i * 3 * 2);
          tmp.toArray(_this.prev, i * 3 * 2 + 3);
        } else {
          p.toArray(_this.next, (i - 1) * 3 * 2);
          p.toArray(_this.next, (i - 1) * 3 * 2 + 3);
        }

        if (i === _this.points.length - 1) {
          // If last point, calculate next using distance to 2nd last point
          tmp.copy(p).sub(_this.points[i - 1]).add(p);
          tmp.toArray(_this.next, i * 3 * 2);
          tmp.toArray(_this.next, i * 3 * 2 + 3);
        } else {
          p.toArray(_this.prev, (i + 1) * 3 * 2);
          p.toArray(_this.prev, (i + 1) * 3 * 2 + 3);
        }
      });
      this.geometry.attributes.position.needsUpdate = true;
      this.geometry.attributes.prev.needsUpdate = true;
      this.geometry.attributes.next.needsUpdate = true;
    } // Only need to call if not handling resolution uniforms manually

  }, {
    key: "resize",
    value: function resize() {
      // Update automatic uniforms if not overridden
      if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
      if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
    }
  }]);

  return Polyline;
}();
;
var defaultVertex =
/* glsl */
"\n    precision highp float;\n\n    attribute vec3 position;\n    attribute vec3 next;\n    attribute vec3 prev;\n    attribute vec2 uv;\n    attribute float side;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n    uniform vec2 uResolution;\n    uniform float uDPR;\n    uniform float uThickness;\n    uniform float uMiter;\n\n    varying vec2 vUv;\n\n    vec4 getPosition() {\n        mat4 mvp = projectionMatrix * modelViewMatrix;\n        vec4 current = mvp * vec4(position, 1);\n        vec4 nextPos = mvp * vec4(next, 1);\n        vec4 prevPos = mvp * vec4(prev, 1);\n\n        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    \n        vec2 currentScreen = current.xy / current.w * aspect;\n        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;\n        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;\n    \n        vec2 dir1 = normalize(currentScreen - prevScreen);\n        vec2 dir2 = normalize(nextScreen - currentScreen);\n        vec2 dir = normalize(dir1 + dir2);\n    \n        vec2 normal = vec2(-dir.y, dir.x);\n        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);\n        normal /= aspect;\n\n        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);\n        float pixelWidth = current.w * pixelWidthRatio;\n        normal *= pixelWidth * uThickness;\n        current.xy -= normal * side;\n    \n        return current;\n    }\n\n    void main() {\n        vUv = uv;\n        gl_Position = getPosition();\n    }\n";
var defaultFragment =
/* glsl */
"\n    precision highp float;\n\n    uniform vec3 uColor;\n    \n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor.rgb = uColor;\n        gl_FragColor.a = 1.0;\n    }\n";

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return Shadow; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _core_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);





var Shadow =
/*#__PURE__*/
function () {
  function Shadow(gl, _ref) {
    var _ref$light = _ref.light,
        light = _ref$light === void 0 ? new _core_Camera_js__WEBPACK_IMPORTED_MODULE_2__["Camera"](gl) : _ref$light,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 1024 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? width : _ref$height;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Shadow);

    this.gl = gl;
    this.light = light;
    this.target = new _core_RenderTarget_js__WEBPACK_IMPORTED_MODULE_4__["RenderTarget"](gl, {
      width: width,
      height: height
    });
    this.depthProgram = new _core_Program_js__WEBPACK_IMPORTED_MODULE_3__["Program"](gl, {
      vertex: defaultVertex,
      fragment: defaultFragment,
      cullFace: null
    });
    this.castMeshes = [];
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Shadow, [{
    key: "add",
    value: function add(_ref2) {
      var mesh = _ref2.mesh,
          _ref2$receive = _ref2.receive,
          receive = _ref2$receive === void 0 ? true : _ref2$receive,
          _ref2$cast = _ref2.cast,
          cast = _ref2$cast === void 0 ? true : _ref2$cast,
          _ref2$vertex = _ref2.vertex,
          vertex = _ref2$vertex === void 0 ? defaultVertex : _ref2$vertex,
          _ref2$fragment = _ref2.fragment,
          fragment = _ref2$fragment === void 0 ? defaultFragment : _ref2$fragment,
          _ref2$uniformProjecti = _ref2.uniformProjection,
          uniformProjection = _ref2$uniformProjecti === void 0 ? 'shadowProjectionMatrix' : _ref2$uniformProjecti,
          _ref2$uniformView = _ref2.uniformView,
          uniformView = _ref2$uniformView === void 0 ? 'shadowViewMatrix' : _ref2$uniformView,
          _ref2$uniformTexture = _ref2.uniformTexture,
          uniformTexture = _ref2$uniformTexture === void 0 ? 'tShadow' : _ref2$uniformTexture;

      // Add uniforms to existing program
      if (receive && !mesh.program.uniforms[uniformProjection]) {
        mesh.program.uniforms[uniformProjection] = {
          value: this.light.projectionMatrix
        };
        mesh.program.uniforms[uniformView] = {
          value: this.light.viewMatrix
        };
        mesh.program.uniforms[uniformTexture] = {
          value: this.target.texture
        };
      }

      if (!cast) return;
      this.castMeshes.push(mesh); // Store program for when switching between depth override

      mesh.colorProgram = mesh.program; // Check if depth program already attached

      if (mesh.depthProgram) return; // Use global depth override if nothing custom passed in

      if (vertex === defaultVertex && fragment === defaultFragment) {
        mesh.depthProgram = this.depthProgram;
        return;
      } // Create custom override program


      mesh.depthProgram = new _core_Program_js__WEBPACK_IMPORTED_MODULE_3__["Program"](gl, {
        vertex: vertex,
        fragment: fragment,
        cullFace: null
      });
    }
  }, {
    key: "render",
    value: function render(_ref3) {
      var _this = this;

      var scene = _ref3.scene;
      // For depth render, replace program with depth override.
      // Hide meshes not casting shadows.
      scene.traverse(function (node) {
        if (!node.draw) return;

        if (!!~_this.castMeshes.indexOf(node)) {
          node.program = node.depthProgram;
        } else {
          if (node.visible) node.isForceVisibility = true;
          node.visible = false;
        }
      }); // Render the depth shadow map using the light as the camera

      this.gl.renderer.render({
        scene: scene,
        camera: this.light,
        target: this.target
      }); // Then switch the program back to the normal one

      scene.traverse(function (node) {
        if (!node.draw) return;

        if (!!~_this.castMeshes.indexOf(node)) {
          node.program = node.colorProgram;
        } else {
          if (node.isForceVisibility) node.visible = true;
        }
      });
    }
  }]);

  return Shadow;
}();
var defaultVertex =
/* glsl */
"\n    attribute vec3 position;\n    attribute vec2 uv;\n\n    uniform mat4 modelViewMatrix;\n    uniform mat4 projectionMatrix;\n\n    void main() {\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n";
var defaultFragment =
/* glsl */
"\n    precision highp float;\n\n    vec4 packRGBA (float v) {\n        vec4 pack = fract(vec4(1.0, 255.0, 65025.0, 16581375.0) * v);\n        pack -= pack.yzww * vec2(1.0 / 255.0, 0.0).xxxy;\n        return pack;\n    }\n\n    void main() {\n        gl_FragColor = packRGBA(gl_FragCoord.z);\n    }\n";

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KTXTexture", function() { return KTXTexture; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);





 // TODO: Support cubemaps
// Generate textures using https://github.com/TimvanScherpenzeel/texture-compressor

var KTXTexture =
/*#__PURE__*/
function (_Texture) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(KTXTexture, _Texture);

  function KTXTexture(gl) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        buffer = _ref.buffer,
        _ref$wrapS = _ref.wrapS,
        wrapS = _ref$wrapS === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapS,
        _ref$wrapT = _ref.wrapT,
        wrapT = _ref$wrapT === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapT,
        _ref$anisotropy = _ref.anisotropy,
        anisotropy = _ref$anisotropy === void 0 ? 0 : _ref$anisotropy;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, KTXTexture);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(KTXTexture).call(this, gl, {
      generateMipmaps: false,
      wrapS: wrapS,
      wrapT: wrapT,
      anisotropy: anisotropy
    }));
    if (buffer) return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _this.parseBuffer(buffer));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(KTXTexture, [{
    key: "parseBuffer",
    value: function parseBuffer(buffer) {
      var ktx = new KhronosTextureContainer(buffer);
      ktx.mipmaps.isCompressedTexture = true; // Update texture

      this.image = ktx.mipmaps;
      this.internalFormat = ktx.glInternalFormat;
      this.minFilter = ktx.numberOfMipmapLevels > 1 ? this.gl.NEAREST_MIPMAP_LINEAR : this.gl.LINEAR; // TODO: support cube maps
      // ktx.numberOfFaces
    }
  }]);

  return KTXTexture;
}(_core_Texture_js__WEBPACK_IMPORTED_MODULE_5__["Texture"]);
;

function KhronosTextureContainer(buffer) {
  var idCheck = [0xab, 0x4b, 0x54, 0x58, 0x20, 0x31, 0x31, 0xbb, 0x0d, 0x0a, 0x1a, 0x0a];
  var id = new Uint8Array(buffer, 0, 12);

  for (var i = 0; i < id.length; i++) {
    if (id[i] !== idCheck[i]) return console.error('File missing KTX identifier');
  } // TODO: Is this always 4? Tested: [android, macos]


  var size = Uint32Array.BYTES_PER_ELEMENT;
  var head = new DataView(buffer, 12, 13 * size);
  var littleEndian = head.getUint32(0, true) === 0x04030201;
  var glType = head.getUint32(1 * size, littleEndian);
  if (glType !== 0) return console.warn('only compressed formats currently supported');
  this.glInternalFormat = head.getUint32(4 * size, littleEndian);
  var width = head.getUint32(6 * size, littleEndian);
  var height = head.getUint32(7 * size, littleEndian);
  this.numberOfFaces = head.getUint32(10 * size, littleEndian);
  this.numberOfMipmapLevels = Math.max(1, head.getUint32(11 * size, littleEndian));
  var bytesOfKeyValueData = head.getUint32(12 * size, littleEndian);
  this.mipmaps = [];
  var offset = 12 + 13 * 4 + bytesOfKeyValueData;

  for (var level = 0; level < this.numberOfMipmapLevels; level++) {
    var levelSize = new Int32Array(buffer, offset, 1)[0]; // size per face, since not supporting array cubemaps

    offset += 4; // levelSize field

    for (var face = 0; face < this.numberOfFaces; face++) {
      var data = new Uint8Array(buffer, offset, levelSize);
      this.mipmaps.push({
        data: data,
        width: width,
        height: height
      });
      offset += levelSize;
      offset += 3 - (levelSize + 3) % 4; // add padding for odd sized image
    }

    width = width >> 1;
    height = height >> 1;
  }
}

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureLoader", function() { return TextureLoader; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _KTXTexture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);




 // TODO: store cache with arguments
// For compressed textures, generate using https://github.com/TimvanScherpenzeel/texture-compressor

var cache = {};
var supportedExtensions = [];
var TextureLoader =
/*#__PURE__*/
function () {
  function TextureLoader() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TextureLoader);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TextureLoader, null, [{
    key: "load",
    value: function load(gl) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          src = _ref.src,
          _ref$wrapS = _ref.wrapS,
          wrapS = _ref$wrapS === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapS,
          _ref$wrapT = _ref.wrapT,
          wrapT = _ref$wrapT === void 0 ? gl.CLAMP_TO_EDGE : _ref$wrapT,
          _ref$anisotropy = _ref.anisotropy,
          anisotropy = _ref$anisotropy === void 0 ? 0 : _ref$anisotropy,
          _ref$format = _ref.format,
          format = _ref$format === void 0 ? gl.RGBA : _ref$format,
          _ref$internalFormat = _ref.internalFormat,
          internalFormat = _ref$internalFormat === void 0 ? format : _ref$internalFormat,
          _ref$generateMipmaps = _ref.generateMipmaps,
          generateMipmaps = _ref$generateMipmaps === void 0 ? true : _ref$generateMipmaps,
          _ref$minFilter = _ref.minFilter,
          minFilter = _ref$minFilter === void 0 ? generateMipmaps ? gl.NEAREST_MIPMAP_LINEAR : gl.LINEAR : _ref$minFilter,
          _ref$magFilter = _ref.magFilter,
          magFilter = _ref$magFilter === void 0 ? gl.LINEAR : _ref$magFilter,
          _ref$premultiplyAlpha = _ref.premultiplyAlpha,
          premultiplyAlpha = _ref$premultiplyAlpha === void 0 ? false : _ref$premultiplyAlpha,
          _ref$unpackAlignment = _ref.unpackAlignment,
          unpackAlignment = _ref$unpackAlignment === void 0 ? 4 : _ref$unpackAlignment,
          _ref$flipY = _ref.flipY,
          flipY = _ref$flipY === void 0 ? true : _ref$flipY;

      var support = this.getSupportedExtensions(gl);
      var ext = 'none'; // If src is string, determine which format from the extension

      if (typeof src === 'string') {
        ext = src.split('.').pop().split('?')[0].toLowerCase();
      } // If src is object, use supported extensions and provided list to choose best option
      // Get first supported match, so put in order of preference


      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(src) === 'object') {
        for (var prop in src) {
          if (support.includes(prop.toLowerCase())) {
            ext = prop.toLowerCase();
            src = src[prop];
            break;
          }
        }
      }

      var texture;

      switch (ext) {
        case 'ktx':
        case 'pvrtc':
        case 's3tc':
        case 'etc':
        case 'etc1':
        case 'astc':
          // Load compressed texture using KTX format
          texture = new _KTXTexture_js__WEBPACK_IMPORTED_MODULE_4__["KTXTexture"](gl, {
            src: src,
            wrapS: wrapS,
            wrapT: wrapT,
            anisotropy: anisotropy
          });
          this.loadKTX(src, texture);
          break;

        case 'webp':
        case 'jpg':
        case 'jpeg':
        case 'png':
          texture = new _core_Texture_js__WEBPACK_IMPORTED_MODULE_3__["Texture"](gl, {
            wrapS: wrapS,
            wrapT: wrapT,
            anisotropy: anisotropy,
            format: format,
            internalFormat: internalFormat,
            generateMipmaps: generateMipmaps,
            minFilter: minFilter,
            magFilter: magFilter,
            premultiplyAlpha: premultiplyAlpha,
            unpackAlignment: unpackAlignment,
            flipY: flipY
          });
          this.loadImage(gl, src, texture);
          break;

        default:
          console.warn('No supported format supplied');
          texture = new _core_Texture_js__WEBPACK_IMPORTED_MODULE_3__["Texture"](gl);
      }

      texture.format = ext; // TODO: store in cache

      return texture;
    }
  }, {
    key: "getSupportedExtensions",
    value: function getSupportedExtensions(gl) {
      if (supportedExtensions.length) return supportedExtensions;
      var extensions = {
        pvrtc: gl.renderer.getExtension('WEBGL_compressed_texture_pvrtc'),
        s3tc: gl.renderer.getExtension('WEBGL_compressed_texture_s3tc'),
        etc: gl.renderer.getExtension('WEBGL_compressed_texture_etc'),
        etc1: gl.renderer.getExtension('WEBGL_compressed_texture_etc1'),
        astc: gl.renderer.getExtension('WEBGL_compressed_texture_astc')
      };

      for (var ext in extensions) {
        if (extensions[ext]) supportedExtensions.push(ext);
      } // Check for WebP support


      if (detectWebP) supportedExtensions.push('webp'); // Formats supported by all

      supportedExtensions.push('png', 'jpg');
      return supportedExtensions;
    }
  }, {
    key: "loadKTX",
    value: function loadKTX(src, texture) {
      fetch(src).then(function (res) {
        return res.arrayBuffer();
      }).then(function (buffer) {
        return texture.parseBuffer(buffer);
      });
    }
  }, {
    key: "loadImage",
    value: function loadImage(gl, src, texture) {
      decodeImage(src).then(function (imgBmp) {
        // Catch non POT textures and update params to avoid errors
        if (!powerOfTwo(imgBmp.width) || !powerOfTwo(imgBmp.height)) {
          if (texture.generateMipmaps) texture.generateMipmaps = false;
          if (texture.minFilter === gl.NEAREST_MIPMAP_LINEAR) texture.minFilter = gl.LINEAR;
          if (texture.wrapS === gl.REPEAT) texture.wrapS = texture.wrapT = gl.CLAMP_TO_EDGE;
        }

        texture.image = imgBmp; // For createImageBitmap, close once uploaded

        texture.onUpdate = function () {
          if (imgBmp.close) imgBmp.close();
          texture.onUpdate = null;
        };
      });
    }
  }]);

  return TextureLoader;
}();

function detectWebP() {
  return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}

function powerOfTwo(value) {
  return Math.log2(value) % 1 === 0;
}

function decodeImage(src) {
  return new Promise(function (resolve) {
    var img = new Image();
    img.src = src; // Only chrome's implementation of createImageBitmap is fully supported

    var isChrome = navigator.userAgent.toLowerCase().includes('chrome');

    if (!!window.createImageBitmap && isChrome) {
      img.onload = function () {
        createImageBitmap(img, {
          imageOrientation: 'flipY',
          premultiplyAlpha: 'none'
        }).then(function (imgBmp) {
          resolve(imgBmp);
        });
      };
    } else {
      img.onload = function () {
        return resolve(img);
      };
    }
  });
}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__65__;

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer3D; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1);
/* harmony import */ var _helper_shadow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(73);
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74);
/* harmony import */ var _group3d__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(78);















function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var defaultOption = {
  depth: true,
  alpha: true
};

var _controls = Symbol('orbit_controls');

var _orbitChecker = Symbol('orbit_checker');

var _orbitChecking = Symbol('orbit_checking');

var _utime = Symbol('utime');

var _shadow = Symbol('shadow');

var _directionalLight = Symbol('directionalLight');

var _pointLightPosition = Symbol('pointLightPosition');

var _pointLightColor = Symbol('pointLightColor');

var _ambientColor = Symbol('ambientColor');

var Layer3D =
/*#__PURE__*/
function (_Layer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_13___default()(Layer3D, _Layer);

  function Layer3D() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Layer3D);

    if (options.contextType === '2d') {
      throw new TypeError('Cannot create 3d layer in 2d context.');
    }

    if (!options.Renderer) {
      options.Renderer = function (canvas, opts) {
        opts = Object.assign({}, defaultOption, opts);
        var renderer = new ogl__WEBPACK_IMPORTED_MODULE_15__["Renderer"](_objectSpread({
          canvas: canvas
        }, opts)); // TODO: 支持粘连模式??

        renderer.globalTransformMatrix = [1, 0, 0, 1, 0, 0];

        renderer.setGlobalTransform = function (matrix) {};

        return renderer;
      };
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(Layer3D).call(this, options));
    _this[_utime] = [];
    _this[_directionalLight] = options.directionalLight || [1, 0, 0, 0];
    _this[_pointLightPosition] = options.pointLightPosition || [0, 0, 0];
    _this[_pointLightColor] = options.pointLightColor || [0, 0, 0, 0];
    _this[_ambientColor] = options.ambientColor || [1, 1, 1, 0];
    var gl = _this.renderer.gl;
    gl.clearColor.apply(gl, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(_this[_ambientColor]));
    var cameraOptions = options.camera || {};
    var camera = new _camera__WEBPACK_IMPORTED_MODULE_17__["default"](gl, _objectSpread({
      parent: _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this)
    }, cameraOptions));
    camera.connect(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this), 0);
    _this.camera = camera;
    _this.root = new _group3d__WEBPACK_IMPORTED_MODULE_18__["default"]();

    _this.root.connect(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10___default()(_this), 0);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Layer3D, [{
    key: "setResolution",

    /* override */
    value: function setResolution(_ref) {
      var width = _ref.width,
          height = _ref.height;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(Layer3D.prototype), "setResolution", this).call(this, {
        width: width,
        height: height
      });

      var displayRatio = this.displayRatio;
      var renderer = this.renderer;
      this.renderer.dpr = displayRatio;
      renderer.width = width / displayRatio;
      renderer.height = height / displayRatio;
      var gl = renderer.gl;
      gl.canvas.width = width;
      gl.canvas.height = height;
      var camera = this.camera;

      if (camera) {
        camera.attributes.aspect = width / height; // camera.body.perspective({
        //   aspect: width / height,
        // });
      }
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(program, uniforms) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_12___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11___default()(Layer3D.prototype), "setUniforms", this).call(this, uniforms);

      Object.entries(uniforms).forEach(function (_ref2) {
        var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_4___default()(_ref2, 2),
            key = _ref3[0],
            value = _ref3[1];

        program.uniforms[key] = {
          value: value
        };
      });
      this.forceUpdate();
    }
  }, {
    key: "setLights",
    value: function setLights(program, _ref4) {
      var directionalLight = _ref4.directionalLight,
          pointLightPosition = _ref4.pointLightPosition,
          pointLightColor = _ref4.pointLightColor,
          ambientColor = _ref4.ambientColor;
      program.uniforms.directionalLight = {
        value: directionalLight
      };
      program.uniforms.pointLightPosition = {
        value: pointLightPosition
      };
      program.uniforms.pointLightColor = {
        value: pointLightColor
      };
      program.uniforms.ambientColor = {
        value: ambientColor
      };
      this.forceUpdate();
    }
    /* {vertex, fragment, uniforms = {}} */

  }, {
    key: "createProgram",
    value: function createProgram() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          attributes = _ref5.attributes,
          texture = _ref5.texture,
          uniforms = _ref5.uniforms,
          options = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref5, ["attributes", "texture", "uniforms"]);

      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          extraAttributes = _ref6.attributes,
          extraUniforms = _ref6.uniforms;

      var gl = this.renderer.gl;

      if (uniforms) {
        options.uniforms = _objectSpread({}, uniforms);
      }

      var program = new ogl__WEBPACK_IMPORTED_MODULE_15__["Program"](gl, options);
      if (extraAttributes) program.extraAttribute = Object.assign({}, attributes, extraAttributes);
      program.uniforms.directionalLight = {
        value: this[_directionalLight]
      };
      program.uniforms.pointLightPosition = {
        value: this[_pointLightPosition]
      };
      program.uniforms.pointLightColor = {
        value: this[_pointLightColor]
      };
      program.uniforms.ambientColor = {
        value: this[_ambientColor]
      };
      if (texture) program.uniforms.tMap = {
        value: texture
      };
      if (extraUniforms) Object.assign(program.uniforms, extraUniforms);
      return program;
    }
  }, {
    key: "setOrbit",
    value: function setOrbit() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this[_orbitChecker]) {
        this[_orbitChecker] = [function () {
          _this2[_orbitChecking] = true;
        }, function () {
          _this2[_orbitChecking] = false;
        }, function () {
          if (_this2[_orbitChecking]) {
            _this2.forceUpdate();
          }
        }, function () {
          _this2.forceUpdate();
        }];
      }

      var camera = this.camera;

      if (this[_controls]) {
        this[_controls].remove();

        this.removeEventListener('mousedown', this[_orbitChecker][0]);
        this.removeEventListener('mouseup', this[_orbitChecker][1]);
        this.removeEventListener('mousemove', this[_orbitChecker][2]);
        this.removeEventListener('touchstart', this[_orbitChecker][3]);
        this.removeEventListener('touchend', this[_orbitChecker][3]);
        this.removeEventListener('touchmove', this[_orbitChecker][3]);
        this.removeEventListener('wheel', this[_orbitChecker][3], false);
      }

      if (options == null) {
        delete this[_controls];
        return null;
      }

      var target = options.target || [0, 0, 0];
      options.target = _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_2___default()(ogl__WEBPACK_IMPORTED_MODULE_15__["Vec3"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(target));
      options.element = options.element || this.parent.container;
      this[_controls] = new ogl__WEBPACK_IMPORTED_MODULE_15__["Orbit"](camera.body, options);
      this.addEventListener('mousedown', this[_orbitChecker][0]);
      this.addEventListener('mouseup', this[_orbitChecker][1]);
      this.addEventListener('mousemove', this[_orbitChecker][2]);
      this.addEventListener('touchstart', this[_orbitChecker][3]);
      this.addEventListener('touchend', this[_orbitChecker][3]);
      this.addEventListener('touchmove', this[_orbitChecker][3]);
      this.addEventListener('wheel', this[_orbitChecker][3], false);
      return this[_controls];
    }
  }, {
    key: "setRaycast",
    value: function setRaycast() {
      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (enable) {
        var gl = this.renderer.gl;
        this.raycast = new ogl__WEBPACK_IMPORTED_MODULE_15__["Raycast"](gl);
      } else {
        delete this.raycast;
      }
    }
  }, {
    key: "bindTime",
    value: function bindTime(program) {
      program.timeline = this.timeline.fork();

      this[_utime].push(program);

      this.forceUpdate();
    }
  }, {
    key: "unbindTime",
    value: function unbindTime(program) {
      var idx = this[_utime].indexOf(program);

      if (idx >= 0) {
        this[_utime].splice(idx, 1);

        return true;
      }

      return false;
    }
  }, {
    key: "loadImage",
    value: function () {
      var _loadImage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(src) {
        var image;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return spritejs__WEBPACK_IMPORTED_MODULE_14__["ENV"].loadImage(src);

              case 2:
                image = _context.sent;
                return _context.abrupt("return", image);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadImage(_x) {
        return _loadImage.apply(this, arguments);
      }

      return loadImage;
    }()
  }, {
    key: "loadModel",
    value: function () {
      var _loadModel = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(src) {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(src);

              case 2:
                _context2.next = 4;
                return _context2.sent.json();

              case 4:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function loadModel(_x2) {
        return _loadModel.apply(this, arguments);
      }

      return loadModel;
    }()
  }, {
    key: "createTexture",
    value: function createTexture(opts) {
      var _this3 = this;

      var gl = this.renderer.gl;
      var src;

      if (typeof opts === 'string') {
        src = opts;
        opts = {};
      }

      if (typeof opts.image === 'string') {
        src = opts.image;
        opts = _objectSpread({}, opts);
        delete opts.image;
      }

      var texture = new ogl__WEBPACK_IMPORTED_MODULE_15__["Texture"](gl, opts);

      if (src) {
        this.loadImage(src).then(function (res) {
          texture.image = res;

          _this3.forceUpdate();
        });
        return texture;
      }

      return texture;
    }
  }, {
    key: "createShadow",
    value: function createShadow() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$width = _ref7.width,
          width = _ref7$width === void 0 ? this.canvas.width : _ref7$width,
          _ref7$height = _ref7.height,
          height = _ref7$height === void 0 ? this.canvas.height : _ref7$height,
          _ref7$light = _ref7.light,
          light = _ref7$light === void 0 ? this.camera : _ref7$light;

      var gl = this.renderer.gl;
      return new _helper_shadow__WEBPACK_IMPORTED_MODULE_16__["default"](gl, {
        width: width,
        height: height,
        light: light.body
      });
    }
  }, {
    key: "setShadow",
    value: function setShadow(shadow) {
      this[_shadow] = shadow;
      this.forceUpdate();
    }
  }, {
    key: "dispatchPointerEvent",

    /* override */
    value: function dispatchPointerEvent(event) {
      var raycast = this.raycast;

      if (raycast) {
        var mouse = new ogl__WEBPACK_IMPORTED_MODULE_15__["Vec2"]();
        var renderer = this.renderer;
        mouse.set(2.0 * (event.x / renderer.width) - 1.0, 2.0 * (1.0 - event.y / renderer.height) - 1.0);
        raycast.castMouse(this.camera.body, mouse);
        var hits = raycast.intersectBounds(this.meshes);

        if (hits && hits.length) {
          var target = hits[0];
          event.target = target._node;
          event.mouse = mouse;

          target._node.dispatchEvent(event);

          return true;
        }
      }

      return spritejs__WEBPACK_IMPORTED_MODULE_14__["Block"].prototype.dispatchPointerEvent.call(this, event);
    }
    /* override */

  }, {
    key: "render",
    value: function render() {
      if (this[_controls]) {
        this[_controls].update();
      }

      if (this[_shadow]) {
        this[_shadow].render({
          scene: this.root.body
        });
      }

      this.renderer.render({
        scene: this.root.body,
        camera: this.camera.body
      });

      this._prepareRenderFinished();

      if (this[_utime].length) {
        this[_utime].forEach(function (program) {
          program.uniforms.uTime = {
            value: program.timeline.currentTime * 0.001
          };
        });

        this.forceUpdate();
      }
    }
  }, {
    key: "body",
    get: function get() {
      return this.root ? this.root.body : null;
    }
  }, {
    key: "gl",
    get: function get() {
      return this.renderer.gl;
    }
  }, {
    key: "meshes",
    get: function get() {
      var children = this.children;
      var ret = [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.meshes && child.meshes.length) ret.push.apply(ret, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_5___default()(child.meshes));
      }

      return ret;
    }
  }, {
    key: "orbitControls",
    get: function get() {
      return this[_controls];
    }
  }, {
    key: "shadow",
    get: function get() {
      return this[_shadow];
    }
  }]);

  return Layer3D;
}(spritejs__WEBPACK_IMPORTED_MODULE_14__["Layer"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_14__["registerNode"])(Layer3D, 'layer3d');

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(68);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 69 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(71);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Shadow; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);








var _Shadow =
/*#__PURE__*/
function (_Shadow2) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(_Shadow, _Shadow2);

  function _Shadow() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _Shadow);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_Shadow).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_Shadow, [{
    key: "add",
    value: function add(opts) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_Shadow.prototype), "add", this).call(this, opts);
    }
  }]);

  return _Shadow;
}(ogl__WEBPACK_IMPORTED_MODULE_6__["Shadow"]);



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Camera; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var _node3d__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(75);
/* harmony import */ var _attribute_camera__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77);













var _Camera =
/*#__PURE__*/
function (_Node3d) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(_Camera, _Node3d);

  function _Camera(gl, _ref) {
    var _this;

    var parent = _ref.parent,
        _ref$fov = _ref.fov,
        fov = _ref$fov === void 0 ? 45 : _ref$fov,
        _ref$near = _ref.near,
        near = _ref$near === void 0 ? 0.1 : _ref$near,
        _ref$far = _ref.far,
        far = _ref$far === void 0 ? 100 : _ref$far,
        _ref$aspect = _ref.aspect,
        aspect = _ref$aspect === void 0 ? 1 : _ref$aspect,
        left = _ref.left,
        right = _ref.right,
        bottom = _ref.bottom,
        top = _ref.top,
        attrs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["parent", "fov", "near", "far", "aspect", "left", "right", "bottom", "top"]);

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, _Camera);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(_Camera).call(this));

    _this.setBody(new ogl__WEBPACK_IMPORTED_MODULE_9__["Camera"](gl, {
      fov: fov,
      near: near,
      far: far,
      aspect: aspect,
      left: left,
      right: right,
      bottom: bottom,
      top: top
    }));

    if (attrs) _this.attr(attrs);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(_Camera, [{
    key: "lookAt",
    value: function lookAt(target) {
      if (target.body) target = target.body;
      return this.body.lookAt(target);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(_Camera.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (this.body) {
        if (key === 'near' || key === 'far' || key === 'fov' || key === 'aspect') {
          var value = key === 'fov' ? newValue * (Math.PI / 180) : newValue;
          this.body.perspective(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()({}, key, value));
        }
      }
    }
  }]);

  return _Camera;
}(_node3d__WEBPACK_IMPORTED_MODULE_10__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_Camera, "Attr", _attribute_camera__WEBPACK_IMPORTED_MODULE_11__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_8__["registerNode"])(_Camera, 'camera');

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node3d; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _attribute_attr3d__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76);











var _body = Symbol('body');

var changedAttrs = Symbol.for('spritejs_changedAttrs');

var Node3d =
/*#__PURE__*/
function (_Node) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Node3d, _Node);

  function Node3d() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Node3d);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Node3d).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Node3d, [{
    key: "setBody",
    value: function setBody(body) {
      var oldBody = this[_body];
      this[_body] = body;

      if (oldBody && oldBody.parent) {
        oldBody.setParent(null);
      }

      if (this.parent && this.parent.body) {
        this[_body].setParent(this.parent.body);
      }

      var _changedAttrs = Object.entries(this.attributes[changedAttrs]);

      for (var i = 0; i < _changedAttrs.length; i++) {
        var _changedAttrs$i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_changedAttrs[i], 2),
            key = _changedAttrs$i[0],
            value = _changedAttrs$i[1];

        this.onPropertyChange(key, value, value);
      }

      var uniforms = this.uniforms;

      if (uniforms) {
        this.setUniforms(uniforms);
      }

      if (!uniforms && _changedAttrs.length <= 0) this.forceUpdate();
      body._node = this;

      if (this.groupBody) {
        this.groupBody.setParent(body);
      }
    }
    /* override */

  }, {
    key: "setUniforms",
    value: function setUniforms(uniforms) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Node3d.prototype), "setUniforms", this).call(this, uniforms);

      if (this.body && this.body.program) {
        var program = this.body.program;
        Object.entries(uniforms).forEach(function (_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          program.uniforms[key] = {
            value: value
          };
        });
      }
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Node3d.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (this.body) {
        if (key === 'x' || key === 'y' || key === 'z') {
          this.body.position[key] = newValue;
        }

        if (key === 'rotateX' || key === 'rotateY' || key === 'rotateZ') {
          var value = newValue * Math.PI / 180;
          this.body.rotation[key.toLowerCase().slice(-1)] = value;
        }

        if (key === 'scaleX' || key === 'scaleY' || key === 'scaleZ') {
          this.body.scale[key.toLowerCase().slice(-1)] = newValue;
        }

        if (key === 'raycast') {
          this.body.geometry.raycast = newValue;
        }
      }
    }
    /* override */

  }, {
    key: "connect",
    value: function connect(parent, zOrder) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Node3d.prototype), "connect", this).call(this, parent, zOrder);

      if (this.body) {
        var parentBody = parent.groupBody || parent.body;

        if (parentBody && parentBody !== this.body) {
          this.body.setParent(parentBody);
        }
      }
    }
    /* override */

  }, {
    key: "disconnect",
    value: function disconnect(parent, zOrder) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Node3d.prototype), "disconnect", this).call(this, parent, zOrder);

      if (this.body) {
        this.body.setParent(null);
      }
    }
  }, {
    key: "body",
    get: function get() {
      if (this[_body]) {
        return this[_body];
      }

      return null;
    }
  }, {
    key: "mesh",
    get: function get() {
      return this.body;
    }
  }, {
    key: "meshes",
    get: function get() {
      return [];
    }
  }, {
    key: "localMatrix",
    get: function get() {
      if (this[_body]) {
        return this[_body].matrix;
      }

      return null;
    }
  }, {
    key: "renderMatrix",
    get: function get() {
      if (this[_body]) {
        return this[_body].worldMatrix;
      }

      return null;
    } // the matrix with camera

  }, {
    key: "modelViewMatrix",
    get: function get() {
      if (this[_body]) {
        return this[_body].modelViewMatrix;
      }

      return null;
    } // normal transform matrix

  }, {
    key: "normalMatrix",
    get: function get() {
      if (this[_body]) {
        return this[_body].normalMatrix;
      }

      return null;
    }
  }, {
    key: "isVisible",
    get: function get() {
      if (this[_body]) {
        return this[_body].visible;
      }

      return false;
    }
  }, {
    key: "zDepth",
    get: function get() {
      if (this[_body]) {
        return this[_body].zDepth;
      }

      return null;
    }
  }]);

  return Node3d;
}(spritejs__WEBPACK_IMPORTED_MODULE_8__["Node"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(Node3d, "Attr", _attribute_attr3d__WEBPACK_IMPORTED_MODULE_9__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_8__["registerNode"])(Node3d, 'node3d');

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attr3d; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_5__);






var Attr = spritejs__WEBPACK_IMPORTED_MODULE_5__["Node"].Attr;
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');
var declareAlias = Symbol.for('spritejs_declareAlias');

var Attr3d =
/*#__PURE__*/
function (_Attr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Attr3d, _Attr);

  function Attr3d(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Attr3d);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Attr3d).call(this, subject));

    _this[setDefault]({
      z: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,

      /* rotate */
      scaleX: 0,
      scaleY: 0,
      scaleZ: 0,

      /* scale */
      raycast: undefined
    });

    _this[declareAlias]('rotate', 'scale');

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Attr3d, [{
    key: "z",
    get: function get() {
      return this[getAttribute]('z');
    },
    set: function set(value) {
      this[setAttribute]('z', value);
    }
  }, {
    key: "raycast",
    get: function get() {
      return this[getAttribute]('raycast');
    },
    set: function set(value) {
      this[setAttribute]('raycast', value);
    }
    /* override */

  }, {
    key: "pos",
    get: function get() {
      return [this.x, this.y, this.z];
    },
    set: function set(value) {
      if (!Array.isArray(value)) value = [value, value, value];
      this.x = value[0] || 0;
      this.y = value[1] || 0;
      this.z = value[2] || 0;
    }
  }, {
    key: "rotateX",
    get: function get() {
      return this[getAttribute]('rotateX');
    },
    set: function set(value) {
      this[setAttribute]('rotateX', value);
    }
  }, {
    key: "rotateY",
    get: function get() {
      return this[getAttribute]('rotateY');
    },
    set: function set(value) {
      this[setAttribute]('rotateY', value);
    }
  }, {
    key: "rotateZ",
    get: function get() {
      return this[getAttribute]('rotateZ');
    },
    set: function set(value) {
      this[setAttribute]('rotateZ', value);
    }
    /* override */

  }, {
    key: "rotate",
    get: function get() {
      return [this.rotateX, this.rotateY, this.rotateZ];
    },
    set: function set(value) {
      if (!Array.isArray(value)) value = [value, 0, 0];
      this.rotateX = value[0] || 0;
      this.rotateY = value[1] || 0;
      this.rotateZ = value[2] || 0;
    }
  }, {
    key: "scaleX",
    get: function get() {
      return this[getAttribute]('scaleX');
    },
    set: function set(value) {
      this[setAttribute]('scaleX', value);
    }
  }, {
    key: "scaleY",
    get: function get() {
      return this[getAttribute]('scaleY');
    },
    set: function set(value) {
      this[setAttribute]('scaleY', value);
    }
  }, {
    key: "scaleZ",
    get: function get() {
      return this[getAttribute]('scaleZ');
    },
    set: function set(value) {
      this[setAttribute]('scaleZ', value);
    }
    /* override */

  }, {
    key: "scale",
    get: function get() {
      return [this.scaleX, this.scaleY, this.scaleZ];
    },
    set: function set(value) {
      if (!Array.isArray(value)) value = [value, value, value];
      this.scaleX = value[0] || 0;
      this.scaleY = value[1] || 0;
      this.scaleZ = value[2] || 0;
    }
  }]);

  return Attr3d;
}(Attr);



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameraAttr; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _attr3d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76);






var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var GameraAttr =
/*#__PURE__*/
function (_Attr3d) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(GameraAttr, _Attr3d);

  function GameraAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GameraAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(GameraAttr).call(this, subject));

    _this[setDefault]({
      near: 0.1,
      far: 100,
      fov: 45,
      aspect: 1,
      left: undefined,
      right: undefined,
      bottom: undefined,
      top: undefined
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GameraAttr, [{
    key: "near",
    get: function get() {
      return this[getAttribute]('near');
    },
    set: function set(value) {
      this[setAttribute]('near', value);
    }
  }, {
    key: "far",
    get: function get() {
      return this[getAttribute]('far');
    },
    set: function set(value) {
      this[setAttribute]('far', value);
    }
  }, {
    key: "fov",
    get: function get() {
      return this[getAttribute]('fov');
    },
    set: function set(value) {
      this[setAttribute]('fov', value);
    }
  }, {
    key: "aspect",
    get: function get() {
      return this[getAttribute]('aspect');
    },
    set: function set(value) {
      this[setAttribute]('aspect', value);
    }
  }, {
    key: "left",
    get: function get() {
      return this[getAttribute]('left');
    },
    set: function set(value) {
      this[setAttribute]('left', value);
    }
  }, {
    key: "right",
    get: function get() {
      return this[getAttribute]('right');
    },
    set: function set(value) {
      this[setAttribute]('right', value);
    }
  }, {
    key: "top",
    get: function get() {
      return this[getAttribute]('top');
    },
    set: function set(value) {
      this[setAttribute]('top', value);
    }
  }, {
    key: "bottom",
    get: function get() {
      return this[getAttribute]('bottom');
    },
    set: function set(value) {
      this[setAttribute]('bottom', value);
    }
  }]);

  return GameraAttr;
}(_attr3d__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group3d; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _node3d__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75);











var _zOrder = Symbol('zOrder');

var _children = Symbol('children');

var Group3d =
/*#__PURE__*/
function (_Node3d) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Group3d, _Node3d);

  function Group3d() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Group3d);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Group3d).call(this, attrs));

    _this.setBody(new ogl__WEBPACK_IMPORTED_MODULE_8__["Transform"]());

    _this[_children] = [];
    _this[_zOrder] = 0;
    return _this;
  }
  /* override */
  // setBody(body) {
  //   if(!this.body) {
  //     super.setBody(body);
  //   } else {
  //     throw new Error('Cannot reset the body of group3d.');
  //   }
  // }


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Group3d, [{
    key: "append",
    value: function append() {
      var _this2 = this;

      for (var _len = arguments.length, els = new Array(_len), _key = 0; _key < _len; _key++) {
        els[_key] = arguments[_key];
      }

      return els.map(function (el) {
        return _this2.appendChild(el);
      });
    }
  }, {
    key: "appendChild",
    value: function appendChild(el) {
      el.remove();
      this.children.push(el);
      el.connect(this, this[_zOrder]++);
      return el;
    }
    /* override */

  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var node = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Group3d.prototype), "cloneNode", this).call(this);

      if (deep) {
        this[_children].forEach(function (child) {
          var childNode = child.cloneNode(deep);
          node.appendChild(childNode);
        });
      }

      return node;
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      return spritejs__WEBPACK_IMPORTED_MODULE_7__["Group"].prototype.querySelector.call(this, "#".concat(id));
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return spritejs__WEBPACK_IMPORTED_MODULE_7__["Group"].prototype.querySelectorAll.call(this, ".".concat(className));
    }
  }, {
    key: "getElementsByName",
    value: function getElementsByName(name) {
      return spritejs__WEBPACK_IMPORTED_MODULE_7__["Group"].prototype.querySelectorAll.call(this, "[name=\"".concat(name, "\"]"));
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      return spritejs__WEBPACK_IMPORTED_MODULE_7__["Group"].prototype.querySelectorAll.call(this, tagName);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(el, ref) {
      if (ref == null) return this.appendChild(el);
      el.remove();

      var refIdx = this[_children].indexOf(ref);

      if (refIdx < 0) {
        throw new Error('Invalid reference node.');
      }

      var zOrder = ref.zOrder;

      for (var i = refIdx; i < this[_children].length; i++) {
        var order = this[_children][i].zOrder;
        var child = this[_children][i];
        delete child.zOrder;
        Object.defineProperty(child, 'zOrder', {
          value: order + 1,
          writable: false,
          configurable: true
        });
      }

      this[_children].splice(refIdx, 0, el);

      el.connect(this, zOrder);
      return el;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      return spritejs__WEBPACK_IMPORTED_MODULE_7__["Group"].prototype.querySelector.call(this, selector);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selector) {
      return spritejs__WEBPACK_IMPORTED_MODULE_7__["Group"].prototype.querySelectorAll.call(this, selector);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(el, ref) {
      el.remove();

      var refIdx = this[_children].indexOf(ref);

      if (refIdx < 0) {
        throw new Error('Invalid reference node.');
      }

      this[_children][refIdx] = el;
      el.connect(this, ref.zOrder);
      ref.disconnect();
      return el;
    }
  }, {
    key: "removeAllChildren",
    value: function removeAllChildren() {
      var children = this[_children];

      for (var i = children.length - 1; i >= 0; i--) {
        children[i].remove();
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(el) {
      var idx = this[_children].indexOf(el);

      if (idx >= 0) {
        this[_children].splice(idx, 1);

        el.disconnect();
        return el;
      }

      return null;
    }
    /* override */

  }, {
    key: "setResolution",
    value: function setResolution(_ref) {
      var width = _ref.width,
          height = _ref.height;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Group3d.prototype), "setResolution", this).call(this, {
        width: width,
        height: height
      });

      this[_children].forEach(function (child) {
        child.setResolution({
          width: width,
          height: height
        });
      });
    }
  }, {
    key: "childNodes",
    get: function get() {
      return this[_children];
    }
  }, {
    key: "children",
    get: function get() {
      return this[_children];
    }
  }, {
    key: "meshes",
    get: function get() {
      var children = this.children;
      var ret = [];

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.meshes && child.meshes.length) ret.push.apply(ret, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(child.meshes));
      }

      return ret;
    }
  }]);

  return Group3d;
}(_node3d__WEBPACK_IMPORTED_MODULE_9__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_7__["registerNode"])(Group3d, 'group3d');

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mesh3d; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1);
/* harmony import */ var _group3d__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78);











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var changedAttrs = Symbol.for('spritejs_changedAttrs');

var _program = Symbol('program');

var _geometry = Symbol('geometry');

var _model = Symbol('model');

var _mode = Symbol('mode');

var Mesh3d =
/*#__PURE__*/
function (_Group3d) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Mesh3d, _Group3d);

  function Mesh3d(program) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        model = _ref.model,
        attrs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["model"]);

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Mesh3d);

    if (program && !(program instanceof ogl__WEBPACK_IMPORTED_MODULE_11__["Program"])) {
      attrs = program;
      program = null;
    }

    var mode = attrs.mode;

    if (mode) {
      attrs = _objectSpread({}, attrs);
      delete attrs.mode;
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Mesh3d).call(this, attrs));
    _this.groupBody = _this.body;
    _this[_mode] = mode || 'TRIANGLES';

    if (program) {
      _this.setProgram(program);
    }

    if (model) {
      _this.setGeometry(model);
    }

    return _this;
  }
  /* override */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Mesh3d, [{
    key: "cloneNode",
    value: function cloneNode() {
      var cloned = new this.constructor(this[_program]);
      var attrs = this.attributes[changedAttrs];
      cloned[_mode] = this[_mode];
      cloned.setGeometry(this[_model]);
      cloned.attr(attrs);
      return cloned;
    }
  }, {
    key: "setProgram",
    value: function setProgram(program) {
      this[_program] = program;
      var gl = program.gl;
      var geometry = this[_geometry];

      if (geometry) {
        var mesh = new ogl__WEBPACK_IMPORTED_MODULE_11__["Mesh"](gl, {
          mode: gl[this[_mode]],
          geometry: geometry,
          program: program
        });
        this.setBody(mesh);
      }
    }
  }, {
    key: "setGeometry",
    value: function setGeometry(model) {
      var _this2 = this;

      function parseData(data) {
        var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
        var d = data.data || data;
        if (Array.isArray(d)) d = new Float32Array(d);
        var s = data.size || size;

        if (data.data) {
          data.data = d;
          data.size = s;
          return data;
        }

        return {
          size: s,
          data: d
        };
      }

      var program = this[_program];
      var gl = program.gl;
      var geometry;

      if (model instanceof ogl__WEBPACK_IMPORTED_MODULE_11__["Geometry"]) {
        geometry = model;
      } else {
        var position = model.position,
            uv = model.uv,
            normal = model.normal,
            index = model.index,
            others = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(model, ["position", "uv", "normal", "index"]);

        var geometryData = {};
        if (position) geometryData.position = parseData(position);
        if (uv) geometryData.uv = parseData(uv, 2);
        if (normal) geometryData.normal = parseData(normal);

        if (index) {
          var data = index.data || index;
          if (Array.isArray(data)) data = new Uint16Array(data);
          geometryData.index = {
            data: data
          };
        }

        if (others) {
          var positionCount;
          var _position = geometryData.position;

          if (_position) {
            positionCount = _position.data.length / _position.size;
          }

          Object.entries(others).forEach(function (_ref2) {
            var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, 2),
                key = _ref3[0],
                value = _ref3[1];

            var size = 3;

            if (!value.size) {
              var length = value.data ? value.data.length : value.length;
              if (length && positionCount) size = length / positionCount;
            }

            geometryData[key] = parseData(value, size);
          });
        }

        geometry = new ogl__WEBPACK_IMPORTED_MODULE_11__["Geometry"](gl, geometryData);
      }

      var extraAttrs = program.extraAttribute;

      if (extraAttrs) {
        Object.entries(extraAttrs).forEach(function (_ref4) {
          var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref4, 2),
              key = _ref5[0],
              setter = _ref5[1];

          geometry.addAttribute(key, setter(_this2, geometry));
        });
      }

      this[_geometry] = geometry;
      this[_model] = model;

      if (program) {
        var mesh = new ogl__WEBPACK_IMPORTED_MODULE_11__["Mesh"](gl, {
          mode: gl[this[_mode]],
          geometry: geometry,
          program: program
        });
        this.setBody(mesh);
        var listeners = this.getListeners('beforerender');

        if (listeners.length) {
          var _mesh$onBeforeRender;

          (_mesh$onBeforeRender = mesh.onBeforeRender).push.apply(_mesh$onBeforeRender, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(listeners));
        }

        listeners = this.getListeners('afterrender');

        if (listeners.length) {
          var _mesh$onAfterRender;

          (_mesh$onAfterRender = mesh.onAfterRender).push.apply(_mesh$onAfterRender, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(listeners));
        }
      }
    }
    /* override */

  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Mesh3d.prototype), "addEventListener", this).call(this, type, listener, options);

      if (this.body && type === 'beforerender') {
        this.body.onBeforeRender(listener);
      } else if (this.body && type === 'afterrender') {
        this.body.onAfterRender(listener);
      }

      return this;
    }
    /* override */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Mesh3d.prototype), "removeEventListener", this).call(this, type, options);

      if (this.body && type === 'beforerender') {
        this.body.beforeRenderCallbacks.length = 0;
      } else if (this.body && type === 'afterrender') {
        this.body.afterRenderCallbacks.length = 0;
      }

      return this;
    }
    /* override */

  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Mesh3d.prototype), "removeEventListener", this).call(this, type, listener, options);

      if (this.body && type === 'beforerender') {
        var list = this.body.beforeRenderCallbacks;
        var idx = list.indexOf(listener);

        if (idx >= 0) {
          list.splice(idx, 1);
        }
      } else if (this.body && type === 'afterrender') {
        var _list = this.body.afterRenderCallbacks;

        var _idx = _list.indexOf(listener);

        if (_idx >= 0) {
          _list.splice(_idx, 1);
        }
      }

      return this;
    }
  }, {
    key: "mode",
    get: function get() {
      return this[_mode];
    }
  }, {
    key: "program",
    get: function get() {
      return this[_program];
    }
  }, {
    key: "geometry",
    get: function get() {
      return this[_geometry];
    }
  }, {
    key: "meshes",
    get: function get() {
      var meshes = this.body ? [this.body] : [];

      var childMeshes = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Mesh3d.prototype), "meshes", this);

      if (childMeshes && childMeshes.length) {
        meshes.push.apply(meshes, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(childMeshes));
      }

      return meshes;
    }
  }]);

  return Mesh3d;
}(_group3d__WEBPACK_IMPORTED_MODULE_12__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_10__["registerNode"])(Mesh3d, 'mesh3d');

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Sphere; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _attribute_sphere__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83);












var _Sphere =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(_Sphere, _Geometry);

  function _Sphere(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _Sphere);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_Sphere).call(this, program, attrs));

    _this.updateMesh();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_Sphere, [{
    key: "remesh",
    value: function remesh() {
      var gl = this.program.gl;
      var _this$attributes = this.attributes,
          radius = _this$attributes.radius,
          widthSegments = _this$attributes.widthSegments,
          heightSegments = _this$attributes.heightSegments,
          phiStart = _this$attributes.phiStart,
          phiLength = _this$attributes.phiLength,
          thetaStart = _this$attributes.thetaStart,
          thetaLength = _this$attributes.thetaLength;
      var geometry = new ogl__WEBPACK_IMPORTED_MODULE_8__["Sphere"](gl, {
        radius: radius,
        widthSegments: widthSegments,
        heightSegments: heightSegments,
        phiStart: phiStart,
        phiLength: phiLength,
        thetaStart: thetaStart,
        thetaLength: thetaLength
      });
      this.setGeometry(geometry);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_Sphere.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'radius' || key === 'widthSegments' || key === 'heightSegments' || key === 'phiStart' || key === 'phiLength' || key === 'thetaStart' || key === 'thetaLength') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);

  return _Sphere;
}(_geometry__WEBPACK_IMPORTED_MODULE_10__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Sphere, "Attr", _attribute_sphere__WEBPACK_IMPORTED_MODULE_9__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_7__["registerNode"])(_Sphere, 'sphere');

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SphereAttr; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);






var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var SphereAttr =
/*#__PURE__*/
function (_GeometryAttr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SphereAttr, _GeometryAttr);

  function SphereAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SphereAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SphereAttr).call(this, subject));

    _this[setDefault]({
      radius: 0.5,
      widthSegments: 32,
      heightSegments: 16,
      phiStart: 0,
      phiLength: Math.PI * 2,
      thetaStart: 0,
      thetaLength: Math.PI
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SphereAttr, [{
    key: "radius",
    get: function get() {
      return this[getAttribute]('radius');
    },
    set: function set(value) {
      this[setAttribute]('radius', value);
    }
  }, {
    key: "widthSegments",
    get: function get() {
      return this[getAttribute]('widthSegments');
    },
    set: function set(value) {
      this[setAttribute]('widthSegments', value);
    }
  }, {
    key: "heightSegments",
    get: function get() {
      return this[getAttribute]('heightSegments');
    },
    set: function set(value) {
      this[setAttribute]('heightSegments', value);
    }
  }, {
    key: "phiStart",
    get: function get() {
      return this[getAttribute]('phiStart');
    },
    set: function set(value) {
      this[setAttribute]('phiStart', value);
    }
  }, {
    key: "phiLength",
    get: function get() {
      return this[getAttribute]('phiLength');
    },
    set: function set(value) {
      this[setAttribute]('phiLength', value);
    }
  }, {
    key: "thetaStart",
    get: function get() {
      return this[getAttribute]('thetaStart');
    },
    set: function set(value) {
      this[setAttribute]('thetaStart', value);
    }
  }, {
    key: "thetaLength",
    get: function get() {
      return this[getAttribute]('thetaLength');
    },
    set: function set(value) {
      this[setAttribute]('thetaLength', value);
    }
  }]);

  return SphereAttr;
}(_geometry__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeometryAttr; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _attr3d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76);








var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var GeometryAttr =
/*#__PURE__*/
function (_Attr3d) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(GeometryAttr, _Attr3d);

  function GeometryAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GeometryAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(GeometryAttr).call(this, subject));

    _this[setDefault]({
      colors: [0.5, 0.5, 0.5, 1],
      colorDivisor: 3
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GeometryAttr, [{
    key: "colors",
    get: function get() {
      return this[getAttribute]('colors');
    },
    set: function set(value) {
      if (typeof value === 'string') {
        value = value.replace(/\s*,\s*/g, ',');
        var colors = value.split(/\s+/g);
        colors = colors.map(function (c) {
          return new spritejs__WEBPACK_IMPORTED_MODULE_6__["Color"](c);
        });
        value = colors.reduce(function (a, b) {
          return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(a), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(b));
        });
      } else if (Array.isArray(value)) {
        if (typeof value[0] === 'string') {
          value = value.reduce(function (a, b) {
            a.push.apply(a, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(new spritejs__WEBPACK_IMPORTED_MODULE_6__["Color"](b)));
            return a;
          }, []);
        } else if (Array.isArray(value[0])) {
          value = value.reduce(function (a, b) {
            return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(a), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(b));
          });
        }
      }

      this[setAttribute]('colors', value);
    }
  }, {
    key: "colorDivisor",
    get: function get() {
      return this[getAttribute]('colorDivisor');
    },
    set: function set(value) {
      this[setAttribute]('colorDivisor', value);
    }
  }]);

  return GeometryAttr;
}(_attr3d__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Geometry; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _attribute_geometry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82);
/* harmony import */ var _mesh3d__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79);











function colorAttribute(node, geometry) {
  var positions = geometry.attributes.position.data;
  var len = positions.length / 3;
  var color = new Float32Array(4 * len);
  var colors = node.attributes.colors;
  var colorLen = colors.length / 4;
  var colorDivisor = node.attributes.colorDivisor;

  for (var i = 0; i < len; i++) {
    // const color = colors
    var idx = Math.floor(i / colorDivisor) % colorLen;
    color[4 * i] = colors[idx * 4];
    color[4 * i + 1] = colors[idx * 4 + 1];
    color[4 * i + 2] = colors[idx * 4 + 2];
    color[4 * i + 3] = colors[idx * 4 + 3];
  }

  return {
    size: 4,
    data: color
  };
}

var Geometry =
/*#__PURE__*/
function (_Mesh3d) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Geometry, _Mesh3d);

  function Geometry(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Geometry);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Geometry).call(this, program, attrs));
    program.extraAttribute = program.extraAttribute || {};
    if (!program.extraAttribute.color) program.extraAttribute.color = colorAttribute;
    return _this;
  }
  /* override */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Geometry, [{
    key: "updateMesh",
    value: function updateMesh() {
      if (this.program) {
        // if(!this.body) {
        //   this.remesh();
        // } else if(!this.prepareMeshUpdate && this.remesh) {
        //   this.prepareMeshUpdate = Promise.resolve().then(() => {
        //     delete this.prepareMeshUpdate;
        //     this.remesh();
        //   });
        // }
        var oldMesh = this.mesh;
        this.remesh();
        var newMesh = this.mesh;
        this.dispatchEvent({
          type: 'updatemesh',
          detail: {
            oldMesh: oldMesh,
            newMesh: newMesh
          }
        });
      }
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Geometry.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'colors' || key === 'colorDivisor') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);

  return Geometry;
}(_mesh3d__WEBPACK_IMPORTED_MODULE_9__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Geometry, "Attr", _attribute_geometry__WEBPACK_IMPORTED_MODULE_8__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_7__["registerNode"])(Geometry, 'geometry');

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cube; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83);
/* harmony import */ var _attribute_cube__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85);












var Cube =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Cube, _Geometry);

  function Cube(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Cube);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Cube).call(this, program, attrs));

    _this.updateMesh();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Cube, [{
    key: "remesh",
    value: function remesh() {
      var gl = this.program.gl;
      var _this$attributes = this.attributes,
          width = _this$attributes.width,
          height = _this$attributes.height,
          depth = _this$attributes.depth,
          widthSegments = _this$attributes.widthSegments,
          heightSegments = _this$attributes.heightSegments,
          depthSegments = _this$attributes.depthSegments;
      var geometry = new ogl__WEBPACK_IMPORTED_MODULE_8__["Box"](gl, {
        width: width,
        height: height,
        depth: depth,
        widthSegments: widthSegments,
        heightSegments: heightSegments,
        depthSegments: depthSegments
      });
      this.setGeometry(geometry);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Cube.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'width' || key === 'height' || key === 'depth' || key === 'widthSegments' || key === 'heightSegments' || key === 'depthSegments') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);

  return Cube;
}(_geometry__WEBPACK_IMPORTED_MODULE_9__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(Cube, "Attr", _attribute_cube__WEBPACK_IMPORTED_MODULE_10__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_7__["registerNode"])(Cube, 'cube');

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CubeAttr; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);






var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var CubeAttr =
/*#__PURE__*/
function (_GeometryAttr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CubeAttr, _GeometryAttr);

  function CubeAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CubeAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CubeAttr).call(this, subject));

    _this[setDefault]({
      width: 1,
      height: 1,
      depth: 1,
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1,

      /* override */
      colorDivisor: 4
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CubeAttr, [{
    key: "width",
    get: function get() {
      return this[getAttribute]('width');
    },
    set: function set(value) {
      this[setAttribute]('width', value);
    }
  }, {
    key: "height",
    get: function get() {
      return this[getAttribute]('height');
    },
    set: function set(value) {
      this[setAttribute]('height', value);
    }
  }, {
    key: "depth",
    get: function get() {
      return this[getAttribute]('depth');
    },
    set: function set(value) {
      this[setAttribute]('depth', value);
    }
  }, {
    key: "widthSegments",
    get: function get() {
      return this[getAttribute]('widthSegments');
    },
    set: function set(value) {
      this[setAttribute]('widthSegments', value);
    }
  }, {
    key: "heightSegments",
    get: function get() {
      return this[getAttribute]('heightSegments');
    },
    set: function set(value) {
      this[setAttribute]('heightSegments', value);
    }
  }, {
    key: "depthSegments",
    get: function get() {
      return this[getAttribute]('depthSegments');
    },
    set: function set(value) {
      this[setAttribute]('depthSegments', value);
    }
  }]);

  return CubeAttr;
}(_geometry__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Plane; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _attribute_plane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83);












var _Plane =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(_Plane, _Geometry);

  function _Plane(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _Plane);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_Plane).call(this, program, attrs));

    _this.updateMesh();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_Plane, [{
    key: "remesh",
    value: function remesh() {
      var gl = this.program.gl;
      var _this$attributes = this.attributes,
          width = _this$attributes.width,
          height = _this$attributes.height,
          widthSegments = _this$attributes.widthSegments,
          heightSegments = _this$attributes.heightSegments;
      var geometry = new ogl__WEBPACK_IMPORTED_MODULE_8__["Plane"](gl, {
        width: width,
        height: height,
        widthSegments: widthSegments,
        heightSegments: heightSegments
      });
      this.setGeometry(geometry);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_Plane.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'width' || key === 'height' || key === 'widthSegments' || key === 'heightSegments') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);

  return _Plane;
}(_geometry__WEBPACK_IMPORTED_MODULE_10__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Plane, "Attr", _attribute_plane__WEBPACK_IMPORTED_MODULE_9__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_7__["registerNode"])(_Plane, 'plane');

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaneAttr; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);






var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var PlaneAttr =
/*#__PURE__*/
function (_GeometryAttr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PlaneAttr, _GeometryAttr);

  function PlaneAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PlaneAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(PlaneAttr).call(this, subject));

    _this[setDefault]({
      width: 1,
      height: 1,
      widthSegments: 1,
      heightSegments: 1
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PlaneAttr, [{
    key: "width",
    get: function get() {
      return this[getAttribute]('width');
    },
    set: function set(value) {
      this[setAttribute]('width', value);
    }
  }, {
    key: "height",
    get: function get() {
      return this[getAttribute]('height');
    },
    set: function set(value) {
      this[setAttribute]('height', value);
    }
  }, {
    key: "widthSegments",
    get: function get() {
      return this[getAttribute]('widthSegments');
    },
    set: function set(value) {
      this[setAttribute]('widthSegments', value);
    }
  }, {
    key: "heightSegments",
    get: function get() {
      return this[getAttribute]('heightSegments');
    },
    set: function set(value) {
      this[setAttribute]('heightSegments', value);
    }
  }]);

  return PlaneAttr;
}(_geometry__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Cylinder; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65);
/* harmony import */ var spritejs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(spritejs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1);
/* harmony import */ var _attribute_cylinder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83);












var _Cylinder =
/*#__PURE__*/
function (_Geometry) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(_Cylinder, _Geometry);

  function _Cylinder(program) {
    var _this;

    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _Cylinder);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_Cylinder).call(this, program, attrs));

    _this.updateMesh();

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_Cylinder, [{
    key: "remesh",
    value: function remesh() {
      var gl = this.program.gl;
      var _this$attributes = this.attributes,
          radiusTop = _this$attributes.radiusTop,
          radiusBottom = _this$attributes.radiusBottom,
          height = _this$attributes.height,
          radialSegments = _this$attributes.radialSegments,
          heightSegments = _this$attributes.heightSegments,
          openEnded = _this$attributes.openEnded,
          thetaStart = _this$attributes.thetaStart,
          thetaLength = _this$attributes.thetaLength;
      var geometry = new ogl__WEBPACK_IMPORTED_MODULE_8__["Cylinder"](gl, {
        radiusTop: radiusTop,
        radiusBottom: radiusBottom,
        height: height,
        radialSegments: radialSegments,
        heightSegments: heightSegments,
        openEnded: openEnded,
        thetaStart: thetaStart,
        thetaLength: thetaLength
      });
      this.setGeometry(geometry);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(_Cylinder.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'radiusTop' || key === 'radiusBottom' || key === 'height' || key === 'radialSegments' || key === 'heightSegments' || key === 'openEnded' || key === 'thetaStart' || key === 'thetaLength') {
        if (newValue !== oldValue) {
          this.updateMesh();
        }
      }
    }
  }]);

  return _Cylinder;
}(_geometry__WEBPACK_IMPORTED_MODULE_10__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_Cylinder, "Attr", _attribute_cylinder__WEBPACK_IMPORTED_MODULE_9__["default"]);


Object(spritejs__WEBPACK_IMPORTED_MODULE_7__["registerNode"])(_Cylinder, 'cylinder');

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CylinderAttr; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82);






var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var CylinderAttr =
/*#__PURE__*/
function (_GeometryAttr) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CylinderAttr, _GeometryAttr);

  function CylinderAttr(subject) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CylinderAttr);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CylinderAttr).call(this, subject));

    _this[setDefault]({
      radiusTop: 0.5,
      radiusBottom: 0.5,
      height: 1,
      radialSegments: 16,
      heightSegments: 1,
      openEnded: false,
      thetaStart: 0,
      thetaLength: Math.PI * 2
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CylinderAttr, [{
    key: "radiusTop",
    get: function get() {
      return this[getAttribute]('radiusTop');
    },
    set: function set(value) {
      this[setAttribute]('radiusTop', value);
    }
  }, {
    key: "radiusBottom",
    get: function get() {
      return this[getAttribute]('radiusBottom');
    },
    set: function set(value) {
      this[setAttribute]('radiusBottom', value);
    }
  }, {
    key: "height",
    get: function get() {
      return this[getAttribute]('height');
    },
    set: function set(value) {
      this[setAttribute]('height', value);
    }
  }, {
    key: "radialSegments",
    get: function get() {
      return this[getAttribute]('radialSegments');
    },
    set: function set(value) {
      this[setAttribute]('radialSegments', value);
    }
  }, {
    key: "heightSegments",
    get: function get() {
      return this[getAttribute]('heightSegments');
    },
    set: function set(value) {
      this[setAttribute]('heightSegments', value);
    }
  }, {
    key: "openEnded",
    get: function get() {
      return this[getAttribute]('openEnded');
    },
    set: function set(value) {
      this[setAttribute]('openEnded', value);
    }
  }, {
    key: "thetaStart",
    get: function get() {
      return this[getAttribute]('thetaStart');
    },
    set: function set(value) {
      this[setAttribute]('thetaStart', value);
    }
  }, {
    key: "thetaLength",
    get: function get() {
      return this[getAttribute]('thetaLength');
    },
    set: function set(value) {
      this[setAttribute]('thetaLength', value);
    }
  }]);

  return CylinderAttr;
}(_geometry__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_GEOMETRY", function() { return BASE_GEOMETRY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_TEXTURE", function() { return BASE_TEXTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_WITH_SHADOW", function() { return TEXTURE_WITH_SHADOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOMETRY_WITH_TEXTURE", function() { return GEOMETRY_WITH_TEXTURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOMETRY_WITH_SHADOW", function() { return GEOMETRY_WITH_SHADOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEOMETRY_WITH_TEXTURE_AND_SHADOW", function() { return GEOMETRY_WITH_TEXTURE_AND_SHADOW; });
/* harmony import */ var _geometry_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _geometry_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony import */ var _texture_frag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93);
/* harmony import */ var _texture_vert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var _texture_with_shadow_frag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95);
/* harmony import */ var _texture_with_shadow_vert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96);
/* harmony import */ var _geometry_with_texture_frag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97);
/* harmony import */ var _geometry_with_texture_vert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98);
/* harmony import */ var _geometry_with_shadow_frag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99);
/* harmony import */ var _geometry_with_shadow_vert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(100);
/* harmony import */ var _geometry_with_texture_and_shadow_frag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(101);
/* harmony import */ var _geometry_with_texture_and_shadow_vert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(102);












var BASE_GEOMETRY = {
  vertex: _geometry_vert__WEBPACK_IMPORTED_MODULE_1__["default"],
  fragment: _geometry_frag__WEBPACK_IMPORTED_MODULE_0__["default"]
};
var BASE_TEXTURE = {
  vertex: _texture_vert__WEBPACK_IMPORTED_MODULE_3__["default"],
  fragment: _texture_frag__WEBPACK_IMPORTED_MODULE_2__["default"]
};
var TEXTURE_WITH_SHADOW = {
  vertex: _texture_with_shadow_vert__WEBPACK_IMPORTED_MODULE_5__["default"],
  fragment: _texture_with_shadow_frag__WEBPACK_IMPORTED_MODULE_4__["default"],
  uniforms: {
    shadow: {
      value: 0.5
    }
  }
};
var GEOMETRY_WITH_TEXTURE = {
  vertex: _geometry_with_texture_vert__WEBPACK_IMPORTED_MODULE_7__["default"],
  fragment: _geometry_with_texture_frag__WEBPACK_IMPORTED_MODULE_6__["default"]
};
var GEOMETRY_WITH_SHADOW = {
  vertex: _geometry_with_shadow_vert__WEBPACK_IMPORTED_MODULE_9__["default"],
  fragment: _geometry_with_shadow_frag__WEBPACK_IMPORTED_MODULE_8__["default"],
  uniforms: {
    shadow: {
      value: 0.5
    }
  }
};
var GEOMETRY_WITH_TEXTURE_AND_SHADOW = {
  vertex: _geometry_with_texture_and_shadow_vert__WEBPACK_IMPORTED_MODULE_11__["default"],
  fragment: _geometry_with_texture_and_shadow_frag__WEBPACK_IMPORTED_MODULE_10__["default"],
  uniforms: {
    shadow: {
      value: 0.5
    }
  }
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光 xyz - 向量位置, w - 强度\n\nvoid main() {\n  float light = dot(vNormal, normalize(directionalLight.xyz));\n  gl_FragColor.rgb = vColor.rgb + light * directionalLight.w;\n  gl_FragColor.a = vColor.a;\n}");

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec3 pointLightPosition; //点光源位置\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  vColor = vec4(diffuse + ambient, color.a);\n  // vColor = color;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vec4 color = texture2D(tMap, vUv);\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nuniform sampler2D tShadow;\nuniform float shadow;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvarying vec4 vLightNDC; // 阴影\n\nfloat unpackRGBA (vec4 v) {\n    return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  vec4 color = texture2D(tMap, vUv);\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  \n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in shadow\n  float shadowDept = mix(shadow, 1.0, step(depth, occluder));\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb * shadowDept + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nvarying float fCos;\nvarying vec4 vLightNDC;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  vUv = uv;\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  float alpha = texColor.a;\n  color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec2 vUv;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  \n  fCos = cos;\n\n  // vColor = vec4(diffuse + ambient, color.a);\n  vColor = color;\n\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight;\n\nuniform sampler2D tShadow;\nuniform float shadow;\n\nvarying vec4 vLightNDC;\n\nfloat unpackRGBA (vec4 v) {\n    return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  float l = dot(vNormal, normalize(directionalLight.xyz));\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  \n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in shadow\n  float shadowDept = mix(shadow, 1.0, step(depth, occluder));\n\n  gl_FragColor.rgb = vColor.rgb * shadowDept + l * directionalLight.w;\n  gl_FragColor.a = vColor.a;\n}");

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec4 vLightNDC;\n\nuniform vec3 pointLightPosition; //点光源位置\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * cos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  vColor = vec4(diffuse + ambient, color.a);\n  // vColor = color;\n\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\n\nuniform vec4 directionalLight; //平行光\n\nuniform sampler2D tMap;\nuniform sampler2D tShadow;\nuniform float shadow;\n\nvarying vec2 vUv;\nvarying vec4 vLightNDC;\n\nvarying float fCos;\n\nuniform vec4 pointLightColor; // 点光源颜色\nuniform vec4 ambientColor; // 环境光\n\nfloat unpackRGBA (vec4 v) {\n  return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));\n}\n\nvoid main() {\n  vec4 color = vColor;\n  vec4 texColor = texture2D(tMap, vUv);\n\n  vec3 lightPos = vLightNDC.xyz / vLightNDC.w;\n  float bias = 0.001;\n  float depth = lightPos.z - bias;\n  float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));\n\n  // Compare actual depth from light to the occluded depth rendered in the depth map\n  // If the occluded depth is smaller, we must be in shadow\n  float shadow = mix(shadow, 1.0, step(depth, occluder));\n\n  vec3 light = normalize(directionalLight.xyz);\n  float shading = dot(vNormal, light) * directionalLight.w;\n\n  float alpha = texColor.a;\n  color.rgb = mix(texColor.rgb, color.rgb, 1.0 - alpha);\n  color.a = texColor.a + (1.0 - texColor.a) * color.a;\n\n  vec3 diffuse = pointLightColor.rgb * color.rgb * pointLightColor.a * fCos;// 计算点光源漫反射颜色\n  vec3 ambient = ambientColor.rgb * color.rgb;// 计算环境光反射颜色\n\n  color = vec4(diffuse + ambient, color.a);\n\n  gl_FragColor.rgb = color.rgb * shadow + shading;\n  gl_FragColor.a = color.a;\n}");

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision highp float;\nprecision highp int;\n\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat3 normalMatrix;\n\nuniform mat4 shadowViewMatrix;\nuniform mat4 shadowProjectionMatrix;\n\nvarying vec3 vNormal;\nvarying vec4 vColor;\nvarying vec2 vUv;\n\nvarying vec4 vLightNDC;\n\nvarying float fCos;\n\nuniform vec3 pointLightPosition; //点光源位置\n\n// Matrix to shift range from -1->1 to 0->1\nconst mat4 depthScaleMatrix = mat4(\n    0.5, 0, 0, 0, \n    0, 0.5, 0, 0, \n    0, 0, 0.5, 0, \n    0.5, 0.5, 0.5, 1\n);\n\nvoid main() {\n  vNormal = normalize(normalMatrix * normal);\n\n  vec3 dir = normalize(pointLightPosition - position);// 计算点光源入射光线反方向并归一化\n  float cos = max(dot(dir, vNormal), 0.0);// 计算入射角余弦值\n\n  fCos = cos;\n\n  vColor = color;\n\n  vUv = uv;\n  vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * modelMatrix * vec4(position, 1.0);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ })
/******/ ]);
});