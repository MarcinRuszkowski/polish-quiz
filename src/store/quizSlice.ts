import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import questionsData from "../data/questions";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface Level {
  id: number;
  status: "locked" | "unlocked" | "completed";
  lives: number;
  questions: Question[];
}

interface QuizState {
  levels: Level[];
  currentLevel: number | null;
  allLevelsCompleted: boolean;
}

const initialState: QuizState = {
  levels: questionsData.map((level) => ({
    id: level.id,
    status: level.id === 1 ? "unlocked" : "locked",
    lives: 5,
    questions: level.questions,
  })),
  currentLevel: null,
  allLevelsCompleted: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    unlockLevel: (state, action: PayloadAction<number>) => {
      const level = state.levels.find((lvl) => lvl.id === action.payload);
      if (level) level.status = "unlocked";
    },
    completeLevel: (state, action: PayloadAction<number>) => {
      const level = state.levels.find((lvl) => lvl.id === action.payload);
      if (level) level.status = "completed";

      const nextLevel = state.levels.find(
        (lvl) => lvl.id === action.payload + 1
      );
      if (nextLevel && nextLevel.status === "locked") {
        nextLevel.status = "unlocked";
      }

      if (state.levels.every((lvl) => lvl.status === "completed")) {
        state.allLevelsCompleted = true;
      }
    },

    loseLife: (state, action: PayloadAction<number>) => {
      const level = state.levels.find((lvl) => lvl.id === action.payload);
      if (level) level.lives -= 1;
    },
    resetGame: () => {
      return initialState;
    },
    setCurrentLevel: (state, action: PayloadAction<number | null>) => {
      state.currentLevel = action.payload;
    },
  },
});

export const {
  unlockLevel,
  completeLevel,
  loseLife,
  resetGame,
  setCurrentLevel,
} = quizSlice.actions;

export default quizSlice.reducer;
