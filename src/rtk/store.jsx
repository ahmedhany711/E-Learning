import { configureStore } from "@reduxjs/toolkit";
import CoursesSlice from "./Slices/CoursesSlice";
import CategoriesSlice from "./Slices/CategoriesSlice";
import StudentsSlice from "./Slices/StudentsSlice";
import InstructorsSlice from "./Slices/InstructorsSlice";
import DetailsSlice from "./Slices/DetailsSlice";
import AuthSlice from "./Slices/AuthSlice";
import AccountDetailsSlice from "./Slices/AccountDetailsSlice";
import InstructorProfileSlice from "./Slices/InstructorProfileSlice";

export const store = configureStore({
  reducer: {
    Courses: CoursesSlice,
    Categories: CategoriesSlice,
    StudentS: StudentsSlice,
    Instructors: InstructorsSlice,
    Details: DetailsSlice,
    Profile: AccountDetailsSlice,
    InstructorProfile: InstructorProfileSlice,

    Auth: AuthSlice,
  },
  preloadedState: loadFromLocalStorage(),
});

store.subscribe(() => saveToLocalStorage(store.getState()));

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.error("Error saving state to local storage:", e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error loading state from local storage:", e);
    return undefined;
  }
}
