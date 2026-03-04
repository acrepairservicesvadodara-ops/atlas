#!/bin/bash
# Convert all PNG, JPG, JPEG images to WebP format

cd /Applications/atlas-aircon/public/images

echo "Converting images to WebP..."
count=0
failed=0

# Find and convert non-webp images
for img in $(find . -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.PNG" -o -name "*.JPG" -o -name "*.JPEG" \)); do
    # Get the output filename (replace extension with .webp)
    webp_file="${img%.*}.webp"
    
    # Skip if webp already exists
    if [ -f "$webp_file" ]; then
        echo "  Skip (exists): $webp_file"
        continue
    fi
    
    # Convert using cwebp with high quality
    if cwebp -q 85 -m 6 "$img" -o "$webp_file" 2>/dev/null; then
        echo "  Converted: $img -> $webp_file"
        # Remove original after successful conversion
        rm "$img"
        ((count++))
    else
        echo "  FAILED: $img"
        ((failed++))
    fi
done

echo ""
echo "=== CONVERSION COMPLETE ==="
echo "Converted: $count"
echo "Failed: $failed"

# Count final totals
echo ""
echo "Final image counts:"
find . -type f -name "*.webp" | wc -l | xargs echo "  WebP files:"
find . -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | wc -l | xargs echo "  Non-WebP remaining:"
