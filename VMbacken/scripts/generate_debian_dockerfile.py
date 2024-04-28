import os
import argparse


def generate_debian_dockerfile(app_name, port):
    # Construct the Dockerfile content
    dockerfile_content = f"""
# Use the official Debian 11 (Bullseye) as a parent image
FROM debian:12

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies specified in requirements.txt (if any)
RUN apt-get update && apt-get update && apt-get install -y python3

# Make port {port} available to the world outside this container
EXPOSE {port}

# Run app.py when the container launches
CMD ["python3", "app.py"]
"""

    # Determine the directory of the script
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Write the content to a Dockerfile in the parent directory of the script
    dockerfile_path = os.path.join(script_dir, "Dockerfile")
    with open(dockerfile_path, "w") as dockerfile:
        dockerfile.write(dockerfile_content.strip() + os.linesep)

    print("Dockerfile generated successfully.")


if __name__ == "__main__":
    # Parse command-line arguments
    parser = argparse.ArgumentParser(description="Generate Dockerfile")
    parser.add_argument("app_name", type=str, help="Name of your application")
    parser.add_argument("port", type=int, help="Port your application listens on")
    args = parser.parse_args()

    # Generate Dockerfile
    generate_debian_dockerfile(args.app_name, args.port)
