# Use an official Python base image
FROM python:3.9-slim-buster

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file
COPY requirements.txt /app/


# Copy the rest of the project files
COPY . /app/

# Define the command to run your application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Install Django dependencies
RUN pip install django