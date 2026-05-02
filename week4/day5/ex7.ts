function formatInput<T extends { toString(): string }>(value: T): string {
  const str = value.toString() as string;

  return `Formatted: ${str}`;
}