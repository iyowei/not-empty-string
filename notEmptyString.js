export default function notEmptyString(str) {
  return (
    Object.prototype.toString.call(str) === "[object String]" && Boolean(str)
  );
}
