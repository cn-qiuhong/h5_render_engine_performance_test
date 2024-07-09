"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Main.ts
  var { regClass, property } = Laya;
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
    }
    onUpdate() {
      let rs = this.owner;
      let ls = rs.ims;
      for (let im of ls) {
        im.rotation += 3;
      }
    }
  };
  Main = __decorateClass([
    regClass("e60XQm7tTY2BwFAdxb8D1g")
  ], Main);

  // src/RuntimeScript.generated.ts
  var RuntimeScriptBase = class extends Laya.Scene {
  };

  // src/RuntimeScript.ts
  var { regClass: regClass2 } = Laya;
  var RuntimeScript = class extends RuntimeScriptBase {
    onAwake() {
      const TEXTURE_COUNT = 100;
      const SPRITE_COUNT = 2e3;
      const W_COUNT = 40;
      const H_COUNT = 50;
      const W_WIDTH = 640;
      const H_HEIGHT = 1136;
      let ls = [];
      for (let i = 0; i < SPRITE_COUNT; i++) {
        let im = new Laya.Sprite();
        im.scale(0.25, 0.25);
        im.loadImage(`/ims/${i % TEXTURE_COUNT}.png`);
        im.pivot(128, 128);
        im.x = W_WIDTH / W_COUNT * (i % W_COUNT);
        im.y = H_HEIGHT / H_COUNT * (i / W_COUNT | 0);
        this.addChild(im);
        ls.push(im);
      }
      this.ims = ls;
    }
  };
  RuntimeScript = __decorateClass([
    regClass2("8tU1A_fMQn-c5M2K82PAOQ")
  ], RuntimeScript);
})();
