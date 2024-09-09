// Jai Shree Ram

const { generateRandomString , errorHandler } = require("./helper");

const { initializeApp } = require("firebase/app");
const { getFirestore ,
    doc ,
    setDoc ,
    collection,
    getDocs,
    query  , 
    where , 
    deleteDoc
} = require("firebase/firestore");



const {
    FIRE_API_KEY,
    FIRE_AUTH_DOMAIN,
    FIRE_PROJECT_ID,
    FIRE_STORAGE_BUCKET,
    FIRE_MESSAGING_SENDER_ID,
    FIRE_APP_ID,
    FIRE_MEASUREMENT_ID
} = process.env


const firebaseConfig = {
    apiKey: "AIzaSyCR_Lb7NpIUCqeZVUiH88uBVjryFZCGK5k",
    authDomain: "sahs-warora.firebaseapp.com",
    projectId: "sahs-warora",
    storageBucket: "sahs-warora.appspot.com",
    messagingSenderId: "594285309028",
    appId: "1:594285309028:web:8c361a61aebc28b6fb4371",
    measurementId: "G-5M7KE1FZYN"
};

// Initialize Firebase
let app,
    firestoredb;


const initialiseFirebaseApp = () => {
    try {
        app = initializeApp(firebaseConfig)
        firestoredb = getFirestore()
        return app
    } catch (error) {
        errorHandler(error, "firebase-InitialiseFirebaseApp")
    }
}


const getFirebaseApp = () => app


const uploadProccessedData = async (dataToUpload) => {

    try {
        const document = doc(firestoredb, "posts", generateRandomString(10))
        const dataUpdated = await setDoc(document, dataToUpload)

        return dataUpdated
    } catch (error) {
        errorHandler(error, "firebase-UploadProcessedData")
    }


}


const getPostsData = async () => {

    try {
        
        const collectionRef = collection(firestoredb , "posts")
        const finalData = []
        const q = query(collectionRef)
        const docSnap = await getDocs(q)

        docSnap.forEach((doc) => {
            finalData.push(doc.data())
        })

        return finalData



    } catch (error) {
        errorHandler(error , "firebase-getData")
    }

}


const deleteDocumentsByCondition = async (feild , comparsion , value) => {

    try {


        const collectionRef = collection(firestoredb, 'posts');
        const q = query(collectionRef , where(feild, comparsion , value))

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach(async (document) => {
            await deleteDoc(doc(firestoredb, 'posts', document.id));
            console.log(`Deleted document with index: ${document.id}`);
        });


    } catch (error) {

        errorHandler(error , "firebase-dataDeletion")

    }


}

deleteDocumentsByCondition()




module.exports = {
    initialiseFirebaseApp,
    getFirebaseApp,
    uploadProccessedData , 
    getPostsData , 
    deleteDocumentsByCondition
}