import { v4 as uuidv4 } from 'uuid';
export const uuidGenerate = async (): Promise<string> => {
  // Generate a UUID without hyphens
  const uuidWithoutHyphens = uuidv4().replace(/-/g, '');

  return uuidWithoutHyphens;
};
