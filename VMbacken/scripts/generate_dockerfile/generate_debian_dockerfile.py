import os
import subprocess


def generate_debian_dockerfile():
    dockerfile_content = """\
FROM debian:bullseye

# Install git, supervisor, VNC, & X11 packages
RUN set -ex; \
    apt-get update && \
    apt-get install -y \
      bash \
      fluxbox \
      git \
      net-tools \
      novnc \
      supervisor \
      x11vnc \
      xterm \
      xvfb && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Setup demo environment variables
ENV HOME=/root \
    DEBIAN_FRONTEND=noninteractive \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    LC_ALL=C.UTF-8 \
    DISPLAY=:0.0 \
    DISPLAY_WIDTH=1024 \
    DISPLAY_HEIGHT=768 \
    RUN_XTERM=yes \
    RUN_FLUXBOX=yes
COPY . /app
CMD ["/app/entrypoint.sh"]
"""
    return dockerfile_content


def build_docker_image():
    # Generate Dockerfile content
    dockerfile_content = generate_debian_dockerfile()

    # Write content to Dockerfile in the current directory
    current_dir = os.getcwd()  # Get current directory
    dockerfile_path = os.path.join(current_dir, "Dockerfile")  # Define Dockerfile path
    with open(dockerfile_path, "w") as dockerfile:
        dockerfile.write(dockerfile_content)

    # Define the image name based on distribution name + "vm"
    image_name = "debian-vm"

    # Build Docker image with the specified name
    try:
        subprocess.run(["docker", "build", "-t", image_name, "."], check=True)
        print(f"Docker image '{image_name}' built successfully!")
    except subprocess.CalledProcessError as e:
        print(f"Error building Docker image: {e}")


if __name__ == "__main__":
    build_docker_image()
