export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const normalize = (value: number, step?: number) =>
  step ? Math.round(value / step) * step : value;
