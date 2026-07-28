#!/bin/bash
pkill -f "next" || true
nohup node ./node_modules/next/dist/bin/next dev -p 8080 -H 0.0.0.0 >/home/ashirkhan/usa-client-kiden/nextjs_daemon.log 2>&1 &
disown
sleep 3
