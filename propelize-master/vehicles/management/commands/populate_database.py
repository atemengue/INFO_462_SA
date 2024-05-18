from django.core.management.base import BaseCommand
from vehicles.models import Vehicle
from faker import Faker
import random

class Command(BaseCommand):
    help = 'Populate the database with dummy vehicle data'

    def handle(self, *args, **kwargs):
        fake = Faker()

        # Define the range for generating random vehicle data
        num_vehicles = 50  # Adjust as needed

        # Generate and save dummy vehicle data
        for _ in range(num_vehicles):
            registration_number = fake.unique.license_plate()
            make = fake.company()
            model = fake.word()
            year = random.randint(1980, 2022)  # Adjust the range as needed
            rental_price = round(random.uniform(50, 300), 2)  # Adjust the range as needed

            vehicle = Vehicle.objects.create(
                registration_number=registration_number,
                make=make,
                model=model,
                year=year,
                rental_price=rental_price
            )

            self.stdout.write(self.style.SUCCESS(f'Successfully created Vehicle: {vehicle}'))
