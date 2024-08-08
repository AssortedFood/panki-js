
# Pathology Exam Preparation Tool

The Pathology Exam Preparation Tool is a web-based software application designed to assist doctors in preparing for their part 2 FRCPath pathology exams.

## Purpose

To improve the learning process for doctors preparing for the FRCPath part 2 exams. It alleviates the pain points of limited access to diverse pathology cases, lack of structured feedback, insufficient practice opportunities, and large intervals between learning. The primary users are medical professionals, specifically pathologists preparing for their exams.

## Value Creation

- **For Users:** Provides a comprehensive, interactive learning platform with real-time AI-based feedback.
- **For Stakeholders:** Enhances the pass rates of candidates and positions the company as a leader in medical education technology.

## Goal

- **Specific:** Develop a tool that offers pathology cases in an exam style with personalised feedback
- **Measurable:** Serve 1 pathology case and provide personal feedback to the user
- **Deadline:** August 17th

## Assumptions

## Constraints

## Scope of Work

- Develop web-based interface
- Develop the knowledge database
- Collate pathology images from Leeds
- Plug LLM into the system

## Out of Scope

- Building an AI
- Log in features
- Multi-user system

## Primary Features

1. **Serve Pathology Cases and Images:**
   - Display diverse pathology cases with high-quality images.
   - Categorize cases by difficulty level and sub-specialty.
   - Allow users to select cases randomly or by specific categories.

2. **Answer Submission:**
   - Provide a text editor for users to type and submit answers.
   - Save and retrieve user answers for each case.
   - Allow users to edit and resubmit answers before final submission.

3. **AI-Based Feedback:**
   - Analyze user answers using AI.
   - Compare user answers against a trusted clinical information library.
   - Provide detailed feedback, including suggestions for improvement and key learning points.

4. **Categories/Tags:**
   - Allow the student to choose what topic areas they want to study.

5. **Session Tracking and Stats:**
   - Allow the student to see their progress.

6. **Spaced Repetition Algorithm:**
   - Enforce tried and tested educational methodology.

7. **Slide Viewer:**
   - Connect to a database of stained tissue images for the purpose of reporting.
   - Present slide images as they are currently formatted.

## Define Release Criteria

**Functionality:**

- All primary features (case display, answer submission, AI feedback) are fully operational.

## Epics

1. MVP
2. Scaling to 100 users
3. Ready for market
4. In-house infrastructure

## Sprints

### MVP

1. Modifying the `database.db` from 6 categories to 2 categories.
2. Modifying the `gui.py` to present slide images from the format provided by the database.

## Tasks

### Categories

1. Use Excel to decide which categories to keep/how to concatenate or summarise existing categories down.
2. Change the categories in the Excel sheet.
3. Sanity check the changes.
4. Create a Python script to create a new version of the database with the above changes.

### Slide Images

1. Reading and understanding the production code that currently handles the slide images.
2. Making changes to the codebase to ensure it is functional after the importing of our new database structure.
3. Making changes to the codebase to allow for the presenting of slide images as they are currently formatted.
4. Importing the new database.

