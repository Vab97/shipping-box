# React + Vite

# Shipping Box Application

# Prerequisites
-  Node version used is 22
-  React is 19

# Steps to Build and Run the Project

1. Clone the Repository

git clone https://github.com/Vab97/shipping-box
cd shipping-box

2. Install Dependencies
npm install

3. Start the Development Server
npm run dev

The application will be available at:
http://localhost:5173

# Packges used apart from built in vite + react setup
Tailwind and React DOM

# Folder structure 
src/
    components/ - for form and table reusable component
    constants/ - for constants
    context/ - state management implementation
    Pages/ - combining components and redneing page
    services/ - for writing business logic and api


# MOCK API Endpoints
addBoxToDB
getBoxesFromDB

# Fetaures
1.Add shipping box details through a form
2.Field validation and error handling
3.Negative weight validation
4.Shipping cost calculation per country
5.Color preview for selected box color

# For state management
context api is used