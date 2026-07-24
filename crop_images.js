import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function finalCleanInterior() {
  const filepath = path.join('public/images', 'interior.jpg');
  const tempPath = path.join('public/images', 'temp_interior.jpg');

  const meta = await sharp(filepath).metadata();
  console.log(`Current interior size: ${meta.width}x${meta.height}`);

  // Extract exactly rows 0 to 748 to remove the slight dark line at bottom row 749-762
  await sharp(filepath)
    .extract({ left: 0, top: 0, width: meta.width, height: 748 })
    .toFile(tempPath);

  fs.renameSync(tempPath, filepath);
  console.log(`Final interior size: ${meta.width}x748`);
}

finalCleanInterior().catch(console.error);
