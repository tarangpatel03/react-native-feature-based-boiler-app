export const timeAgo = (date: string | number | Date) => {
  const now = new Date().getTime();
  const past = new Date(date).getTime();

  const diff = Math.floor((now - past) / 1000);

  if (diff < 60) return 'Just now';
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hr ago`;

  return `${Math.floor(diff / 86400)} days ago`;
};
