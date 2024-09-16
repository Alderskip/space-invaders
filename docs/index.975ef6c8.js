// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4rkIz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
"use strict";
var _game = require("4bc63ce8d1866791");
var canvas = document.getElementById("cnvs");
canvas.width = 600;
canvas.height = window.innerHeight;
var tickLength = 15; //ms
var lastTick;
var lastRender;
var stopCycle;
function run(tFrame) {
    stopCycle = window.requestAnimationFrame(run);
    var nextTick = lastTick + tickLength;
    var numTicks = 0;
    if (tFrame > nextTick) {
        var timeSinceTick = tFrame - lastTick;
        numTicks = Math.floor(timeSinceTick / tickLength);
    }
    for(var i = 0; i < numTicks; i++){
        lastTick = lastTick + tickLength;
        (0, _game.update)(lastTick, stopGame, canvas);
    }
    (0, _game.draw)(canvas, tFrame);
    lastRender = tFrame;
}
function stopGame() {
    window.cancelAnimationFrame(stopCycle);
}
function onPreloadComplete() {
    lastTick = performance.now();
    lastRender = lastTick;
    stopCycle = null;
    (0, _game.init)(canvas);
    run();
}
(0, _game.preload)(onPreloadComplete);

},{"4bc63ce8d1866791":"g9e9u"}],"g9e9u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.draw = draw;
exports.init = init;
exports.preload = preload;
exports.update = update;
var _sprite = _interopRequireDefault(require("1ef4dcbaf5c4be19"));
var _cannon = _interopRequireDefault(require("2f04134a421d6bb"));
var _bullet = _interopRequireDefault(require("c8bd1e31db3a602e"));
var _alien = _interopRequireDefault(require("6151ab379d557e77"));
var _bunker = _interopRequireDefault(require("f294260b5214e85c"));
var _inputHandler = _interopRequireDefault(require("49c5aa2f94df971b"));
var _invaders = _interopRequireDefault(require("e05408034288f441"));
var _collision = require("2be92f58a00ba416");
var _helpers = require("31bc26faa71c1450");
var _interface = require("d7e8ea22d0726e49");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
var assets;
var sprites = {
    aliens: [],
    cannon: null,
    bunker: null
};
var gameState = {
    bullets: [],
    aliens: [],
    cannon: null,
    //rage mode
    killStreak: 0,
    rageMode: false,
    rageModeDuration: 3000,
    // Rage mode duration (5 seconds)
    rageModeStartTime: 0,
    // Time when rage mode started
    //borders move
    loadingBarActive: false,
    loadingBarStartTime: 0,
    loadingBarDuration: 3000,
    // 3 seconds
    loadingBarHeight: 10,
    //alien movements
    alienMoveDirection: 1,
    lastAlienMoveTime: 0,
    alienMoveInterval: 1500,
    // 1.5 seconds
    alienMoveDistance: 30,
    alienMoveDownDistance: 30,
    //game over
    lifes: 3,
    gameOver: false,
    //levels
    score: 0,
    level: 1,
    nextLifeScore: 1000 // Score threshold for extra life
};
var inputHandler = new _inputHandler["default"]();
function preload(onPreloadComplete) {
    assets = new Image();
    assets.addEventListener("load", function() {
        sprites.cannon = new _sprite["default"](assets, 62, 0, 22, 16);
        sprites.bunker = new _sprite["default"](assets, 84, 8, 36, 24);
        sprites.aliens = [
            [
                new _sprite["default"](assets, 0, 0, 22, 16),
                new _sprite["default"](assets, 0, 16, 22, 16)
            ],
            [
                new _sprite["default"](assets, 22, 0, 16, 16),
                new _sprite["default"](assets, 22, 16, 16, 16)
            ],
            [
                new _sprite["default"](assets, 38, 0, 24, 16),
                new _sprite["default"](assets, 38, 16, 24, 16)
            ]
        ];
        onPreloadComplete();
    });
    assets.src = _invaders["default"];
}
function init(canvas) {
    //Adjust alien formation
    var alienPattern = [
        [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0
        ]
    ];
    // Initialize the alien positions
    var rows = alienPattern.length;
    var cols = alienPattern[0].length;
    var spacing = 40;
    var startX = 30;
    var startY = 30;
    gameState.aliens = []; // Clear previous aliens
    for(var row = 0; row < rows; row++){
        for(var col = 0; col < cols; col++)if (alienPattern[row][col] === 1) {
            var alienType = (row + col) % 3; // Adjust as needed
            var alienX = startX + col * spacing;
            var alienY = startY + row * spacing;
            gameState.aliens.push(new _alien["default"](alienX, alienY, sprites.aliens[alienType]));
        }
    }
    gameState.cannon = new _cannon["default"](100, canvas.height - 100, sprites.cannon);
    gameState.bunkers = [
        new _bunker["default"](50, canvas.height - 150, sprites.bunker),
        new _bunker["default"](150, canvas.height - 150, sprites.bunker),
        new _bunker["default"](250, canvas.height - 150, sprites.bunker),
        new _bunker["default"](350, canvas.height - 150, sprites.bunker),
        new _bunker["default"](450, canvas.height - 150, sprites.bunker),
        new _bunker["default"](550, canvas.height - 150, sprites.bunker)
    ];
}
function update(time, stopGame, canvas) {
    // Cannon move
    if (gameState.gameOver) {
        gameState.rageMode = false;
        return; // Skip update if game is over
    }
    var moveX = 0;
    var isPushingBorder = false;
    if (inputHandler.isDown("ArrowLeft")) {
        if (gameState.cannon.x + moveX <= 0) isPushingBorder = true;
        else moveX -= 4;
    }
    if (inputHandler.isDown("ArrowRight")) {
        if (gameState.cannon.x + moveX >= canvas.width - 10) isPushingBorder = true;
        else moveX += 4;
    }
    // If pushing against the border, activate loading bar
    if (isPushingBorder) {
        if (!gameState.loadingBarActive) {
            gameState.loadingBarActive = true;
            gameState.loadingBarStartTime = performance.now();
        }
    } else // Reset loading bar if not pushing the border
    if (gameState.loadingBarActive) gameState.loadingBarActive = false;
    if (!isPushingBorder || gameState.loadingBarActive) gameState.cannon.x += moveX;
    // Handle loading bar completion and reset cannon position
    if (gameState.loadingBarActive) {
        var elapsedTime = performance.now() - gameState.loadingBarStartTime;
        if (elapsedTime >= gameState.loadingBarDuration) {
            gameState.loadingBarActive = false;
            (0, _helpers.resetCannonPosition)(gameState, canvas); // Move cannon to the other side
        }
    }
    //end cannon move
    //check for alien bullets
    gameState.bullets.forEach(function(b) {
        return b.update(time);
    });
    (0, _collision.detectAlienBulletCollision)(gameState.cannon, gameState);
    //end check for alien bullets
    // Shoot bullet from cannon
    if (inputHandler.isPressed("Space")) {
        var bulletX = gameState.cannon.x + 10;
        var bulletY = gameState.cannon.y;
        gameState.bullets.push(new _bullet["default"](bulletX, bulletY, -6, 4, 6, "#fff"));
    }
    if (gameState.cannon.x + moveX < 0 || gameState.cannon.x + moveX > canvas.width) {
        if (!gameState.loadingBarActive) {
            gameState.loadingBarActive = true;
            gameState.loadingBarStartTime = performance.now();
        }
    } else gameState.cannon.x += moveX;
    // Update bullets
    gameState.bullets.forEach(function(b) {
        return b.update(time);
    });
    // Handle collisions and alien destruction
    gameState.bullets = gameState.bullets.filter(function(b) {
        if (b.destroyed || b.y < 0 || b.y > canvas.height) return false;
        var hit = false;
        if (b.parentType === "alien") gameState.bunkers.forEach(function(bunker) {
            if ((0, _collision.isBulletIntersects)(b, bunker)) {
                bunker.hits--;
                if (bunker.hits <= 0) bunker.destroyed = true;
                b.destroyed = true;
                hit = true;
                gameState.bunkers = gameState.bunkers.filter(function(bunker) {
                    return !bunker.destroyed;
                });
            }
        });
        else {
            gameState.aliens.forEach(function(alien) {
                if ((0, _collision.isBulletIntersects)(b, alien)) {
                    alien.hits--;
                    if (alien.hits <= 0) {
                        alien.destroyed = true;
                        gameState.killStreak++;
                        (0, _helpers.checkForRageMode)(gameState);
                        (0, _helpers.increaseScore)(gameState);
                    }
                    b.destroyed = true;
                    hit = true;
                }
            });
            gameState.bunkers.forEach(function(bunker) {
                if ((0, _collision.isBulletIntersects)(b, bunker)) {
                    b.destroyed = true;
                    hit = true;
                }
            });
        }
        return !hit;
    });
    //Alien movements
    if (time - gameState.lastAlienMoveTime >= gameState.alienMoveInterval) {
        var atBorder = gameState.aliens.some(function(alien) {
            return gameState.alienMoveDirection === 1 ? alien.right > canvas.width - 40 : alien.left < 40;
        });
        gameState.aliens.forEach(function(alien) {
            if (!atBorder) alien.x += gameState.alienMoveDirection * gameState.alienMoveDistance;
        });
        if (atBorder) {
            gameState.aliens.forEach(function(alien) {
                alien.y += gameState.alienMoveDownDistance;
            });
            gameState.alienMoveDirection *= -1;
        }
        gameState.lastAlienMoveTime = time;
    }
    //alien movements end
    // Update each alien: check if they can shoot and update their state
    gameState.aliens.forEach(function(alien) {
        alien.update(time, gameState.cannon.x, gameState); // Pass gameState to check shooting logic
    });
    //Rage mode
    if (gameState.rageMode && time - gameState.rageModeStartTime > gameState.rageModeDuration) {
        gameState.rageMode = false;
        // Reset aliens to their normal shooting cooldowns and bullet speeds
        gameState.aliens.forEach(function(alien) {
            alien.shootCooldown = Math.random() * 5000 + 3000; // Return to normal shoot cooldown
        });
    }
    var rageModeElement = document.getElementById("rage-mode");
    if (gameState.rageMode) rageModeElement.style.display = "block"; // Show rage mode text
    else rageModeElement.style.display = "none"; // Hide rage mode text
    //rage mode end
    // Clean up bullets that go off-screen and destroyed aliens
    gameState.bullets = gameState.bullets.filter(function(b) {
        return !b.destroyed && b.y >= 0 && b.y <= canvas.height;
    });
    gameState.aliens = gameState.aliens.filter(function(a) {
        return !a.destroyed;
    });
}
function draw(canvas, time) {
    var ctx = canvas.getContext("2d");
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw canvas borders
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    // Draw game elements
    gameState.aliens.forEach(function(a) {
        return a.draw(ctx, time);
    });
    gameState.cannon.draw(ctx);
    gameState.bullets.forEach(function(b) {
        return b.draw(ctx);
    });
    gameState.bunkers.forEach(function(b) {
        return b.draw(ctx, time);
    });
    if (gameState.loadingBarActive) (0, _helpers.drawLoadingBar)(gameState, ctx, canvas);
    // Interface
    (0, _interface.drawCannonLifes)(ctx, canvas, sprites.cannon, gameState.lifes);
    if (gameState.gameOver) {
        (0, _interface.drawGameLoss)(ctx, canvas);
        document.getElementById("rage-mode").style.display = "none"; // Hide rage mode text
        (0, _helpers.showRestartButton)();
    } else if (gameState.aliens.length === 0) {
        (0, _interface.drawGameWinning)(ctx, canvas);
        document.getElementById("rage-mode").style.display = "none"; // Hide rage mode text
        (0, _helpers.showNextLevelButton)();
    }
}
document.getElementById("next-level-button").addEventListener("click", function() {
    nextLevel();
});
document.getElementById("restart-level-button").addEventListener("click", function() {
    restart();
});
function restart() {
    var canvas = document.getElementById("cnvs");
    gameState.bullets = [];
    gameState.aliens = [];
    // Rage mode
    gameState.killStreak = 0;
    gameState.rageMode = false;
    gameState.rageModeStartTime = 0;
    // Borders move
    gameState.loadingBarActive = false;
    gameState.loadingBarStartTime = 0;
    gameState.loadingBarHeight = 10;
    // Alien movements
    gameState.alienMoveDirection = 1;
    gameState.lastAlienMoveTime = 0;
    gameState.alienMoveInterval = 1500; // 1.5 seconds
    gameState.alienMoveDistance = 30;
    gameState.alienMoveDownDistance = 30;
    // Game over
    gameState.lifes = 3;
    gameState.gameOver = false;
    // Levels
    gameState.score = 0;
    gameState.level = 1;
    gameState.nextLifeScore = 10000;
    gameState.bunkers = [
        new _bunker["default"](50, canvas.height - 150, sprites.bunker),
        new _bunker["default"](150, canvas.height - 150, sprites.bunker),
        new _bunker["default"](250, canvas.height - 150, sprites.bunker),
        new _bunker["default"](350, canvas.height - 150, sprites.bunker),
        new _bunker["default"](450, canvas.height - 150, sprites.bunker),
        new _bunker["default"](550, canvas.height - 150, sprites.bunker)
    ];
    var alienPattern = [
        [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0
        ],
        [
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1
        ],
        [
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0
        ]
    ];
    // Initialize the alien positions
    var rows = alienPattern.length;
    var cols = alienPattern[0].length;
    var spacing = 40;
    var startX = 30;
    var startY = 30;
    gameState.aliens = []; // Clear previous aliens
    for(var row = 0; row < rows; row++){
        for(var col = 0; col < cols; col++)if (alienPattern[row][col] === 1) {
            var alienType = (row + col) % 3; // Adjust as needed
            var alienX = startX + col * spacing;
            var alienY = startY + row * spacing;
            gameState.aliens.push(new _alien["default"](alienX, alienY, sprites.aliens[alienType]));
        }
    }
    (0, _helpers.hideRestartButton)();
}
function nextLevel() {
    var canvas = document.getElementById("cnvs");
    gameState.bullets = [];
    gameState.aliens = [];
    gameState.killStreak = 0;
    gameState.rageMode = false;
    gameState.rageModeStartTime = 0;
    gameState.loadingBarActive = false;
    gameState.alienMoveDirection = 1;
    gameState.lastAlienMoveTime = 0;
    gameState.alienMoveInterval = 1500; // 1.5 seconds
    gameState.gameOver = false;
    gameState.level += 1;
    (0, _helpers.increaseScore)(gameState, true);
    gameState.bunkers = [
        new _bunker["default"](50, canvas.height - 150, sprites.bunker),
        new _bunker["default"](150, canvas.height - 150, sprites.bunker),
        new _bunker["default"](250, canvas.height - 150, sprites.bunker),
        new _bunker["default"](350, canvas.height - 150, sprites.bunker),
        new _bunker["default"](450, canvas.height - 150, sprites.bunker),
        new _bunker["default"](550, canvas.height - 150, sprites.bunker)
    ];
    var alienPattern = (0, _helpers.generateRandomMatrix)(5, 10);
    // Initialize the alien positions
    var rows = alienPattern.length;
    var cols = alienPattern[0].length;
    var spacing = 40;
    var startX = 30;
    var startY = 30;
    for(var row = 0; row < rows; row++){
        for(var col = 0; col < cols; col++)if (alienPattern[row][col] === 1) {
            var alienType = (row + col) % 3; // Adjust as needed
            var alienX = startX + col * spacing;
            var alienY = startY + row * spacing;
            gameState.aliens.push(new _alien["default"](alienX, alienY, sprites.aliens[alienType]));
        }
    }
    (0, _helpers.hideNextLevelButton)();
}

},{"1ef4dcbaf5c4be19":"gVxQ7","2f04134a421d6bb":"91gH2","c8bd1e31db3a602e":"MfC6o","6151ab379d557e77":"kGWBd","f294260b5214e85c":"jec18","49c5aa2f94df971b":"jTTaN","e05408034288f441":"iQfac","2be92f58a00ba416":"aKmjf","31bc26faa71c1450":"3mrwQ","d7e8ea22d0726e49":"fkFux"}],"gVxQ7":[function(require,module,exports) {
"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var Sprite = exports["default"] = /*#__PURE__*/ _createClass(function Sprite(img, x, y, w, h) {
    _classCallCheck(this, Sprite);
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
});

},{}],"91gH2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var Cannon = exports["default"] = /*#__PURE__*/ function() {
    function Cannon(x, y, sprite) {
        _classCallCheck(this, Cannon);
        this.x = x;
        this.y = y;
        this._sprite = sprite;
        this.destroyed = false;
        this.type = "cannon";
        this.reloading = 0.0;
        this.reloadingTime = 1000;
    }
    _createClass(Cannon, [
        {
            key: "draw",
            value: function draw(ctx, time) {
                ctx.drawImage(this._sprite.img, this._sprite.x, this._sprite.y, this._sprite.w, this._sprite.h, this.x, this.y, this._sprite.w, this._sprite.h);
            }
        }
    ]);
    return Cannon;
}();

},{}],"MfC6o":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var Bullet = exports["default"] = /*#__PURE__*/ function() {
    function Bullet(x, y, vy, w, h, color) {
        var parentType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "cannon";
        _classCallCheck(this, Bullet);
        this.x = x;
        this.y = y;
        this.vy = vy;
        this.w = w;
        this.h = h;
        this.color = color;
        this.destroyed = false;
        this.parentType = parentType;
    }
    _createClass(Bullet, [
        {
            key: "update",
            value: function update(time) {
                this.y += this.vy;
            }
        },
        {
            key: "draw",
            value: function draw(ctx) {
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x, this.y, this.w, this.h);
            }
        },
        {
            key: "left",
            get: function get() {
                return this.x;
            }
        },
        {
            key: "right",
            get: function get() {
                return this.x + this.w;
            }
        },
        {
            key: "top",
            get: function get() {
                return this.y;
            }
        },
        {
            key: "bottom",
            get: function get() {
                return this.y + this.h;
            }
        }
    ]);
    return Bullet;
}();

},{}],"kGWBd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _helpers = require("a1d2e5238a6a117");
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var Alien = exports["default"] = /*#__PURE__*/ function() {
    function Alien(x, y, _ref) {
        var _ref2 = _slicedToArray(_ref, 2), spriteA = _ref2[0], spriteB = _ref2[1];
        var hits = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        _classCallCheck(this, Alien);
        this.x = x;
        this.y = y;
        this._spriteA = spriteA;
        this._spriteB = spriteB;
        this.type = "alien";
        this.hits = hits;
        this.shootCooldown = Math.random() * 5000 + 3000; // Randomized cooldown between shots
        this.lastShotTime = 0; // Tracks the last shot time
        this.destroyed = false;
    }
    _createClass(Alien, [
        {
            key: "draw",
            value: function draw(ctx, time) {
                var sp = Math.ceil(time / 1000) % 2 === 0 ? this._spriteA : this._spriteB;
                ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, this.x, this.y, sp.w, sp.h);
            }
        },
        {
            key: "update",
            value: function update(time, cannonX, gameState) {
                if (time - this.lastShotTime > this.shootCooldown && // Check if cooldown has passed
                (0, _helpers.canAlienShoot)(this, gameState) // Check if this alien is allowed to shoot
                ) {
                    (0, _helpers.shootAlienBullet)(this, cannonX, gameState); // Shoot towards cannon
                    this.lastShotTime = time; // Reset the shot cooldown
                }
            }
        },
        {
            key: "left",
            get: function get() {
                return this.x;
            }
        },
        {
            key: "right",
            get: function get() {
                return this.x + this._spriteA.w;
            }
        },
        {
            key: "top",
            get: function get() {
                return this.y;
            }
        },
        {
            key: "bottom",
            get: function get() {
                return this.y + this._spriteA.h;
            }
        }
    ]);
    return Alien;
}();

},{"a1d2e5238a6a117":"3mrwQ"}],"3mrwQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.canAlienShoot = canAlienShoot;
exports.checkForRageMode = checkForRageMode;
exports.drawLoadingBar = drawLoadingBar;
exports.generateRandomMatrix = generateRandomMatrix;
exports.hideNextLevelButton = hideNextLevelButton;
exports.hideRestartButton = hideRestartButton;
exports.increaseScore = increaseScore;
exports.resetCannonPosition = resetCannonPosition;
exports.shootAlienBullet = shootAlienBullet;
exports.showNextLevelButton = showNextLevelButton;
exports.showRestartButton = showRestartButton;
exports.updateInterface = updateInterface;
var _bullet = _interopRequireDefault(require("317165086debf93a"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function shootAlienBullet(alien, cannonX, gameState) {
    var bulletSpeed = gameState.rageMode ? 7 : 5; // Faster bullets in rage mode
    var bulletColor = gameState.rageMode ? "#ff0000" : "#00ff00"; // Change color during rage mode
    var bulletX = alien.x + alien._spriteA.w / 2;
    var bulletY = alien.y + alien._spriteA.h;
    gameState.bullets.push(new _bullet["default"](bulletX, bulletY, bulletSpeed, 4, 6, bulletColor, "alien"));
}
function canAlienShoot(alien, gameState) {
    return !gameState.aliens.some(function(otherAlien) {
        // Check if otherAlien is not destroyed
        if (otherAlien.destroyed) return false;
        // Check if otherAlien is in front (i.e., has a higher y position)
        if (otherAlien.y > alien.y) // Use the correct width of the sprites for horizontal overlap check
        return otherAlien.x < alien.x + alien._spriteA.w && // Alien's width
        otherAlien.x + otherAlien._spriteA.w > alien.x // Other alien's width
        ;
        return false;
    });
}
function checkForRageMode(gameState) {
    if (gameState.rageMode === true) return;
    var rowsCleared = gameState.aliens.every(function(alien) {
        return alien.y !== 30 || alien.destroyed;
    });
    if (gameState.killStreak >= 12 || rowsCleared) {
        // Trigger rage mode
        gameState.rageMode = true;
        gameState.rageModeStartTime = performance.now();
        // Reset kill streak after rage mode triggers
        gameState.killStreak = 0;
        // Change all alien shoot cooldowns and bullet speed
        gameState.aliens.forEach(function(alien) {
            alien.shootCooldown /= 2; // Shoot twice as fast
        });
    }
}
function drawLoadingBar(gameState, ctx, canvas) {
    var elapsedTime = performance.now() - gameState.loadingBarStartTime;
    var progress = Math.min(elapsedTime / gameState.loadingBarDuration, 1);
    ctx.fillStyle = "#000";
    // Draw the loading bar background
    ctx.fillRect(0, 0, canvas.width, gameState.loadingBarHeight);
    ctx.fillStyle = "#fff";
    // Draw the loading bar foreground
    ctx.fillRect(0, 0, canvas.width * progress, gameState.loadingBarHeight);
}
function resetCannonPosition(gameState, canvas) {
    if (gameState.cannon.x <= 0) gameState.cannon.x = canvas.width - 10; // Move to the right side
    else if (gameState.cannon.x >= canvas.width - 10) gameState.cannon.x = 0; // Move to the left side
}
function updateInterface(level, score, nextLifeScore) {
    document.getElementById("level-display").textContent = level;
    document.getElementById("score-display").textContent = score;
    document.getElementById("next-life-display").textContent = nextLifeScore;
}
function increaseScore(gameState) {
    var nextLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    gameState.score += nextLevel ? gameState.level * 1000 : gameState.level * 100;
    if (gameState.score >= gameState.nextLifeScore) {
        gameState.lifes += 1;
        gameState.nextLifeScore *= 2;
    }
    updateInterface(gameState.level, gameState.score, gameState.nextLifeScore);
}
function showNextLevelButton() {
    var button = document.getElementById("next-level-button");
    button.style.display = "block";
}
function showRestartButton() {
    var button = document.getElementById("restart-level-button");
    button.style.display = "block";
}
function hideNextLevelButton() {
    var button = document.getElementById("next-level-button");
    button.style.display = "none";
}
function hideRestartButton() {
    var button = document.getElementById("restart-level-button");
    button.style.display = "none";
}
function generateRandomMatrix(rows, cols) {
    var matrix = [];
    for(var i = 0; i < rows; i++){
        var row = [];
        for(var j = 0; j < cols; j++)// Randomly assign 0 or 1
        row.push(Math.random() < 0.5 ? 1 : 0);
        matrix.push(row);
    }
    return matrix;
}

},{"317165086debf93a":"MfC6o"}],"jec18":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var Bunker = exports["default"] = /*#__PURE__*/ function() {
    function Bunker(x, y, sprite) {
        _classCallCheck(this, Bunker);
        this.x = x;
        this.y = y;
        this._sprite = sprite;
        this._canvas = document.getElementById("cnvs");
        this.destroyed = false;
        this.type = "bunker";
        this.hits = 3;
    }
    _createClass(Bunker, [
        {
            key: "draw",
            value: function draw(ctx, time) {
                ctx.drawImage(this._sprite.img, this._sprite.x, this._sprite.y, this._sprite.w, this._sprite.h, this.x - this._sprite.w / 2, this.y - this._sprite.h / 2, this._sprite.w, this._sprite.h);
            }
        },
        {
            key: "left",
            get: function get() {
                return this.x - this._sprite.w / 2;
            }
        },
        {
            key: "right",
            get: function get() {
                return this.x + this._sprite.w / 2;
            }
        },
        {
            key: "top",
            get: function get() {
                return this.y - this._sprite.h / 2;
            }
        },
        {
            key: "bottom",
            get: function get() {
                return this.y + this._sprite.h / 2;
            }
        }
    ]);
    return Bunker;
}();

},{}],"jTTaN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var InputHandler = exports["default"] = /*#__PURE__*/ function() {
    function InputHandler() {
        var _this = this;
        _classCallCheck(this, InputHandler);
        this.down = {};
        this.pressed = {};
        document.addEventListener("keydown", function(e) {
            _this.down[e.code] = true;
        });
        document.addEventListener("keyup", function(e) {
            delete _this.down[e.code];
            delete _this.pressed[e.code];
        });
    }
    /**
   * Returns whether a key is pressed down
   * @param  {String} code the keycode to check
   * @return {boolean} the result from check
   */ _createClass(InputHandler, [
        {
            key: "isDown",
            value: function isDown(code) {
                return this.down[code];
            }
        },
        {
            key: "isPressed",
            value: function isPressed(code) {
                // if key is registered as pressed return false else if
                // key down for first time return true else return false
                if (this.pressed[code]) return false;
                else if (this.down[code]) return this.pressed[code] = true;
                return false;
            }
        }
    ]);
    return InputHandler;
}();

},{}],"iQfac":[function(require,module,exports) {
module.exports = require("fe47d5c7b9d66484").getBundleURL("bLxZJ") + "invaders.363eab31.png" + "?" + Date.now();

},{"fe47d5c7b9d66484":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aKmjf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.detectAlienBulletCollision = detectAlienBulletCollision;
exports.isBlocked = isBlocked;
exports.isBulletIntersects = isBulletIntersects;
function isBulletIntersects(bullet, other) {
    var d1x = bullet.left - other.right;
    var d2x = other.left - bullet.right;
    if (d1x > 0 || d2x > 0) return false;
    if (bullet.top - other.bottom > 0 || other.top - bullet.bottom > -bullet.vy && bullet.vy < 0) return false;
    if ((other.top - bullet.bottom > 0 || bullet.top - other.bottom > bullet.vy) && bullet.vy > 0) return false;
    return bullet.vy < 0 ? bullet.top - other.bottom : other.top - bullet.bottom;
}
function detectAlienBulletCollision(cannon, gameState) {
    gameState.bullets.forEach(function(bullet) {
        if (bullet.parentType === "alien" && !bullet.destroyed) {
            if (bullet.x < cannon.x + cannon._sprite.w && bullet.x + bullet.w > cannon.x && bullet.y < cannon.y + cannon._sprite.h && bullet.y + bullet.h > cannon.y) {
                bullet.destroyed = true;
                gameState.lifes -= 1;
            }
        }
    });
    if (gameState.lifes <= 0) gameState.gameOver = true;
}
function isBlocked(self, other) {
    var d1x = self.left - other.right;
    var d2x = other.left - self.right;
    if (d1x > 0 || d2x > 0 || self.top - other.bottom > 0) return false;
    return true;
}

},{}],"fkFux":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.drawCannonLifes = drawCannonLifes;
exports.drawGameLoss = drawGameLoss;
exports.drawGameWinning = drawGameWinning;
function drawCannonLifes(ctx, canvas, sprite, lifes) {
    ctx.font = "18px MinecraftRusNEW";
    ctx.fillStyle = "#8EFA00";
    ctx.fillText(lifes, 10, canvas.clientHeight - 10);
    for(var i = 0; i < lifes; i++)ctx.drawImage(sprite.img, sprite.x, sprite.y, sprite.w, sprite.h, 30 + (sprite.w + 10) * i, canvas.clientHeight - 24, sprite.w, sprite.h);
}
function drawGameLoss(ctx, canvas) {
    ctx.font = "32px MinecraftRusNEW";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("WASTED", canvas.clientWidth / 2, canvas.clientHeight / 2);
}
function drawGameWinning(ctx, canvas) {
    ctx.font = "32px MinecraftRusNEW";
    ctx.fillStyle = "#8EFA00";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Mission Accomplished, Viking", canvas.clientWidth / 2, canvas.clientHeight / 2);
}

},{}]},["4rkIz","8lqZg"], "8lqZg", "parcelRequiref13a")

//# sourceMappingURL=index.975ef6c8.js.map
