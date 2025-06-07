#!/bin/bash

# Update tracking captures route
mv src/app/api/tracking-captures/route.new.ts src/app/api/tracking-captures/route.ts

# Update tracking links route
mv src/app/api/tracking-links/route.updated.ts src/app/api/tracking-links/route.ts

# Update tracking service
mv src/lib/services/tracking-service.new.ts src/lib/services/tracking-service.ts

# Update database service
mv src/lib/services/db-service.new.ts src/lib/services/db-service.ts

# Update geo service
mv src/lib/services/geo-service.new.ts src/lib/services/geo-service.ts

# Update database config
mv src/lib/db/config.new.ts src/lib/db/config.ts

# Update database schema
mv src/lib/db/schema.new.ts src/lib/db/schema.ts

echo "Routes and services updated successfully!"
