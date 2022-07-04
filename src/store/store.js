import { configureStore } from '@reduxjs/toolkit'
import videosReducer from './slices/videosSlice'

export const store = configureStore({
	reducer: {
		// reducer
		videos: videosReducer,
	},
	enhancers: [
		// enhancers
	],
})
