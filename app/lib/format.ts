/**
 * Convert a byte size to a human‑readable string in KB, MB, or GB.
 *
 * Rules:
 * - Uses binary units (1 KB = 1024 bytes).
 * - Displays up to GB.
 * - Rounds to 2 decimal places, trimming trailing zeros.
 * - Handles edge cases (NaN, negative, Infinity) by returning "0 KB".
 */
export function formatSize(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 KB";

  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  let value: number;
  let unit: "KB" | "MB" | "GB";

  if (bytes >= GB) {
    value = bytes / GB;
    unit = "GB";
  } else if (bytes >= MB) {
    value = bytes / MB;
    unit = "MB";
  } else {
    value = bytes / KB;
    unit = "KB";
  }

  // Round to 2 decimals and trim trailing zeros (e.g., 1.50 -> 1.5, 2.00 -> 2)
  const rounded = Math.round(value * 100) / 100;
  const text = rounded.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");

  return `${text} ${unit}`;
}

export default formatSize;
