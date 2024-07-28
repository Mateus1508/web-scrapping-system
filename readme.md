## Web Scraping System

This project is a web scraping system that allows you to extract information from provided websites. You can enter a URL to get details such as the page title, meta description, links, and images.

### Requirements

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. This project also uses [Puppeteer](https://pptr.dev/) for scraping.

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repository
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running

To start the local server, use the following command:

```bash
npm start
```

The server will start on port 3000 by default. You can access the application in your browser at `http://localhost:3000`.

### Usage

1. Open the application in your browser.
2. Enter the URL of the site you want to analyze.
3. Click the button to generate the report.

You will see the following information about the site:

- **Title**: The title of the page.
- **Meta Description**: The meta description of the page, if available.
- **Links**: All the links found on the page, listed with numbers.
- **Images**: All the images found on the page, displayed with a thumbnail preview.