/**
 * Giscus setup (https://giscus.app):
 * 1. Create a public GitHub repo (e.g. your-username/chinaready)
 * 2. Enable Discussions on the repo (Settings → General → Features)
 * 3. Open https://giscus.app → select repo → copy repoId & categoryId
 * 4. Fill in values below OR set NEXT_PUBLIC_GISCUS_* in .env.local
 */

export const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? "zhao1liang/blog-comments",
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? "R_kgDOS8Yyvg",
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "Announcements",
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "DIC_kwDOS8Yyvs4C_RKu",
};

export function isGiscusConfigured(): boolean {
  const { repo, repoId, categoryId } = giscusConfig;
  return (
    repoId.length > 0 &&
    categoryId.length > 0 &&
    !repo.includes("your-username")
  );
}
