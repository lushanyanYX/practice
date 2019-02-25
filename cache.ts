interface ILimitableMap {
  limit: number;
  map: object;
  key: string[];
  set: (key: string, value: any) => void;
  get: (key: string) => any;
}

class LimitableMap implements ILimitableMap {
   limit: number;
   map: object;
   key: Array<string>;
  constructor(limit) {
    this.limit = limit || 10;
    this.map = {};
    this.key = [];
  }

  set(key, value) {
    this.map[key] = value;
    this.key.push(key);
    if (this.key.length > 10) {
      const firstKey = this.key.shift();
      delete this.map[firstKey];
    }
  }

  get(key) {
    return this.map[key];
  }
}

const limitableMap = new LimitableMap(5);
