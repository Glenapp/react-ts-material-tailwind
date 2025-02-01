export function trimEndSlash(input: string): string {
  return input.replace(/\/$/, '');
}
