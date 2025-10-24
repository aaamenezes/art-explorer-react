export function handleRequestError<ReturnValueType = null>(
  context: string,
  error: unknown,
  returnValue: ReturnValueType | null = null
) {
  console.error(`Error fetching ${context}:`, error);
  return returnValue;
}
