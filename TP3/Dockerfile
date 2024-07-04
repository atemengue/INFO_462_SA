
FROM python:3.12-slim


WORKDIR /app


COPY . /app


RUN pip install --upgrade pip
RUN pip install django
RUN pip install -r requirements.txt

ENV DJANGO_SETTINGS_MODULE=vehicle_rental.settings

RUN python manage.py migrate admin
RUN python manage.py migrate
RUN python create_superuser.py

EXPOSE 8000


CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
