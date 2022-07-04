import { createSlice } from '@reduxjs/toolkit'
import api from '../../assets/api.json'

const initialState = {
	list: [],
	count: 0,
}

export const videosSlice = createSlice({
	name: 'videos',
	initialState,
	reducers: {
		fetchVideos: (state) => {
			/*
				Use api.json to fetch data instead of online API due to CORS error.
				Would ideally be able to query videos from online API instead of
				having to load all videos into the state on initial load
			*/

			state.list = api.map((video) => {
				// Add the thumbnail URL to the video object
				return {
					...video,
					thumbnail: `https://img.youtube.com/vi/${video._id}/hqdefault.jpg`,
				}
			}).sort((a, b) => {
				// Sort Newest to Oldest
				const aPublishDate = new Date(a.publishDate);
				const bpublishDate = new Date(b.publishDate);
				return bpublishDate - aPublishDate;
			});
		}

	}
})

export const { fetchVideos } = videosSlice.actions

export default videosSlice.reducer

export const selectAllVideos = state => state.videos.list

export const selectVideoByURL = (state, urlTitle) => {
	return state.videos.list.find(video => video.urlTitle === urlTitle)
}
