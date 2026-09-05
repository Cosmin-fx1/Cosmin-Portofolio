import { execSync } from "child_process";
import { rmSync } from "fs";

try {
  console.log("🚀 Building project with Vite...");
  execSync("npm run build", { stdio: "inherit" });

  console.log("📦 Preparing dist for gh-pages...");
  const remoteUrl = execSync("git config --get remote.origin.url").toString().trim();

  execSync("git -C dist init", { stdio: "inherit" });
  execSync("git -C dist add -A", { stdio: "inherit" });
  execSync('git -C dist commit -m "Deploy to GitHub Pages"', { stdio: "inherit" });
  execSync("git -C dist branch -M gh-pages", { stdio: "inherit" });
  execSync(`git -C dist remote add origin ${remoteUrl}`, { stdio: "inherit" });

  console.log("🌐 Pushing to origin/gh-pages...");
  execSync("git -C dist push -f origin gh-pages", { stdio: "inherit" });

  rmSync("dist/.git", { recursive: true, force: true });
  console.log("✅ Deployed successfully to gh-pages!");
} catch (error) {
  try {
    rmSync("dist/.git", { recursive: true, force: true });
  } catch {}
  console.error("❌ Deploy failed:", error.message);
  process.exit(1);
}
