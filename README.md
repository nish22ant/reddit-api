# Web-Based Reddit Search Application

This project is a web-based Reddit search application that allows users to search for posts and comments on Reddit based on specific search criteria. The application is developed using HTML, CSS, and JavaScript, and it consists of five main steps that progressively build the functionality and user interface.

## Steps

### Step 1: Basic Search Interface

In this step, the initial user interface for the Reddit search application is created. The HTML file (`step1.html`) includes a search input field and a button. The JavaScript file (`step1.js`) handles user interactions and uses the Reddit API to retrieve and display search results.

**Key features of Step 1:**
- User can enter a search query.
- Clicking the "Search" button fetches relevant Reddit posts based on the search query.
- Search results are displayed in a table format, including post title, author, subreddit, URL, score, and flair.

### Step 2: Adding Comments to Search

This step enhances the search functionality to include comments in the search results. The application retrieves comments from Reddit using the Pushshift API and displays them along with post details.

**Key features of Step 2:**
- Search results include both posts and comments based on the search query.
- Comments are displayed in a table format, including comment body, author, subreddit, URL, score, and flair.

### Step 3: Searching Subreddits and Detailed View

In this step, the application is expanded to allow users to search for subreddits. The search interface is refined, and the application provides a more detailed view of subreddit contents, including post details and comments.

**Key features of Step 3:**
- Users can search for subreddits using the search input field.
- Search results include subreddit details such as post titles, authors, scores, and comments.
- A more comprehensive table format is used to display subreddit contents.

### Step 4: Sorting and Limiting Results

Step 4 introduces sorting and limiting options for search results. Users can choose to sort results by relevance or the latest, and they can also set a limit on the number of search results displayed.

**Key features of Step 4:**
- Users can select sorting options (relevance or latest) using radio buttons.
- Users can specify a limit on the number of search results using a separate input field.

### Step 5: XML Data Display

In this final step, the application incorporates XML data retrieval and display. The application retrieves XML data from a provided XML file and presents it in tabular format, showcasing various attributes of the data.

**Key features of Step 5:**
- XML data is fetched and parsed from a local XML file (`dataset_r.xml`).
- The application displays XML data in tables, showing attributes such as category, updated date, icon, ID, links, subtitle, and title.

## Getting Started

To run the Reddit search application, follow these steps:

1. Clone or download the repository to your local machine.
2. Open the HTML files in a web browser (e.g., Google Chrome).
3. Interact with the search interface and observe the displayed search results.