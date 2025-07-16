#!/bin/bash

# Navigate into src (or make sure you're already in root)
cd src || exit

# Create top-level folders
mkdir -p \
  api \
  assets \
  components/ui \
  config/constants \
  config/routes \
  data \
  hooks \
  layouts \
  lib \
  pages \
  sass \
  store/slices \
  tests \
  types \
  utils

# Create placeholder index files
touch \
  api/index.ts \
  components/ui/index.ts \
  config/constants/index.ts \
  config/routes/index.ts \
  hooks/index.ts \
  layouts/index.tsx \
  lib/index.ts \
  pages/Home.tsx \
  pages/NotFound.tsx \
  store/index.tsx \
  store/slices/index.ts \
  styles/global.css \
  types/index.ts \
  utils/index.ts

echo "✅ Structura proiectului a fost creată în src/"