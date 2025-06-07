#!/bin/bash

# Function to safely move files
safe_move() {
    local src=$1
    local dest=$2
    if [ -f "$src" ]; then
        echo "Moving $src to $dest"
        mv "$src" "$dest"
    else
        echo "Warning: Source file $src not found"
    fi
}

# Function to backup existing files
backup_file() {
    local file=$1
    if [ -f "$file" ]; then
        echo "Backing up $file to ${file}.bak"
        cp "$file" "${file}.bak"
    fi
}

echo "Starting file updates..."

# Create backups of existing files
backup_file "src/app/api/tracking-captures/route.ts"
backup_file "src/app/api/tracking-links/route.ts"
backup_file "src/lib/middleware/error-handler.ts"
backup_file "src/lib/middleware/rate-limiter.ts"
backup_file "src/lib/utils/validation.ts"

# Update API routes
safe_move "src/app/api/tracking-captures/route.updated.ts" "src/app/api/tracking-captures/route.ts"
safe_move "src/app/api/tracking-links/route.updated.ts" "src/app/api/tracking-links/route.ts"

# Update middleware
safe_move "src/lib/middleware/error-handler.new.ts" "src/lib/middleware/error-handler.ts"
safe_move "src/lib/middleware/rate-limiter.new.ts" "src/lib/middleware/rate-limiter.ts"

# Update utils
safe_move "src/lib/utils/validation.new.ts" "src/lib/utils/validation.ts"

echo "File updates completed!"
echo "Note: Backup files have been created with .bak extension"
echo "You can remove them once you verify everything is working correctly"
