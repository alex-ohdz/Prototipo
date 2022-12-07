import { getDownloadURL, getStorage, ref } from "firebase/storage";

export const CloudStorageService = (app) => {

	async function getImage(imageName) {
		const store = getStorage(app);
		const gsReference = ref(store, 'gs://testing-e2777.appspot.com/images/' + imageName);
		return await getDownloadURL(gsReference)
	}
	return {
		getImage,
	};
	/*async function uploadImage(name, data) {
		const storage = getStorage(app);
		const dataRef = ref(storage, name);

	}*/
}