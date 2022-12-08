import { getDownloadURL, getStorage, ref } from 'firebase/storage'

export const CloudStorageService = app => {
  async function getImage(imageName) {
    const store = getStorage(app)
    if (!imageName) {
      console.log('no image')
      return null
    }
    const gsReference = ref(store, imageName)
    return await getDownloadURL(gsReference)
  }
  return {
    getImage
  }
  /*async function uploadImage(name, data) {
    const storage = getStorage(app);
    const dataRef = ref(storage, name);

  }*/
}
