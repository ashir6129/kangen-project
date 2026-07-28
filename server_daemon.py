import subprocess
import time
import os

# Kill any existing process on port 3000
subprocess.run(["fuser", "-k", "3000/tcp"])
time.sleep(1)

log_path = "/home/ashirkhan/usa-client-kiden/server.log"
log_file = open(log_path, "a")

proc = subprocess.Popen(
    ["npx", "next", "dev", "-p", "3000", "-H", "0.0.0.0"],
    cwd="/home/ashirkhan/usa-client-kiden",
    stdout=log_file,
    stderr=log_file,
    stdin=subprocess.DEVNULL,
    start_new_session=True
)

print(f"Next.js server started on port 3000 with PID {proc.pid}")
