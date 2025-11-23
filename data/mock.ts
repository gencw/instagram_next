
export async function getFakerData() {
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${base}/api/feed`, {
    method: "GET",
    cache: "no-store",
  });
  return res.json();
}
