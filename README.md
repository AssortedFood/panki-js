# PAnki

An application designed to help aspiring consultant pathologists study for the RCPath part 2 exam.

### Features

1. Categories/Tags that allow the student to choose what topic areas they want to study.
2. Session tracking and stats that allow the student to see their progress.
3. Spaced repition algorithm to enforce tried and tested educational methodology.
4. Slide viewer connected to a database of stained tissue images for the purpose of reporting.
5. AI feedback, trained on a general language model and fine-tuned with specific content based on the provided slide image.

## Epics

1. MVP
2. Scaling to 100 users
3. Ready for market
4. Inhouse infrastructure

## Sprints

### MVP

1. Modifying the `database.db` from 6 categories to 2 categories.
2. Modifying the `gui.py` to present slide images from the format provided by the database.

## Tasks

### Categories

1. Use excel to make a decision about which categories to keep/how to concatenate or summarise existing categories down.
2. Change the categories in the excel sheet.
3. Sanity check the changes.
4. Create a python script to create a new version of the database with the above changes.

### Slide images

1. Reading and understanding the production code that currently handles the slide images.
2. Making changes to the codebase to ensure it is functional after the importing of our new database structure.
3. Making changes to the codebase to allow for the presenting of slide images as they are currently formatted.
4. Importing the new database.