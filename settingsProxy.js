const settings = {
  id: "sett-001",
  theme: "light",
  fontSize: 14,
  notifications: true
}

const handler = {
  set(obj, prop, value) {
    if (prop == "id") {
      throw new TypeError(`Cannot change the property ${prop}.`);
    }

    obj[prop] = value;
    console.log(`Updated ${prop}: ${valaue}`);
    return true;
  },

  get(obj, prop) {
    if (!(prop in obj)) {
      console.log(`The property ${prop} does not exist in the object.`);
    }
    return obj[prop];
  },

  deleteProperty(obj, prop) {
      throw new TypeError(`${prop} cannot be deleted, deletion is disabled`);
  },

  has(obj, prop) {
    if (prop === "id") {
      return false;
    }
    return prop in obj;
  },

  ownKeys(obj) {
    const keys = Object.keys(obj);
    const remainingElements = keys.filter(e => e !=="id")

    return remainingElements;
  }
}