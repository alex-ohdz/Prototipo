import { getStorage } from "firebase/storage";

export const CloudStorageService = (app) => {

	async function getImage(imageName) {
		const store = getStorage(app, "gs://testing-e2777.appspot.com/images" + imageName);
		console.log(store)
		return store
	}
	return {
		getImage,
	};
}