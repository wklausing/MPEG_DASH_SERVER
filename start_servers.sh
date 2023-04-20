#!/bin/bash

# Change directory to the "dash" folder
# cd /path/to/dash

# Run npm start in server1 folder
echo "Starting server1..."
cd server1
npm start &

# Run npm start in server2 folder
echo "Starting server2..."
cd ../server2
npm start &

# Run npm start in content-steering folder
echo "Starting content-steering..."
cd ../content-steering
npm start &

# Wait for all processes to complete
wait

