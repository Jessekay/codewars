const rules = {
  age: (v) => Number.isInteger(v) && v >= 0 && v <= 120,
  email: (v) => typeof v === "string" && v.includes("@"),
  username: (v) => typeof v === "string" && v.length >= 3
}

const formData = {}

const handler = {
  set(obj, prop, value) {
    if (!(prop in rules)) {
      throw new TypeError(`Cannot set unkown field "${prop}"`);
    }
    if (!rules[prop](value)) {
      throw new TypeError(`Invalid value for ${prop}: ${value}`);
    }
    obj[prop] = value;
    console.log(`set ${prop} to ${value}`);
    return true;
  },

  get(obj, prop) {
    return prop in obj ? obj[prop] : "N/A";
  },

  deleteProperty(obj, prop) {
    if (prop === "username") {
      throw new TypeError(`"username" cannot be deleted`);
    }
    delete obj[prop];
    console.log(`Removed ${prop}`);
    return true;
  }
};

const user = new Proxy(formData, handler);
console.log(user.email);
