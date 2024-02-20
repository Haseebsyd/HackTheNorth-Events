# HackTheNorth Frontend Developer Challenge Submission

## Table of Contents
1. [Project Overview](#project-overview)
2. [Requirements and Implementation](#requirements-and-implementation)
    - 2.1 [Basic Functionality](#basic-functionality)
    - 2.2 [Additional Features](#additional-features)
3. [Technical Considerations](#technical-considerations)
    - 3.1 [Code Quality and Documentation](#code-quality-and-documentation)
    - 3.2 [Scalability and Extensibility](#scalability-and-extensibility)
    - 3.3 [Best Practices and Maintainability](#best-practices-and-maintainability)
    - 3.4 [Accessibility and Responsiveness](#accessibility-and-responsiveness)
    - 3.5 [Consistency and Appeal in Styling](#consistency-and-appeal-in-styling)
4. [Project Structure and File Overview](#project-structure-and-file-overview)
5. [Appearance and Responsiveness](#appearance-and-responsiveness)
6. [Resources Used](#resources-used)
7. [Future Enhancements](#future-enhancements)
8. [Deployment](#deployment)

## Project Overview
For the Hack the North 2024 Frontend Developer Challenge, this project showcases a web application built to display events for Hackathon Global Inc.™ attendees. Utilizing React.js, GraphQL, and modern web development practices, the application presents a dynamic and interactive platform for viewing both public and private hackathon events.

## Requirements and Implementation
### Basic Functionality
1. **Display All Events on App Visit:** 
   - Successfully implemented, displaying all events fetched from the API on the initial visit.
2. **Event Sorting by Start Time:** 
   - Successfully implemented, events are sorted by start time with a secondary sort by end time for events sharing the same start time.
3. **Login Screen for Private Events:** 
   - Implemented a hard-coded login feature, with credentials `Username: user` and `Password: password`, enabling access to both public and private events upon successful login.
4. **Linking and Viewing Related Events:** 
   - A 'See Also' section on each event card allows navigation to the related events enlarged and detailed view, except for events without related items.
        **Such as:**
            - `Ladies Storm Hackathons Meet-Up`

### Additional Features
- **Search Functionality:**
  - The search bar dynamically filters events by name with each keystroke. If multiple events match the search query, pressing the search button redirects to the event with the lowest ID matching the criteria.
- **Event Type Filtering:**
  - Users can filter events based on type ('TECH TALK', 'WORKSHOP', 'ACTIVITY'). In the public view, 'ACTIVITY' type events are hidden due to their 'private' permission status.

## Technical Considerations
### Code Quality and Documentation
The codebase is structured for clarity and ease of understanding, making it accessible for developers unfamiliar with the project. Key aspects include:
- **Modular Design:** Components like `LoginPage`, `EventsPage`, and `Event` are separated into distinct files, enhancing readability and maintenance.
- **Use of Comments:** The code includes explanatory comments, particularly in utility functions like `fetchAndSortEvents` in `EventUtility.js`, clarifying their purpose and functionality.
- **Consistent Naming Conventions:** The use of clear and consistent naming for variables and functions across the application aids in understanding the code flow and hierarchy.

### Scalability and Extensibility
The application's architecture is designed with scalability in mind:
- **Component-Based Structure:** The use of React components allows for easy integration of additional features or modifications of existing ones.
- **Dynamic Data Handling:** Functions like `fetchAndSortEvents` demonstrate the capability to handle dynamic data, indicating the ease of incorporating more events or new event types.
- **Flexible Event Rendering:** The `EventsPage` and `Event` components are designed to adapt to varying amounts of data, ensuring the UI remains effective even with an increased number of events.

### Best Practices and Maintainability
The project follows several best practices ensuring its maintainability:
- **State Management:** The use of React's useState and useEffect hooks in `App.js` and `EventsPage.js` for managing application state is a testament to modern development practices.
- **Responsive Design:** CSS stylesheets, like those in `app.css` and `Card.css`, use media queries ensuring the application is responsive across different device sizes.
- **Error Handling:** The application handles potential errors gracefully, such as network issues when fetching data, ensuring robustness.

### Accessibility and Responsiveness
The application is designed to be accessible and user-friendly:
- **Keyboard Accessibility:** Key functionalities, like navigating through events and closing the enlarged event view, are accessible via keyboard, catering to users who rely on keyboard navigation.
- **Responsive Layout:** The use of responsive design principles ensures that the application is usable across various devices and screen sizes.
- **Consideration for Visual Impairments:** High contrast ratios and clear font sizes in the UI design aid users with visual impairments.

### Consistency and Appeal in Styling
The application's styling is both consistent and visually appealing:
- **Unified Theme and Color Scheme:** The application maintains a cohesive color scheme and theme throughout, as seen in the consistent use of styles in components like `Card.js` and `Event.js`.
- **Interactive UI Elements:** Elements like buttons and links have hover effects, enhancing the interactive experience.
- **Visual Feedback for User Interactions:** The UI provides clear feedback for user actions, such as highlighting selected event types in the filter section.

### Project Structure and File Overview
#### App.js
- Serves as the root component.
- Orchestrates overall application flow including routing.
- Manages state for events and user authentication.

#### LoginPage.js
- Handles the user login interface.
- Manages regular and guest logins.
- Displays social media login options.

#### EventsPage.js
- Displays the list of events.
- Integrates search bar, logout button, and event type filters.
- Manages dynamic UI visibility based on user scroll.

#### Event.js
- Displays individual event details in a card layout.
- Handles navigation to related events.

#### EnlargedEvent.js
- Provides a detailed view of a single event.
- Includes functionality to close the view and navigate between events.

#### Card.js
- Generic component for consistent content display across the application.

#### Background.js
- Implements the background particle effect using tsparticles.
- Enhances the visual appeal of the application.

#### EventUtility.js
- Contains utility functions for event-related operations.
- Functions include fetching and sorting events, formatting date ranges, and defining event type colors.

#### LogoutButton.js
- Dedicated component for user logout functionality.

#### SearchBar.js
- Manages the event search functionality.
- Includes updating the search term and navigating to selected event details.

## Appearance and Responsiveness
- **Consistent and Appealing Design:** 
  - The application maintains a visually appealing and consistent design across various devices and screen sizes.
- **Responsive Design Techniques:** 
  - Media queries and flexible layouts ensure adaptability to different screen sizes.
- **Accessibility:** 
  - Keyboard navigability and tab accessibility are implemented. The usage of escape key to exit enlarged views enhances usability. The site has been tested using Chrome's developer tools to ensure responsiveness. However, further improvements in areas like screen reader compatibility and ARIA label usage would enhance accessibility for users with visual impairments.

## Resources Used
- **Frontend Development:** 
  - React.js was used for building the user interface.
  - GraphQL was utilized for API queries, ensuring efficient data retrieval and manipulation.

## Future Enhancements
- **Event Reordering and Persistence:** 
  - A planned feature is to allow users to reorder events and save these preferences using local storage. This would involve implementing a draggable interface for events, where users can rearrange them as desired. The new order would be saved in the browser's local storage or cookies, ensuring that the custom arrangement persists across sessions. This feature would enhance user experience by allowing personalized event organization.
- **Improved Accessibility:** 
  - Plans to further enhance accessibility features, specifically for users with impairments, are considered for future updates.

## Deployment
- **Live Application:** 
  - The application is deployed and can be accessed [here](https://hackthenorth-events.netlify.app/).
- **Access Credentials:** 
  - To explore the full features, use `Username: user` and `Password: password`.