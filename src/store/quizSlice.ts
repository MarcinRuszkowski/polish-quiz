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
}

const initialState: QuizState = {
  levels: questionsData.map((level) => ({
    id: level.id,
    status: level.id === 1 ? "unlocked" : "locked",
    lives: 3,
    questions: level.questions,
  })),
  currentLevel: null,
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
    },

    loseLife: (state, action: PayloadAction<number>) => {
      const level = state.levels.find((lvl) => lvl.id === action.payload);
      if (level) level.lives -= 1;
    },
    resetLevel: (state, action: PayloadAction<number>) => {
      const level = state.levels.find((lvl) => lvl.id === action.payload);
      if (level) level.lives = 3;
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
  resetLevel,
  setCurrentLevel,
} = quizSlice.actions;

export default quizSlice.reducer;
