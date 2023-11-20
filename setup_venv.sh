#!/bin/bash

# Define the path to your virtual environment
VENV_DIR=".venv"

# Define the required packages in a requirements.txt file
REQUIREMENTS_FILE="requirements.txt"

# Check if the virtual environment exists
if [ ! -d "$VENV_DIR" ]; then
    echo "Creating virtual environment..."
    /usr/bin/python3 -m venv "$VENV_DIR"
fi

# Activate the virtual environment
source "$VENV_DIR/bin/activate"  # Use "activate.bat" on Windows

# Ensure that pip is up to date
/usr/bin/pip3 install --upgrade pip

# Install required packages from requirements.txt
if [ -f "$REQUIREMENTS_FILE" ]; then
    echo "Installing required packages..."
    pip install -r "$REQUIREMENTS_FILE"
else
    echo "Requirements file not found: $REQUIREMENTS_FILE"
    echo "Make sure to create a requirements.txt file with your package dependencies."
fi

# Display a message to indicate that the virtual environment is activated
echo "Virtual environment activated. Happy coding!"

