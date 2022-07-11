export const paddingZero = (number: number) => {
  return ('0' + number).slice(-2);
};

export const formatTime = (seconds: number, timeUnit?: 'hour' | 'minute') => {
  const date = new Date(seconds * 1000);
  const paddingZerohh = paddingZero(date.getUTCHours());
  const paddingZeromm = paddingZero(date.getUTCMinutes());
  const paddingZeross = paddingZero(date.getUTCSeconds());

  if (timeUnit === 'hour') return `${paddingZerohh}:${paddingZeromm}:${paddingZeross}`;

  return Number(paddingZerohh)
    ? `${paddingZerohh}:${paddingZeromm}:${paddingZeross}`
    : `${paddingZeromm}:${paddingZeross}`;
};
