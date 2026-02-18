// firebase-config.js - ОБЩИЙ ДЛЯ ОБОИХ САЙТОВ
const firebaseConfig = {
  apiKey: "AIzaSyC-rP_14WecIFKWJHGvlszK16voEKNQ1Gw",
  authDomain: "chessproject-3d878.firebaseapp.com",
  databaseURL: "https://chessproject-3d878-default-rtdb.firebaseio.com",
  projectId: "chessproject-3d878",
  storageBucket: "chessproject-3d878.firebasestorage.app",
  messagingSenderId: "735951507631",
  appId: "1:735951507631:web:587083ce4d0f34e01f845a"
};

// Инициализация
try {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    window.db = firebase.database();
    console.log("✅ Firebase подключён");
} catch (error) {
    console.error("❌ Ошибка Firebase:", error);
}
