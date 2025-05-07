const LIVEPEER_API_URL = "https://livepeer.com/api";

/**
 * Fetches all assets from Livepeer using REST API
 * @returns Promise with array of assets
 */
export async function fetchAllAssets() {
  try {
    const response = await fetch(`${LIVEPEER_API_URL}/asset`, {
      headers: {
        Authorization: `Bearer ${process.env.LIVEPEER_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching assets:", error);
    throw error;
  }
}

/**
 * Deletes an asset from Livepeer
 * @param assetId The ID of the asset to delete
 */
export async function deleteAsset(assetId: string) {
  try {
    const response = await fetch(`${LIVEPEER_API_URL}/asset/${assetId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.LIVEPEER_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error deleting asset ${assetId}:`, error);
    throw error;
  }
}

/**
 * Deletes all assets from Livepeer
 * @returns Promise with the total number of deleted assets
 */
export async function deleteAllAssets() {
  let totalDeleted = 0;
  let hasMore = true;

  while (hasMore) {
    console.log("Fetching assets to delete...");
    const assets = await fetchAllAssets();

    if (assets.length === 0) {
      hasMore = false;
      console.log("No more assets found");
      break;
    }

    console.log(`Found ${assets.length} assets to delete`);

    for (const asset of assets) {
      try {
        console.log(`Deleting asset ${asset.id}...`);
        await deleteAsset(asset.id);
        console.log(`Successfully deleted asset ${asset.id}`);
        totalDeleted++;
      } catch (error) {
        console.error(`Failed to delete asset ${asset.id}:`, error);
        // Continue with next asset
      }
    }
    console.log(`Deleted ${totalDeleted} assets so far`);
  }

  return totalDeleted;
}
