import { defineComponent as c, openBlock as u, createElementBlock as s, normalizeClass as i, unref as n, createElementVNode as d, renderSlot as p } from "vue";
import { injectStrict as m, radioGroupKey as f } from "./constants.js";
const _ = ["name", "value"], k = /* @__PURE__ */ c({
  name: "PotRadio",
  __name: "radio",
  props: {
    value: { default: "" }
  },
  setup(r) {
    const a = r, e = m(f);
    function l(o) {
      const t = o.target;
      e.changeRadioValue(t.value);
    }
    return (o, t) => (u(), s("label", {
      class: i(["pot-radio", {
        "pot-radio_checked": a.value === n(e).checkedValue.value
      }])
    }, [
      d("input", {
        type: "radio",
        name: n(e).name,
        value: a.value,
        onFocus: l
      }, null, 40, _),
      p(o.$slots, "default")
    ], 2));
  }
});
export {
  k as default
};
