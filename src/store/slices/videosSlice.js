import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
	list: [],
	count: 0,
	status: 'idle',
}

export const fetchVideos = createAsyncThunk('api/devtask', async () => {
	const response = await fetch('https://www.globalcyclingnetwork.com/api/devtask')
	return response.data
})

export const videosSlice = createSlice({
	name: 'videos',
	initialState,
	reducers: {

	}
})

// export const { fetchVideos } = videosSlice.actions

export default videosSlice.reducer

export const selectAllVideos = state => state.videos.list

export const selectVideoByURL = (state, urlTitle) =>
	state.videos.list.find(video => video.urlTitle === urlTitle)
