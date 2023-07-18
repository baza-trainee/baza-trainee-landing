export function calculateFormDataLength(formData: FormData) {
  let length = 0;
  const formDataEntries = [...formData.entries()];

  for (const [key, value] of formDataEntries) {
    if (typeof value === 'string') {
      length += key.length + value.length;
    } else if (value instanceof Blob) {
      length += key.length + value.size;
    }
  }

  return length;
}
