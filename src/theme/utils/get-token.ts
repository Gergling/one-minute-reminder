import { getPathBits } from "./get-path-bits";

const getTokenForPathBits = (pathBits: string[], property: unknown): string | unknown => {
  if (typeof property === 'object') {
    if (property === null) {
      throw new Error(`Property is null.`);
    }
    const pathBit = pathBits.shift();

    if (pathBit === undefined) {
      return property;
    }

    const childProperty = property[pathBit as keyof typeof property];

    if (childProperty === undefined) {
      throw new Error(`No child property for '${pathBit}'.`)
    }

    try {
      return getTokenForPathBits(pathBits, childProperty);
    } catch (e) {
      throw new Error(`For '${pathBits.join('.')}':\n${e}`);
    }
  }

  if (typeof property === 'string') {
    return property;
  }

  throw new Error(`Property has untested type: ${typeof property}`);
};

export const getToken = (path: string, property: unknown) => {
  const pathBits = getPathBits(path);
  return getTokenForPathBits(pathBits, property);
};
