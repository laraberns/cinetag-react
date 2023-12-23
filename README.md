# CineTag

## Overview
CineTag is a React-based application that enables users to favorite videos and view their selected videos in a dedicated favorites tab. Users can click on a video, leading them to a player tab where the video is displayed.

## Project Structure
The project consists of four pages: Favorites, Home, NotFound, and Player. The `AppRoutes` utility is utilized to create each route, with a nested route to maintain a consistent header and footer across all pages.

## Context Management
The `createContext` hook is employed to save the context of favorites and transmit it between components. Additionally, the `useState` hook is used to modify the state of favorites. The `useEffect` hook ensures that the application fetches videos from the mock API (https://my-json-server.typicode.com/laraberns/cinetag-api/videos) every time the page is rendered. The API repository can be found at [laraberns/cinetag-api](https://github.com/laraberns/cinetag-api).

## Custom Hooks
A `FavoritosContext` hook is created to define functions that modify the state of favorites, enhancing the management of favorite videos.

## Responsiveness
The application is designed to be responsive across various devices, ensuring a seamless user experience. The dynamically created components are adaptable to accommodate any future changes.


