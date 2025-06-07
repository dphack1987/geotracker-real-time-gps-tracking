#!/bin/bash

# Database files
mv src/lib/db/schema.new.ts src/lib/db/schema.ts
mv src/lib/db/config.new.ts src/lib/db/config.ts

# Service files
mv src/lib/services/db-service.new.ts src/lib/services/db-service.ts
mv src/lib/services/tracking-service.new.ts src/lib/services/tracking-service.ts
mv src/lib/services/geo-service.new.ts src/lib/services/geo-service.ts

# API route files
mv src/app/api/tracking-captures/route.new.ts src/app/api/tracking-captures/route.ts
mv src/app/api/tracking-links/route.new.ts src/app/api/tracking-links/route.ts

echo "Files renamed successfully!"
