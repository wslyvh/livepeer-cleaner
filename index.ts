import { deleteAllAssets } from "@/lib/livepeer";

async function main() {
  try {
    console.log("Starting cleanup process...\n");

    console.log("=== Deleting Assets ===");
    const deletedAssets = await deleteAllAssets();
    console.log(`Done! Total assets deleted: ${deletedAssets}`);
  } catch (error) {
    console.error("Error in main:", error);
    process.exit(1);
  }
}

main();
