// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";

// 아래 데이터는 본인의 Firebase 프로젝트 설정에서 확인할 수 있습니다.
const firebaseConfig = {
  apiKey: "AIzaSyB_o07bi777IxMsKkBeNfOKZFHy-nKJ1gc",
  authDomain: "testtest-9c70b.firebaseapp.com",
  projectId: "testtest-9c70b",
  storageBucket: "testtest-9c70b.appspot.com",
  messagingSenderId: "472171635233",
  appId: "1:472171635233:web:b539b40ca52e9b52d23960"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);
